var app = angular.module('warn', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.material.warn", {
        url : "/warn",
        views : {
            "content@root.material" : {
                templateUrl : "root/material/warn/_res/html/index.html",
                controller:"warnCtrl"
            },"menu@root.material" : {
                templateUrl : "root/material/warn/_res/html/menu.html",
                controller:"warnMenuCtrl"
            }
        }
    }).state("root.material.warn.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.material.warn":{
                templateUrl : "root/material/warn/list/_res/html/index.html",
                controller:'warnListCtrl'
            }
        }
    }).state("root.material.warn.add[12]",{
            url:"/add[12]",
            views:{
                "content@root.material.warn":{
                    templateUrl : "root/material/warn/add/_res/html/index.html",
                    controller:'warnAddCtrl'
                }
            }
        }).state("root.material.warn.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.material.warn":{
                templateUrl : "root/material/warn/edit/_res/html/index.html",
                controller:'warnEditCtrl'
            }
        }
    })
});