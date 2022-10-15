export const ItemTypes = {
  CARD: "card",
};

export interface DragItem {
  index: number;
  item: Item;
}

export interface Item {
  id: number;
  title: string;
  description: string;
  group: string;
}

export interface GroupItem {
  [groupName: string]: Item[];
}

export const GroupType = ["todo", "progress", "done"];

// export const swapCard = (
//   dragIndex: number,
//   hoverIndex: number,
//   groupType: string,
//   prevCards: GroupItem
// ) => {
//   const item = prevCards[groupType][dragIndex];
//   const newItems = prevCards[groupType].filter((_, idx) => idx !== dragIndex);
//   newItems.splice(hoverIndex, 0, { ...item });
//   prevCards[groupType] = newItems;
//   return prevCards;
// };

// export const swapGroup = (
//   dragIndex: number,
//   hoverIndex: number,
//   groupType: string,
//   prevCards: GroupItem
// ) => {
//   const item = prevCards[groupType][dragIndex];
//   const newItems = prevCards[groupType].filter((_, idx) => idx !== dragIndex);
//   newItems.splice(hoverIndex, 0, { ...item });
//   prevCards[groupType] = newItems;
//   return prevCards;
// };
