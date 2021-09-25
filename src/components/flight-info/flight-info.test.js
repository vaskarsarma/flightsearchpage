import React from "react";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import { FlightInfo } from "./flight-info";
import mockRoutes from "../mocks/mockroutes.json";

describe("<FlightInfo />", () => {
  let container;
  const activeRoute = mockRoutes[0];
  const nonActiveRoute = mockRoutes[1];

  beforeEach(() => {
    container = shallow(<FlightInfo {...activeRoute} />);
  });

  it("<FlightInfo /> Rendered Correctly", () => {
    expect(shallowToJson(container)).toMatchSnapshot();
  });

  it("should render a div", () => {
    expect(container.find("div").length).toEqual(1);
    expect(container.find("div.Cart-Container").length).toBe(1);
  });

  it("should render a Card", () => {
    expect(container.find("Card").length).toEqual(1);
  });

  it("should highlight the Card if button is disabled", () => {
    expect(container.find("Card").props()["bg"]).toEqual("warning");
    expect(container.find("Card").props()["border"]).toEqual("danger");
  });

  it("should not highlight the Card if button is active", () => {
    container.setProps({ ...nonActiveRoute });
    expect(container.find("Card").props()["bg"]).toEqual("");
    expect(container.find("Card").props()["border"]).toEqual("");
  });
});
