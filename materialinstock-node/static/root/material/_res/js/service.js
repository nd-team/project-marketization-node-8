var app = angular.module('material');
app.factory('materialSer', function($http){
    return {
        navPermission : navPermission,
        setPermission : setPermission
    };
    function navPermission(){
        return $http.get('/stockwarning/sonPermission');
    }
    function setPermission(){
        return $http.get('/stockwarning/setButtonPermission');
    }
});