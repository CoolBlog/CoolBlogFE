$('.signup').on('click', function () {
  $('.model-signup').show();
})

$('.login').on('click', function () {
  $('.model-login').show();
})

$('.model-confirm').find('input').on('click', function () {
  var username = $('.model-line').find('input').val();
  if(username = '') {
    alert('用户名不能为空')
  }
})

$('.model-close').on('click', function () {
  $('.model').hide();
})

$('.mask').on('click', function () {
  $('.model').hide();
})


