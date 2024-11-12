"use client";
import React from "react";
import init, { greet } from "@/rust/pkg";

const HomePage = () => {
  init().then(() => {
    greet("Web Assembly");
  });

  return <div>HomePage</div>;
};

export default HomePage;
