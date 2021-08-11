import React from 'react';

import Button from '../Button';

export default {
  title: "UI Items/Button",
  component: Button,
}

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({})
Primary.args = {
  children: 'Test Button',
}
