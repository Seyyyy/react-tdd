import { useEffect, useState } from "react";
import { GroupItem, GroupType, Item } from "./constants";

export const generateGroupedList = (
  GroupType: string[],
  item: Item[]
): GroupItem => {
  console.log(GroupType);
  console.log(item);
  let groupedList: GroupItem = {};
  GroupType.map((group) => {
    groupedList[group] = item.filter((item) => item.group === group);
  });
  return groupedList;
};

export const useList = (items: Item[]) => {
  const [list, setList] = useState<Item[]>(items);
  const [groupedItem, setGroupedItem] = useState<GroupItem>(
    generateGroupedList(GroupType, list)
  );
  useEffect(() => {
    setGroupedItem(generateGroupedList(GroupType, list));
  }, [list]);

  return [groupedItem, list, setList] as const;
};
