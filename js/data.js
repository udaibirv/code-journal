/* exported data */

var data = {
  view: 'edit-profile',
  profile: {
    username: '',
    fullName: '',
    location: '',
    avatarUrl: '',
    bio: ''
  },
  entries: []

};
var jsonData = JSON.parse(localStorage.getItem('profileData'));
if (jsonData !== null) {
  jsonData = data;
}

window.addEventListener('beforeunload', function (event) {
  var stringData = JSON.stringify(data);
  localStorage.setItem('profileData', stringData);

});
