"use client"

import Header from "@/app/layouts/Header";
import Hero from "@/app/layouts/Hero";
import Service from "@/app/layouts/Service";
import "@/app/globals.css";

export default function Home() {
  return (
    <main>
      <Header />
      <article>
        <Hero />
        <Service />
      </article>
    </main>
  );
}