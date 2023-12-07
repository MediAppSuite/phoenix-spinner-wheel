import React, { useEffect, useState } from "react";
import { Wheel } from "react-custom-roulette";
import { WheelData } from "react-custom-roulette/dist/components/Wheel/types";

export default function SpinWheel() {
  const data: WheelData[] = [
    { option: "Rs. 10,000 Voucher", style: { fontSize: 15 } },
    {
      option: "Rs. 80,000 Voucher",
      style: { fontSize: 15, textColor: "#000" },
    },
    { option: "5% Discount", style: { fontSize: 15 } },
    { option: "Rs. 65,000 Voucher", style: { fontSize: 15, textColor: "#000" } },
    { option: "70% Discount", style: { fontSize: 15 } },
    { option: "Rs. 100,000 Voucher", style: { fontSize: 15, textColor: "#000" } },
    { option: "Rs. 5,000 Voucher", style: { fontSize: 15 } },
    { option: "40% Discount", style: { fontSize: 15, textColor: "#000" } },
    { option: "Rs. 15,000 Voucher", style: { fontSize: 15 } },
    { option: "10% Discount", style: { fontSize: 15, textColor: "#000" } },
  ];

  const [mustSpin, setMustSpin] = useState(false); // eslint-disable-next-line
  const [prizeNumber, setPrizeNumber] = useState(0); // eslint-disable-next-line
  const [rouletteData, setRouletteData] = useState(data);

  let spinWheelBg: React.CSSProperties = {
    backgroundImage: `url("/images/golden-bokeh-light-bg.png")`,
    position: "relative",
    height: "300px",
  };

  const finalizeSpinnerInit = () => {
    setTimeout(() => {
      const handleSpinButtonClick = (e: any) => {
        e.preventDefault();
        setMustSpin(!mustSpin);
      };
      const spinnerDiv = document.querySelector(".bhdLno");

      if (spinnerDiv) {
        const spinButton = document.createElement("button");
        spinButton.className = "roulette-button";
        spinButton.textContent = "Spin";

        spinButton.onclick = (ev: MouseEvent) => {
          let _div = document.getElementsByClassName("sc-dlfnbm")[0];
          if (_div) _div.classList.add("started-spinning");
          else console.log("err");
        };

        spinButton.style.position = "absolute";
        spinButton.style.top = "50%";
        spinButton.style.left = "50%";
        spinButton.style.zIndex = "900";
        spinButton.style.transform = "translate(-50%, -50%)";

        const span = document.createElement("span");
        span.textContent = "Click here to spin";
        spinButton.appendChild(span);

        spinnerDiv.appendChild(spinButton);
      } else {
        console.log("No spinner div");
      }
    }, 1500);
  };

  //useEffect(finalizeSpinnerInit, []);

  return (
    <div style={spinWheelBg} className="spinner-parent">
      <div className="banner">
        <img
          src="/images/title.png"
          style={{ width: "80%", marginTop: "10px" }}
          alt={"Background"}
        />
      </div>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={rouletteData}
        textColors={["#ffffff"]}
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
      <img
        src="/images/spin.png"
        alt="Spin"
        className="img-spin"
        onClick={() => setMustSpin(!mustSpin)}
      />
      {/*  <Row>
        <Col>
          <img src="/images/up-arrow-left.png" alt="" />
        </Col>
        <Col>
          <img src="/images/up-arrow-right.png" alt="" />
        </Col>
      </Row>*/}
    </div>
  );
}
