import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from '../../utils/index';
import NavComponent from "../components/NavComponent";

const setUp = (props = {}) => {
  const component = shallow(<NavComponent {...props} />);
  return component;
}

describe("Nav Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  })

  it("It should render the navbar.", () => {
    const wrapper = findByTestAttr(component, 'testNav')
    expect(wrapper.length).toBe(1);
  });

  it("It should render the logo.", () => {
    const logo = findByTestAttr(component, 'testLogo')
    expect(logo.length).toBe(1);
  });
});
