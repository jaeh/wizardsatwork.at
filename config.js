const path = require('path')

const textColor = '#4527A0'

module.exports = {
  ROOT: 'src',
  THEME: 'wnw',

  DIR: {
    PUBLIC: path.join('docs'),
  },

  THEME_VARS: {
    black: '#010101',
    white: '#FEFEFE',
    textColor,
    textColorSubtle: '#5d46a2',
    backgroundColor: '#010101',
    linkColor: textColor,
    linkHoverColor: textColor,
    borderColor: '#F57C00',
    maxWidth: '1200px',
    fill_1: '#4527A0',
    fill_2: '#DAD4EC',
    fill_3: '#8F7DC6',
    subtleColor: '#9c9788',
    lessSubtleColor: '#666666',
    hexColor: textColor,
  },

  FOR_DEATH_CAN_NOT_HAVE_HIM: true,
}
