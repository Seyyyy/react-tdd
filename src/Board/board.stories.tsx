import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Board } from "./index";

export default {
  title: "Board",
  component: Board,
  argTypes: {},
} as ComponentMeta<typeof Board>;

const initialItemList = [
  {
    id: 1,
    title: "title",
    description: "desc",
    group: "done",
  },
  {
    id: 2,
    title: "title",
    description: "desc",
    group: "progress",
  },
  {
    id: 3,
    title: "title",
    description: "desc",
    group: "todo",
  },
];

const Template: ComponentStory<typeof Board> = (args) => (
  <Board
    initialItemList={initialItemList}
    groupType={["todo", "progress", "done"]}
  />
);

export const Default = Template.bind({});
Default.args = {};
