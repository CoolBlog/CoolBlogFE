window.event = {
  init: function () {
    this.setIndexPageBrief();

  },
  setIndexPageBrief: function () {
    var _this = this;
    this.setIndexPageBriefImg();
    this.setIndexPageBriefContent();
    $(window).on('resize', function(){
      _this.setIndexPageBriefImg();
    })
  },
  setIndexPageBriefContent: function () {
    var arr = '我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容'
    var need_arr = arr.substring(0, 150);
    $('.article-brief-content').text(need_arr + '……')
  },
  setIndexPageBriefImg: function () {
    $('.article-brief-img').height($('.article-brief-img').width()/1.2)
  }
}

