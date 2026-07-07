document.addEventListener("DOMContentLoaded", () => {
    console.log("🌸 ひだまりポスト Version2");

    const app = document.getElementById("app");

    app.innerHTML = `
        <header class="header">
            <h1>📮 ひだまりポスト</h1>
            <p>Version2 開発版</p>
        </header>

        <main class="container">

            <button class="big-button send">
                💌 キラリをおくる
            </button>

            <button class="big-button box">
                💎 みんなの宝箱
            </button>

        </main>
    `;
});
