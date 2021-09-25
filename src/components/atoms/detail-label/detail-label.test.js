import React from "react";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import { DetailLabel } from "./detail-label";

describe("<DetailLabel />", () => {
  let container;

  beforeEach(() => (container = shallow(<DetailLabel />)));

  it("<DetailLabel /> Rendered Correctly", () => {
    expect(shallowToJson(container)).toMatchSnapshot();
  });

  it("should render a <div />", () => {
    expect(container.find("div").length).toEqual(1);
  });

  it("should render a <h4 />", () => {
    expect(container.find("h4").length).toEqual(1);
  });

  it("should render a <p />", () => {
    expect(container.find("p").length).toEqual(1);
  });
});
