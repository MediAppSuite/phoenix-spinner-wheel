import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Wheel } from "react-custom-roulette";
import { WheelData } from "react-custom-roulette/dist/components/Wheel/types";
import { auth } from "../firebase/firebase";
import LoginModal from "../common/LoginModal";

export default function SpinWheel() {
  const data: WheelData[] = [
    { option: "Try again", style: { fontSize: 15 } },
    {
      option: "10% off From the website",
      style: { fontSize: 12, textColor: "#000" },
    },
    { option: "20% off at Showrooms", style: { fontSize: 12 } },
    { option: "Free Gift Pack", style: { fontSize: 15, textColor: "#000" } },
  ];

  const [mustSpin, setMustSpin] = useState(false); // eslint-disable-next-line
  const [prizeNumber, setPrizeNumber] = useState(0); // eslint-disable-next-line
  const [rouletteData, setRouletteData] = useState(data);
  const [show, setShow] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleModal = () => {
    setShow(!show);
  };

  function getRandomWin(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let win: number = Math.floor(Math.random() * (max - min + 1)) + min;
    setPrizeNumber(win);
  }

  const startSpinning = () => {
    if (auth.currentUser) {
      getRandomWin(0, 3);
      setMustSpin(!mustSpin);
    } else {
      setShowLogin(!showLogin);
    }
  };

  return (
    <div className="my-4 d-flex justify-content-center align-items-center">
      <img
        src="/images/spin.png"
        alt="Spin"
        className="img-spin"
        onClick={startSpinning}
      />
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={rouletteData}
        textColors={["#ffffff"]}
        outerBorderColor={"#DECC5B"}
        outerBorderWidth={10}
        innerBorderColor={"#f2f2f2"}
        radiusLineColor={"tranparent"}
        pointerProps={{
          src: "/images/pointer.png",
          style: {
            rotate: "230deg",
            right: "15px",
            top: "40px",
          },
        }}
        backgroundColors={["#dd5a27", "#ECECEF", "#dd5a27", "#ECECEF"]}
        onStopSpinning={handleModal}
      />
      {showLogin ? <LoginModal show={showLogin} setShow={setShowLogin} /> : ""}
      <Modal show={show} centered>
        <Modal.Header className="border-0">
          <Modal.Title className="w-100 text-center fs-1">
            {prizeNumber == 0 ? "Opps!" : "Congratulations!"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="border-0">
          {prizeNumber == 0 ? (
            <h5>Unfortunately, no prize this time!</h5>
          ) : (
            <h5>You have just won {rouletteData[prizeNumber].option}</h5>
          )}
        </Modal.Body>
        <Modal.Footer className="border-0">
          <Button
            onClick={() => {
              handleModal();
              window.location.replace("https://shop.phoenix.lk/");
            }}
          >
            Go to Phoenix Shop
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
