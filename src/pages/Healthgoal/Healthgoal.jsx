import React, { useState } from "react";
import "./Healthgoal.css";
import LogoHeader from "../../components/LogoHeader/LogoHeader";

const Healthgoal = () => {
    const [goal, setGoal] = useState("");
    const [reminder, setReminder] = useState("");
    const [goals, setGoals] = useState([]);

    const addGoal = () => {
        if (goal && reminder) {
            setGoals([...goals, { goal, reminder }]);
            setGoal("");
            setReminder("");
        }
    };

    return (
        <>
            <LogoHeader />

            <div className="health-goal-container">
                <h2 className="health-h2">Health Goal Setting & Reminders</h2>
                <div className="goal-inputs">
                    <input
                        type="text"
                        placeholder="Enter your health goal..."
                        value={goal}
                        onChange={(e) => setGoal(e.target.value)}
                    />
                    <input
                        type="datetime-local"
                        value={reminder}
                        onChange={(e) => setReminder(e.target.value)}
                    />
                    <button className="btn" onClick={addGoal}>Set Goal</button>
                </div>

                <div className="goal-list">
                    {goals.map((item, index) => (
                        <div key={index} className="goal-item">
                            <p><strong>Goal:</strong> {item.goal}</p>
                            <p><strong>Reminder:</strong> {new Date(item.reminder).toLocaleString()}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );

};

export default Healthgoal;
