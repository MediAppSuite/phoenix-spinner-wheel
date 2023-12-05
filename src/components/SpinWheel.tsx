import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Wheel } from "react-custom-roulette";
import { WheelData } from "react-custom-roulette/dist/components/Wheel/types";

export default function SpinWheel() {
  const data: WheelData[] = [
    { option: "0" },
    { option: "1" },
    { option: "2" },
    { option: "3" },
    { option: "4" },
    { option: "5" },
    { option: "6" },
    { option: "7" },
    { option: "8" },
    { option: "9" },
  ];

  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [rouletteData, setRouletteData] = useState(data);

  let spinWheelBg: React.CSSProperties = {
    backgroundImage: `url("/images/golden-bokeh-light-bg.png")`,
    position: "relative",
  };

  return (
    <div style={spinWheelBg} className="spinner-parent">
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={rouletteData}
        textColors={["#ffffff"]}
        innerRadius={30}
        outerBorderColor={"#DECC5B"}
        outerBorderWidth={15}
        innerBorderColor={"#f2f2f2"}
        radiusLineColor={"tranparent"}
        radiusLineWidth={1}
        pointerProps={{
          src: "/images/pointer.png",
          style: {
            rotate: "230deg",
            right: "15px",
            top: "40px",
          },
        }}
        backgroundColors={[
          "#EAA388",
          "#ECECEF",
          "#EAA388",
          "#ECECEF",
          "#EAA388",
          "#ECECEF",
          "#EAA388",
          "#ECECEF",
          "#EAA388",
          "#ECECEF",
          "#EAA388",
          "#ECECEF",
        ]}
      />
      <button
        className=" roulette-button"
        onClick={() => setMustSpin(!mustSpin)}
      >
         Spin 
        <span>Click here to spin</span>
      </button>
    </div>
  );
}
