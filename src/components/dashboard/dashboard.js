import React, { useState } from "react";
import { FlightInfo } from "../flight-info/flight-info";
import data from "../../data/data.json";

function Dashboard() {
  const [selected, setSelected] = useState(0);

  const changedData = (event) => {
    setSelected(event.target.id);
  };

  return data.map((flightInfo, index) => {
    return (
      <FlightInfo
        key={index}
        id={index + 1}
        flightInfoObj={flightInfo}
        disableBtn={index + 1 === Number(selected)}
        onClickedhandler={changedData}
      />
    );
  });
}

export default Dashboard;
