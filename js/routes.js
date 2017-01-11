angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.nieuweRit', {
    url: '/nieuweRit',
    views: {
      'tab1': {
        templateUrl: 'templates/nieuweRit.html',
        controller: 'nieuweRitCtrl'
      }
    }
  })

  .state('tabsController.declaratie', {
    url: '/declaratie',
    views: {
      'tab2': {
        templateUrl: 'templates/declaratie.html',
        controller: 'declaratieCtrl'
      }
    }
  })

  .state('tabsController.ritten', {
    url: '/rittenlijst',
    views: {
      'tab3': {
        templateUrl: 'templates/ritten.html',
        controller: 'rittenCtrl'
      }
    }
  })

  .state('tabsController.informatie', {
    url: '/informatie',
    views: {
      'tab4': {
        templateUrl: 'templates/informatie.html',
        controller: 'informatieCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })


$urlRouterProvider.otherwise('/page1/nieuweRit')

  

});