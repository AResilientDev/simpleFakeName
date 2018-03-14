alert('Fake names! Get your fake names here!')

$('.go').on('click', function(){
$('li').remove()
$.ajax({
  url : 'http://uinames.com/api/',
  success: function(r){
      console.log(r.name)
      $('ul').append('<li>' +r.name+ '</li>')
  //  })
  }
})


})
