export const ItemTypes = {
  CARD: "card",
};

export interface DragItem {
  index: number;
  id: string;
  group: string;
  type: string;
}

export interface Item {
  id: number;
  text: string;
  group: string;
}

export interface GroupItem {
  [groupName: string]: Item[];
}

export const GroupType = ["todo", "progress"];

export const itemList: Item[] = [
  {
    id: 1,
    text: "Write a cool JS library",
    group: "todo",
  },
  {
    id: 2,
    text: "Make it generic enough",
    group: "todo",
  },
  {
    id: 3,
    text: "Write README",
    group: "todo",
  },
  {
    id: 4,
    text: "Create some examples",
    group: "todo",
  },
  {
    id: 5,
    text: "Spam in Twitter and IRC to promote it (note that this element is taller than the others)",
    group: "todo",
  },
  {
    id: 6,
    text: "???",
    group: "progress",
  },
  {
    id: 7,
    text: "PROFIT",
    group: "todo",
  },
];

export const swapCard = (
  dragIndex: number,
  hoverIndex: number,
  groupType: string,
  prevCards: GroupItem
) => {
  const item = prevCards[groupType][dragIndex];
  const newItems = prevCards[groupType].filter((_, idx) => idx !== dragIndex);
  newItems.splice(hoverIndex, 0, { ...item });
  prevCards[groupType] = newItems;
  return prevCards;
};

export const swapGroup = (
  dragIndex: number,
  hoverIndex: number,
  groupType: string,
  prevCards: GroupItem
) => {
  const item = prevCards[groupType][dragIndex];
  const newItems = prevCards[groupType].filter((_, idx) => idx !== dragIndex);
  newItems.splice(hoverIndex, 0, { ...item });
  prevCards[groupType] = newItems;
  return prevCards;
};
