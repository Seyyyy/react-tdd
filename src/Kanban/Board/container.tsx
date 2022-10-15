import React, { useCallback } from "react";
import { Item, GroupItem } from "./constants";
import { Group } from "./group";

export type ContainerProps = {
  groupedItem: GroupItem;
  item: Item[];
  setCards: React.Dispatch<React.SetStateAction<Item[]>>;
};

export const Container: React.FC<ContainerProps> = ({
  groupedItem,
  item,
  setCards,
}) => {
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
    [item]
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
    [item]
  );

  const deleteItem = useCallback(
    (item: Item) => {
      setCards((prevItem: Item[]) => {
        const newItem = prevItem.filter((value) => item.id !== value.id);
        return [...newItem];
      });
    },
    [item]
  );

  return (
    <>
      {Object.keys(groupedItem).map((group) => (
        <Group
          key={group}
          groupType={group}
          cards={groupedItem[group]}
          moveCard={moveCard}
          moveGroup={moveGroup}
          deleteItem={deleteItem}
          setCard={setCards}
        />
      ))}
    </>
  );
};
