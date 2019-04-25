module.exports = {
  View: (state, actions) => [
    LanguageSwitch,
    div({ class: 'kickstarter' }, [
      Link({ to: 'https://www.kickstarter.com/projects/evocell/evocell/' }, [
        img({ src: '/img/kickstarter.jpg', alt: 'support us on kickstarter' }),
      ]),
    ]),

    div({ class: 'hex__container' }, [
      div({ class: 'hex hero' }, [Hex, WNWLogo]),

      div({ class: 'hex evocell' }, [
        Hex,
        div({ class: 'hex__content' }, [
          img({ src: '/img/evocell.png', alt: 'EvoCell' }),
          p([
            span('EvoCell is a single- and multi-player space adventure'),
            span({ class: 'add' }, ' in a living universe'),
            span({ class: 'add' }, ' created with a graphical game editor that is '),
            span(' based on cellular automata.'),
          ]),
          Link(
            {
              class: 'button',
              to: 'https://www.facebook.com/EvoCellEngine/',
            },
            'Apply for private beta',
          ),
        ]),
      ]),

      div({ class: 'hex magicshifter' }, [
        Hex,
        div({ class: 'hex__content' }, [
          Link({ to: 'https://magicshifter.net' }, [
            img({ src: '/img/magicshifter.png', alt: 'MagicShifter' }),
            p([
              span('The MagicShifter 3000 is an open source hardware gadget'),
              span(
                { class: 'add' },
                ' for lighting, gaming and persistence of vision applications.',
              ),
            ]),
          ]),

          Link(
            {
              class: 'button',
              to: 'https://hackerspaceshop.com/products/magicshifter3000',
            },
            'Get your MagicShifter now',
          ),
        ]),
      ]),

      div({ class: 'hex about' }, [
        Hex,
        div({ class: 'hex__content annotated' }, [
          p('we are a tribe of'),
          p('makers, programmers,'),
          p('engineers, philosophers,'),
          p('activists, hackers, artists,'),
          p('clowns, and scientists.'),

          h2([p('we are wizards and'), p(' witches at work')]),

          Link({ to: '/impressum/' }, 'impressum'),
        ]),
      ]),

      div({ class: 'hex small hexpaper' }, [
        div({ class: 'container' }, [
          Link({ class: 'hex__link', to: 'https://www.facebook.com/HexPapier/' }, [
            Hex,
            span('Hexpaper'),
          ]),
        ]),
      ]),
    ]),
  ],
}
