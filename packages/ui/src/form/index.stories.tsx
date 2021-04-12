import React from "react";
import Form from "./index";

export default {
  title: "Form",
};

const validationSchema: any = "";

export const TestInput = () => (
  <Form
    validationSchema={validationSchema}
    onSubmit={() => {}}
    fields={[{ name: "test", initialValue: "", placeholder: "Testing" }]}
    button={{ title: "Test form" }}
  />
);
