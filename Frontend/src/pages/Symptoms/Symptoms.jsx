import React, { useState } from "react";
import "./Symptoms.css";
import LogoHeader from "../../components/LogoHeader/LogoHeader";

const Symptoms = () => {
  const [formData, setFormData] = useState({
    primarySymptoms: "",
    symptomDuration: "",
    severityLevel: "Mild",
    affectedBodyParts: "",
    dietType: "",
    physicalActivity: "",
    sleepHours: "",
    travelHistory: "",
    exposure: "",
    medicationHistory: "",
  });

  const [result, setResult] = useState({ disease: "", recommendation: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:5000/api/symptoms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    setResult({
      disease: data.disease || "No prediction",
      recommendation: data.recommendation || "No recommendation",
    });
  } catch (error) {
    console.error("Prediction error:", error);
    setResult({
      disease: "Error",
      recommendation: "Failed to get prediction from server",
    });
  }
};


  return (
    <>
      <LogoHeader />
      {/* <h2>Symptom Checker & Health Recommendations</h2> */}

      <div className="symptoms-container">
        <div className="form-section">
        <h2>Symptom Checker</h2>

          <form onSubmit={handleSubmit} className="symptoms-form">
            {/* Required Fields */}
            <div className="symptom-field">
              <label>Primary Symptoms*</label>
              <input
                type="text"
                name="primarySymptoms"
                placeholder="(Fever, cough, headache, etc.)"
                value={formData.primarySymptoms}
                onChange={handleChange}
                className="symptom-input"
                required
              />
            </div>

            <div className="symptom-field">
              <label>Symptom Duration*</label>
              <input
                type="text"
                name="symptomDuration"
                placeholder="How long it has persisted(days)"
                value={formData.symptomDuration}
                onChange={handleChange}
                className="symptom-input"
                required
              />
            </div>

            <div className="symptom-field">
              <label>Severity Level*</label>
              <select
                name="severityLevel"
                value={formData.severityLevel}
                onChange={handleChange}
                className="symptom-select"
                required
              >
                <option value="Mild">Mild</option>
                <option value="Moderate">Moderate</option>
                <option value="Severe">Severe</option>
              </select>
            </div>

            <div className="symptom-field">
              <label>Affected Body Parts*</label>
              <input
                type="text"
                name="affectedBodyParts"
                placeholder="(Head, Chest, Stomach, etc.)"
                value={formData.affectedBodyParts}
                onChange={handleChange}
                className="symptom-input"
                required
              />
            </div>

            {/* Optional Fields */}
           

            <div className="symptom-field">
              <label>Sleep Hours</label>
              <input
                type="number"
                name="sleepHours"
                placeholder="(In Hours)"
                value={formData.sleepHours}
                onChange={handleChange}
                className="symptom-input"
              />
            </div>

            <div className="symptom-field">
              <label>Recent Travel History</label>
              <input
                type="text"
                name="travelHistory"
                placeholder="(Yes or No)"
                value={formData.travelHistory}
                onChange={handleChange}
                className="symptom-input"
              />
            </div>

            <div className="symptom-field">
              <label>Exposure to Sick People</label>
              <input
                type="text"
                name="exposure"
                placeholder="(Yes or N0)"
                value={formData.exposure}
                onChange={handleChange}
                className="symptom-input"
              />
            </div>

          

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>

        <div className="output-box">
          <h3>Predicted Disease:</h3>
          <p>{result.disease}</p>
          <h3>Recommendation:</h3>
          <p>{result.recommendation}</p>
        </div>
      </div>
    </>
  );
};

export default Symptoms;

