const WNWLogo = (state, actions) =>
  div({ id: 'hero', class: 'hex__content' }, [
    svg(
      {
        id: 'hat',
        class: `anim${state.logoAnimated ? ' animated' : ''}`,
        x: '0px',
        y: '0px',
        viewBox: '0 0 720 800',
      },
      [
        linearGradient(
          {
            id: 'g2',
            gradientUnits: 'userSpaceOnUse',
            x1: '161',
            y1: '883',
            x2: '500',
            y2: '780',
          },
          [stop({ offset: '0' }), stop({ offset: '1' })],
        ),
        linearGradient(
          {
            id: 'g3',
            gradientUnits: 'userSpaceOnUse',
            x1: '808',
            y1: '470',
            x2: '448',
            y2: '368',
          },
          [stop({ offset: '0' }), stop({ offset: '1' })],
        ),
        linearGradient(
          {
            id: 'g4',
            gradientUnits: 'userSpaceOnUse',
            x1: '240',
            y1: '780',
            x2: '718',
            y2: '780',
          },
          [stop({ offset: '0' }), stop({ offset: '1' })],
        ),
        linearGradient(
          {
            id: 'g5',
            gradientUnits: 'userSpaceOnUse',
            x1: '376',
            y1: '772',
            x2: '570',
            y2: '605',
          },
          [stop({ offset: '0' }), stop({ offset: '1' })],
        ),
        polygon({
          class: 'p1',
          points: '586,1 586,89 720,89',
        }),
        polygon({
          class: 'p4',
          points: '480,800 240,560 0,800',
        }),
        polygon({
          class: 'p5',
          points: '240,561 480,800 718,560',
        }),
        polygon({
          class: 'p3',
          points: '240,347 240,693 586,693',
        }),
        polygon({
          class: 'p2',
          points: '586,1 240,347 586,693',
        }),
        g({ class: 'wand' }, [
          polygon({
            class: 'star',
            points:
              '501,537 453,502 455,442 407,477 351,457 369,514 333,561 392,561 426,610 453,551 443,559',
          }),
          polygon({
            class: 'stick',
            points: '594,692 585,701 443,559 453,551',
          }),
        ]),
      ],
    ),

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
      stopColor: vars.fill_3,
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
