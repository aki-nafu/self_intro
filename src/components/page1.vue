<template>
  <div class="top_page">
    <img
      src="./image/F59AD826-6FC7-4806-8EAA-48E11FDC2407.jpg"
      alt="写真"
      class="self_intro_pict"
    />
    <h1>Akimi Funakoshi</h1>
    <div class="self_intro1">
      <p class="self_introP">
        年齢：22歳
        <br />居住地：神奈川県 <br />大学：神奈川県立保健福祉大学社会福祉学科
        <br />使用言語：Python, JavaScript <br />使用フレームワーク:Django,
        Vue.js
      </p>
    </div>
    <div class="self_intro2">
      <p class="self_introP">
        神奈川県立保健福祉大学3年の船越暁海と申します。
        <br />現在は、webエンジニアに絞り就職活動中です。
        <br />大学で社会福祉について学んでいく中で、社会課題を解決する手段としてITが最も有効だと感じ、2020年2月頃から学習を始めました。
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

.self_intro1 {
  padding: 20px 0px;
  width: 100%;
  border-radius: 5px;
  background-color: #f1f1f1;
  color: #424242;
  margin: 0px;
  box-shadow: 2px 2px 24px #cecece, -2px -2px 24px #fff;
}

.self_intro2 {
  padding: 20px 0px;
  width: 100%;
  border-radius: 5px;
  background-color: #f1f1f1;
  color: #424242;
  margin: 0px;
  box-shadow: 2px 2px 24px #cecece, -2px -2px 24px #fff;
  text-align: left;
  margin-top: 3%;
}

.self_introP {
  margin: 0px 70px;
}

.self_intro_pict {
  width: 20%;
  border-radius: 50%;
}
</style>
