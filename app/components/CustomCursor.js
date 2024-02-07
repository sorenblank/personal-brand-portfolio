"use client";
import "@/app/globals.css";
import { useEffect } from "react";

const CustomCursor = () => {
  useEffect(() => {
    const cursors = document.querySelectorAll("[data-cursor]");
    const hoveredElements = [
      ...document.querySelectorAll("button"),
      ...document.querySelectorAll("a"),
    ];

    const handleMouseMove = (event) => {
      const posX = event.clientX;
      const posY = event.clientY;

      cursors[0].style.left = `${posX}px`;
      cursors[0].style.top = `${posY}px`;

      setTimeout(() => {
        cursors[1].style.left = `${posX}px`;
        cursors[1].style.top = `${posY}px`;
      }, 80);
    };

    const handleHover = () => {
      for (let i = 0, len = cursors.length; i < len; i++) {
        cursors[i].classList.add("hovered");
      }
    };

    const handleHoverOut = () => {
      for (let i = 0, len = cursors.length; i < len; i++) {
        cursors[i].classList.remove("hovered");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    addEventOnElements(hoveredElements, "mouseover", handleHover);
    addEventOnElements(hoveredElements, "mouseout", handleHoverOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <>
      <div className="cursor-dot" data-cursor></div>
      <div className="cursor-outline" data-cursor></div>
    </>
  );
};

const addEventOnElements = (elements, eventName, callback) => {
  elements.forEach((element) => {
    element.addEventListener(eventName, callback);
  });
};

export default CustomCursor;