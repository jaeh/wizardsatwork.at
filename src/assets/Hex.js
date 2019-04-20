const Hex = () =>
  svg(
    {
      class: 'hex__svg',
      viewBox: '0 0 725 627',
    },
    path({
      d: 'M182.31 625l-180-311 180-312h360l180 312-180 311z',
    }),
  )

Hex.style = vars => ({
  '.hex__svg': {
    position: 'absolute',
    width: '100%',
    height: '100%',
    fill: vars.white,
    stroke: vars.lessSubtleColor,
    strokeWidth: 1,
  },

  '.small .hex__svg': {
    fill: '#444444',
    stroke: '#444444',
    width: '3em',
    height: '3em',
    position: 'relative',
    float: 'left',
  },
})

module.exports = Hex
