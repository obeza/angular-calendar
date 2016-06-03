var app = angular.module('App', ['ui.calendar']);

app.controller('MyController', function($scope) {
    
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    var moisActuel = "";

    //console.log('start : ' + moment('2016-06-15'));

    function formatDate(aaaa,m,j){
    	m = m - 1;
    	return new Date(aaaa, m, j);

    }

	var events = [
					{
						id:123,
						title: 'All Day Event',
						start  : new Date('Wed Jun 10 2016 00:00:00 GMT-0400 (AST)'),
						allDay:false
					}
				];

	$scope.eventSources = [events];

    $scope.alertDayOnClick = function( date, jsEvent, view){
    	console.log('click ');
    	var jourMoment = moment(date.format())._d;

    	console.log( jourMoment );

    };

    $scope.alertOnEventClick = function( date, jsEvent, view){
        console.log(date);
    };

    $scope.changeView = function (view, element) {
            
            console.log( "current : " + view.title );
            console.log( "start : " + view.start._d );
            console.log( "end : " + view.end._d );

            if (moisActuel){
            	console.log('deja data');
            } else {
            	moisActuel = view.title;
            }
        };

    /* config object */
    $scope.uiConfig = {
      calendar:{
      	lang: 'fr',
        height: 500,
        editable: true,
        header:{
          left: 'month agendaWeek agendaDay',
          center: 'title',
          right: 'today prev,next'
        },
        dayClick: $scope.alertDayOnClick,
        eventClick: $scope.alertOnEventClick,
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
