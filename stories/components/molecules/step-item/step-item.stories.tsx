import { Meta, Story } from "@storybook/react";
import StepItem, { StepItemProps } from "../../../../components/molecules/step-item";


export default {
  title: "Components/Molecules/StepItem",
  component: StepItem,
} as Meta;

const Template: Story<StepItemProps> = (args) => <StepItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: "step-1",
  title: "1. Start",
  desc1: "Pilih salah satu game",
  desc2: "yang kamu ingin top up"
};
