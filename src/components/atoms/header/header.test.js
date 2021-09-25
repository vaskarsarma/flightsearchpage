import React from "react";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import Header from "./header";

describe("<Header />", () => {
  let container;

  beforeEach(() => (container = shallow(<Header />)));

  it("<Header /> Rendered Correctly", () => {
    expect(shallowToJson(container)).toMatchSnapshot();
  });

  it("should render a <h2 />", () => {
    expect(container.find("h2").length).toEqual(1);
  });

  it("should render a <header />", () => {
    expect(container.find("header").length).toEqual(1);
  });
});
