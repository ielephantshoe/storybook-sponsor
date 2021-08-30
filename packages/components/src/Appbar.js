import PropTypes from 'prop-types'
import { useState } from 'react';
import Button from './Button';
import { Box, Heading, Image, Text, MenuButton, Flex } from 'theme-ui'

export default function Appbar({ logo, children, ...props }) {

  const [isOpen, toggleOpen] = useState(true)

  return (
    <>
      {isOpen && <Box sx={{ width: '100%', height: '100%', position: 'fixed', zIndex: '3', top: 0, left: 0, backgroundColor: 'rgba(0,0,0,0.2)', transition: '.8s ease' }} onClick={() => toggleOpen(false)}></Box>}

      <Box id='appbar-container' as='header' sx={{ display: 'grid', borderBottom: '1px solid #f1f3f4', gridTemplateColumns: ['20% 75%', 'repeat(3, 1fr)', 'repeat(3, 1fr)'], paddingBlock: 'min(2em, 1vh)', paddingInline: 'min(0.5em, 2vw)', gap: 'min(2em, 5vw)' }}>

        <Box id='drawerNav' sx={{
          height: '100%', width: '320px', position: 'fixed', zIndex: '4', top: 0, left: isOpen ? '0px' : '-320px', backgroundColor: 'white', transition: '.8s ease', overflowX: 'hidden', display: 'flex', flexDirection: 'column', paddingInline: '2.75em', paddingTop: '3.5em'
        }}>

          <Box sx={{ color: 'black', alignSelf: 'end', cursor: 'pointer' }} onClick={() => toggleOpen(false)}>
            <svg width='15' aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z" class=""></path></svg>
          </Box>
          {logo && <Image variant='sponsorHead' src={logo} sx={{ objectFit: 'scale-down', cursor: 'pointer' }} />}
          {children}

        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ padding: '1em', borderRight: '1px solid #f1f3f4' }}>
            <MenuButton aria-label="Toggle Menu" onClick={() => toggleOpen(!isOpen)} />
          </Box>
        </Box>

        <Box id='logo-container' sx={{ display: ['none', 'flex', 'flex'], justifyContent: 'center', maxHeight: `4em` }}>
          {logo &&
            <Image variant='sponsorHead' src={logo} sx={{ objectFit: 'scale-down', cursor: 'pointer' }} />
          }
        </Box>

        <Box id='controls-container' sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center', paddingInline: 'min(0.5em, 2vw)', gap: '1em' }}>
          <Heading as='h2' sx={{ justifySelf: 'center', fontWeight: 500 }}>Welcome x!</Heading>
          <Box sx={{ marginInline: '0.5em' }}>
            <Button>Logout</Button>
          </Box>
        </Box>
      </Box>
    </>
  )
}

Appbar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  logo: PropTypes.string.isRequired,
}
