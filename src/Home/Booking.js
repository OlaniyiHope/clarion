// import React, { Fragment, useState, useEffect } from "react";
// import Footer from "../Footer";
// import Header from "../Header";
// import axios from "axios";
// // import useFetch from "../../components/useFetch/useFetch";
// import one from "../img/1.png"
// import six from "../img/6.JPG"
// import seven from "../img/7.JPG"
// import nine from "../img/9.JPG"
// import ten from "../img/9.JPG"
// import eleven from "../img/9.JPG"
// import twelve from "../img/12.JPG"
// import fourtn from "../img/14.JPG"
// import ninetn from "../img/19.JPG"
// import fiftn from "../img/15.JPG"
// import twentyf from "../img/25.JPG"
// import twentys from "../img/26.JPG"
// import two from "../img/2.JPG"
// import sa from "../img/sa.png"

// const services = [
//   {
//     img: six,
//     title: "Skid Plant Setup",
//     desc: "Design, construction and installation of gas plants/skid plants",
//     link: "services/building-construction/index.html",
//   },
//   {
//     img: seven,
//     title: "Central Gas Systems",
//     desc: "Gas piping and reticulation for estates, hostels, hospitals, restaurants and industries",
//     link: "services/architecture-design/index.html",
//   },
//   {
//     img: nine,
//     title: "Fuel and Storage Facilities",
//     desc: "Filling Stations, tank farms, storage tanks and dispensing systems",
//     link: "services/building-renovation/index.html",
//   },
//   {
//     img: fourtn,
//     title: "Procurement and Supply",
//     desc: "LPG equipment, cylinders, pumps, valves, meters and safety tools",
//     link: "services/building-maintenance/index.html",
//   },
//   {
//     img: ten,
//     title: "LPG Plant Maintenance",
//     desc: "Regular inspection, safety testing, and preventive maintenance of LPG systems",
//     link: "#",
//   },
//   {
//     img: eleven,
//     title: "Gas Conversion Projects",
//     desc: "Conversion of generators, vehicles, and machines to gas-powered systems",
//     link: "#",
//   },
//   {
//     img: twelve,
//     title: "Energy Consultancy",
//     desc: "Professional advice and guidance on gas system design, safety, and efficiency",
//     link: "#",
//   },
// ];
// const ServiceHome = () => {

//   return (
//     <div>
//     <div
//       style={{
//         overflowX: "auto",
//         whiteSpace: "nowrap",
//         display: "flex",
//         gap: "1.5rem",
//         padding: "2rem",
//         scrollSnapType: "x mandatory",
//       }}
//       className="hide-scrollbar"
//     >
//       {services.map((service, i) => (
//         <div
//           key={i}
//           style={{
//             minWidth: "320px",
//             flex: "0 0 auto",
//             background: "#12223B",
//             borderRadius: "20px",
//             color: "white",
//             scrollSnapAlign: "start",
//             boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
//             overflow: "hidden",
//             transition: "transform 0.3s ease",
//           }}
//           className="hover:scale-105"
//         >
//           <img
//             src={service.img}
//             alt={service.title}
//             style={{
//               width: "100%",
//               height: "200px",
//               objectFit: "cover",
//             }}
//           />
//           <div style={{ padding: "1rem" }}>
//             <h3 style={{ color: "#FFB703", fontSize: "1.3rem" }}>
//               {service.title}
//             </h3>
//             <p style={{ fontSize: "0.95rem", color: "#E9F7FE", marginTop: "0.5rem" }}>
//               {service.desc}
//             </p>
//             <a
//               href={service.link}
//               style={{
//                 display: "inline-flex",
//                 alignItems: "center",
//                 marginTop: "1rem",
//                 color: "#fff",
//                 textDecoration: "none",
//                 background: "#fa5a04",
//                 padding: "0.5rem 1rem",
//                 borderRadius: "10px",
//               }}
//             >
//               View More →
//             </a>
//           </div>
//         </div>
//       ))}
//     </div>
//     </div>
//   );
// };

// export default ServiceHome;
// import React from "react";
// import six from "../img/six.png";
// import seven from "../img/seven.png";
// import nine from "../img/nine.png";
// import fourtn from "../img/fourtn.png";
// import ten from "../img/ten.png";
// import eleven from "../img/eleven.png";
// import twelve from "../img/twelve.png";
// import React, { Fragment, useState, useEffect } from "react";
// import Footer from "../Footer";
// import Header from "../Header";



import axios from "axios";
// import useFetch from "../../components/useFetch/useFetch";
import one from "../img/1.png"
import six from "../img/6.JPG"
import seven from "../img/7.JPG"
import nine from "../img/9.JPG"
import ten from "../img/9.JPG"
import eleven from "../img/9.JPG"
import twelve from "../img/12.JPG"
import fourtn from "../img/14.JPG"
import ninetn from "../img/19.JPG"
import fiftn from "../img/15.JPG"
import twentyf from "../img/25.JPG"
import twentys from "../img/26.JPG"
import two from "../img/2.JPG"
import sa from "../img/sa.png"

import "./service.css"; // we'll add a few styles here

const services = [
  {
    img: six,
    title: "Skid Plant Setup",
    desc: "Design, construction and installation of gas plants/skid plants",
    link: "services/building-construction/index.html",
  },
  {
    img: seven,
    title: "Central Gas Systems",
    desc: "Gas piping and reticulation for estates, hostels, hospitals, restaurants and industries",
    link: "services/architecture-design/index.html",
  },
  {
    img: nine,
    title: "Fuel and Storage Facilities",
    desc: "Filling Stations, tank farms, storage tanks and dispensing systems",
    link: "services/building-renovation/index.html",
  },
  {
    img: fourtn,
    title: "Procurement and Supply",
    desc: "LPG equipment, cylinders, pumps, valves, meters and safety tools",
    link: "services/building-maintenance/index.html",
  },
  {
    img: ten,
    title: "LPG Plant Maintenance",
    desc: "Regular inspection, safety testing, and preventive maintenance of LPG systems",
    link: "#",
  },
  {
    img: eleven,
    title: "Gas Conversion Projects",
    desc: "Conversion of generators, vehicles, and machines to gas-powered systems",
    link: "#",
  },
  {
    img: twelve,
    title: "Energy Consultancy",
    desc: "Professional advice and guidance on gas system design, safety, and efficiency",
    link: "#",
  },
];

const ServiceHome = () => {
  return (
    <section className="services-section">
      <div className="services-scroll hide-scrollbar">
        {services.map((service, i) => (
          <div key={i} className="service-card elementskit-info-image-box">
            <a href={service.link} className="image-link">
              <div className="elementskit-box-header image-box-img-left">
                <img
                  src={service.img}
                  alt={service.title}
                  loading="lazy"
                  className="service-img"
                />
              </div>
            </a>
            <div className="elementskit-box-body ekit-image-box-body">
              <div className="elementskit-box-content ekit-image-box-body-inner">
                <h3 className="elementskit-info-box-title">{service.title}</h3>
                <div className="elementskit-box-style-content">
                  {service.desc}
                </div>
              </div>
              <div className="elementskit-box-footer">
                <div className="btn-wraper">
                  <a href={service.link} className="elementskit-btn whitespace--normal">
                    View More{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12.75 15L15.75 12M15.75 12L12.75 9M15.75 12H8.25M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceHome;
