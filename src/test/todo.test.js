import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from '../../utils/index';
import ToDoComponent from "../components/ToDoComponentBody";

const setUp = (props = {}) => {
  const component = shallow(<ToDoComponent {...props} />);
  return component;
}

describe("ToDo Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  })

  it("It should render the card body.", () => {
    const wrapper = findByTestAttr(component, 'testCard')
    expect(wrapper.length).toBe(1);
  });
});
