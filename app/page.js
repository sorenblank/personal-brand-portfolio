"use client"

import "@/app/globals.css";

import Header from "@/app/layouts/Header";
import Hero from "@/app/layouts/Hero";
import Service from "@/app/layouts/Service";
import About from "@/app/layouts/About";
import CTA from "@/app/layouts/CTA";
import Projects from "@/app/layouts/Projects";
import Testimonial from "./layouts/Testimonial";
import Contact from "@/app/layouts/Contact";
import { IoArrowUp } from "react-icons/io5";



export default function Home() {
  return (
    <>
    <main>
      <Header />
      <article>
        <Hero />
        <Service />
        <About />
        <CTA />
        <Projects />
        <Testimonial />
        <Contact />
      </article>
    </main>

    <footer className="footer">
    <div className="container">

      <p className="copyright">
        © Soren Blank
      </p>

      <a href="#top" className="back-top-btn">
        <span className="span">Back To Top</span>
        <IoArrowUp className="ion-icon" aria-hidden="true"/>
      </a>

    </div>
    </footer>

    </>
  );
}