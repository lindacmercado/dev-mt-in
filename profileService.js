angular
  .module('devMtIn')
  .service('profileService', function() {

  this.serviceTest = function() {
    // alert("profileService is connected!");
  }

  this.saveProfile = function(profile) {
    localStorage.setItem('profile', JSON.stringify(profile));
    alert(localStorage.profile);
  }

  this.checkForProfile = function() {
    if (localStorage.getItem('profile')) {
      return JSON.parse(localStorage.getItem('profile'));
    }
    return {
      friends: [{name: 'Ryan'}, {name: 'Bryan'}, {name: 'Sarah'}, {name: 'Zac'}, {name: 'Erin'}]
    }
  }
  this.deleteProfile = function() {
    localStorage.removeItem('profile');
    }
});
