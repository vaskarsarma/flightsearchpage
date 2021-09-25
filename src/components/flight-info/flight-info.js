import React from "react";
import { Card, Button } from "react-bootstrap";
import { DetailLabel } from "../detail-label/detail-label";
import FlightLogo from "../flightlogo/flightlogo";
import nonStopFlightLogo from "../../assets/nonstop.png";
import "./flight-info.scss";

export const FlightInfo = (props) => {
  const { id, flightInfoObj, disableBtn, onClickedhandler } = props;
  const depratBy = flightInfoObj.date + " " + flightInfoObj.departureTime;
  const arrivedBy = flightInfoObj.date + " " + flightInfoObj.arrivalTime;
  const price = "$" + flightInfoObj.price;

  return (
    <div className="Cart-Container">
      <Card
        bg={disableBtn ? "warning" : ""}
        border={disableBtn ? "danger" : ""}
      >
        <section className="Flight-info">
          <FlightLogo
            imagePath={nonStopFlightLogo}
            alttext="Image Icon"
            size="Flight-Icon"
          ></FlightLogo>
          <DetailLabel
            mainText="AIRLINE"
            subText={flightInfoObj.name}
          ></DetailLabel>
          <DetailLabel
            mainText="FROM"
            subText={flightInfoObj.origin}
          ></DetailLabel>
          <DetailLabel
            mainText="TO"
            subText={flightInfoObj.destination}
          ></DetailLabel>
          <DetailLabel mainText="DEPART BY" subText={depratBy}></DetailLabel>
          <DetailLabel mainText="ARRIVED AT" subText={arrivedBy}></DetailLabel>
          <DetailLabel mainText="PRICE" subText={price}></DetailLabel>
          <Button
            id={id}
            variant="primary"
            onClick={onClickedhandler}
            disabled={disableBtn}
          >
            SELECT
          </Button>
        </section>
      </Card>
    </div>
  );
};
