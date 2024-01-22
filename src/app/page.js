"use client";

import Image from "next/image";
import Header from "./component/Header";
import Footer from "./component/Footer";
import { useState } from "react";

export default function Home() {
  let [click, setClick] = useState(false);
  return (
    <main className="min-h-screen bg-[white]">
      <Header click={click} setClick={setClick} />

      <Footer click={click} setClick={setClick} />
    </main>
  );
}
