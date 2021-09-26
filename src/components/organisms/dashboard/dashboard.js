import React, { useState, useCallback } from "react";
import { FlightInfo } from "../../molecules/flight-info/flight-info";
import data from "../../../data/data.json";

function Dashboard() {
  const [selected, setSelected] = useState(0);

  const changedData = useCallback((event) => {
    setSelected(event.target.id);
  }, []);

  return data.slice(0,10).map((flightInfo, index) => {
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
