
var jsonData = JSON.parse(localStorage.getItem('profileData'));
if (jsonData !== null) {
  jsonData = data;
}

var $url = document.getElementById('avatarUrl');
var $image = document.querySelector('.image');
$url.addEventListener('input', handleInput);
function handleInput(e) {
  $image.src = e.target.value;
}
var $form = document.querySelector('form');
$form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  data.profile.username = $form.elements.username.value;
  data.profile.fullName = $form.elements.fullName.value;
  data.profile.location = $form.elements.location.value;
  data.profile.avatarUrl = $form.elements.avatarUrl.value;
  data.profile.bio = $form.elements.bio.value;
  $form.reset();

}
