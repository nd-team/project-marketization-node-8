var request = require('request-promise');
var path = require('path');
var config = require(path.resolve('plugins/read-config.js'));
var form = require(path.resolve('plugins/form.js'));
var urlEncode = require(path.resolve('plugins/urlEncode.js'));
var uploadFile = require(path.resolve('plugins/uploadFile.js'));
module.exports = function(){
    //设置导航权限
    this.settingNav = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/stockwarning/v1/setButtonPermission',
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //导航权限
    this.siginNav = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/stockwarning/v1/sonPermission',
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
     /*设置*/
    this.listSetting = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/cuspermission/v1/list?limit=10&page=${argvs.page}`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.countSetting = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/cuspermission/v1/count',
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.getpermit = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/cuspermission/v1/getOneById/${argvs.id}`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.getListpermit = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/cuspermission/v1/listOperateById/${argvs.id}`,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.editSetting = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/cuspermission/v1/edit',
            headers:{
                userToken:argvs.token
            },
            form:argvs
        };
        return request(options);
    };
    /*库存预警*/
    this.warnPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/stockwarning/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.token
            }
        };
        return request(options);
    };
    this.warnList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/stockwarning/v1/list?limit=12&page=${argvs.page}`,
            headers : {
                userToken:argvs.token
            }
        };

        return request(options);
    };
    // 添加库存预警
    this.warnAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/stockwarning/v1/add`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };

    //获取所有地区
    this.warngetAare = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/materialinstock/v1/allArea`,
            headers : {
                userToken:argvs.token
            }
        };

        return request(options);
    };
    //获取总条数
    this.getwarnTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/stockwarning/v1/count${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取ID
    this.findwarnId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/stockwarning/v1/stockwarning/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 编辑
    this.warnEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/stockwarning/v1/edit`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //删除
    this.warnDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/stockwarning/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //设置物资入库导航权限
    this.materPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/materialinstock/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //物资入库列表
    this.materList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/materialinstock/v1/list?limit=10&page=${argvs.page}`,
            headers : {
                userToken:argvs.token
            }
        };

        return request(options);
    };
    // 添加物资入库
    this.materAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/materialinstock/v1/add`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };

    //物资入库获取总条数
    this.getmaterTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/materialinstock/v1/count${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //物资入库获取ID
    this.findmaterId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/materialinstock/v1/materialinstock/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //物资入库 编辑
    this.materEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/materialinstock/v1/edit`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //物资入库删除
    this.materDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/materialinstock/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    ////获取获取申购人
    this.getPeole= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/materialinstock/v1/getRequisitioner`,
            headers:{
                userToken:argvs.userToken
            }
        };
        console.log(argvs)
        return request(options);
    };
    //获取物资入库申购日期
    this.getBuyDate = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/materialinstock/v1/getBuyDate`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };

    return this;
};