'use strict';

app.factory('SpAfterDark', ['AppSettings', function(AppSettings) {
  // Public API here

  return {
	GetParticipants: function() {
		var html = $.ajax(
			{
				type: 'post',
				url: AppSettings['webUrl'].replace(/\/*$/, '')+'/_vti_bin/Lists.asmx',
				contentType: 'application/soap+xml; charset=utf-8',
				async: false,
				data: '<?xml version="1.0" encoding="utf-8"?>\
		<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">\
		  <soap12:Body>\
			<GetListItems xmlns="http://schemas.microsoft.com/sharepoint/soap/">\
			  <listName>'+AppSettings['listName']+'</listName>\
			  <rowLimit>0</rowLimit>\
			</GetListItems>\
		  </soap12:Body>\
		</soap12:Envelope>'
			}
		).responseXML
		var r = []
		var x = html.getElementsByTagNameNS ? html.getElementsByTagNameNS('#RowsetSchema','row') : html.getElementsByTagName('z:row');
		
		$(x).each(function(i, e) {
			r[e.getAttribute('ows_Author').replace(/^[^#]*#/,'')] = parseInt(e.getAttribute('ows_Title'));
		})
		return r;
	},
	Participate: function(x) {
		return $.ajax(
			{
				type: 'post',
				url: AppSettings['webUrl'].replace(/\/*$/, '')+'/_vti_bin/Lists.asmx',
				contentType: 'application/soap+xml; charset=utf-8',
				async: false,
				data: '<?xml version="1.0" encoding="utf-8"?>\
	<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">\
	  <soap12:Body>\
		<UpdateListItems xmlns="http://schemas.microsoft.com/sharepoint/soap/">\
		  <listName>'+AppSettings['listName']+'</listName>\
		  <updates>\
			<Batch>\
			   <Method ID="2" Cmd="New">\
				  <Field Name="ID" >New</Field>\
				  <Field Name="Title">'+x+'</Field>\
			   </Method>\
			</Batch>\
		  </updates>\
		</UpdateListItems>\
	  </soap12:Body>\
	</soap12:Envelope>'
			}
		)
	},
	GetCurrentUserInfo: function() {
		return $($($.ajax(
			{
				type: 'get',
				async: false,
				url: AppSettings['webUrl'].replace(/\/*$/, '')+'/_layouts/userdisp.aspx?Force=True&' + (new Date()).getTime()
			}
		).responseText).find('#SPFieldText')[1]).text().replace(/^[\s\r\n ]+/mg,'').replace(/[\s\r\n ]+$/mg,'')
	}
	
  };
}]);