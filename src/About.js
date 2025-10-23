import React, { Fragment, useState, useEffect, useRef } from "react";
import Header from "../Header";
import axios from "axios";
import { Link } from "react-router-dom";
import park from "./edu.PNG";
import Test from "../Test";
import Footer from "../Footer";
import one from "../img/1.png"
import six from "../img/sa.JPG"
import seven from "../img/7.JPG"
import nine from "../img/9.JPG"
import twelve from "../img/12.JPG"
import fourtn from "../img/14.JPG"
import ninetn from "../img/19.JPG"
import fiftn from "../img/15.JPG"
import twentyf from "../img/25.JPG"
import twentys from "../img/26.JPG"
import two from "../img/2.JPG"
import sa from "../img/sb.png"
import cy from "../img/5.JPG"
import promoImg from "../img/ja.png"; // ✅ path to your image
import { gsap } from "gsap"; 
import ServiceHome from "./Booking";
import "./Home.css"
const About = () => {
  const headingRef = useRef(null);
  const [showModal, setShowModal] = useState(true); // ✅ show when page loads

  useEffect(() => {
    const text = headingRef.current;
    const words = text.textContent.split(" "); // split by words
    text.textContent = ""; // clear the text

    // Define alternating colors
    const colors = ["#fa5a04", "#ffffff"];

    // Loop through words
    words.forEach((word, wordIndex) => {
      const wordSpan = document.createElement("span");
      wordSpan.style.display = "inline-block";
      wordSpan.style.marginRight = "10px"; // spacing between words
      wordSpan.style.color = colors[wordIndex % colors.length]; // alternate color

      // Wrap each letter in a span
      word.split("").forEach((letter) => {
        const span = document.createElement("span");
        span.textContent = letter;
        span.style.display = "inline-block";
        span.style.opacity = 0;
        span.style.transform = "translateX(-40px)";
        wordSpan.appendChild(span);
      });

      text.appendChild(wordSpan);
    });

    // Animate letters like a typewriter, one by one
    gsap.to(text.querySelectorAll("span > span"), {
      x: 0,
      opacity: 1,
      duration: 0.5,
      stagger: 0.12, // slower per letter
      ease: "power3.out",
    });
  }, []);
  useEffect(() => {
  if (showModal) {
    gsap.fromTo(
      ".modal-box",
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" }
    );
  }
}, [showModal]);

  return (
    <div>
   <Header />

{showModal && (
  <div className="modal-overlay">
    <div className="modal-box">
      <button className="close-btn3" onClick={() => setShowModal(false)}>
        &times;
      </button>
      <img src={promoImg} alt="Promotion" />
    </div>
  </div>
)}



           <Footer />
    </div>
  );
};

export default About;
