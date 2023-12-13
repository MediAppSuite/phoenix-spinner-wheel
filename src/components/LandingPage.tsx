import React from "react";
import { recentWinners } from "../data/data";
import Description from "./Description";
import ListComponent from "./ListComponent";
import SpinWheel from "./SpinWheel";

export default function LandingPage() {
  return (
    <div>
      <SpinWheel />
      <Description />
      <ListComponent title={"RECENT WINNERS"} data={recentWinners} />
    </div>
  );
}
