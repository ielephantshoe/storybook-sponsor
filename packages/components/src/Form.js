import PropTypes from "prop-types"
import Button from "./Button"
import { Box, Heading, Image, Label, Text, Input, Checkbox, Select, Textarea, Flex, Radio, Slider } from 'theme-ui'
import { grid } from "styled-system"

export default function Form({ onSubmit, form, ...props }) {
    return (
        <Box id={'form'} as="form" onSubmit={(e) => e.preventDefault()}>
            <Box sx={{ display: 'grid', gridAutoFlow: ['Row', 'column', 'column'], gridAutoColumns: '1fr', gap: ['0.5em', '1em', '1em'] }}>
                <Box sx={{ display: 'grid', gridAutoFlow: 'Row', gap: ['0.5em', '1em', '1em'], paddingBlock: ['0.5em', '1em', '1em'] }}>
                    <Box sx={{ display: 'grid', gridAutoFlow: 'column', alignItems: 'center', gridTemplateColumns: '36% 64%' }}>
                        <Label htmlFor="address">Address</Label>
                        <Input type="text" name="address" id="address" />
                    </Box>
                    <Box sx={{ display: 'grid', gridAutoFlow: 'column', alignItems: 'center', gridTemplateColumns: '36% 64%' }}>
                        <Label htmlFor="city">City</Label>
                        <Input type="text" name="city" id="city" />
                    </Box>
                    <Box sx={{ display: 'grid', gridAutoFlow: 'column', alignItems: 'center', gridTemplateColumns: '36% 64%' }}>
                        <Label htmlFor="state">State / Province</Label>
                        <Input type="text" name="state" id="state" />
                    </Box>
                    <Box sx={{ display: 'grid', gridAutoFlow: 'column', alignItems: 'center', gridTemplateColumns: '36% 64%' }}>
                        <Label htmlFor="country">Country</Label>
                        <Input type="text" name="country" id="country" />
                    </Box>
                </Box>
                <Box sx={{ display: 'grid', gridAutoFlow: 'Row', gap: ['0.5em', '1em', '1em'], paddingBlock: ['0.5em', '1em', '1em'] }}>
                    <Box sx={{ display: 'grid', gridAutoFlow: 'column', alignItems: 'center', gridTemplateColumns: '36% 64%' }}>
                        <Label htmlFor="cname">Main Contact name</Label>
                        <Input type="text" name="cname" id="cname" />
                    </Box>
                    <Box sx={{ display: 'grid', gridAutoFlow: 'column', alignItems: 'center', gridTemplateColumns: '36% 64%' }}>
                        <Label htmlFor="cemail">Main Contact Email</Label>
                        <Input type="text" name="cemail" id="cemail" />
                    </Box>
                    <Box sx={{ display: 'grid', gridAutoFlow: 'column', alignItems: 'center', gridTemplateColumns: '36% 64%' }}>
                        <Label htmlFor="sname">Secondary Contact Name</Label>
                        <Input type="text" name="sname" id="sname" />
                    </Box>
                    <Box sx={{ display: 'grid', gridAutoFlow: 'column', alignItems: 'center', gridTemplateColumns: '36% 64%' }}>
                        <Label htmlFor="semail">Secondary Contact Email</Label>
                        <Input type="text" name="semail" id="semail" />
                    </Box>
                </Box>
            </Box>
            <Button>Submit</Button>
        </Box>
    )
}

Form.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
    ]),
    logo: PropTypes.string
}