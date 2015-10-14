require.config({
    baseUrl: '/javascripts',
    
    paths: {
        'angular': 'angular',
        'angularRoute': 'angular-route',
        'domReady': 'domReady'
    },
    
    shim: {
        'angularRoute': {
            deps: ['angular'],
            exports: 'angularRoute'
        },
        'angular' : {
            exports: 'angular'
        }
    }
    
});

requirejs(['domReady', 'angular', 'app'], function(domReady, angular) {
    domReady(function(){
        angular.bootstrap(document, ['MyApp']);
    });
});