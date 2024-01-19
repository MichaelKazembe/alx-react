import React from "react";
import { shallow, mount } from "enzyme";
import App from "./App";

describe("App tests", () => {
  it("pressing ctrl+h triggers logOut function and alert", () => {
    const logOutMock = jest.fn();
    const alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});

    const component = mount(<App isLoggedIn={true} logOut={logOutMock} />);

    const event = new KeyboardEvent("keydown", {
      ctrlKey: true,
      key: "h",
    });

    document.dispatchEvent(event);

    expect(alertMock).toHaveBeenCalledWith("Logging you out");
    expect(logOutMock).toHaveBeenCalled();

    component.unmount();
    alertMock.mockRestore();
  });
});
