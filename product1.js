//頂部按鈕功能
// 1. 監聽網頁捲動事件
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    const btn = document.getElementById("backToTop");
    // 當頁面捲動超過 300px 時顯示按鈕，否則隱藏
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}

// 2. 點擊按鈕後回到頂部的功能
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // 關鍵：平滑滾動效果
    });
}



// 讓 iframe 載入後自動調整高度（避免內容被切掉）
window.onload = function() {
    const frame = document.getElementById('footer-frame');
    // 這裡設定一個預估的高度，或者用 JS 動態抓取
    // 根據你的圖片內容（6間店），高度建議設定在 500px - 600px 之間
    frame.style.height = '750px'; 
};


//換大圖跟文字
function changeHero(imgUrl, colorName) {
    // 抓取大圖並更換背景
    const hero = document.getElementById('main-hero');
    if (hero) {
        hero.style.backgroundImage = "url('" + imgUrl + "')";
    }

    // 抓取文字標籤並更換文字
    const label = document.getElementById('color-label');
    if (label) {
        label.innerText = colorName;
    }
}

//展品出清
function openModal(src) {
    // 顯示燈箱並帶入圖片路徑
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("fullImage");

    modal.style.display = "flex";
    modalImg.src = src;

    // 禁止底層頁面滾動（選配，體驗更好）
    document.body.style.overflow = "hidden";
}

function closeModal() {
    // 隱藏燈箱
    document.getElementById("imageModal").style.display = "none";

    // 恢復底層頁面滾動
    document.body.style.overflow = "auto";
}

// 按下鍵盤 Esc 鍵也能關閉
document.addEventListener('keydown', function (e) {
    if (e.key === "Escape") closeModal();
});

//about us 進場動畫
const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.2 }); // 看到 20% 的區塊就觸發

    // 監控所有 feature-item
    document.querySelectorAll('.feature-item').forEach(item => {
        observer.observe(item);
    });