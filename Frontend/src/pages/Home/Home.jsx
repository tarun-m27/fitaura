import React from 'react';
import "./Home.css";
import Dashbody from "../../components/Dashbody/Dashbody"
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png"; // Assuming you place the logo image in src/assets

const InsidePage = () => {
  return (
    <>
      <div className="inside-page-container">
        <header className="inside-page-header">
          <div className="header-left">
            <img src={logo} alt="Logo" className="logo-img" />
            <div className="welcome-message">
              <h1>Welcome back, [User Name]!</h1>
            </div>
          </div>
          <nav className="nav-links">
            <Link to="/home" className="nav-link">Home</Link>
            <Link to="/features" className="nav-link">Features</Link>
            <Link to="/" className="nav-link">Logout</Link>
          </nav>
        </header>

        <main className="main-content">
          <Dashbody />
        </main>
      </div>
    </>
  );
};

export default InsidePage;


// import React from 'react';
// import "./InsidePage.css";
// import Dashbody from "../../components/Dashbody/Dashbody"
// import LogoHeader from '../../components/LogoHeader/LogoHeader';
// import { Link } from 'react-router-dom';


// const InsidePage = () => {
//   return (
//     <>
//     <div className="inside-page-container">
//       <header className="inside-page-header">
//         <div className="logo">FitAura</div>
//         <nav>
//           <Link to="/profile" className="nav-link">Profile</Link>
//           <Link to="/settings" className="nav-link">Settings</Link>
//           <Link to="/logout" className="nav-link">Logout</Link>
//         </nav>
//       </header>

//       <main className="main-content">
//         <section className="welcome-section">
//           <h1>Welcome back, [User Name]!</h1>
//           <p>Here’s your personalized health and fitness dashboard.</p>
//         </section>

//       </main>
//     </div>

//     </>
//   );
// };

// export default InsidePage;
