import PropTypes from "prop-types"
import { Box, Label, Input } from 'theme-ui'
import { Controller } from "react-hook-form";

export default function FormElement({ control, type, name, label, ...props }) {
    return (
        <Box sx={{ display: 'grid', gridAutoFlow: 'column', alignItems: 'center', gridTemplateColumns: '36% 64%' }}>
            <Controller
                name={name}
                control={control}
                defaultValue=""
                render={({ field }) =>
                    <>
                        <Label>{label}</Label>
                        <Input {...field} />
                    </>
                }
            />
        </Box>
    )
}

FormElement.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    control: PropTypes.object.isRequired,
    label: PropTypes.string,
}
