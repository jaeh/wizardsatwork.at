const state = {
  lang: 'de',
}

const View = () =>
  div({ class: 'impressum section' }, [
    LanguageSwitch,
    div({ class: 'block' }, h2([Link({ to: '/de/' }, WNWLogo)])),
    p([
      'wir sind ein stamm von erfindern, programmierern, philosophen,',
      ' aktivisten, hackern, künstlern, clowns und wissenschaftlern.',
    ]),
    p('wir sind zauberer und hexen bei der arbeit, unsere magie transformiert paradigmen.'),

    div({ class: 'block' }, [
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
      p('Mitglied der WKÖ, WKW'),
    ]),
  ])

module.exports = {
  state,
  View,
}
