module.exports = () =>
  div({ class: 'kickstarter' }, [
    Link({ to: 'https://www.kickstarter.com/projects/evocell/evocell/' }, [
      img({ src: '/img/kickstarter.jpg', alt: 'support us on kickstarter' }),
    ]),
  ])
