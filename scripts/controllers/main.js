MainCtrl = function($rootScope, $scope, SpAfterDark, AppSettings) {

	$rootScope.title = AppSettings.title;
	// get username
	$scope.userName = SpAfterDark.GetCurrentUserInfo();
	// get participants
	var setScope = function(a) {
		a.participants = SpAfterDark.GetParticipants()
		a.isRegistered = a.participants.indexOf(a.userName) >= 0
	}
	setScope($scope)
	// function for enrollment
	$scope.participate = function(listName){
		//console.log("Registrerer..");
		//$scope.openLoading('Registrerer tilmelding...');
			$scope.newEventPromise = SpAfterDark.Participate();
		setScope($scope)
	};
	$scope.Bondify = function(name) {
		return name.replace(/ /,' 007 ')
	}
}
