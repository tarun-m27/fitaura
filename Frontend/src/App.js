import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homes from "./pages/Homes/Homes";
import SignIn from "./pages/SignIn/SignIn";
import Home from "./pages/Home/Home";
import Symptoms from "./pages/Symptoms/Symptoms"
import Features from "./pages/Features/Features"
import MealPlans from "./pages/MealPlans/MealPlans";
import WorkoutPlan from "./pages/WorkoutPlan/WorkoutPlan";
import "./App.css";

const App = () => {
  return (
     
    <Router>
      <Routes>
        <Route path="/" element={<Homes />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/symptoms" element={<Symptoms />} />
        <Route path="/features" element={<Features />} />
        <Route path="/mealplans" element={<MealPlans />} />
        <Route path="/workoutplan" element={<WorkoutPlan />} />
      </Routes>
    </Router>
  );
};

export default App;


// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Hero from "./components/Hero/Hero";
// import Programs from "./components/Programs/Programs";
// import Join from "./components/Join/Join";
// import Footer from "./components/Footer/Footer";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//       </Routes>
//     </Router>
//   );
// }

// const Home = () => (
//   <div className="App">
//     <Hero />
//     <Programs />
//     <Join />
//     <Footer />
//   </div>
// );

// export default App;

// import "./App.css";
// import Hero from "./components/Hero/Hero";
// import Programs from "./components/Programs/Programs";
// // import Reasons from "./components/Reasons/Reasons";
// // import Plans from "./components/Plans/Plans";
// // import Testimonials from "./components/Testimonials/Testimonials";
// import Join from "./components/Join/Join";
// import Footer from "./components/Footer/Footer";
// function App() {
//   return (
//     <div className="App">
//       <Hero />
//       <Programs />
//       {/* <Reasons /> */}
//       {/* <Plans /> */}
//       {/* <Testimonials /> */}
//       <Join />
//       <Footer />
//     </div>
//   );
// }

// export default App;


// // {/* https://fitclubfitness.pages.dev/ */}


