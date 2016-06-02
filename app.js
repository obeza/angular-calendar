var app = angular.module('App', ['ui.calendar']);

app.controller('MyController', function($scope) {
    
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    console.log('start : ' + new Date(y, m, 1));

    function formatDate(aaaa,m,j){
    	m = m - 1;
    	return new Date(aaaa, m, j);

    }

	var events = [
					{
						title: 'All Day Event',
						start  : new Date('Wed Jun 10 2016 00:00:00 GMT-0400 (AST)'),
						allDay:false
					}
				];

	$scope.eventSources = [events];

    $scope.alertEventOnClick = function( date, jsEvent, view){
    	console.log('click ');

    	console.log( JSON.stringify(view.name) );

    };

    $scope.changeView = function (view, element) {
            
            console.log( view.start._d );
            console.log( view.end._d );
        };

    /* config object */
    $scope.uiConfig = {
      calendar:{
      	lang: 'fr',
        height: 450,
        editable: true,
        header:{
          left: 'month agendaWeek agendaDay',
          center: 'title',
          right: 'today prev,next'
        },
        dayClick: $scope.alertEventOnClick,
        eventDrop: $scope.alertOnDrop,
        eventResize: $scope.alertOnResize,
        viewRender:$scope.changeView,
        buttonText: {
        	month:'mois',
        	week:'semaine',
        	day:'jour'
      	}
      	

      }
    };





});
