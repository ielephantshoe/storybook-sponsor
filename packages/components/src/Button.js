import React from "react"
import Link from 'next/link'
import { Box } from 'theme-ui'
import PropTypes from "prop-types"

export default function Button({ children, href, onClick, variant, ...props }) {
  function createRipple(event) {
    const button = event.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add("ripple");
    const ripple = button.getElementsByClassName("ripple")[0];
    if (ripple) {
      ripple.remove();
    }
    button.appendChild(circle);
  }

  return (
    <Link href={href ?? '#'}>
      <Box
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
        }}
        {...props}
        onClick={(e) => {
          createRipple(e)
          if (onClick)
            onClick()
        }}>
        <style jsx="true">{`
          span.ripple {
            position: absolute;
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 600ms linear;
            background-color: rgba(255, 255, 255, 0.7);
          }
          
          @keyframes ripple {
            to {
              transform: scale(4);
              opacity: 0;
            }
          }
      `}</style>
        <Box sx={{ display: 'grid', height: '100%', alignItems: 'center' }}>
          {children}
        </Box>
      </Box>
    </Link>
  )
}


Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  href: PropTypes.string,
  onClick: PropTypes.func,
  variant: PropTypes.string
}