import { render, screen } from "@testing-library/react";
import React from "react";
import Checkout from "./routes/checkout/checkout.component";

test("renders checkout", () => {
  expect((<Checkout />).length).toEqual(1);
});
