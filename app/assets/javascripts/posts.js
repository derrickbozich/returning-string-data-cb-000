$(function(){
  $(".js-more").on('click', function(e){
    console.log('click')
    let url = this.attributes.action.value
    $.get(url, function(data){
      debugger
    })
  })
})

