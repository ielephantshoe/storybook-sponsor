import React from 'react';

import SponsorTable from '../SponsorTable';

export default {
  title: "UI Items/SponsorTable",
  component: SponsorTable,
}

const Template = (args) => <SponsorTable {...args} />;

export const Primary = Template.bind({})
Primary.args = {
  form: ['1','2','3','4','5','6','7']
}
