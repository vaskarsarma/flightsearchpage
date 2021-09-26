import React from "react";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Dashboard from "./dashboard";
import { FlightInfo } from "../../molecules/flight-info/flight-info";

describe("<Dashboard />", () => {
  let container;

  beforeEach(() => (container = shallow(<Dashboard />)));

  it("<Dashboard /> Rendered Correctly", () => {
    expect(shallowToJson(container)).toMatchSnapshot();
  });

  it("should render the FlightInfo Component", () => {
    expect(container.containsMatchingElement(<FlightInfo />)).toEqual(true);
  });

  it("FlightInfo components > disableBtn props should be true if state is changed", () => {
    render(<Dashboard />);

    userEvent.click(screen.getAllByText("SELECT")[0]);

    const outputElement = screen.getAllByText("SELECT")[0];

    expect(outputElement).toHaveProperty("disabled");
  });
});
