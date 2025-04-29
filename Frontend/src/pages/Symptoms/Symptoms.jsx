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

  const handleSubmit = (e) => {
    e.preventDefault();
    setResult({
      disease: "Flu (Example)", 
      recommendation: "Rest, Hydration, OTC meds (Example)",
    });
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

// import React, { useState } from "react";
// import "./Symptoms.css";
// import LogoHeader from "../../components/LogoHeader/LogoHeader";

// const Symptoms = () => {
//   const [formData, setFormData] = useState({
//     primarySymptoms: "",
//     symptomDuration: "",
//     severityLevel: "Mild",
//     affectedBodyParts: "",
//     dietType: "",
//     physicalActivity: "",
//     sleepHours: "",
//     travelHistory: "",
//     exposure: "",
//     medicationHistory: "",
//   });

//   const [result, setResult] = useState({ disease: "", recommendation: "" });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Mock AI prediction (Replace this with actual AI model call)
//     setResult({
//       disease: "Flu (Example)", // Replace with AI-generated disease
//       recommendation: "Rest, Hydration, OTC meds (Example)", // Replace with AI recommendations
//     });
//   };

//   return (
//     <>
//       <LogoHeader />
//       <h2>Symptom Checker & Health Recommendations</h2>


//       <div className="symptoms-container">
//         <div className="form-section">
//           <form onSubmit={handleSubmit} className="symptoms-form">
//             {/* Required Fields */}
//             <nav>Primary Symptoms<input
//               type="text"
//               name="primarySymptoms"
//               placeholder=" (Fever, cough, fatigue, headache, etc.)"
//               value={formData.primarySymptoms}
//               onChange={handleChange}
//               className="symptom-input"
//               required
//             /></nav>
            
//             <input
//               type="text"
//               name="symptomDuration"
//               placeholder="Symptom Duration (How long it has persisted)"
//               value={formData.symptomDuration}
//               onChange={handleChange}
//               className="symptom-input"
//               required
//             />
//             <select
//               name="severityLevel"
//               value={formData.severityLevel}
//               onChange={handleChange}
//               className="symptom-select"
//               required
//             >
//               <option value="Mild">Mild</option>
//               <option value="Moderate">Moderate</option>
//               <option value="Severe">Severe</option>
//             </select>
//             <input
//               type="text"
//               name="affectedBodyParts"
//               placeholder="Affected Body Parts (Head, Chest, Stomach, etc.)"
//               value={formData.affectedBodyParts}
//               onChange={handleChange}
//               className="symptom-input"
//               required
//             />

//             {/* Optional Fields */}
//             <input
//               type="text"
//               name="dietType"
//               placeholder="Diet Type (Optional)"
//               value={formData.dietType}
//               onChange={handleChange}
//               className="symptom-input"
//             />
//             <input
//               type="text"
//               name="physicalActivity"
//               placeholder="Physical Activity Level (Optional)"
//               value={formData.physicalActivity}
//               onChange={handleChange}
//               className="symptom-input"
//             />
//             <input
//               type="number"
//               name="sleepHours"
//               placeholder="Sleep Hours (Optional)"
//               value={formData.sleepHours}
//               onChange={handleChange}
//               className="symptom-input"
//             />
//             <input
//               type="text"
//               name="travelHistory"
//               placeholder="Recent Travel History (Optional)"
//               value={formData.travelHistory}
//               onChange={handleChange}
//               className="symptom-input"
//             />
//             <input
//               type="text"
//               name="exposure"
//               placeholder="Exposure to Sick People (Optional)"
//               value={formData.exposure}
//               onChange={handleChange}
//               className="symptom-input"
//             />
//             <input
//               type="text"
//               name="medicationHistory"
//               placeholder="Medication History (Optional)"
//               value={formData.medicationHistory}
//               onChange={handleChange}
//               className="symptom-input"
//             />

//             <button type="submit" className="submit-btn">
//               Submit
//             </button>
//           </form>
//         </div>

//         {/* {result.disease && ( */}
//           <div className="output-box">
//             <h3>Predicted Disease:</h3>
//             <p>{result.disease}</p>
//             <h3>Recommendation:</h3>
//             <p>{result.recommendation}</p>
//           </div>
//         {/* )} */}
//       </div>
//     </>
//   );
// };

// export default Symptoms;
