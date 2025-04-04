"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const OpeningScreen = ({ onComplete }) => {
  const [textIndex, setTextIndex] = useState(-1);
  const [expandScreen, setExpandScreen] = useState(false);
  const [showTarang, setShowTarang] = useState(false);
  const [exitTarang, setExitTarang] = useState(false);

  const words = ["Hello", "Namaste", "Hola", "Bonjour", "Ciao"];
  const tarangText = "I'm Tarang".split("");

  useEffect(() => {
    const startTextAnimation = setTimeout(() => {
      setTextIndex(0);
    }, 2400);
    return () => clearTimeout(startTextAnimation);
  }, []);

  useEffect(() => {
    if (textIndex >= 0 && textIndex < words.length) {
      setTimeout(() => setTextIndex((prev) => prev + 1), 400);
    } else if (textIndex === words.length) {
      setExpandScreen(true);
    }
  }, [textIndex]);

  useEffect(() => {
    if (expandScreen) {
      setTimeout(() => setShowTarang(true), 800);
    }
  }, [expandScreen]);

  useEffect(() => {
    if (showTarang) {
      setTimeout(() => setExitTarang(true), tarangText.length * 100 + 900);
    }
  }, [showTarang]);

  useEffect(() => {
    if (exitTarang) {
      setTimeout(() => onComplete(), 800); // Trigger onComplete after "I'm Tarang" exits
    }
  }, [exitTarang]);

  return (
    <motion.div className="fixed inset-0 bg-[#d8d8d8] z-[1000] flex justify-center items-center">
      {/* Horizontal Split Animation */}
      <motion.div
        initial={{ height: "0vh" }}
        animate={{ height: expandScreen ? "100vh" : "32vh" }}
        transition={{
          duration: expandScreen ? 1 : 2.4,
          ease: [0.3, 0, 0.4, 1],
        }}
        className="absolute top-1/2 left-0 w-full bg-[#272727] -translate-y-1/2"
      />

      {/* Greeting Words Animation */}
      {textIndex >= 0 && textIndex < words.length && (
        <motion.h1
          key={textIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          style={{ fontFamily: "'Winky Sans', serif" }}
          className="absolute text-[48px] font-bold text-white"
        >
          {words[textIndex]}
        </motion.h1>
      )}

      {/* "I'm Tarang" Animation with Sequential Exit */}
      {showTarang && (
        <motion.div
          className="absolute text-5xl font-bold text-white flex"
          style={{ fontFamily: "'Winky Sans', serif" }}
          animate={
            exitTarang
              ? {
                  scale: [1, 0.7, 0.7, 0.7], // Scale down first
                  x: [0, 0, 0, -500], // Move left smoothly
                  opacity: [1, 1, 1, 0], // Gradual fade-out
                }
              : {}
          }
          transition={{
            duration: 0.8, // Ensuring a smooth transition
            times: [0, 0.25, 0.5, 1], // Even distribution for smoothness
            ease: "easeInOut",
          }}
        >
          {tarangText.map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default OpeningScreen;