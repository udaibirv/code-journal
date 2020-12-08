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
console.log(jsonData);
if (jsonData !== null) {
  data = jsonData;
}

window.addEventListener('beforeunload', function (event) {
  var stringData = JSON.stringify(data);
  localStorage.setItem('profileData', stringData);

});
