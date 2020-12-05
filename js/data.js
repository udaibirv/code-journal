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

window.addEventListener('beforeunload', function () {
  var stringData = JSON.stringify(data);
  localStorage.setItem('data', stringData);

});
