import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useNavigate } from "react-router-dom";
import "./Dashbody.css";
import "../../App.css";
import viratImg from "../../assets/virat.png";


const Dashbody = () => {
  const navigate = useNavigate();

  const [bp, setBp] = useState("");
  const [weight, setWeight] = useState("");
  const [sugar, setSugar] = useState("");

  // Dummy data for testing
  const dummyHistory = [
    { date: "Day 1", weight: 70, bp: 120, sugar: 90 },
    { date: "Day 2", weight: 71, bp: 122, sugar: 95 },
    { date: "Day 3", weight: 69, bp: 118, sugar: 85 },
    { date: "Day 4", weight: 72, bp: 125, sugar: 100 },
    { date: "Day 5", weight: 71, bp: 121, sugar: 92 },
  ];

  const handleSubmit = () => {
    alert(`Submitted:\nBP: ${bp} mmHg\nSugar: ${sugar} mg/dL\nWeight: ${weight} kg`);
    setBp("");
    setSugar("");
    setWeight("");

  };

  return (
    <div className="dashbody-body">
      <div className="user-text">        
      </div>

      <div className="graph-box">
        <h2>Your Progress</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={dummyHistory}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="bp" stroke="#82ca9d" strokeWidth={2} name="BP (mmHg)" />
            <Line type="monotone" dataKey="sugar" stroke="#ff7300" strokeWidth={2} name="Sugar (mg/dL)" />
            <Line type="monotone" dataKey="weight" stroke="#8884d8" strokeWidth={2} name="Weight (kg)" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="viratImg"><img src={viratImg} alt="Virat" className="virat-image" /></div>

      <div className="daily-checkin-box">
        <h2>Daily Check-In</h2>

        <div className="form-group">
          <label htmlFor="weight">Weight:</label>
          <input
            type="number"
            id="weight"
            placeholder="Enter your weight (in Kgs)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="bp">Blood Pressure:</label>
          <input
            type="text"
            id="bp"
            placeholder="Enter your BP (mmHg)"
            value={bp}
            onChange={(e) => setBp(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="sugar">Sugar Level:</label>
          <input
            type="number"
            id="sugar"
            placeholder="Enter your sugar level (mg/dL)"
            value={sugar}
            onChange={(e) => setSugar(e.target.value)}
          />
        </div>

        <button className="submit-btn" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Dashbody;


