import React from "react";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import App from "./App";
import Header from "./components/header/header";
import Dashboard from "./components/dashboard/dashboard";

describe("<App />", () => {
  let container;

  beforeEach(() => (container = shallow(<App />)));

  it("<APP /> Rendered Correctly", () => {
    expect(shallowToJson(container)).toMatchSnapshot();
  });

  it("should render a <div />", () => {
    expect(container.find("div").length).toEqual(1);
  });

  it("should render the Header Component", () => {
    expect(container.containsMatchingElement(<Header />)).toEqual(true);
  });

  it("should render the Dashboard Component", () => {
    expect(container.containsMatchingElement(<Dashboard />)).toEqual(true);
  });
});
