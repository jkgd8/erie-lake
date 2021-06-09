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

  listenerMainNavigationMenuButton () {
    const btn = document.getElementById('_mainNavigationMenuButton')
    const cls = 'active'
    btn.addEventListener('click', function () {
      if (this.classList.contains(cls)) {
        this.classList.remove(cls)
      } else {
        this.classList.add(cls)
      }
    })
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
  }

}}))
