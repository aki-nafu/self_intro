<template>
  <div class="port_page">
    <h1>TodoApp</h1>
    <a href="http://akinafu.pythonanywhere.com/">
      <div class="port_intro">
        <img src="./image/TodoApp.png" alt="写真" width="100%" />
        <p class="port_introP">
          基本的なcrud処理を実装したタスクマネージメントアプリです。
          <br />フレームワークはDjangoを用いて、サーバーはpythonanywhereを使っています。
        </p>
      </div></a
    >
  </div>
</template>

<script></script>

<style>
.port_page {
  position: relative;
  margin: 40px 40px 40px 0;
  padding: 30px 40px;
  width: 100%;
  height: 100%;
  max-width: 900px;
  min-height: calc(100vh - 80px);
  background-color: #eee;
  border-radius: 10px;
  text-align: center;
}

.port_intro {
  padding: 0px;
  width: 100%;
  height: 90%;
  border-radius: 5px;
  background-color: #f1f1f1;
  color: #424242;
  margin: 0px;
  box-shadow: 2px 2px 24px #cecece, -2px -2px 24px #fff;
}

.port_introP {
  margin: 0px;
  padding: 10px;
  text-decoration: none;
}
</style>
