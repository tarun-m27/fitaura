import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Features.css';
import "../../App.css";
import LogoHeader from '../../components/LogoHeader/LogoHeader';
import mealPhoto from '../../assets/mealPhoto.jpg';
import symptomPhoto from '../../assets/symptomPhoto.jpg';
import workoutPhoto from '../../assets/workoutPhoto.jpg';

const Features = () => {
    const navigate = useNavigate();

    return (
        <>
            <LogoHeader />
            <div className='div-head'>
                <h2>Checkout our FEATURES!</h2>
            </div>
            <div className="features-dashbody">


                <div className="box" onClick={() => navigate('/mealplans')}>
                    <img src={mealPhoto} alt="Meal Recommendations" className="box-image" />
                    <h3>Nutrition and Meal Recommendations</h3>
                </div>
                <div className="box" onClick={() => navigate('/symptoms')}>
                    <img src={symptomPhoto} alt="Symptom Checker" className="box-image" />
                    <h3>Symptom Checker & Health Recommendations</h3>
                </div>
                <div className="box" onClick={() => navigate('/workoutplan')}>
                    <img src={workoutPhoto} alt="Workout Plan Generator" className="box-image" />
                    <h3>Workout Plan Generator</h3>
                </div>

            </div>
        </>
    );
};

export default Features;
