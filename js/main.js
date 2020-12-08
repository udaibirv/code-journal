
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
function profileTree(data) {

  var $div = document.createElement('div');
  $div.setAttribute('class', 'container');

  var $row = document.createElement('div');
  $row.setAttribute('class', 'row');
  $div.appendChild($row);

  var $columnFull = document.createElement('div');
  $columnFull.setAttribute('class', 'column-full');
  $row.appendChild($columnFull);

  var $h1 = document.createElement('h1');
  $h1.setAttribute('class', 'header-edit');
  $h1.textContent = data.profile.fullName;
  $columnFull.appendChild($h1);

  var $img = document.createElement('img');
  $img.setAttribute('src', data.profile.avatarUrl);
  $columnFull.appendChild($img);

  var $i = document.createElement('i');
  $i.setAttribute('class', 'fas fa-book-reader');
  $i.textContent = data.profile.username;
  $columnFull.appendChild($i);

  var $iTwo = document.createElement('i');
  $iTwo.setAttribute('class', 'fas fa-anchor');
  $iTwo.textContent = data.profile.location;
  $columnFull.appendChild($iTwo);

  var $columnHalf = document.createElement('div');
  $columnHalf.setAttribute('class', 'column-third');
  $row.appendChild($columnHalf);

  var $bio = document.createElement('div');
  $bio.setAttribute('class', 'edit-bio');
  $bio.textContent = data.profile.bio;
  $columnHalf.appendChild($bio);


  return $div;

}
