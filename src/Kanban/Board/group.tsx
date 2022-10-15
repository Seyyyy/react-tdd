import React, { useCallback } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes, Item } from "./constants";
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
  deleteItem: (item: Item) => void;
  groupType: string;
}

export const Group: React.FC<GroupProps> = ({
  cards,
  moveCard,
  moveGroup,
  deleteItem,
  groupType,
}) => {
  const [, ref] = useDrop({
    accept: ItemTypes.CARD,
    hover(dragItem: Item) {
      if (groupType === dragItem.group) return;
      moveGroup(dragItem, groupType);
    },
  });

  const renderCard = useCallback(
    (card: Item, index: number) => {
      return (
        <Card
          key={card.id}
          index={index}
          item={card}
          moveCard={moveCard}
          deleteCard={deleteItem}
        />
      );
    },
    [cards]
  );

  return (
    <>
      <div ref={ref} style={style} data-testid={`group-${groupType}`}>
        {cards.map((card, i) => renderCard(card, i))}
      </div>
    </>
  );
};
