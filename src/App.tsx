import React from "react";

import { TestComponent } from "./TestComponent";

import type { FC } from "react";

import "./App.css";

const text = "Text";

export const App: FC = () => {
  return (
    <>
      <h1>Blank page</h1>
      <span>{text}</span>
      <TestComponent />
    </>
  );
};
