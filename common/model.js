$('.signup').on('click', function () {
  $('.model').show();
  $('.model-title').text('注册')
  $('.model-confirm').find('a').text('注册')
})

$('.login').on('click', function () {
  $('.model').show();
  $('.model-title').text('登录')
  $('.model-confirm').find('a').text('登录')
})

$('.model-close').on('click', function () {
  $('.model').hide();
})

$('.mask').on('click', function () {
  $('.model').hide();
})


