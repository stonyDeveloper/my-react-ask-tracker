import React from 'react'
import PropTypes from 'prop-types'

const Button = ({color, text, onAdd}) => {
  return (
    <div
    className='px-[20px] py-[10px] cursor-pointer rounded-md text-white'
    style={{backgroundColor: color}}
    onClick={onAdd}
    >{text}</div>
  )
}

Button.defaultProps = {
    color: 'seagreen'
}

// Button.propTypes = {
//   text: PropTypes.string,
//   color: PropTypes.string
// }

export default Button