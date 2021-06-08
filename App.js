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

  // <!-- text-block -->
  // <div id="#green-algae" class="container">
  //
  //   <!-- Block -->
  //   <div class="text-block">
  //     <h2>Green Algae Now Cover Lake Erie</h2>
  //     <p>Such bright-colored blooms have increased in size and frequency since the 2000s, mostly because of heavy fertilizer use on nearby agricultural land. Rain causes the fertilizer to run off the land into rivers that empty into Lake.</p>
  //     <p>The lake now experiences algae blooms every summer. Similar blooms are happening in lakes around the world as a result of warming temperatures and increased fertilizer use—a result of greater agricultural needs to feed a growing global population.</p>
  //   </div>
  //
  // </div>
}}))
