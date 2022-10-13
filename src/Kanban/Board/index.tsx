import React from "react";
import { DndProvider } from "react-dnd";
import { Item } from "./constants";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Container } from "./container";
// import { ItemInput } from "./itemInput";

export type BoardProps = {
  initialItemList?: Item[];
};

export const Board: React.FC<BoardProps> = ({ initialItemList }) => {
  return (
    <>
      {/* <ItemInput /> */}
      <DndProvider backend={HTML5Backend}>
        <Container initialItemList={initialItemList} />
      </DndProvider>
    </>
  );
};
