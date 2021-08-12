import PropTypes from "prop-types"
import { Box } from 'theme-ui'
import { useForm, Controller } from "react-hook-form";
import FormElement from "./FormElement";
import Button from "./Button"


export default function Form({ onSubmit, children, formData, ...props }) {

    const { control, handleSubmit } = useForm();

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ display: 'grid', gridAutoFlow: ['Row', 'column', 'column'], gridAutoColumns: '1fr', gap: ['0.5em', '1em', '1em'] }}>
                <Box sx={{ display: 'grid', gridAutoFlow: 'Row', gap: ['0.5em', '1em', '1em'], paddingBlock: ['0.5em', '1em', '1em'] }}>
                    {formData.map((item, index) =>
                        !(index % 2 == 1) &&
                        <FormElement control={control} type={item.type} name={item.name} label={item.label} />
                    )}
                </Box>
                <Box sx={{ display: 'grid', gridAutoFlow: 'Row', gap: ['0.5em', '1em', '1em'], paddingBlock: ['0.5em', '1em', '1em'] }}>
                    {formData.map((item, index) => 
                        Math.abs(index % 2) == 1 &&
                        <FormElement control={control} type={item.type} name={item.name} label={item.label} />
                    )}
                </Box>        
            </Box>
            <Button type="submit">Submit</Button>
        </form>
    )
}

Form.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
    ]),
    logo: PropTypes.string,
    onSubmit: PropTypes.func
}
