const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const symptomRoutes = require("./routes/symptomRoutes");
const mealPlans = require("./routes/mealRouter");
const workoutPlans = require("./routes/workoutRouter");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/", symptomRoutes);
app.use("/api/", mealPlans)
app.use("/api/", workoutPlans)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
