var $url = document.querySelector('.avatarUrl');
var $image = document.querySelector('.image');
$url.addEventListener('input', handleInput);
function handleInput(e) {
  $image.src = e.target.value;
}
var $form = document.querySelector('form');
$form.addEventListener('submit', handleSubmit);
function handleSubmit() {
  data.username = $form.elements.username.value;
  data.fullName = $form.elements.fullName.value;
  data.location = $form.elements.location.value;
  data.avatarUrl = $form.elements.avatarUrl.value;
  data.bio = $form.elements.bio.value;
  $form.reset();
  localStorage.setItem('username', data.username);
  localStorage.setItem('fullName', data.fullName);
  localStorage.setItem('location', data.location);
  localStorage.setItem('avatarUrl', data.avatarUrl);
  localStorage.setItem('bio', data.bio);
}
