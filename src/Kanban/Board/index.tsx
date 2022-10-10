import React, { useState } from "react";
import { useDrag, useDrop, DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import styles from "./kanban.module.css";
import { Container } from "./container";

export const Root = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Container />
    </DndProvider>
  );
};
