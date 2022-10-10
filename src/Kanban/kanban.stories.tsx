import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Root as Kanban } from "./index";

export default {
  title: "Kanban",
  component: Kanban,
  argTypes: {},
} as ComponentMeta<typeof Kanban>;

// const Template: ComponentStory<typeof Kanban> = (args) => (
//   <DndProvider backend={HTML5Backend}>
//     <Kanban />
//   </DndProvider>
// );
const Template: ComponentStory<typeof Kanban> = (args) => <Kanban />;

export const Default = Template.bind({});
Default.args = {};
