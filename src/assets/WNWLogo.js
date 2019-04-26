const WNWLogo = (state, actions) =>
  div({ id: 'hero', class: 'hex__content' }, [
    Hat,

    h1({ class: 'anim' }, 'WIZARDS @ WORK'),
    h2([
      span({ class: 'anim' }, 'magically'),
      span({ class: 'anim' }, ' shifting'),
      span({ class: 'anim' }, ' paradigms'),
    ]),
  ])

WNWLogo.style = vars => ({
  '#hero': {
    'h1, h2 span': {
      animationName: 'fade-in',
      opacity: 0,
    },

    h1: {
      animationDelay: '800ms',
      margin: '.5em 0',
    },
    h2: {
      margin: '0 0 1em',

      span: {
        animationDelay: '1.1s',

        '&:first-child': {
          animationDelay: '1s',
        },
        '&:last-child': {
          animationDelay: '1.2s',
        },
      },
    },
  },

  '#hat': {
    width: '60%',

    '.star': {
      transform: 'rotate(0deg)',
      transformOrigin: 'center',
      transformBox: 'fill-box',
    },
    '.p1, .p2, .p3, .p4, .p5, .wand': {
      animationDuration: '400ms',
      animationFillMode: 'forwards',
      animationName: 'fade-in',
      opacity: 0,
    },
    '.p1': {
      animationDelay: '100ms',
      fill: 'url(#g2)',
    },
    '.p2': {
      animationDelay: '200ms',
      fill: 'url(#g2)',
    },
    '.p3': {
      animationDelay: '300ms',
      fill: 'url(#g3)',
    },
    '.p4': {
      animationDelay: '400ms',
      fill: 'url(#g4)',
    },
    '.p5': {
      animationDelay: '500ms',
      fill: 'url(#g5)',
    },
    '.wand': {
      animationDelay: '600ms',
    },
    '.star, .wand': {
      fill: vars.white,
    },

    'stop[offset="0"]': {
      stopColor: vars.fill_1,
    },
    'stop[offset="1"]': {
      stopColor: vars.fill_2,
    },
  },

  '.animated': {
    '#hat': {
      '.star': {
        animationDelay: '0ms',
        animationDuration: '500ms',
        animationIterationCount: 1,
        animationName: 'spin',
        animationTimingFunction: 'linear',
      },
    },
  },

  '@keyframes spin': {
    '100%': {
      transform: 'rotate(360deg)',
    },
  },

  '@keyframes fade-in': {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  },

  '@keyframes fade-out': {
    from: {
      opacity: 1,
    },
    to: {
      opacity: 0,
    },
  },
})

WNWLogo.state = {
  logoAnimated: false,
}

WNWLogo.actions = {
  click: e => state => {
    if (!state.logoAnimated) {
      setTimeout(actions.endAnim, 500)
      return {
        logoAnimated: true,
      }
    }
  },
  endAnim: () => {
    return {
      logoAnimated: false,
    }
  },
}

WNWLogo.global = {
  state: {
    logoAnimated: true,
  },
  actions: {
    click: true,
    endAnim: true,
  },
}

module.exports = WNWLogo
