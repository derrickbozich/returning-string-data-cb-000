$(function(){
  $(".js-more").on('click', function(e){
    e.preventDefault
    let url = this.attributes.action.value
    $.get(url, function(data){
      debugger
      // $(`#body-${}`).html(data)
    })
  })
})

