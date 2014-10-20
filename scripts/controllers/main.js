MainCtrl = function($rootScope, $scope, SpAfterDark, AppSettings) {

	$rootScope.title = AppSettings.title;
	$scope.isPartnerEvent = AppSettings.isPartnerEvent;
	// get username
	$scope.userName = SpAfterDark.GetCurrentUserInfo();
	// get participants
	var setScope = function(a) {
		var participantWithCount = SpAfterDark.GetParticipants();
		a.nrOfParticipants = 0;
		var participantsNames = [];
		for(key in participantWithCount) {
			a.nrOfParticipants += participantWithCount[key];
			if(participantWithCount[key] > 1) {
				participantsNames.push(key+" med partner");
			} else {
				participantsNames.push(key);
			}
		}
		a.participants = participantsNames.sort();
		a.isRegistered = Object.keys(participantWithCount).indexOf(a.userName) >= 0;
	}
	setScope($scope)
	// function for enrollment
	$scope.participate = function(x){
		//console.log("Registrerer..");
		//$scope.openLoading('Registrerer tilmelding...');
			$scope.newEventPromise = SpAfterDark.Participate(x);
		setScope($scope)
	};
	$scope.Bondify = function(name) {
		return name.replace(/ /,' 007 ')
	}
}
