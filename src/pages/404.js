const state = {
  title: '404 - not found',
}

const View = () => [
  h3('404 - page not found.'),
  p('Unfortunately, there is nothing here but nothingness.'),
  p([Link({ to: '/' }, 'Click here'), ' to get back to safety']),
]

module.exports = {
  state,
  View,
}
