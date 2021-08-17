import React from "react"
import { Box } from 'theme-ui'
import { keyframes } from '@emotion/react'
import PropTypes from "prop-types"

const rippleEffect = keyframes`
0% {
  transform: scale(1);
  opacity: 1;
}
50% {
  transform: scale(10);
  opacity: 0.375;
}
100% {
  transform: scale(35);
  opacity: 0;
}
`

export default function Button({ children, href, onClick, variant, ...props }) {
  const [coords, setCoords] = React.useState({ x: -1, y: -1 });
  const [isRippling, setIsRippling] = React.useState(false);

  React.useEffect(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      setIsRippling(true);
      setTimeout(() => setIsRippling(false), 300);
    } else setIsRippling(false);
  }, [coords]);

  React.useEffect(() => {
    if (!isRippling) setCoords({ x: -1, y: -1 });
  }, [isRippling]);

  return (
    <Box
      as="button"
      className="ripple-button"
      sx={{
        textTransform: "uppercase",
        backgroundColor: "#272727",
        color: 'white',
        boxShadow: "0 0 0.5rem rgba(0, 0, 0, 0.3)",
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        display: 'inline-block',
        textAlign: 'center',
        lineHeight: 'inherit',
        textDecoration: 'none',
        fontSize: 'inherit',
        m: 0,
        paddingBlock: 'min(0.5em, 2vh)',
        paddingInline: 'min(0.5em, 2vw)',
        border: 0,
        borderRadius: 4,
        variant: variant,
        '.ripple': {
          width: '20px',
          height: '20px',
          position: 'absolute',
          background: '#63a4ff',
          display: 'block',
          borderRadius: '100px',
          animation: `0.9s ease 1 forwards ${rippleEffect}`
        }
      }}
      {...props}
      onClick={e => {
        const rect = e.target.getBoundingClientRect();
        setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        onClick && onClick(e);
      }}>
      {isRippling ? (
        <span
          className="ripple"
          style={{
            left: coords.x,
            top: coords.y
          }}
        />
      ) : (
        ''
      )}
      <Box sx={{ display: 'grid', height: '100%', alignItems: 'center' }}>
        {children}
      </Box>
    </Box>
  )
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func,
  variant: PropTypes.string
}
