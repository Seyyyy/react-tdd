import React, { useRef, useState, useCallback } from "react";
import { useDrag, useDrop, DndProvider } from "react-dnd";
import type { Identifier, XYCoord } from "dnd-core";
import { ItemTypes, Item, itemList, DragItem } from "./constants";
import { Card } from "./card";

const style = {
  border: "1px dashed gray",
  padding: "0.5rem 1rem",
  marginBottom: ".5rem",
  backgroundColor: "white",
  cursor: "move",
};

export interface GroupProps {
  cards: Item[];
  moveCard: (dragIndex: number, hoverIndex: number) => void;
  moveGroup: (card: Item, toGroupType: string) => void;
  setCard: React.Dispatch<React.SetStateAction<Item[]>>;
  groupType: string;
}

export const Group: React.FC<GroupProps> = ({
  cards,
  moveCard,
  moveGroup,
  setCard,
  groupType,
}) => {
  const [, ref] = useDrop({
    accept: ItemTypes.CARD,
    hover(dragItem: Item) {
      if (groupType === dragItem.group) return;
      moveGroup(dragItem, groupType);
      console.log(dragItem);
      console.log(groupType);
    },
  });

  const renderCard = useCallback((card: Item, index: number) => {
    return <Card key={card.id} index={index} item={card} moveCard={moveCard} />;
  }, []);

  return (
    <>
      <div ref={ref} style={style}>
        {cards.map((card, i) => renderCard(card, i))}
      </div>
    </>
  );
};
