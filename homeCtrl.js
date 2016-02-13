angular.module('devMtIn')
.controller('homeCtrl', function($scope, profileService){

  $scope.myProfile = profileService.checkForProfile();
  
  $scope.deleteProfile = function() {
    profileService.deleteProfile();
    $scope.myProfile = profileService.checkForProfile();
  }

  $scope.sortOptions = [
    {
    display: 'Ascending',
    value: false
    },
    {
      display: 'Descending',
      value: true
    }
  ];
  $scope.editing = true;
  profileService.serviceTest();

  $scope.saveProfile = function(profile) {
    profileService.saveProfile(profile);
    $scope.editing = false;
  }

});
