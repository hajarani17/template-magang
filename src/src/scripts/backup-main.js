
Vue.use(BootstrapVue);
// import DataPasar from 'components/data-pasar.page'

if (self === top) {
  let antiClickjack = document.getElementById('antiClickjack')
  antiClickjack.parentNode.removeChild(antiClickjack)
} else {
  top.location = self.location
}

let sidebarModule = {
  resolution: 0,
  open: true,
  init: function () {
    this.cacheDom()
    this.findResolution()
    this.bindEvents()
    this.render()
  },
  findResolution: function () {
    if (this.$window.width() < 520) {
      this.open = false
      this.render()
    }
  },
  cacheDom: function () {
    this.$sidebarWrapper = $('#sidebar-wrapper')
    this.$sidebarButton = $('#sidebar-button')
    this.$mainWrapper = $('#main-wrapper')
    this.$window = $(window)
  },
  bindEvents: function () {
    this.$sidebarButton.on('click', this.go.bind(this))
  },
  go: function () {
    this.open = !this.open
    this.render()
  },
  render: function () {
    if(this.open) {
      this.$sidebarWrapper.addClass('opened')
      this.$mainWrapper.addClass('opened')
    } else {
      this.$sidebarWrapper.removeClass('opened')
      this.$mainWrapper.removeClass('opened')
    }
  }

}

sidebarModule.init()

// prevent sidebar accordion
$('.ui.accordion .title').click(e => {
  e.preventDefault()
})


let notificationModule = {
  open: false,
  state: '',
  init: function() {
    this.cacheDom()
    this.bindEvents()
    this.render()
  },
  cacheDom: function() {
    this.$mailWrapper = $('#mail-wrapper')
    this.$alertWrapper = $('#alert-wrapper')
    this.$mailButton= $('#mail-button')
    this.$alertButton= $('#alert-button')
    this.$window = $(window)
  },
  bindEvents: function() {
    this.$mailButton.on('click', this.go.bind(this))
    this.$alertButton.on('click', this.go.bind(this))
    this.$window.on('click', this.close.bind(this))
  },
  go: function(e) {
    e.stopPropagation()
    let clicked = ($(e.target).hasClass('alert')) ? 'alert' : 'mail' 
    if(this.state === clicked) {
      this.open = (this.open) ? false : true
    } else {
      this.open = true
    }
    this.state = clicked
    this.render()
  },
  close: function(e) {
    this.open = false
    // $('#tooltip-dasboard').removeClass('show')
    this.render()
  },
  render: function() {
    if(this.open) {
      if(this.state === 'alert') {
        this.$alertWrapper.addClass('opened')
        this.$mailWrapper.removeClass('opened')
      } else {
        this.$mailWrapper.addClass('opened')
        this.$alertWrapper.removeClass('opened')
      }
    } else {
      this.$mailWrapper.removeClass('opened')
      this.$alertWrapper.removeClass('opened')
    }
  }

}

notificationModule.init()

$('.ui.accordion').accordion()
$('.ui.dropdown.user.panel')
  .dropdown({
    action: 'hide'
  })


$('.ui.dropdown').not('.user').dropdown({
  forceSelection: false,
  placeholder: false
})

$('#example1').calendar()
$('.checkbox').checkbox()

$('a[data-content]')
  .popup()


window.bniSmartTenant = {
  'line-lazy': {
    strokepath: [
      // start:path logo bni
      {
        'path': 'M70.1,10.9H6.8c-3.4,0-6.2,2.8-6.2,6.2v24.4c0,3.4,2.8,6.2,6.2,6.2h63.3c3.4,0,6.2-2.8,6.2-6.2V17.1    C76.3,13.7,73.5,10.9,70.1,10.9z M4.7,43.3v0.1H4.5L4.7,43.3z M54.5,44.7h1v0.5C55.2,45,54.8,44.9,54.5,44.7z',
        'duration': 200
      },
      {
        'path': 'M19.9,42.2h-7.8c-0.9,0.1-1.7-0.2-2.4-0.8C9.1,40.8,8.9,40,9,39.1V20c-0.1-0.9,0.2-1.7,0.7-2.4    c0.7-0.6,1.5-0.8,2.4-0.7h8.2c1.1,0,2.1,0.1,3.2,0.2c0.8,0.1,1.7,0.4,2.4,0.9c0.6,0.3,1.2,0.8,1.6,1.3c0.5,0.5,0.8,1.2,1.1,1.8    c0.2,0.7,0.4,1.4,0.4,2.1c0.1,2.5-1.5,4.8-3.8,5.6c3.3,1.1,5,3.1,5,6.2c0,1.4-0.4,2.7-1.1,3.8c-0.7,1.1-1.7,2-2.9,2.5    c-0.9,0.3-1.8,0.6-2.7,0.7C22.2,42.2,21.1,42.2,19.9,42.2z M14.2,20.7v6.5h4.7c1,0,2-0.1,3-0.4c0.7-0.2,1.3-0.7,1.6-1.4    c0.3-0.5,0.4-1.1,0.4-1.6c0.1-1.1-0.4-2.1-1.4-2.6c-1.3-0.5-2.8-0.7-4.2-0.6L14.2,20.7z M19.5,31h-5.3v7.4h5.5    c3.5,0,5.2-1.3,5.2-3.8c0.1-1.1-0.4-2.2-1.3-2.8C22.3,31.2,20.9,30.9,19.5,31L19.5,31z',
        'duration': 200
      },
      {
        'path': 'M41.3,19.5l9.9,15V19.3c-0.1-0.8,0.2-1.6,0.6-2.2c0.4-0.5,1.1-0.8,1.7-0.7c0.7,0,1.3,0.2,1.8,0.7    c0.5,0.6,0.7,1.4,0.6,2.2v20c0,2.2-0.9,3.3-2.8,3.3c-0.4,0-0.8-0.1-1.2-0.2c-0.4-0.1-0.7-0.4-1-0.6c-0.3-0.3-0.6-0.6-0.9-1    l-0.9-1.2l-9.7-14.8v14.9c0.1,0.8-0.2,1.6-0.7,2.2c-0.4,0.5-1.1,0.8-1.7,0.8c-0.7,0-1.3-0.2-1.8-0.8c-0.5-0.6-0.7-1.4-0.7-2.2    V20.1c0-0.7,0.1-1.4,0.3-2c0.2-0.5,0.6-1,1.1-1.3c0.5-0.3,1.1-0.5,1.7-0.5c0.8,0,1.5,0.3,2,0.8c0.3,0.3,0.5,0.6,0.8,1L41.3,19.5z',
        'duration': 200
      },
      {
        'path': 'M61.7,39.5v-20c-0.1-0.8,0.2-1.7,0.7-2.3c0.5-0.5,1.1-0.8,1.8-0.8c0.7,0,1.4,0.3,1.9,0.8    c0.5,0.7,0.8,1.5,0.7,2.4v20c0.1,0.8-0.2,1.7-0.7,2.4c-0.5,0.5-1.2,0.8-1.9,0.8c-0.7,0-1.4-0.3-1.8-0.8    C61.9,41.2,61.7,40.4,61.7,39.5z',
        'duration': 200
      },
      // end:path logo bni
      // start:path smart
      {
        'path': 'M90.9,7.9c0,0.6-0.2,1.1-0.5,1.6c-0.3,0.5-0.8,0.9-1.3,1.1C88.4,10.9,87.7,11,87,11c-0.8,0-1.7-0.2-2.4-0.6    c-0.4-0.3-0.8-0.6-1.1-1.1C83.2,9,83.1,8.6,83,8.1c0-0.5,0.4-0.9,0.9-0.9c0,0,0,0,0,0c0.2,0,0.4,0.1,0.5,0.2    c0.2,0.2,0.3,0.4,0.4,0.6c0.1,0.3,0.2,0.5,0.4,0.8c0.2,0.2,0.4,0.4,0.6,0.5c0.3,0.1,0.7,0.2,1,0.2c0.5,0,1-0.1,1.4-0.4    c0.3-0.2,0.5-0.6,0.6-1c0-0.3-0.1-0.6-0.3-0.8c-0.2-0.2-0.5-0.4-0.8-0.5c-0.3-0.1-0.7-0.2-1.3-0.3c-0.6-0.1-1.2-0.3-1.8-0.6    c-0.5-0.2-0.8-0.5-1.1-0.9c-0.3-0.4-0.4-0.9-0.4-1.4c0-0.5,0.2-1,0.4-1.4c0.3-0.5,0.8-0.8,1.3-1c0.6-0.2,1.3-0.4,2-0.3    c0.5,0,1.1,0.1,1.6,0.2c0.4,0.1,0.8,0.3,1.1,0.6c0.3,0.2,0.5,0.5,0.6,0.8c0.1,0.2,0.2,0.5,0.2,0.8c0,0.2-0.1,0.5-0.2,0.6    c-0.2,0.2-0.4,0.3-0.6,0.3c-0.2,0-0.4,0-0.5-0.2c-0.2-0.2-0.3-0.4-0.4-0.6c-0.2-0.3-0.4-0.6-0.7-0.9c-0.4-0.2-0.8-0.3-1.2-0.3    c-0.4,0-0.9,0.1-1.2,0.3c-0.3,0.2-0.5,0.5-0.5,0.8c0,0.2,0.1,0.4,0.2,0.5c0.1,0.2,0.3,0.3,0.4,0.4c0.2,0.1,0.4,0.2,0.6,0.2l1,0.3    c0.5,0.1,1,0.3,1.5,0.4c0.4,0.1,0.8,0.3,1.2,0.6c0.3,0.2,0.6,0.5,0.7,0.9C90.8,7,90.9,7.5,90.9,7.9z',
        'duration': 200
      },
      {
        'path': 'M102.9,9.4l-1.6-6.3v6.8c0,0.3-0.1,0.6-0.2,0.9c-0.4,0.4-0.9,0.4-1.3,0c0,0,0,0,0,0c-0.2-0.2-0.3-0.5-0.3-0.9    V2.1c0-0.3,0.1-0.7,0.3-0.9C100,1,100.4,1,100.7,1h0.6c0.3,0,0.5,0,0.8,0.1c0.2,0.1,0.3,0.2,0.4,0.4c0.1,0.3,0.2,0.6,0.3,0.9    l1.4,5.4l1.4-5.4c0.1-0.3,0.2-0.6,0.3-0.9c0.1-0.2,0.2-0.3,0.4-0.4c0.3-0.1,0.5-0.1,0.8-0.1h0.6c0.3,0,0.6,0.1,0.9,0.2    c0.3,0.2,0.4,0.5,0.3,0.9v7.8c0,0.3-0.1,0.6-0.2,0.9c-0.2,0.2-0.4,0.3-0.7,0.3c-0.2,0-0.5-0.1-0.6-0.3c-0.2-0.2-0.3-0.5-0.3-0.9    V3.1l-1.6,6.3c-0.1,0.4-0.2,0.7-0.2,0.9c-0.1,0.2-0.2,0.4-0.4,0.5c-0.2,0.2-0.5,0.3-0.7,0.2c-0.4,0-0.8-0.2-1-0.5    c-0.1-0.2-0.2-0.3-0.2-0.5L102.9,9.4z',
        'duration': 200
      },
      {
        'path': 'M124.3,9.7l-0.5-1.2h-4l-0.5,1.3c-0.1,0.4-0.3,0.7-0.5,1c-0.2,0.2-0.4,0.3-0.6,0.3c-0.3,0-0.5-0.1-0.7-0.3    c-0.2-0.2-0.3-0.4-0.3-0.6c0-0.1,0-0.3,0.1-0.4c0-0.1,0.1-0.3,0.2-0.6l2.5-6.4l0.3-0.7c0.1-0.2,0.2-0.4,0.3-0.6    c0.1-0.2,0.3-0.3,0.4-0.4c0.2-0.1,0.5-0.2,0.7-0.2c0.2,0,0.5,0,0.7,0.2c0.2,0.1,0.3,0.2,0.4,0.4c0.1,0.2,0.2,0.4,0.3,0.5l0.3,0.8    l2.6,6.4c0.2,0.3,0.3,0.7,0.3,1.1c0,0.2-0.1,0.5-0.3,0.6c-0.2,0.2-0.4,0.3-0.7,0.3c-0.1,0-0.3,0-0.4-0.1c-0.1-0.1-0.2-0.1-0.3-0.2    c-0.1-0.1-0.2-0.3-0.2-0.4L124.3,9.7z M120.3,7h3l-1.5-4.1L120.3,7z',
        'duration': 200
      },
      {
        'path': 'M137.5,6.6h-0.7v3.2c0,0.3-0.1,0.7-0.3,0.9c-0.2,0.2-0.4,0.3-0.7,0.3c-0.3,0-0.6-0.1-0.7-0.3    c-0.2-0.3-0.3-0.6-0.3-0.9V2.2c-0.1-0.6,0.3-1.1,0.8-1.2c0.1,0,0.3,0,0.4,0h3.3c0.4,0,0.8,0,1.1,0.1c0.3,0,0.6,0.1,0.9,0.2    c0.3,0.1,0.6,0.3,0.8,0.6c0.2,0.2,0.4,0.5,0.5,0.9c0.1,0.3,0.2,0.7,0.2,1c0,0.6-0.2,1.3-0.6,1.8c-0.5,0.5-1.2,0.8-1.9,0.9    c0.4,0.2,0.7,0.5,1,0.8c0.3,0.4,0.6,0.8,0.9,1.2c0.2,0.4,0.4,0.7,0.6,1.1c0.1,0.2,0.2,0.5,0.2,0.7c0,0.1,0,0.3-0.1,0.4    c-0.1,0.1-0.2,0.2-0.3,0.3c-0.2,0.1-0.3,0.1-0.5,0.1c-0.2,0-0.4-0.1-0.6-0.2c-0.2-0.1-0.3-0.2-0.4-0.4c-0.1-0.2-0.3-0.4-0.4-0.7    l-0.8-1.3c-0.2-0.4-0.5-0.8-0.8-1.1c-0.2-0.2-0.4-0.4-0.7-0.5C138.1,6.7,137.8,6.6,137.5,6.6z M138.6,2.5h-1.9v2.7h1.8    c0.4,0,0.8,0,1.2-0.1c0.3-0.1,0.6-0.2,0.8-0.4c0.2-0.2,0.3-0.5,0.3-0.8c0-0.3-0.1-0.5-0.2-0.7c-0.1-0.2-0.3-0.4-0.6-0.5    C139.6,2.5,139.1,2.4,138.6,2.5z',
        'duration': 200
      },
      {
        'path': 'M157.4,2.6h-2.2v7.2c0,0.3-0.1,0.7-0.3,0.9c-0.2,0.2-0.4,0.3-0.7,0.3c-0.3,0-0.5-0.1-0.7-0.3    c-0.2-0.3-0.3-0.6-0.3-0.9V2.6H151c-0.3,0-0.5-0.1-0.8-0.2C150.1,2.2,150,2,150,1.8c0-0.2,0.1-0.5,0.3-0.6    c0.2-0.2,0.5-0.2,0.8-0.2h6.4c0.3,0,0.6,0.1,0.8,0.2c0.2,0.2,0.3,0.4,0.2,0.6c0,0.2-0.1,0.4-0.3,0.6    C157.9,2.6,157.7,2.6,157.4,2.6z',
        'duration': 200
      },
      // end:path smart
      // start:path logo A in tenant
      {
        'path': 'M155.3,44.7c-1.8,0-3.3-1.5-3.3-3.3c0-0.7,0.2-1.3,0.6-1.9L176,5.2c0.6-0.9,1.6-1.4,2.7-1.4l0,0    c1.1,0,2.1,0.6,2.7,1.5l22.1,33.8c0.9,1.6,0.4,3.6-1.2,4.5c-1.5,0.9-3.4,0.5-4.4-0.9L178.7,13l-20.6,30.2    C157.5,44.1,156.4,44.7,155.3,44.7z',
        'duration': 300
      },
      // end:path logo A in tenant
      // start:path dotted
      {
        'path': 'M174.4,28.4h0.4c1.4,0,2.6,1.2,2.6,2.6v0.4c0,1.4-1.2,2.6-2.6,2.6h-0.4c-1.4,0-2.6-1.2-2.6-2.6V31    C171.8,29.6,172.9,28.4,174.4,28.4z',
        'duration': 50
      },
      {
        'path': 'M182.2,28.4h0.4c1.4,0,2.6,1.2,2.6,2.6v0.4c0,1.4-1.2,2.6-2.6,2.6h-0.4c-1.4,0-2.6-1.2-2.6-2.6V31    C179.6,29.6,180.7,28.4,182.2,28.4z',
        'duration': 50
      },
      {
        'path': 'M174.4,35.7h0.4c1.4,0,2.6,1.2,2.6,2.6v0.4c0,1.4-1.2,2.6-2.6,2.6h-0.4c-1.4,0-2.6-1.2-2.6-2.6v-0.4    C171.8,36.9,172.9,35.7,174.4,35.7z',
        'duration': 50
      },
      {
        'path': 'M182.2,35.7h0.4c1.4,0,2.6,1.2,2.6,2.6v0.4c0,1.4-1.2,2.6-2.6,2.6h-0.4c-1.4,0-2.6-1.2-2.6-2.6v-0.4    C179.6,36.9,180.7,35.7,182.2,35.7z',
        'duration': 50
      },
      // end:path dotted
      // start:path smart
      {
        'path': 'M101.7,19.9h-6.4v21c0.1,1-0.2,1.9-0.8,2.7c-0.5,0.6-1.3,0.9-2.1,0.9c-0.8,0-1.6-0.3-2.1-0.9    c-0.6-0.8-0.9-1.7-0.8-2.7v-21h-6.4c-0.8,0.1-1.6-0.2-2.2-0.7c-0.5-0.4-0.8-1.1-0.7-1.7c0-0.7,0.2-1.3,0.8-1.8    c0.6-0.5,1.4-0.7,2.2-0.6h18.6c0.8-0.1,1.6,0.2,2.3,0.7c0.5,0.4,0.8,1.1,0.7,1.8c0,0.7-0.3,1.3-0.8,1.7    C103.3,19.7,102.5,20,101.7,19.9z',
        'duration': 200
      },
      {
        'path': 'M129.2,19.6h-13.2v7.1h8.7c0.7-0.1,1.4,0.2,2,0.6c0.4,0.4,0.7,1,0.7,1.6c0,0.6-0.2,1.2-0.6,1.6    c-0.6,0.5-1.3,0.7-2,0.6h-8.7v8.2h13.6c0.7-0.1,1.5,0.2,2.1,0.6c0.5,0.4,0.7,1.1,0.7,1.7c0,0.6-0.2,1.2-0.7,1.7    c-0.6,0.5-1.3,0.7-2.1,0.6h-15.9c-1.7,0.3-3.3-0.8-3.6-2.4c-0.1-0.4-0.1-0.8,0-1.1V18.7c0-0.7,0.1-1.4,0.4-2.1    c0.2-0.5,0.7-0.9,1.2-1.2c0.6-0.3,1.3-0.4,2-0.4h15.4c0.7-0.1,1.5,0.2,2.1,0.6c0.5,0.4,0.7,1,0.7,1.6c0,0.6-0.2,1.2-0.7,1.6    C130.7,19.4,130,19.6,129.2,19.6z',
        'duration': 200
      },
      {
        'path': 'M141.1,18.1l11.2,17V17.9c-0.1-0.9,0.2-1.8,0.7-2.5c0.5-0.6,1.2-0.9,1.9-0.8c0.8,0,1.5,0.3,2,0.8    c0.5,0.7,0.8,1.6,0.7,2.5v22.7c0,2.5-1.1,3.8-3.1,3.8c-0.5,0-1-0.1-1.4-0.2c-0.4-0.2-0.8-0.4-1.2-0.7c-0.4-0.3-0.7-0.7-1-1.1    c-0.3-0.4-0.6-0.9-0.9-1.4l-11-16.8v16.9c0.1,0.9-0.2,1.8-0.8,2.5c-0.5,0.6-1.2,0.9-2,0.9c-0.8,0-1.5-0.3-2-0.9    c-0.5-0.7-0.8-1.6-0.8-2.5V18.8c0-0.8,0.1-1.5,0.3-2.2c0.3-0.6,0.7-1.1,1.3-1.5c0.6-0.4,1.2-0.6,1.9-0.6c0.9,0,1.7,0.3,2.3,0.9    c0.3,0.3,0.6,0.7,0.9,1.1L141.1,18.1z',
        'duration': 200
      },
      {
        'path': 'M206.1,18.1l11.2,17V17.9c-0.1-0.9,0.2-1.8,0.7-2.5c0.5-0.6,1.2-0.9,1.9-0.8c0.8,0,1.5,0.3,2,0.8    c0.5,0.7,0.8,1.6,0.7,2.5v22.7c0,2.5-1.1,3.8-3.1,3.8c-0.5,0-1-0.1-1.4-0.2c-0.4-0.2-0.8-0.4-1.2-0.7c-0.4-0.3-0.7-0.7-1-1.1    c-0.3-0.4-0.6-0.9-0.9-1.4l-11-16.8v16.9c0.1,0.9-0.2,1.8-0.8,2.5c-0.5,0.6-1.2,0.9-2,0.9c-0.8,0-1.5-0.3-2-0.9    c-0.5-0.7-0.8-1.6-0.8-2.5V18.8c0-0.8,0.1-1.5,0.3-2.2c0.3-0.6,0.7-1.1,1.3-1.5c0.6-0.4,1.2-0.6,1.9-0.6c0.9,0,1.7,0.3,2.3,0.9    c0.3,0.3,0.6,0.7,0.9,1.1L206.1,18.1z',
        'duration': 200
      },
      {
        'path': 'M246.7,19.9h-6.4v21c0.1,1-0.2,1.9-0.8,2.7c-0.5,0.6-1.3,0.9-2.1,0.9c-0.8,0-1.6-0.3-2.1-0.9    c-0.6-0.8-0.9-1.7-0.8-2.7v-21h-6.4c-0.8,0.1-1.6-0.2-2.2-0.7c-0.5-0.4-0.8-1.1-0.7-1.7c0-0.7,0.2-1.3,0.8-1.8    c0.6-0.5,1.4-0.7,2.2-0.6h18.6c0.8-0.1,1.6,0.2,2.2,0.7c0.5,0.4,0.8,1.1,0.7,1.8c0,0.7-0.3,1.3-0.8,1.7    C248.3,19.7,247.5,20,246.7,19.9z',
        'duration': 200
      }
      // end:path smart
    ],
    'dimensions': {
      width: 251,
      height: 49
    }
  }
}


// drawing masking background
window.maskingBackground = (active) => {
  const elementSelect = $('[masking=background]')
  if (active) {
    elementSelect.addClass('active')
  }
  else {
    elementSelect.removeClass('active')
  }
}

// drawing logo
window.drawLogo = (el, path, init) => {
  const lazy = $(el)
  let options = {}

  options.init = init
  options.svgData = path
  options.strokeWidth = 0.5
  options.strokeColor = '#00555f'
  // loop: erase, and re run paint
  options.onComplete = () => {
    $('[masking=image]').addClass('active')
    $('[masking=svg]').removeClass('acitve')
    setTimeout(function () {
      // lazy.lazylinepainter('erase')
      $('[masking=image]').removeClass('active')
      $('[masking=svg]').addClass('acitve')
      lazy.lazylinepainter('paint')
    }, 1000) 
  }
  // run lazy
  if (init) lazy.lazylinepainter(options).lazylinepainter('paint')
  else lazy.lazylinepainter('erase')
}

window.maskingBackground(true)
window.drawLogo('#line-lazy', window.bniSmartTenant, true)
$(document).ready(function () {
  // run when not in epasar
  if($('#epasar').length < 1) {
    setTimeout(() => {
      window.maskingBackground(false)
      window.drawLogo('#line-lazy', window.bniSmartTenant, false)
    }, 0)
  }
})