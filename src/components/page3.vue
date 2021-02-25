<template>
  <div class="port_page">
    <div class="todo_app">
      <h1>TodoApp</h1>
      <a href="http://akinafu.pythonanywhere.com/">
        <div class="port_intro">
          <img src="./image/TodoApp.png" alt="写真" class="port_intro_pict" />
          <p class="port_introP">
            基本的なcrud処理を実装したタスクマネージメントアプリです。
            <br />フレームワークはDjangoを用いて、サーバーはpythonanywhereを使っています。
          </p>
        </div>
      </a>
    </div>
    <div class="google_agr">
      <h1>Google集計App</h1>
      <a href="https://qiita.com/akimifunakoshi/items/92f03808f29ee3ce7393">
        <div class="port_intro">
          <img src="./image/google_agr.png" alt="写真" class="port_intro_pict" />
          <p class="port_introP">
            Googleフォームの集計自動化アプリです。
            <br />Googleフォームのアンケートでの結果のcsvを自動で集計、解析するアプリです。
          </p>
        </div>
      </a>
    </div>
    <div class="swe_project">
      <h1>社会福祉士国家試験対策アプリ(開発中)</h1>
      <a href="https://github.com/konosuke-tamatsu-team/swe_project">
        <div class="port_intro">
          <img src="./image/swe_project.png" alt="写真" class="port_intro_pict" />
          <p class="port_introP">
            1問1答形式で社会福祉士国家試験の過去問に取り組むことができる、試験対策アプリです。
             <br />開発途中のため、リンク先がGitHubリポジトリになっております。
            <br />バックエンドにはDjango、フロントエンドにはVue.jsを用いております。
            <br />通常のランダム出題機能に加えて間違えた問題に再度取り組むことができる機能や他のアカウントとの対戦機能を実装予定です。
          </p>
        </div>
      </a>
    </div>
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
  border-radius: 2%;
}

.port_intro_pict {
  width: 100%;
  border-radius: 2%;
}

.port_introP {
  margin: 0px;
  padding: 10px;
  text-decoration: none;
}

.google_agr {
  margin-top: 40px;
}

.swe_project{
   margin-top: 40px;
}
</style>
