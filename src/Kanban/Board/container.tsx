import React, { useRef, useState, useCallback } from "react";
import { useDrag, useDrop, DndProvider } from "react-dnd";
import type { Identifier, XYCoord } from "dnd-core";
import { ItemTypes, Item, itemList, DragItem } from "./constants";
import { Group } from "./group";
import { useList } from "./useList";

export const Container = () => {
  //   const [cards, setCards] = useState(itemList);
  const [groupedCards, cards, setCards] = useList(itemList);

  const moveCard = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      // TODO
      //   setCards((prevCards: Item[]) => {
      //     const item = prevCards[dragIndex];
      //     const newItems = prevCards.filter((_, idx) => idx !== dragIndex);
      //     newItems.splice(hoverIndex, 0, { ...item });
      //     return newItems;
      //   });
    },
    [cards]
  );

  const moveGroup = useCallback(
    (card: Item, toGroupType: string) => {
      setCards((prevCards: Item[]) => {
        const newItems = prevCards.filter((item) => item.id !== card.id);
        const newCard: Item = {
          ...card,
          group: toGroupType,
        };
        return [...newItems, newCard];
      });
    },
    [cards]
  );

  return (
    <>
      {Object.keys(groupedCards).map((group) => (
        <Group
          key={group}
          groupType={group}
          cards={groupedCards[group]}
          moveCard={moveCard}
          moveGroup={moveGroup}
          setCard={setCards}
        />
      ))}
    </>
  );
};
