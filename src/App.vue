<template>
  <div id="app" style="display: flex;">
    <div class="">
      <div
        id="header"
        class="header"
        style="display: block; position: sticky; top: 60px; left: 0; margin: 80px 40px 40px;
    padding: 40px; width: 160px; min-width: 160px; height: 480px; background-color: #f1f1f1; border-radius: 5px; box-shadow: "
      >
        <div
          class="slidebar_wrap1"
          style="width: 160px;　height: 480px;　display: flex;
        flex-direction: column;　justify-content:"
        >
          <div class="slidebar_wrap2" style="width: 160px ;height: 226px;">
            <!--リンクタグを生成します。-->
            <h1 style="font-size: 100%">
              <router-link to="/" style="; width: 158px"
                >Akimi Funakoshi</router-link
              >
            </h1>
            <router-link
              class="link_btn"
              to="/"
              style="margin: 25px 0px 15px 0px"
              >プロフィール
            </router-link>

            <router-link class="link_btn" to="/page2">スキル</router-link>

            <router-link class="link_btn" to="/page3"
              >ポートフォリオ</router-link
            >
          </div>

          <div
            class="links-module--links--1trgg"
            style="padding: 20px; width: 120px;height: 157px; background-color: #ebebeb; border-radius: 5px;
                 box-shadow: inset 2px 2px 12px #cecece, inset -2p; margin-top:50px; box-shadow: inset 2px 2px 12px #cecece, inset -2px -2px 12px #fff"
          >
            <ul style="list-style: none; padding: 0px;">
              <li class="links-module--links__li--1Rudw">
                <a
                  class="link_btn_sns"
                  target="_blank"
                  href="https://www.facebook.com/profile.php?id=100024730012792"
                  style="margin: 0px 0px 10px 0px"
                  >Facebook</a
                >
              </li>
              <li class="links-module--links__li--1Rudw">
                <a
                  class="link_btn_sns"
                  target="_blank"
                  href="https://github.com/aki-nafu"
                  style="margin: 0px 0px 10px 0px"
                  >GitHub</a
                >
              </li>
              <li class="links-module--links__li--1Rudw">
                <a
                  class="link_btn_sns"
                  target="_blank"
                  href="https://qiita.com/akimifunakoshi"
                  style="margin: 0px 0px 10px 0px"
                  >Qiita</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!--上記のリンクタグで設定したコンポーネントが表示される場所です。-->
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<!--コンポーネントの名前を定義します。-->
<script>
export default {
  name: "App",
};
</script>

<!--スタイルの指定をします-->
<style>
body {
  margin: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#header {
  height: 40px;
  background: white;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
}

#header a {
  text-decoration: none;
  color: #2c3e50;
  padding: 3px 10px;
}

.link_btn {
  display: block;
  width: auto;
  height: 36px;
  line-height: 38px;
  text-align: center;
  background: linear-gradient(165deg, #ececec, #ececec) no-repeat 50% 50%/100%
    100%;
  border: 1px solid rgba(66, 66, 66, 0.06);
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 2px 2px 12px #cecece, -2px -2px 12px #fff;
  transition: all 0.2s ease;
  margin: 15px auto;
  padding: 0px;
}

.link_btn_sns {
  display: inline-block;
  width: 98px;
  height: 28px;
  border-radius: 3px;
  font-size: 1.3rem;
  text-align: center;
  border: 1px solid #f1f1f1;
  box-shadow: 2px 2px 12px #cecece, -2px -2px 12px #fff;
  transition: box-shadow 0.2s ease-out;
}

.link_btn_sns:hover {
  background-color: #f1f1f1;
  border-color: #a7a7a7;
  color: #fff;
}

.v-enter-active {
  transition: all 1s ease 0s;
}
.v-leave-active {
  transition: all 0.3s ease 0s;
}
.v-leave-active {
  position: absolute;
}
.v-enter,
.v-leave-to {
  opacity: 0;
}
.v-enter {
  transform: translateX(-60px);
}
.v-enter-to,
.v-leave {
  transform: translateX(0);
}
.v-leave-to {
  transform: translateX(60px);
}
</style>
