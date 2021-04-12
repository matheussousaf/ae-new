import React from "react";
import { repeat } from "../utils";
import Input from "./index";

export default {
  title: "Input",
};

export const TestInput = () => (
  <Input label="Test" type="custom" options={{ mask: repeat("*", 255) }} />
);
