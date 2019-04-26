module.exports = () =>
  div({ class: 'impressum section' }, [
    LanguageSwitch,
    Link({ to: '/de/' }, Hat),

    div({ class: 'slogan' }, [
      h1({ class: 'anim' }, 'WIZARDS @ WORK'),
      h2([
        span({ class: 'anim' }, 'magically'),
        span({ class: 'anim' }, ' shifting'),
        span({ class: 'anim' }, ' paradigms'),
      ]),

      p([
        'we are a tribe of makers, ',
        'programmers, engineers, philosophers, ',
        'activists, hackers, artists, clowns, and scientists.',
      ]),

      p('we are wizards and witches at work.'),
    ]),

    div({ class: 'content' }, [
      h2('Impressum'),

      h3('Wizards at Work GmbH'),
      h4('IT-Dienstleistungen, Softwareentwicklung'),

      p('ATU: 71 16 08 06'),
      p('FN: 454377b'),
      p('FB-Gericht: Wien'),

      p('Firmensitz:'),
      p('Stolzenthalergasse 6/1A + 2A'),
      p('1080 Wien / Austria'),

      p([
        span('Email: '),
        a({ href: 'mailto:office@wizardsatwork.at' }, 'office@wizardsatwork.at'),
      ]),
      p('Member of WKÖ and WKW'),
    ]),
  ])
