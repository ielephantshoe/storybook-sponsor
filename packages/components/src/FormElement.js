import PropTypes from "prop-types"
import { Box, Label, Input } from 'theme-ui'
export default function FormElement({ type, name, label, ...props }) {
    return (
      
        // <Box sx={{ display: 'grid', gridAutoFlow: 'column', alignItems: 'center', gridTemplateColumns: '36% 64%' }}>
        //     <Controller
        //         name={name}
        //         control={control}
        //         defaultValue=""
        //         render={({ field }) =>
        //             <>

        //             </>
        //         }
        //     />
        // </Box>

        <Box sx={{ display: 'grid', gridAutoFlow: 'column', alignItems: 'center', gridTemplateColumns: '36% 64%' }}>
            <Label htmlFor={name}>{label}</Label>
            <Input type={type} name={name} {...props} />
        </Box>
    )
}

FormElement.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
}
