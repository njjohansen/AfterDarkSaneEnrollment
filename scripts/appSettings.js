'use strict';

app.factory('AppSettings', [function(){
  // change settings here:
  
  return {
  	title: 'After Dark - Winter Wonder Land',
    webUrl : 'https://intranet.netcompany.com/personal/fbv/',
    listName : 'WinterWonderLand',
	isPartnerEvent : true
  };
  /*return {
  	title: 'After Dark Royale - Royal Edition',
    webUrl : 'https://intranet.netcompany.com/Departments/Competency%20Communities/User%20Interface%20Community/',
    listName : 'AfterDarkDarkTilmeldinger'
  }*/
}]);