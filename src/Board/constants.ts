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
