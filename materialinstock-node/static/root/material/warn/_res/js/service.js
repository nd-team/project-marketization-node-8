var app = angular.module('warnServer',[]);
app.factory('warnSer',function ($http) {
    return {
        menuPermission:menuPermission,
        listContent : listContent,
        countContent:countContent,
        addContent:addContent,
        getAare:getAare,
        findwarnId:findwarnId,
        editWarn:editWarn,
        WarnDelete:WarnDelete
    };
    function menuPermission(data) {
        return $http.get('/stockwarning/guidePermission/'+data);
    }
    function listContent(data) {
        return $http.get('/stockwarning/list',{
            params:data
        })
    }
    function countContent(){
        return $http.get('/stockwarning/count')
    }
    //添加
    function addContent(data){
        return $http.post('/stockwarning/add',data)
    }
    //获取所有地区
    function getAare(){
        return $http.get('/materialinstock/allArea')
    }
    //id查询
    function findwarnId(data){
        return $http.get('/stockwarning/stockwarning',{
            params:data
        })
    }
    //编辑
    function editWarn(data){
        return $http.post('/stockwarning/edit',data)
    }
    //删除
    function WarnDelete(data){
        return $http.get('/stockwarning/delete',{
            params: data
        })
    }
});
