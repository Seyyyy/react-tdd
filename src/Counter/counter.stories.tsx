import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Counter from "./index";

export default {
  title: "Counter",
  component: Counter,
  argTypes: {},
} as ComponentMeta<typeof Counter>;

const Template: ComponentStory<typeof Counter> = (args) => (
  <Counter {...args} />
);

export const Default = Template.bind({});
Default.args = {};
