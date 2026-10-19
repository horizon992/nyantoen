console.log("JS動作確認");

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       里親募集 絞り込み
    ========================== */

    const buttons = document.querySelectorAll(".cat-filter button");
    const cards = document.querySelectorAll(".adoption-card");

    buttons.forEach((button) => {

        button.addEventListener("click", () => {

            // ボタンのactive切り替え
            buttons.forEach((btn) => btn.classList.remove("active"));
            button.classList.add("active");

            const filter = button.dataset.filter;

            cards.forEach((card) => {

                if (filter === "all") {
                    card.classList.remove("hidden");
                } else if (card.classList.contains(filter)) {
                    card.classList.remove("hidden");
                } else {
                    card.classList.add("hidden");
                }

            });

        });

    });

    /* ==========================
       ハンバーガーメニュー
    ========================== */

    const hamburger = document.querySelector(".hamburger");
    const hamburgerMenu = document.querySelector(".hamburger-menu");

    if (hamburger && hamburgerMenu) {

        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            hamburgerMenu.classList.toggle("active");
        });

        /* メニューを押したら閉じる */
        document.querySelectorAll(".hamburger-menu a").forEach((link) => {
            link.addEventListener("click", () => {
                hamburger.classList.remove("active");
                hamburgerMenu.classList.remove("active");
            });
        });

    }

    /* ==========================
       ポートフォリオ用フォーム案内
    ========================== */

    const contactForm = document.querySelector(".contact-form");
    const portfolioDialog = document.querySelector("#portfolio-dialog");

    if (contactForm && portfolioDialog) {
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault();
            portfolioDialog.showModal();
        });
    }

});

