import React from "react";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import FlightLogo from "./flightlogo";

describe("<FlightLogo />", () => {
  let container;

  beforeEach(() => (container = shallow(<FlightLogo />)));

  it("<FlightLogo /> Rendered Correctly", () => {
    expect(shallowToJson(container)).toMatchSnapshot();
  });

  it("should render a <img />", () => {
    expect(container.find("img").length).toEqual(1);
  });
});
