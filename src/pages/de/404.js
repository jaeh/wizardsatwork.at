const state = {
  title: '404 - nicht gefunden',
  lang: 'de',
}

const View = () => [
  h3('404 - Seite nicht gefundend.'),
  p('Hier ist leider nichts als Leere..'),
  p([Link({ to: '/' }, 'Klicke hier'), ' um ruhigere Gewässer zu erreichen.']),
]

module.exports = {
  state,
  View,
}
