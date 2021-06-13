(function() {
  /* Main Navigation */
  const navigationItems = [
    {
      text: 'Green Algae',
      title: 'Green Algae',
      href: '#green-algae'
    },
    {
      text: 'SI',
      title: 'Severity Index',
      href: '#severity-index'
    },
    {
      text: 'Rivers',
      title: 'Pollutants from rivers',
      href: '#rivers'
    },
    {
      text: 'Categories',
      title: 'Categories of pollutants',
      href: '#categories'
    },
    {
      text: 'Dead Zone',
      title: 'Dead Zone',
      href: '#dead-zone'
    },
    {
      text: 'Health Effect',
      title: 'Health Effect',
      href: '#health-effect'
    },
    {
      text: 'Ocean Friendly',
      title: 'Ocean Friendly',
      href: '#ocean-friendly'
    },
    {
      text: 'Related Topics',
      title: 'Related Topics',
      href: '#related-topics'
    },
    {
      text: 'Links',
      title: 'Links',
      href: '#links'
    }
  ]

  /* Init */
  App.listenerMainNavigationMenuButton()
  App.renderNavigation(navigationItems)
  App.renderNavigationMenu(navigationItems)
  App.renderTextBlocks()
  App.footerYear()
  App.closeMenuOnHash()
})()
