"use client"
import "@/app/globals.css";
import React, { useEffect } from 'react';

export default function Preloader() {

  useEffect(() => {
    const timer = setTimeout(() => {
      const preloader = document.querySelector('.preloader');
      if (preloader) {
        preloader.classList.add('loaded');
      }
    }, 0);

    return () => clearTimeout(timer); // cleanup on unmount
  }, []);

  return (
    <div className="preloader" data-preloader>
      <span className="line"></span>
    </div>)
}