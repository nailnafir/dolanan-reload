import { Meta, Story } from "@storybook/react";
import RowItem, {
  RowItemProps,
} from "../../../../components/molecules/row-item";

export default {
  title: "Components/Molecules/RowItem",
  component: RowItem,
} as Meta;

const Template: Story<RowItemProps> = (args) => <RowItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Your Game ID",
  value: "DiamondRA",
};
