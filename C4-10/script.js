const images = document.querySelectorAll('.gallery-item');
let currentIndex = 0;

// ページ読み込み後、初回画像にactiveクラスを追加
window.addEventListener('load', () => {
  images[currentIndex].classList.add('active');
});

function changeImage() {
  // 現在のactiveクラスを削除
  images[currentIndex].classList.remove('active');

  // 次の画像へ切り替え
  currentIndex = (currentIndex + 1) % images.length;
  
  // 次の画像にactiveクラスを追加
  images[currentIndex].classList.add('active');
}

// ４秒ごとに画像を切り替える
setInterval(changeImage, 4000);