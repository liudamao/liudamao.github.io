store.getWeather(function(data){
    console.log(data);

});
// var zhishu={
//     comf:'舒适度指数',
//     cw:'洗车指数',
//     drsg:'穿衣指数',
//     flu:'感冒指数',
//     sport:'运动指数',
//     trav:'旅游指数',
//     uv:'紫外线指数'
// }

//地址
var addName = document.querySelector(".add-name")
store.getWeather(function(data){
    var w = data['HeWeather5'][0]['basic'].city;
    addName.innerHTML=w;
});
//当前温度
var wendu = document.querySelector(".wendu")
var zhungkuang = document.querySelector(".zhungkuang")
var qing = document.querySelector(".qing")
var hw = document.querySelector(".hw")
var body = document.querySelector("body")
var bigTian = document.querySelector(".big-tian")


store.getWeather(function(data){
    var w = data['HeWeather5'][0]['now'].tmp+'°';
    wendu.innerHTML=w;
    // var z = data['HeWeather5'][0]['now']['cond'].code;
    // zhungkuang.innerHTML=z;
    var q = data['HeWeather5'][0]['now']['cond'].txt;
    qing.innerHTML=q;
    var h = data['HeWeather5'][0]['daily_forecast'][0]['tmp'].min+"°"+"~"+data['HeWeather5'][0]['daily_forecast'][0]['tmp'].max+"°";
    hw.innerHTML=h;

    if(qing.innerHTML=='多云'){
        zhungkuang.innerHTML='&#xe61a;'
        bigTian.innerHTML='&#xe61a;'
        body.style.background='url("images/duoyun.jpg") no-repeat center fixed'
    }else if(qing.innerHTML=='晴'){
        zhungkuang.innerHTML='&#xe6fa;'
        bigTian.innerHTML='&#xe6fa;'
        body.style.background='url("images/bg.jpg") no-repeat center fixed'
    }else if(qing.innerHTML=='晴间多云'){
        zhungkuang.innerHTML='&#xe67a;'
        bigTian.innerHTML='&#xe67a;'
        body.style.background='url("images/duoyun.jpg") no-repeat center fixed'
    }else if(qing.innerHTML=='阴'){
        zhungkuang.innerHTML='&#xe604;'
        bigTian.innerHTML='&#xe604;'
        body.style.background='url("images/duoyun.jpg") no-repeat center fixed'
    }else if(qing.innerHTML=='小雨'){
        zhungkuang.innerHTML='&#xe617;'
        bigTian.innerHTML='&#xe617;'
        body.style.background='url("images/y.jpg") no-repeat center fixed'
    }else if(qing.innerHTML=='阵雨'){
        zhungkuang.innerHTML='&#xe6fb;'
        bigTian.innerHTML='&#xe6fb;'
        body.style.background='url("images/y.jpg") no-repeat center fixed'
    }else if(qing.innerHTML=='强阵雨'){
        zhungkuang.innerHTML='&#xe61e;'
        bigTian.innerHTML='&#xe61e;'
        body.style.background='url("images/y.jpg") no-repeat center fixed'
    }


});

var xing=['日','一','二','三','四','五','六'];
var xingqi=document.querySelector('.xingqi');
var content2=document.querySelector('.content2')
var tianqi = document.querySelector(".tianqi")
store.getWeather(function(data){
    var day=data['HeWeather5'][0]['daily_forecast'][0].date;
    // console.log(day)
    var x = '星期'+xing[new Date(day).getDay()]
    // console.log(new Date(day).getDay())
    xingqi.innerHTML=x

    //每个时刻
    var hr=data['HeWeather5'][0]['hourly_forecast']
    // console.log(hr)
    var meishike="";
    var ww='';
    for(var i=0;i<hr.length;i++){
        // console.log(hr[i]['cond'].txt)
        if(hr[i]['cond'].txt=='小雨'){
            ww='&#xe617;'
        }else if(hr[i]['cond'].txt=='阵雨'){
            ww='&#xe6fb;'
        }else if(hr[i]['cond'].txt=='强阵雨'){
            ww='&#xe61e;'
        }else if(hr[i]['cond'].txt=='晴'){
            ww='&#xe6fa;'
        }else if(hr[i]['cond'].txt=='多云'){
            ww='&#xe61a;'
        }else if(hr[i]['cond'].txt=='晴间多云'){
            ww='&#xe67a;'
        }else if(hr[i]['cond'].txt=='阴'){
            ww='&#xe604;'
        }
        // console.log(hr[i]);
        var hrrr=hr[i].date;
        // console.log(hr[i].date)
        var hrr=hrrr.substr(11,5);
        // console.log(hrrr.substr(11,5))
        meishike+=`<div class="content-shike">
            <div class="shike">${hrr}</div>
            <div class="iconfont tianqi">${ww}</div>
            <div class="shike">${hr[i]['tmp']}°</div>
        </div>`
    }
    content2.innerHTML=meishike;

    //每个星期
    var content3=document.querySelector('.content3')
    var left=document.querySelector('.left')
    var rect=data['HeWeather5'][0]['daily_forecast']
    // console.log(data['HeWeather5'][0]['daily_forecast'])
    var rectt='';
    var zhou='';
    for(var i=0;i<rect.length;i++){
        var weeek=rect[i]['date'];
        // console.log(rect[i]['date'])
        // console.log(new Date(weeek).getDay());
        // console.log(rect[i]['cond'].txt_d)
        if(rect[i]['cond'].txt_d=='雷阵雨'){
            zhou='&#xe61e;'
        }else if(rect[i]['cond'].txt_d=='小雨'){
            zhou='&#xe617;'
        }else if(rect[i]['cond'].txt_d=='阵雨'){
            zhou='&#xe6fb;'
        }else if(rect[i]['cond'].txt_d=='晴'){
            zhou='&#xe6fa;'
        }else if(rect[i]['cond'].txt_d=='阴'){
            zhou='&#xe604;'
        }else if(rect[i]['cond'].txt_d=='多云'){
            zhou='&#xe61a;'
        }else if(rect[i]['cond'].txt_d=='晴间多云'){
            zhou='&#xe67a;'
        }
        rectt+=`<div class="xingqiji">
            <div>星期${xing[new Date(weeek).getDay()]}</div>
            <div class="xqj">
                <div class="iconfont left">${zhou}</div>
                <div class="right">${rect[i]['tmp']['min']}°</div>
                <div>${rect[i]['tmp']['max']}°</div>
            </div>
            <div> ${rect[i]['cond']['txt_d']}</div>
        </div>`
    }
    content3.innerHTML=rectt;

//    详细信息
    var xiagxi={
        wea:'今日预报',
        tw:'体感温度',
        wd:'空气湿度',
        wf:'风向风力'
    }
    var xinaxiRight=document.querySelector('.xinaxiRight')
    var xiangxi=data['HeWeather5'][0]['now'];
    var xiangxixi=`<div class="xiangxi">
            <div class="xiangxi-left">今日预报</div>
            <div class="xiangxi-right">${xiangxi['cond']['txt']}</div>
        </div>
        <div class="xiangxi">
            <div class="xiangxi-left">体感温度</div>
            <div class="xiangxi-right">${xiangxi['fl']}°</div>
        </div>
        <div class="xiangxi">
            <div class="xiangxi-left">空气湿度</div>
            <div class="xiangxi-right">${xiangxi['hum']}%</div>
        </div>
        <div class="xiangxi" style="border-bottom: none">
            <div class="xiangxi-left">风向风力</div>
            <div class="xiangxi-right">${xiangxi['wind']['dir']}${xiangxi['wind']['sc']}级</div>
        </div>`
    xinaxiRight.innerHTML=xiangxixi;

//  空气质量
    var liang=document.querySelector('.liang');
    var jq=document.querySelector('.jq');
    liang.innerHTML=data['HeWeather5'][0]['daily_forecast'][0].hum;
    var ll=data['HeWeather5'][0]['daily_forecast'][0].hum;
    if(0<ll&&ll<50){
        jq.innerHTML='优';
    }else if(50<ll&&ll<100){
        jq.innerHTML='良';
    }else if(100<ll&&ll<150){
        jq.innerHTML='轻度';
    }else if(150<ll&&ll<200){
        jq.innerHTML='中';
    }else if(200<ll&&ll<300){
        jq.innerHTML='重度';
    }else if(300<ll&&ll<500){
        jq.innerHTML='严重';
    }

    var sanjiaoz=document.querySelector('.sanjiaoz');
    var sanjiao=document.querySelector('.sanjiao');
    var yu=ll/500;
    // console.log(yu);
    // console.log(sanjiaoz.offsetWidth);
    // console.log(yu*sanjiaoz.offsetWidth)
    sanjiao.style.left=yu*sanjiaoz.offsetWidth+'px';
    
//    pm2,5
    var contentZhishu=document.querySelector('.content-zhishu')
    var zhishuu=data['HeWeather5'][1]['aqi']['city'];
    var zhishushu=`<div class="zhishu">
            <div class="airchengfen">PM2.5</div>
            <div class="air-zhishu">${zhishuu.pm25}</div>
            <div class="airmingzi">入肺颗粒物</div>
        </div>
        <div class="zhishu">
            <div class="airchengfen">PM10</div>
            <div class="air-zhishu">${zhishuu.pm10}</div>
            <div class="airmingzi">可吸入颗粒</div>
        </div>
        <div class="zhishu">
            <div class="airchengfen">SO2</div>
            <div class="air-zhishu">${zhishuu.so2}</div>
            <div class="airmingzi">二氧化硫</div>
        </div>
        <div class="zhishu">
            <div class="airchengfen">NO2</div>
            <div class="air-zhishu">${zhishuu.no2}</div>
            <div class="airmingzi">二氧化氮</div>
        </div>
        <div class="zhishu">
            <div class="airchengfen">O3</div>
            <div class="air-zhishu">${zhishuu.o3}</div>
            <div class="airmingzi">臭氧</div>
        </div>
        <div class="zhishu">
            <div class="airchengfen">CO</div>
            <div class="air-zhishu">${zhishuu['co']}</div>
            <div class="airmingzi"> 一氧化碳</div>
        </div>`
    contentZhishu.innerHTML=zhishushu;
    
//    生活指数
    var lifeItem=document.querySelector('.life-item')
    var suggest=data['HeWeather5'][0]['suggestion'];

    var suggestd=` <div class="life-list">
        <div class="iconfont list-left">&#xe652;</div>
        <div class="list-right">
            <div class="right-wz">${suggest['drsg']['brf']}</div>
            <div class="right-zhishu">[穿衣指数]</div>
            <div class="right-wz2">${suggest['drsg']['txt']}</div>
        </div>
    </div>
    <div class="life-list">
        <div class="iconfont list-left">&#xe61b;</div>
        <div class="list-right">
            <div class="right-wz">${suggest['flu']['brf']}</div>
            <div class="right-zhishu">[感冒指数]</div>
            <div class="right-wz2">${suggest['flu']['txt']}</div>
        </div>
    </div>
    <div class="life-list">
        <div class="iconfont list-left">&#xe602;</div>
        <div class="list-right">
            <div class="right-wz">${suggest['uv']['brf']}</div>
            <div class="right-zhishu">[紫外线]</div>
            <div class="right-wz2">${suggest['uv']['txt']}</div>
        </div>
    </div>
    <div class="life-list">
        <div class="iconfont list-left">&#xe606;</div>
        <div class="list-right">
            <div class="right-wz">${suggest['sport']['brf']}</div>
            <div class="right-zhishu">[运动指数]</div>
            <div class="right-wz2">${suggest['sport']['txt']}</div>
        </div>
    </div>
    <div class="life-list">
        <div class="iconfont list-left">&#xe601;</div>
        <div class="list-right">
            <div class="right-wz">${suggest['cw']['brf']}</div>
            <div class="right-zhishu">[洗车指数]</div>
            <div class="right-wz2">${suggest['cw']['txt']}</div>
        </div>
    </div>
    <div class="footer">
        <div class="footer-left">中央气象台</div>
        <div class="footer-right">18:15发布</div>
    </div>`
    lifeItem.innerHTML=suggestd;

//    底部
    var footerRight=document.querySelector('.footer-right');
    var tt=data['HeWeather5'][0]['basic']['update'].loc;
    footerRight.innerHTML=tt.slice(11,16)+'发布'


})























// var list = document.querySelector('.list')
// store.getSuggestion(function(data){
//     var s = data['HeWeather5'][0]['suggestion'];
//     var str = ""
//     for(var i in s){
//         console.log(s[i])
//         // console.log(zhishu[i]);
//
//         str+=`<li>
// 		<span>${zhishu[i]}</span>
// 		<span>${s[i]['brf']}</span>
// 		<span>${s[i]['txt']}</span>
// 		</li>`
//     }
//     list.innerHTML = str;
// })



    
