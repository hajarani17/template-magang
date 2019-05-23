// import Muc from 'views/muc'
// import View from 'views/view'
// import Component from 'components/tagihan.component'
// import Mitra from 'components/mitra.component'
// import Popup from 'components/popup.component'


$(document).ready(function(){
    var list = $('#menu').val()
    console.log(list)
    $('[data-target="' + list + '"]').addClass('active')
})