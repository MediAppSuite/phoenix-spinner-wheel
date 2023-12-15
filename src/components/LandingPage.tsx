import React from "react";
import Description from "./Description";
import SpinWheel from "./SpinWheel";
import Banner from "./Banner";

export default function LandingPage() {
  return (
    <div>
      <Banner />
      <SpinWheel />
      <Description />
    </div>
  );
}
