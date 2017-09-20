var app = angular.module('mater', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.material.mater", {
        url : "/warn",
        views : {
            "content@root.material" : {
                templateUrl : "root/material/mater/_res/html/index.html",
                controller:"warnCtrl"
            },"menu@root.material" : {
                templateUrl : "root/material/mater/_res/html/menu.html",
                controller:"materMenuCtrl"
            }
        }
    }).state("root.material.mater.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.material.mater":{
                templateUrl : "root/material/mater/list/_res/html/index.html",
                controller:'materListCtrl'
            }
        }
    }).state("root.material.mater.add[12]",{
            url:"/add[12]",
            views:{
                "content@root.material.mater":{
                    templateUrl : "root/material/mater/add/_res/html/index.html",
                    controller:'materAddCtrl'
                }
            }
        }).state("root.material.mater.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.material.mater":{
                templateUrl : "root/material/mater/edit/_res/html/index.html",
                controller:'warnEditCtrl'
            }
        }
    })
});