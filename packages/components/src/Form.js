import PropTypes from 'prop-types'
import { Box } from 'theme-ui'

export default function Form({ onSubmit, children, formData, ...props }) {
    return (
        <Box as='form' aria-label='form' onSubmit={(e) => {
            const formData = new FormData(e.currentTarget);
            onSubmit(JSON.stringify(Object.fromEntries(formData.entries())))
            e.preventDefault()
            e.target.reset()
        }}>
            {children}
        </Box>
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
