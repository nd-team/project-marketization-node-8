var app = angular.module('warnAdd', ['toastr']);
app.controller('warnAddCtrl', function($scope, warnSer,$state,toastr){
    //获取地区
    warnSer.getAare().then(function(response){
        console.log(response)
        if(response.data.code == 0){

            $scope.AllAare = response.data.data;
        }else{
            toastr.error(response.data.msg,'温馨提示');
        }
    });

    /*取消*/
    $scope.cancel = function(){
        $state.go('root.material.warn.list[12]',{id:null,name:null});
    };
    //添加
    $scope.warnAddFun = function(){
        var vm = $scope;
        warnSer.addContent(vm.warnAdd).then(function(response){
            console.log(response)
            if(response.data.code == 0){
                $state.go('root.material.warn.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});



