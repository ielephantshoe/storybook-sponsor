import React from 'react';

import Form from '../Form';

export default {
  title: "UI Items/Form",
  component: Form,
}

const Template = (args) => <Form {...args} />;

export const Primary = Template.bind({})
Primary.args = {}
