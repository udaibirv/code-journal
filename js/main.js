var $url = document.querySelector('.avatarUrl');
var $image = document.querySelector('.image');
$url.addEventListener('input', handleInput);
function handleInput(e) {
  $image.src = e.target.value;
}
