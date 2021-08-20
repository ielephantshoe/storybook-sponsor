import PropTypes from 'prop-types'
import { Box, Heading, Image, Text } from 'theme-ui'

export default function Appbar({ logo, children, ...props }) {
  return (
    <Box id='appbar-container' sx={{ display: 'grid', background: "#3f51b5", gridTemplateColumns: [ null,'1fr 1fr','1fr 1fr'], gridAutoColumns: '1fr', paddingBlock: 'min(2em, 1vh)', paddingInline: 'min(0.5em, 2vw)', gap: 'min(2em, 5vw)', boxShadow: '0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);' }}>
      {logo &&
        <Box id='logo-container' sx={{ display: ['none','flex','flex'], justifyContent: 'center', maxHeight: `4em` }}>
          <Image variant='sponsorHead' src={logo} sx={{ objectFit: 'scale-down', cursor: 'pointer' }} />
        </Box>
      }
      <Box id='controls-container' sx={{ display: 'flex', justifyContent: 'end', color: 'white', alignItems: 'center', paddingInline: 'min(0.5em, 2vw)', gap: '1em' }}>
        {children}
      </Box>
    </Box>
  )
}

Appbar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  logo: PropTypes.string.isRequired,
}
