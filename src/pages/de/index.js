const state = {
  lang: 'de',
}

const View = (state, actions) => [
  LanguageSwitch,
  KickStarter,

  div({ class: 'hex__container' }, [
    div({ class: 'hex hero' }, [Hex, WNWLogo]),

    div({ class: 'hex evocell' }, [
      Hex,
      div({ class: 'hex__content' }, [
        img({ src: '/img/evocell.png', alt: 'EvoCell' }),
        p([
          span('EvoCell ist ein Einzel- und Mehrspieler Abenteuer in einem'),
          span({ class: 'add' }, [
            ' auf zellulären Automaten basierenden',
            ' und mit einem graphischen Spieleeditor erschaffenen',
          ]),
          span(' lebenden Universum'),
        ]),
        Link(
          {
            class: 'button',
            to: 'https://www.facebook.com/EvoCellEngine/',
          },
          'Jetzt anmelden',
        ),
      ]),
    ]),

    div({ class: 'hex magicshifter' }, [
      Hex,
      div({ class: 'hex__content' }, [
        Link({ to: 'https://magicshifter.net' }, [
          img({ src: '/img/magicshifter.png', alt: 'MagicShifter' }),
          p([
            span('Der MagicShifter 3000 ist eine open source hardware,'),
            span({ class: 'add' }, ' für Licht-, Spiel- und Illusions-Magie.'),
          ]),
        ]),

        Link(
          {
            class: 'button',
            to: 'https://hackerspaceshop.com/products/magicshifter3000',
          },
          'Hol deinen MagicShifter',
        ),
      ]),
    ]),

    div({ class: 'hex about' }, [
      Hex,
      div({ class: 'hex__content annotated' }, [
        p('wir sind ein stamm von '),
        p('erfindern, programmierern'),
        p('ingeneuren, philosophen'),
        p('aktivisten, hackern, künstlern'),
        p('clowns und wissenschafltern,'),

        h2([p('wir sind hexen und'), p('zauberer bei der arbeit.')]),

        Link({ to: '/de/impressum/' }, 'impressum'),
      ]),
    ]),

    div({ class: 'hex small hexpaper' }, [
      div({ class: 'container' }, [
        Link({ class: 'hex__link', to: 'https://www.facebook.com/HexPapier/' }, [
          Hex,
          span('Hexpapier'),
        ]),
      ]),
    ]),
  ]),
]

module.exports = {
  state,
  View,
}
