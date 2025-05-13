const axios = require("axios");

const mealPlan = async (req, res) => {
    const { goal, preference, weight, allergies } = req.body;

    try {
        const response = await axios.post(
            "https://openrouter.ai/api/v1/chat/completions",
            {
                model: "openai/gpt-3.5-turbo", // You can use "mistralai/mixtral-8x7b" or other if preferred
                messages: [
                    {
                        role: "system",
                        content: `You are a professional nutritionist.`,
                    },
                    {
                        role: "user",
                        content: `Create a meal plan for someone who wants to ${goal.toLowerCase()}, weighs ${weight}kg, follows a ${preference} diet, and has allergies to ${allergies.join(", ")}. Include 3 meals (breakfast, lunch, dinner) with estimated calories, protein, carbs, and fats. Return a JSON object with structure:
{
  nutrients: {
    calories: number,
    protein: number,
    carbohydrates: number,
    fat: number
  },
  meals: [
    {
      id: number,
      title: string,
      readyInMinutes: number,
      servings: number,
      sourceUrl?: string
    }
  ]
}`
                    }
                ],
                temperature: 0.7
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
                    "Content-Type": "application/json"
                }
            }
        );

        const message = response.data.choices[0].message.content;

        // Try to parse the content to JSON
        const parsedPlan = JSON.parse(message);
        res.json({ plan: parsedPlan });
    } catch (error) {
        console.error("❌ Meal plan generation failed:", error?.response?.data || error.message);
        res.status(500).json({ error: "Failed to generate meal plan" });
    }
};

module.exports = { mealPlan };
