import React from "react";
import renderer from "react-test-renderer";
import { Signup } from "./Components";
import { theme } from "./Theme";
import { ThemeProvider } from "styled-components";

test("Renders Sign up", () => {
  const tree = renderer.create(
    <ThemeProvider theme={theme}>
      <Signup />
    </ThemeProvider>
  );
  expect(tree).toMatchSnapshot();
});
