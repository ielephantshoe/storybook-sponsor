import React from 'react';
import { Box } from 'theme-ui';
import Button from '../Button';
import Form from '../Form';
import FormElement from '../FormElement';

export default {
    title: "UI Items/Form",
    component: Form,
}

const formData = [
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

// export const primary = () => (
//   <Form formData={FormData} onSubmit={data => console.log(data)}/>
// )

export const primary = () => (
    <Form onSubmit={data => console.log(data)}>
        <Box sx={{ display: 'grid', gridAutoFlow: ['Row', 'column', 'column'], gridAutoColumns: '1fr', gap: ['0.5em', '1em', '1em'] }}>
                <Box sx={{ display: 'grid', gridAutoFlow: 'Row', gap: ['0.5em', '1em', '1em'], paddingBlock: ['0.5em', '1em', '1em'] }}>
                    {formData.map((item, index) =>
                        !(index % 2 == 1) &&
                        <FormElement {...item} />
                    )}
                </Box>
                <Box sx={{ display: 'grid', gridAutoFlow: 'Row', gap: ['0.5em', '1em', '1em'], paddingBlock: ['0.5em', '1em', '1em'] }}>
                    {formData.map((item, index) =>
                        (index % 2 == 1) == 1 &&
                        <FormElement {...item} />
                    )}
                </Box>
            </Box>
            <Button type="submit">Submit</Button>
    </Form>
)
