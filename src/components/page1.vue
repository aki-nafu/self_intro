<template>
  <div class="top_page">
    <h1>Profile</h1>
    <div class="self_intro">
      <p class="self_introP">
        こんにちは。
        <br />
        神奈川県立保健福祉大学にて社会福祉を学びながら、Web開発をしている学生です。
      </p>
    </div>
    <h1>Profile</h1>
    <div class="self_intro">
      <p class="self_introP">
        Web開発ができるようにDjango。機械学習、データ分析ができるように生のpythonも身に付けております。
        大学では社会福祉を学んでおります。障害福祉分野は社会課題が山積みであり、そんな社会課題を解決するにはITを活用していく必要があると感じています。
      </p>
    </div>
  </div>
</template>

<script></script>

<style>
.top_page {
  position: relative;
  margin: 40px 40px 40px 0;
  padding: 30px 40px;
  width: 100%;
  max-width: 900px;
  min-height: calc(100vh - 80px);
  background-color: #eee;
  border-radius: 10px;
  text-align: center;
}

.self_intro {
  padding: 20px 0px;
  width: 100%;
  border-radius: 5px;
  background-color: #f1f1f1;
  color: #424242;
  margin: 0px;
  box-shadow: 2px 2px 24px #cecece, -2px -2px 24px #fff;
}

.self_introP {
  margin: 0px 70px;
}
</style>
