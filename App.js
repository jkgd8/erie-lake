(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.App = factory());
}(this, function () { return {

  /* Navigation Items */
  renderNavigation (items = []) {
    const mainNavigation = document.getElementById('_mainNavigation')
    for (item of items) {
      const a = document.createElement('a')
      a.setAttribute('href', item.href)
      a.setAttribute('title', item.title)
      a.innerHTML = item.text
      mainNavigation.appendChild(a)
    }
  },

  /* Navigation Menu Button */
  listenerMainNavigationMenuButton () {
    const btn = document.getElementById('_mainNavigationMenuButton')
    const menu = document.getElementById('_mainNavigationMenu')
    const cls = 'active'
    btn.addEventListener('click', function () {
      if (this.classList.contains(cls)) {
        this.classList.remove(cls)
        menu.classList.remove(cls)
      } else {
        this.classList.add(cls)
        menu.classList.add(cls)
      }
    })
  },

  /* Navigation Menu */
  renderNavigationMenu (items = []) {
    const menu = document.getElementById('_mainNavigationMenu')
    const container = document.createElement('div')
    const ul = document.createElement('ul')
    for (item of items) {
      const li = document.createElement('li')
      const a = document.createElement('a')
      a.setAttribute('href', item.href)
      a.setAttribute('title', item.title)
      a.innerHTML = item.text
      li.appendChild(a)
      ul.appendChild(li)
    }
    container.appendChild(ul)

    const top = document.createElement('a')
    top.setAttribute('href', '#top')
    const logo = document.createElement('img')
    logo.setAttribute('alt', 'Erie Lake')
    logo.setAttribute('title', 'Erie Lake')
    logo.setAttribute('src', './assets/logo.png')
    logo.setAttribute('width', '100px')
    logo.setAttribute('height', '50px')
    logo.classList.add('logo')

    top.appendChild(logo)

    menu.appendChild(top)
    menu.appendChild(container)
  },

  /* Text Block */
  renderTextBlocks () {
    const items = document.getElementsByClassName('_text-block')
    for (item of items) {
      const narrow = item.getAttribute('narrow') ? ` narrow` : ''
      const header = item.getAttribute('header') ? `<h2${item.getAttribute('altColor') ? ' class="alt-color"' : ''}>${item.getAttribute('header')}</h2>` : ''
      const pars = JSON.parse(item.getAttribute('pars')).map(item => { return `<p>${item}</p>` }).join('')
      item.innerHTML = `
        <div class="text-block${narrow}">
          ${header}
          ${pars}
        </div>
      `
    }
  },

  /* # Links */
  closeMenuOnHash () {
    const cls = 'active'
    const menu = document.getElementById('_mainNavigationMenu')
    const btn = document.getElementById('_mainNavigationMenuButton')
    for (item of document.getElementsByTagName('a')) {
      if (item.getAttribute('href').charAt(0) === '#') {
        item.addEventListener('click', () => {
          menu.classList.remove(cls)
          btn.classList.remove(cls)
        })
      }
    }
  }

}}))
