import React from 'react'
import PropTypes from 'prop-types';
import Button from './Button'

// setting up header
const Header = ({ title }) => {

  const onClick = () => {
    console.log('click')
  }

  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color='green' text='Add' onClick={onClick}/>
    </header>
  )
}
// setting default title
Header.defaultProps = {
  title: 'Task Tracker'
}

// requiring string for title
Header.propTypes = {
  title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black'
// }

export default Header
