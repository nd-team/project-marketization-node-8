var app = angular.module('material',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.material", {
        url: "/material",
        views: {
            "content@root": {
                templateUrl: "root/material/_res/html/index.html",
                controller: "materialCtrl"
            },"nav@root": {
                templateUrl: "root/material/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
})