const axios = require("axios");

const workoutPlan = async (req, res) => {
  const { goal, fitnessLevel, equipment, sessionTime, muscleGroup } = req.body;

  if (!goal || !fitnessLevel || !equipment || !sessionTime || !muscleGroup) {
    return res.status(400).json({ error: "Missing required fields." });
  }

  try {
    const systemPrompt = `You are a professional fitness coach. Based on user input, generate a detailed workout plan for a single session that lasts ${sessionTime} minutes. The plan should use only ${equipment} and target the ${muscleGroup} muscle group. The user's goal is ${goal} and their fitness level is ${fitnessLevel}. Return a list of 4 to 6 exercises with name, target muscle, and step-by-step instructions.`;

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-3.5-turbo", // or "mistralai/mixtral-8x7b" etc.
        messages: [
          {
            role: "system",
            content: systemPrompt,
          },
          {
            role: "user",
            content: `Generate the workout plan.`,
          },
        ],
        temperature: 0.7,
      },
      {
        headers: {
          "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "http://localhost:5000", // Optional but recommended
        },
      }
    );

    const content = response.data.choices[0].message.content;

    // Parse the exercises from response content (basic markdown/text parsing)
    const exercises = content
      .split(/\n(?=\d+\.\s)/)
      .map((line) => {
        const nameMatch = line.match(/\d+\.\s(.+?)\n/);
        const name = nameMatch ? nameMatch[1].trim() : "Exercise";
        const muscle = muscleGroup.toLowerCase();
        const instructions = line.replace(/\d+\.\s.+?\n/, "").trim();

        return { name, muscle, instructions };
      });

    res.json({ exercises });
  } catch (error) {
    console.error("Error generating workout plan:", error.message);
    if (error.response) {
      console.error("Response:", error.response.data);
    }
    res.status(500).json({ error: "Failed to generate workout plan." });
  }
};

module.exports = { workoutPlan };
