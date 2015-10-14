define(['angular', 'config', 'simplecontroller', 'angularRoute'], function(ng, config, control){
    var app = ng.module('MyApp', ['ngRoute']);
    app.config(config);
    app.controller('simplecontroller', control);
});
       