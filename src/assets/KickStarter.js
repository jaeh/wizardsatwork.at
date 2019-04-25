const KickStarter = () =>
  div({ class: 'KickStarter' }, [
    Link({ to: 'https://www.kickstarter.com/projects/evocell/evocell/' }, [
      img({ src: '/img/kickstarter.jpg', alt: 'support us on kickstarter' }),
    ]),
  ])

KickStarter.style = {
  '.KickStarter': {
    width: '90%',
    textAlign: 'center',
    margin: '4em auto 0',
  },
}

module.exports = KickStarter
