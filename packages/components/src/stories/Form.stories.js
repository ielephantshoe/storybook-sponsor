import React from 'react';
import { Box } from 'theme-ui';
import Button from '../Button';
import { useForm } from "react-hook-form";
import Form from '../Form';
import FormElement from '../FormElement';

export default {
  title: "UI Items/Form",
  component: Form,
}

const FormData = [
  {
      "name": "Applideck",
      "type": "text",
      "label": "Applideck"
  },
  {
      "name": "Genmex",
      "type": "password",
      "label": "Genmex"
  },
  {
      "name": "Xinware",
      "type": "date",
      "label": "Xinware"
  },
  {
      "name": "Combogen",
      "type": "password",
      "label": "Combogen"
  },
  {
      "name": "Uncorp",
      "type": "text",
      "label": "Uncorp"
  },
  {
      "name": "Macronaut",
      "type": "tel",
      "label": "Macronaut"
  },
  {
      "name": "Undertap",
      "type": "text",
      "label": "Undertap"
  },
  {
    "name": "Undertap2",
    "type": "text",
    "label": "Test3"
}
]

export const primary = () => (
  <Form formData={FormData} onSubmit={data => console.log(data)}/>
)
