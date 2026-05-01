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