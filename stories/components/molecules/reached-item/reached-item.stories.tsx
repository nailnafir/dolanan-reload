import { Meta, Story } from "@storybook/react";
import ReachedItem, {
  ReachedItemProps,
} from "../../../../components/molecules/reached-item";

export default {
  title: "Components/Molecules/ReachedItem",
  component: ReachedItem,
} as Meta;

const Template: Story<ReachedItemProps> = (args) => <ReachedItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "290M+",
  subtitle: "Players Top Up",
};
