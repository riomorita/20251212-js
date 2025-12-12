const items = document.querySelectorAll('.gallery-item');

// 画像(.gallery-item)の枚数分ループ
for (let i =0; i < items.length; i++) {
  const keyframes = {
    opacity: [0,1],
    translate: ['0 50px', 0],
  };
  const options = {
    durection:600,
    //delay: i * 300,
    delay: Math.floor(Math.random() * 1000),
    fill:'forwards',
  };
  items[i].animate(keyframes, options);
}