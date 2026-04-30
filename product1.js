function changeHero(imagePath, colorName) {
    // 1. 更換大圖背景
    const hero = document.getElementById('main-hero');
    if (hero) {
        hero.style.backgroundImage = `url('${imagePath}')`;
    }

    // 2. 改動圓圈上方那行小字
    const label = document.getElementById('color-label');
    if (label) {
        label.innerText = colorName;
    }
}