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