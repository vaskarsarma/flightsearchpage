import React from "react";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import Footer from "./footer";

describe("<Footer />", () => {
  let container;

  beforeEach(() => (container = shallow(<Footer />)));

  it("<Footer /> Rendered Correctly", () => {
    expect(shallowToJson(container)).toMatchSnapshot();
  });

  it("should render a <footer />", () => {
    expect(container.find("footer").length).toEqual(1);
  });
});
