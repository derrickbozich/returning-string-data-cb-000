$(function(){
  $(".js-more").on('click', function(e){
    e.preventDefault
    let url = this.attributes.action.value
    debugger
    $.get(url, function(data){
      debugger
      // $(`#body-${}`).html(data)
    })
  })
})

