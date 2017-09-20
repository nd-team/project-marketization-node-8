var app = angular.module('warnEdit', ['toastr']);
app.controller('warnEditCtrl', function($scope,warnSer,$stateParams,$state,toastr){
    var warnEdit ={id: $stateParams.id};

    //获取ID
    warnSer.findwarnId(warnEdit).then(function(response){
        if(response.data.code==0){
            $scope.warnEdit = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }

    });

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
    //编辑点击提交
    $scope.warnEditFun = function(){
        var vm = $scope;
        warnSer.editWarn(vm.warnEdit).then(function(response){
            if(response.data.code == 0){
                $state.go('root.material.warn.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});