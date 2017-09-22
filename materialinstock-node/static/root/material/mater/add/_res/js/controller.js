var app = angular.module('materAdd', ['toastr']);
app.controller('materAddCtrl', function($scope, materSer,$state,toastr){
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
    //添加
    $scope.addMaterFun = function(){
        var vm = $scope;
        vm.MaterAdd.purchaseDate = angular.element('.purchaseDate').val();
        vm.MaterAdd.instockDate = angular.element('.instockDate').val();
        vm.MaterAdd.buyDate = angular.element('.buyDate').val();
        vm.MaterAdd.lendDate = angular.element('.lendDate').val();
        materSer.addMater(vm.MaterAdd).then(function(response){
            console.log(response)
            if(response.data.code == 0){
                $state.go('root.material.mater.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});



