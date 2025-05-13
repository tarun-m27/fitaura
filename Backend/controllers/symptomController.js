const axios = require("axios");

const predictDisease = async (req, res) => {
    const { primarySymptoms, symptomDuration, severityLevel, affectedBodyParts, sleepHours, travelHistory, exposure } = req.body;

    const prompt = `
  A patient is reporting the following symptoms:
  - Primary symptoms: ${primarySymptoms}
  - Symptom duration: ${symptomDuration}
  - Severity level: ${severityLevel}
  - Affected body parts: ${affectedBodyParts}
  -Sleep Hours(In Hours):${sleepHours}
  -Recent Travel History:${travelHistory}
  -Exposure to Sick People:${exposure}

  Based on this, first predict the most likely disease (e.g., flu, cold, etc.), and then provide a treatment recommendation.
  Respond in the following format:
  Disease: [Predicted disease name]
  Treatment recommendation: [Treatment recommendation]
  `;

    try {
        const response = await axios.post(
            "https://openrouter.ai/api/v1/chat/completions",
            {
                model: "openai/gpt-3.5-turbo", // or any available model on OpenRouter
                messages: [
                    {
                        role: "user",
                        content: prompt,
                    },
                ],
            },
            {
                headers: {
                    "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`, // store in .env
                    "Content-Type": "application/json",
                },
            }
        );

        const reply = response.data.choices[0].message.content;

        // Extract disease and recommendation using regex
        const diseaseMatch = reply.match(/Disease: ([\w\s]+)/);
        const treatmentMatch = reply.match(/Treatment recommendation: ([\s\S]+)/);

        const disease = diseaseMatch ? diseaseMatch[1] : "Disease prediction failed";
        const treatmentRecommendation = treatmentMatch ? treatmentMatch[1] : "No treatment recommendation provided.";

        res.status(200).json({ disease, recommendation: treatmentRecommendation });
    } catch (error) {
        console.error("Error calling OpenRouter API:", error.message);
        res.status(500).json({ error: "Failed to get prediction from AI." });
    }
};

module.exports = { predictDisease };
