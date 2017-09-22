var app = angular.module('materServer',[]);
app.factory('materSer',function ($http) {
    return {
        menuPermission:menuPermission,
        listMater : listMater,
        countMater:countMater,
        addMater:addMater,
        getAare:getAare,
        findMaterId:findMaterId,
        editMater:editMater,
        MaterDelete:MaterDelete,
        getPeople:getPeople,
        getTime:getTime

    };
    function menuPermission(data) {
        return $http.get('/materialinstock/guidePermission/'+data);
    }
    function listMater(data) {
        return $http.get('/materialinstock/list',{
            params:data
        })
    }
    function countMater(){
        return $http.get('/materialinstock/count')
    }
    //添加
    function addMater(data){
        return $http.post('/materialinstock/add',data)
    }
    //获取所有地区
    function getAare(){
        return $http.get('/materialinstock/allArea')
    }
    //获取申购人
    function getPeople(){
        return $http.get('/materialinstock/getRequisitioner')
    }
    //获取物资入库申购日期
    function getTime(){
        return $http.get('/materialinstock/getBuyDate')
    }
    //id查询
    function findMaterId(data){
        return $http.get('/materialinstock/materialinstock',{
            params:data
        })
    }
    //编辑
    function editMater(data){
        return $http.post('/materialinstock/edit',data)
    }
    //删除
    function MaterDelete(data){
        return $http.get('/materialinstock/delete',{
            params: data
        })
    }
});
