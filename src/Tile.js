import PropTypes from "prop-types"
import { Box, Heading, Image, Text } from 'theme-ui'

export default function Tile({href, children, ...props }) {
    return (
        <Box as="a"
            href={ href ?? '#'}
            sx={{
                display: 'block', position: 'relative', background: '#fff', boxShadow: '0 0 0 1px rgba(63,63,68,.05),0 1px 3px 0 rgba(63,63,68,.15)', borderRadius: '3px', height: '195px', transition: 'box-shadow .2s ease-in-out,transform .1s ease-in-out', textDecoration: 'none', cursor: 'pointer', color: 'black', overflow:'hidden',
                ':hover': {
                    transform: 'scale(1.01)',
                    boxShadow: '0 0 0 1px rgba(63,63,68,.05),0 3px 8px 0 rgba(63,63,68,.15)'
                },
            }}
            {...props}>
                {children}
        </Box>
    )
}