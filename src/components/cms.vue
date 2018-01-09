<template>
  <div class="cms">
    <nav id="b-nav">
      <div id="logo" class="font-size-one">
        CoolBlog
      </div>

      <div class="container">
        <div class="username-blog font-size-one">
          个人主页
        </div>
      </div>

      <!--登录之前-->
      <!--<div class="no-user">-->
      <!--<button class="signup">注册</button>-->
      <!--<button class="login">登录</button>-->
      <!--</div>-->

      <!--登录之后-->
      <div class="user">
        <div class="dropdown">
          <img src="../assets/imgs/avatar.jpg" alt="">
          <ul>
            <li>
              <i class="fa fa-user" aria-hidden="true"></i>
              <a href="">我的主页</a>
            </li>
            <li>
              <i class="fa fa-folder" aria-hidden="true"></i>
              <a href="">收藏文章</a>
            </li>
            <li>
              <i class="fa fa-cog" aria-hidden="true"></i>
              <a href="">设置</a>
            </li>
            <li>
              <i class="fa fa-sign-out" aria-hidden="true"></i>
              <a href="">退出</a>
            </li>
          </ul>
        </div>
        <button class="write">
          <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
          写文章
        </button>
      </div>
    </nav>
    <section id="b-section">
      <div class="container">
        <div class="article-content">
          <a href="">
            <div class="article-title">
              我是标题我是标题
            </div>
            <div class="article-brief">
              <div class="article-brief-content">
                我是内容
              </div>
              <div class="article-brief-img">
                <img src="../assets/imgs/avatar.jpg" alt="">
              </div>
            </div>
          </a>
          <div class="article-author">
            <span class="article-author-time">2017.11.11</span>
            <ul class="article-author-tag">
              <li>
                <a href="#">
                  <i class="fa fa-tag" aria-hidden="true"></i>
                  <span>JS</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-tag" aria-hidden="true"></i>
                  <span>Django</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="article-content">
          <a href="">
            <div class="article-title">
              我是标题我是标题
            </div>
            <div class="article-brief">
              <div class="article-brief-content">
                我是内容
              </div>
              <div class="article-brief-img">
                <img src="../assets/imgs/avatar.jpg" alt="">
              </div>
            </div>
          </a>
          <div class="article-author">

            <span class="article-author-time">2017.11.11</span>
            <ul class="article-author-tag">
              <li>
                <a href="#">
                  <i class="fa fa-tag" aria-hidden="true"></i>
                  <span>JS</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-tag" aria-hidden="true"></i>
                  <span>Django</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="article-content">
          <a href="">
            <div class="article-title">
              我是标题我是标题
            </div>
            <div class="article-brief">
              <div class="article-brief-content">
                我是内容
              </div>
              <div class="article-brief-img">
                <img src="../assets/imgs/avatar.jpg" alt="">
              </div>
            </div>
          </a>
          <div class="article-author">

            <span class="article-author-time">2017.11.11</span>
            <ul class="article-author-tag">
              <li>
                <a href="#">
                  <i class="fa fa-tag" aria-hidden="true"></i>
                  <span>JS</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-tag" aria-hidden="true"></i>
                  <span>Django</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="article-content">
          <a href="">
            <div class="article-title">
              我是标题我是标题
            </div>
            <div class="article-brief">
              <div class="article-brief-content">
                我是内容
              </div>
              <div class="article-brief-img">
                <img src="../assets/imgs/avatar.jpg" alt="">
              </div>
            </div>
          </a>
          <div class="article-author">

            <span class="article-author-time">2017.11.11</span>
            <ul class="article-author-tag">
              <li>
                <a href="#">
                  <i class="fa fa-tag" aria-hidden="true"></i>
                  <span>JS</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-tag" aria-hidden="true"></i>
                  <span>Django</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="article-content">
          <a href="">
            <div class="article-title">
              我是标题我是标题
            </div>
            <div class="article-brief">
              <div class="article-brief-content">
                我是内容
              </div>
              <div class="article-brief-img">
                <img src="../assets/imgs/avatar.jpg" alt="">
              </div>
            </div>
          </a>
          <div class="article-author">

            <span class="article-author-time">2017.11.11</span>
            <ul class="article-author-tag">
              <li>
                <a href="#">
                  <i class="fa fa-tag" aria-hidden="true"></i>
                  <span>JS</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-tag" aria-hidden="true"></i>
                  <span>Django</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="underline">
          <div class="line"></div>
          <div class="under">我是有底线的</div>
        </div>
      </div>
    </section>
  </div>


  </template>

  <script>
  export default {
    name: 'Cms',
    data () {
      return {

      }
    }
  }
  </script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>

  </style>
