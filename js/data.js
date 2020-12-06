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

window.addEventListener('beforeunload', function (event) {
  var stringData = JSON.stringify(data);
  localStorage.setItem('profileData', stringData);

});
var jsonData = JSON.parse(localStorage.getItem('profileData'));
if (jsonData !== null) {
  jsonData = data;
}
