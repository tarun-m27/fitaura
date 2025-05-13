import React from "react";
import "./Footer.css";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";
import member1 from "../../assets/member1.jpg";
import member2 from "../../assets/member2.jpg";
import member3 from "../../assets/member3.jpg";
import member4 from "../../assets/member1.jpg";

const teamMembers = [
  { name: "Tarun", rollNo: "1DS22CS231", img: member1 , designation : "Full Stack Developer"},
  // { name: "Vinayaka V M", rollNo: "1DS22CS250", img: member2 , designation : "Backend Developer" },
  // { name: "Vivek Gunari", rollNo: "1DS22CS255", img: member3 , designation : "Frontend Developer"},
  // { name: "Swayam Sidnale", rollNo: "1DS22CS227", img: member4 , designation :"Backend Developer"},
];

const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        
        <div className="meet-team">
          <h2>Meet our team</h2>
          <div className="team-container">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-box">
                <img src={member.img} alt={member.name} className="team-img" />
                <h3>{member.name}</h3>
                <p>Roll No: {member.rollNo}</p>
                <p className="designation">{member.designation}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="social-links">
          <a href="https://github.com/tarun-m27/fitaura" target="_blank" rel="noopener noreferrer">
            <img src={Github} alt="GitHub" />
          </a>
          <a href="https://www.instagram.com/eye_pixel__/" target="_blank" rel="noopener noreferrer">
            <img src={Instagram} alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/in/tarun-m-dsce/" target="_blank" rel="noopener noreferrer">
            <img src={Linkedin} alt="LinkedIn" />
          </a>
        </div>

        <div className="logo-f">
          <img src={Logo} alt="Logo" />
        </div>
      </div>

      <div className="blur blur-f-1"></div>
      <div className="blur blur-f-2"></div>
    </div>
  );
};

export default Footer;


// import React from "react";
// import "./Footer.css";
// import Github from "../../assets/github.png";
// import Instagram from "../../assets/instagram.png";
// import Linkedin from "../../assets/linkedin.png";
// import Logo from "../../assets/logo.png";

// const Footer = () => {
//   return (
//     <div className="Footer-container">
//       <hr />
//       <div className="footer">

//         <div className="meet-team">
//           <h2>Meet our team</h2>
//           <div className="team-container">
//             <div className="team-box">Member 1</div>
//             <div className="team-box">Member 2</div>
//             <div className="team-box">Member 3</div>
//             <div className="team-box">Member 4</div>
//           </div>
//         </div>

//         <div className="social-links">
//           <a href="https://github.com/tarun-m27/fitaura" target="_blank" rel="noopener noreferrer">
//             <img src={Github} alt="GitHub" />
//           </a>
//           <a href="https://www.instagram.com/eye_pixel__/" target="_blank" rel="noopener noreferrer">
//             <img src={Instagram} alt="Instagram" />
//           </a>
//           <a href="https://www.linkedin.com/in/tarun-m-dsce/" target="_blank" rel="noopener noreferrer">
//             <img src={Linkedin} alt="LinkedIn" />
//           </a>
//         </div>


//         <div className="logo-f">
//         </div>
//       </div>

//       <div className="blur blur-f-1"></div>
//       <div className="blur blur-f-2"></div>
//     </div>
//   );
// };

// export default Footer;
