import React, { useMemo, useState } from "react";
import { DndProvider } from "react-dnd";
import { Item } from "./constants";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Container } from "./container";
import { ItemInput } from "./itemInput";
import { useList, generateGroupedList } from "./useList";

export type BoardProps = {
  initialItemList?: Item[];
  groupType: string[];
};

export const Board: React.FC<BoardProps> = ({
  initialItemList = [],
  groupType,
}) => {
  const [item, setItem] = useList(initialItemList);

  const [formValue, setFormValue] = useState({
    title: "",
    description: "",
    group: "todo",
  });

  const Kanban = useMemo(
    () => (
      <>
        <DndProvider backend={HTML5Backend}>
          <Container
            groupedItem={generateGroupedList(groupType, item)}
            item={item}
            setCards={setItem}
          />
        </DndProvider>
      </>
    ),
    [item]
  );

  return (
    <>
      <ItemInput
        formValue={formValue}
        setFormValue={setFormValue}
        setItem={setItem}
        groupType={groupType}
      />
      {Kanban}
    </>
  );
};
