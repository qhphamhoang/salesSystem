// create the module and name it scotchApp
    var scotchApp = angular.module('scotchApp', ['ngRoute']);

     // configure our routes
    scotchApp.config(function($routeProvider) {
        $routeProvider

            // route for the contact page
            /*.when('/', {
                templateUrl : 'pages/user/login.html',
                controller  : 'loginController'
            })*/

            // route for the dashboard page
            .when('/', {
                templateUrl : 'pages/dashboard.html',
                controller  : 'mainController'
            })

            // route for the home page
            .when('/home', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'pages/about.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactController'
            })

            // route for the QT1 page
            .when('/qt1', {
                templateUrl : 'pages/process/qt.html',
                controller  : 'QT1Controller'
            })

            // route for the QT2 page
            .when('/qt2', {
                templateUrl : 'pages/process/qt.html',
                controller  : 'QT2Controller'
            })

            // route for the QT3 page
            .when('/qt2', {
                templateUrl : 'pages/process/qt.html',
                controller  : 'QT3Controller'
            });
    });
    
    // create the controller and inject Angular's $scope
   scotchApp.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });

    scotchApp.controller('aboutController', function($scope) {
        $scope.message = 'Look! I am an about page.';
    });

     scotchApp.controller('loginController', function($scope) {
        $scope.message = 'Look! I am an about page.';
    });

    scotchApp.controller('contactController', function($scope, $location) {
        $scope.message = 'Contact us! JK. This is just a demo.' + $location.protocol() + "://" + $location.host() + ":" + $location.port();
    });

    scotchApp.controller('QT1Controller', function($scope, $location) {
        $scope.processPath = $location.protocol() + "://" + $location.host() + ":" + $location.port() + '/jbpm-console?standalone=&path=git://master@demo/vccb/src/main/resources/unit/vccb/QT1.bpmn2';
    });

    scotchApp.controller('QT2Controller', function($scope, $location) {
        $scope.processPath = $location.protocol() + "://" + $location.host() + ":" + $location.port() + '/jbpm-console?standalone=&path=git://master@demo/vccb/src/main/resources/unit/vccb/QT2.bpmn2';
    });

    scotchApp.controller('QT3Controller', function($scope, $location) {
        $scope.processPath = $location.protocol() + "://" + $location.host() + ":" + $location.port() + '/jbpm-console?standalone=&path=git://master@demo/vccb/src/main/resources/unit/vccb/QT3.bpmn2';
    });
    