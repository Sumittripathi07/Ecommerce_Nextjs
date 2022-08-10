import React from "react";
import Head from "next/head";
const Footer = () => {
  return (
    <>
      <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
      {/* <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet"></link> */}
      
      </Head>
    
    <div>
      <footer className="footer-distributed foot">
        <div className="footer-left">
          <h3>
            @<span>doorStep</span>
          </h3>

          <p className="footer-company-name">At Your Doorstep &copy; 2015</p>
        </div>

        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker" ></i>
            <p>
              <span>New Hill View Apt. Navrepark</span> Ambernath West, 421501
            </p>
          </div>

          <div>
            <i className="fa fa-phone"></i>
            <p>9359549170 , 8928216536</p>
          </div>

          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <a href="##">
                <span
                  className="__cf_email__"
                  data-cfemail="4f3c3a3f3f203d3b0f2c20223f2e2136612c2022"
                >
                  {" "}
                  sumit.tpt07@gmail.com
                </span>
              </a>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>About Shop</span>
            We sell all types of{" "}
            <b> Stationery Items, Cold Drinks, Ice-Cream, Gift Items</b>
            <br />
            Etc...
          </p>

          <div className="footer-icons">
            <a
              href="https://www.facebook.com/sumittripathi07/"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com/iamSumit076"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/sumit-tripathi-932bb31b5/"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a
              href="https://github.com/sumittripathi07"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
};


export default Footer;























































// import React from "react";
// import {
//   AiFillInstagram,
//   AiOutlineTwitter,
//   AiFillGithub,
//   AiFillFacebook,
// } from "react-icons/ai";

// const Footer = () => {
//   return (
//     <div className="footer-container">
//       <p>2022 R.N. Traders | All Right Reserved</p>
//       <div className="icons">
//         <a
//           href="https://www.instagram.com/sumittripathi07"
//           rel="noreferrer"
//           target="_blank"
//         >
//           <AiFillInstagram />
//         </a>

//         <a
//           href="https://twitter.com/iamSumit076"
//           rel="noreferrer"
//           target="_blank"
//         >
//           <AiOutlineTwitter />
//         </a>

//         <a
//           href="https://www.facebook.com/sumittripathi07"
//           rel="noreferrer"
//           target="_blank"
//         >
//           <AiFillFacebook />
//         </a>

//         <a
//           href="https://github.com/sumittripathi07"
//           rel="noreferrer"
//           target="_blank"
//         >
//           <AiFillGithub />
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Footer;

