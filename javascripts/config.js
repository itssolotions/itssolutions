define([], function(){
    function config($routeProvider){
         $routeProvider
         .when('/',
             {
             templateUrl: 'partials/home.html',
             controller : 'simplecontroller'             
             })
         .when('/about-us',
               {
             templateUrl: 'partials/about us.html',
             controller: 'simplecontroller'
             
         })
         .when('/services',
               {
             templateUrl: 'partials/services.html',
             controller: 'simplecontroller'
             
         })
         .when('/contacts',
               {
             templateUrl: 'partials/contacts.html',
             controller: 'simplecontroller'            
         }).otherwise({redirectTo: '/' });
     };
    
    config.$inject=['$routeProvider'];
    
    return config;
        
});