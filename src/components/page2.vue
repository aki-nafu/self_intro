<template>
  <div class="skill_page">
    <div class="python_intro">
      <h1>Python</h1>
      <div class="skill_intro">
        <p class="skill_introP">
          学習を始めたきっかけになった言語です。
          <br />PyQやUdemyなどのWeb学習サービスを利用し、身に付けました。機械学習やデータ分析を行えるように生のコード記述に慣れるよう意識しました。
        </p>
      </div>
    </div>
    <div class="Django_intro">
      <h1>Django</h1>
      <div class="skill_intro">
        <p class="skill_introP">
          アプリの自己開発を独力で行えるレベルまで習得しています。
          <br />ポートフォリオとしてタスクマネージメントアプリをインターネット上に公開しています。
        </p>
      </div>
    </div>
    <div class="Vue_intro">
      <h1>Vue.js</h1>
      <div class="skill_intro">
        <p class="skill_introP">
          このポートフォリオサイト制作に使用しました。
          <br />初めて触れる言語でしたが、Web制作をしていく上で必要な技術はおさえています。ホスティングにはGitHubPagesを使用しています。
        </p>
      </div>
    </div>
  </div>
</template>

<script></script>

<style>
.skill_page {
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

.skill_intro {
  padding: 20px 0px;
  width: 100%;
  border-radius: 5px;
  background-color: #f1f1f1;
  color: #424242;
  margin: 0px;
  box-shadow: 2px 2px 24px #cecece, -2px -2px 24px #fff;
  text-align: left;
}

.skill_introP {
  margin: 0px 70px;
}
</style>
