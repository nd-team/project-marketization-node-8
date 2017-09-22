var app = angular.module('materEdit', ['toastr']);
app.controller('materEditCtrl', function($scope,materSer,$stateParams,$state,toastr){
    var materEdit ={id: $stateParams.id};

    //获取ID
    materSer.findMaterId(materEdit).then(function(response){
        if(response.data.code==0){
            $scope.materEdit = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }

    });

    //获取地区
    materSer.getAare().then(function(response){
        if(response.data.code == 0){

            $scope.AllAare = response.data.data;
        }else{
            toastr.error(response.data.msg,'温馨提示');
        }
    });
    //获取申购人
    materSer.getPeople().then(function(response){
        if(response.data.code == 0){

            $scope.AllPeople = response.data.data;
        }else{
            toastr.error(response.data.msg,'温馨提示');
        }
    });
    //获取物资入库申购日期
    materSer.getTime().then(function(response){
        if(response.data.code == 0){

            $scope.AllTime = response.data.data;
        }else{
            toastr.error(response.data.msg,'温馨提示');
        }
    });


    /*取消*/
    $scope.cancel = function(){
        $state.go('root.material.mater.list[12]',{id:null,name:null});
    };
    //编辑点击提交
    $scope.materEditFun = function(){
        var vm = $scope;
        vm.materEdit.purchaseDate = angular.element('.purchaseDate').val();
        vm.materEdit.instockDate = angular.element('.instockDate').val();
        vm.materEdit.buyDate = angular.element('.buyDate').val();
        vm.materEdit.lendDate = angular.element('.lendDate').val();
        materSer.editMater(vm.materEdit).then(function(response){
            if(response.data.code == 0){
                $state.go('root.material.mater.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});