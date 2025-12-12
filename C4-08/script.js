const button = document.querySelector('.btn-question');

button.addEventListener('click', () => {
  // クラスを追加してCSSでアニメーションを開始
  button.classList.add('animate');
});

button.addEventListener('mouseleave', () => {
  // カーソルが外れたらクラスを削除
  button.classList.remove('animate');
});