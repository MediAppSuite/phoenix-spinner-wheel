import React from "react";
import { recentWinners, topWinners } from "../data/data";
import Description from "./Description";
import ListComponent from "./ListComponent";
import SpinWheel from "./SpinWheel";

export default function () {
  return (
    <div>
      <SpinWheel />
      <Description />
      <ListComponent title={"RECENT WINNERS"} data={recentWinners} />
      <ListComponent title={"TOP WINNERS"} data={topWinners} />
    </div>
  );
}
