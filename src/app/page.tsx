"use client";
import * as wasm from "rust-cybotixx";
import React from "react";

const HomePage = () => {
  wasm.greet("Hello from Web Assembly");

  return <div>HomePage</div>;
};

export default HomePage;
