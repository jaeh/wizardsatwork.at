const theme = vars => ({
  '::selection': {
    backgroundColor: vars.textColor,
    color: vars.backgroundColor,
    textShadow: 'none',
  },

  '*': {
    boxSizing: 'border-box',
  },

  body: {
    color: vars.textColor,
    fontFamily: [
      '"Ubuntu Condensed"',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      'Oxygen-Sans',
      'Ubuntu',
      'Cantarell',
      '"Helvetica Neue"',
      'sans-serif',
    ].join(','),
    fontSize: '15px',
    lineHeight: '1.2',
    maxWidth: vars.maxWidth,
    margin: '0 auto',
  },
  'h1, h2': {
    margin: '0 0 0.5em',
  },

  h1: {
    fontSize: '1.2em',
    fontWeight: 600,
  },
  h2: {
    fontSize: '1.1em',
  },
  img: {
    maxHeight: '100%',
    maxWidth: '100%',
  },
  '#magic': {
    lineHeight: '1.2',
  },
  '.animated': {
    animationDelay: '300ms',
    animationDuration: '400ms',
    animationName: 'fade-out',
    animationTimingFunction: 'linear',
  },

  '.add': {
    display: 'none',
  },

  a: {
    color: vars.textColor,
    textDecoration: 'none',

    '&:hover': {
      textDecoration: 'underline',
    },

    '&.button': {
      backgroundColor: vars.textColor,
      color: vars.white,
      display: 'block',
      padding: '.5em',
      margin: '.5em',
    },
  },
  p: {
    margin: '1em 0',
  },

  '.annotated p': {
    margin: 0,
  },

  'ul.nav': {
    li: {
      display: 'block',
    },
  },

  '.projects': {
    margin: '2em 0',

    '.project': {
      backgroundColor: vars.subtleColor,
      border: `1px solid ${vars.textColor}`,
      margin: '1em 0',
      width: '100%',

      img: {
        width: '100%',
      },
      '.description': {
        padding: '1em',
      },
    },
  },

  '.impressum': {
    margin: '0 auto',
    width: '80%',
    minWidth: '250px',

    '#hat': {
      width: '30%',
    },
  },

  '.social': {
    textAlign: 'center',
    position: 'absolute',
    top: '1em',
    right: '1em',
    left: 'auto',

    ul: {
      display: 'inline-block',

      li: {
        float: 'left',
        margin: '.5em .2em',
      },
    },
    svg: {
      height: '1.5em',
      width: '1.5em',
      fill: vars.lessSubtleColor,
    },
  },

  'footer.main': {
    padding: '0 0 1em',
    color: vars.subtleColor,
    textAlign: 'center',
    margin: '2em 0 0',
  },

  // utilities
  '.block': {
    margin: '2em 0',
  },

  '.hex__container': {
    position: 'relative',
  },

  '.hex': {
    display: 'block',
    margin: '0 auto',
    position: 'relative',
    minHeight: '250px',
    minWidth: '250px',
    maxWidth: '400px',
    maxHeight: '400px',
    width: '90vw',
    height: '90vw',

    '&.big': {
      maxHeight: '500px',
      maxWidth: '500px',
    },

    '&.small': {
      textAlign: 'center',
      minWidth: 'inherit',
      minHeight: 'inherit',
      width: 'auto',
      height: 'auto',

      '.container': {
        display: 'inline-block',
      },

      '.hex__link': {
        float: 'left',
        lineHeight: '3em',

        span: {
          margin: '0 0 0 .2em',
        },
      },
    },

    '.hex__content': {
      position: 'relative',
      textAlign: 'center',
      width: '60%',
      height: '60%',
      top: '20%',
      left: '20%',

      '&.annotated': {
        color: vars.subtleColor,

        p: {
          margin: '.2em 0',
        },
        h2: {
          margin: '.3em 0',
          fontWeight: 600,
        },
      },
    },
  },

  '.anim': {
    animationDuration: '.7s',
    animationFillMode: 'forwards',
    animationIterationCount: 1,
    animationTimingFunction: 'ease-out',
  },

  '@media (min-width: 400px) and (max-width: 799px)': {
    body: {
      fontSize: '18px',
    },
    '.hex': {
      '.hex__content.annotated': {
        h2: {
          margin: '1em 0',
        },
      },
    },
  },

  '@media (min-width: 800px)': {
    body: {
      fontSize: '15px',

      '.section': {
        '&.impressum': {
          '#hat': {
            float: 'left',
            margin: '0 2em 0 0',
          },
        },
      },
    },

    '#magic': {
      margin: '5em auto 0',
      width: '800px',
      position: 'relative',
    },

    '.add': {
      display: 'none',
    },

    '.kickstarter': {
      margin: '0 auto',
    },

    'footer.main': {
      textAlign: 'left',
      position: 'fixed',
      left: '5px',
      bottom: '5px',
      top: 'auto',
      padding: 0,
    },

    '.hex': {
      position: 'absolute',
      width: '300px',
      height: '300px',
      maxWidth: 'inherit',
      maxHeight: 'inherit',

      '&.hero': {
        left: '50%',
        margin: '0 0 0 -150px',
      },

      '&.evocell': {
        top: '145px',
      },

      '&.magicshifter': {
        top: '145px',
        right: 0,
        left: 'auto',
      },

      '&.about': {
        top: '290px',
        margin: '0 0 0 -150px',
        left: '50%',
      },

      '&.hexpaper': {
        position: 'absolute',
        top: '480px',
        right: '75px',
      },
    },
  },

  '@media (min-width: 1100px)': {
    body: {
      fontSize: '17px',

      '.section': {
        '&.impressum': {
          fontSize: '16px',
        },
      },
    },

    '#magic': {
      margin: '1em auto 0',
      width: '1100px',
    },
    '.add': {
      display: 'inline',
    },
    '.hex': {
      width: '400px',
      height: '400px',

      '&.hero': {
        margin: '0 0 0 -200px',
      },

      '&.evocell': {
        top: '200px',
      },

      '&.magicshifter': {
        top: '200px',
      },
      '&.about': {
        top: '400px',
        margin: '0 0 0 -200px',
      },

      '&.hexpaper': {
        top: '666px',
        right: '120px',
      },
    },
  },
})

module.exports = theme
