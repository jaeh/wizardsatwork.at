module.exports = {
  state: {
    title: '404 - not found',
  },

  View: () => [
    div([
      h3('404 - page not found.'),
      p('Unfortunately, there is nothing here but nothingness.'),
      p([Link({ to: '/' }, 'Click here'), ' to get back to safety']),
    ]),
  ],
}
