import React from "react";
import Lottie from "lottie-react";
import twerk from "../assets/animation.json";

export default function Loader() {
  return (
    <Lottie
      animationData={twerk}
      style={{ width: 250, height: 250 }}
      loop={true}
    />
  );
}
