$(function(){
  $(".js-more").on('click', function(e){
    e.preventDefault
    console.log('stop')
    let url = this.attributes.action.value
    $.get(url, function(data){
      debugger
    })
  })
})

