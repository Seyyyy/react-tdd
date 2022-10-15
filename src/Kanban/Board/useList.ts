import { useEffect, useState } from "react";
import { GroupItem, GroupType, Item } from "./constants";

export const generateGroupedList = (
  GroupType: string[],
  item?: Item[]
): GroupItem => {
  let groupedList: GroupItem = {};
  if (!item) return groupedList;

  GroupType.map((group) => {
    groupedList[group] = item.filter((item) => item.group === group);
  });
  return groupedList;
};

export const useList = (items: Item[]) => {
  const [list, setList] = useState<Item[]>(items);
  // const [groupedItem, setGroupedItem] = useState<GroupItem>(
  //   generateGroupedList(GroupType, list)
  // );
  // useEffect(() => {
  //   console.log("group");
  //   setGroupedItem(generateGroupedList(GroupType, list));
  // }, [list]);

  // console.log(groupedItem, list);

  // return [groupedItem, list, setList] as const;
  return [list, setList] as const;
};
