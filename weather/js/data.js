//和风天气的密钥
var options={
    baseUrl:"https://free-api.heweather.com/v5/",//固定网址
    token:'bf3dec13e916464a9c8a049e8ae913ae',//每个人的密钥
    city:'xian'//城市
}

function getUrl(type='weather'){
    return options.baseUrl +type+"?city="+options.city+'&key='+options.token//将网址秘钥连接
}
// console.log(getUrl())
// console.log(getUrl('suggestion'))
var store = {
    getWeather:function(cb){
        tools.get({
            url:getUrl(),
            success:function(data){
                cb(data);
            }
        })
    },
    getSuggestion:function(cb){
        tools.get({
            url:getUrl('suggestion'),
            success:function(data){
                cb(data);
            }
        })
    },
    getNow:function (cb) {
        tools.get({
            url:geturl('now'),
            success:function (data) {
                cb(data);
            }
        })
    }
};


