$(function(){
  $(".js-more").on('click', function(e){
    e.preventDefault
    let url = this.attributes.action.value
    $.get(url, function(data){
      $('.full-description').html(data)
    })
  })
})

