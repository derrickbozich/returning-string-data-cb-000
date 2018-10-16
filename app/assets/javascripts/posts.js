$(function(){
  $(".js-more").on('click', function(e){
    e.preventDefault
    console.log('stop')
    debugger
  })
})

// $(function () {
//   $(".js-more").on('click', function() {
//     // get the id from the data attribute
//     var id = $(this).data("id");
//     $.get("/posts/" + id + "/body", function(data) {
//       alert(data);
//     });
//   });
// });