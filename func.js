function renderNavigation (items = []) {
  const mainNavigation = document.getElementById('_mainNavigation')
  for (item of items) {
    const a = document.createElement('a')
    a.setAttribute('href', item.href)
    a.setAttribute('title', item.title)
    a.innerHTML = item.text
    mainNavigation.appendChild(a)
  }
}
