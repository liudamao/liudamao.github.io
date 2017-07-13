/**
 * Created by Administrator on 2017/3/23 0023.
 */
function Draw(cobj,setting) {
    // setting  类型 样式  画笔颜色 画笔粗细  边数
    this.cobj=cobj;
    this.style=setting.st;
    this.color=setting.co;
    this.width=setting.wi;
    this.aside=setting.s;

}
Draw.prototype={
    init:function () {
        this.cobj.strokeStyle=this.color;
        this.cobj.fillStyle=this.color;
        this.cobj.lineWidth=this.width;
        // this.cobj.aside=this.aside;
    },
    line:function (sx,sy,ox,oy) {
        this.init();
        var cobj=this.cobj;
        cobj.beginPath();
        cobj.moveTo(sx,sy);
        cobj.lineTo(ox,oy);
        cobj[this.style]();
    },
    rect:function (sx,sy,ox,oy) {
        this.init();
        var cobj=this.cobj;
        cobj.beginPath();
        cobj.rect(sx,sy,ox-sx,oy-sy);
        cobj[this.style]();
    },
    circle:function (sx,sy,ox,oy) {
        this.init();
        var cobj=this.cobj;
        //圆心不固定画法
        // cobj.beginPath();
        // cobj.arc(sx+(ox-sx)/2,sy+(oy-sy)/2,
        //     Math.abs(Math.abs(ox-sx)>Math.abs(oy-sy)?Math.abs(ox-sx):Math.abs(oy-sy))/2,0,2*Math.PI);
        // cobj[this.style]();

        //圆心固定画法
        var r=Math.sqrt(Math.pow(ox-sx,2)+Math.pow(oy-sy,2));
        cobj.beginPath();
        cobj.arc(sx,sy,r,0,2*Math.PI);
        cobj[this.style]();
    },

    // dbx:function (sx,sy,ox,oy) {
    //     this.init();
    //     var cobj=this.cobj;
    //     cobj.translate(500,250);
    //     var r=Math.sqrt(Math.pow(ox-sx,2)+Math.pow(oy-sy,2));
    //     var s=aside.value;
    //     var angle=360/(s*2)*Math.PI/180;
    //     var x=Math.cos(angle)*r;
    //     var y=Math.sin(angle)*r;
    //     cobj.beginPath();
    //     for(var i=0;i<s;i++){
    //         cobj.save();
    //         cobj.rotate(i*(360/s)*Math.PI/180);
    //         cobj.moveTo(sx,sy);
    //         cobj.lineTo(ox-sx,oy-sy);
    //         cobj.restore();
    //     }
    //     cobj[this.style]();
    // }

    pencil:function (sx,sy,ox,oy) {
        this.init();
        cobj.lineTo(ox,oy);
        cobj[this.style]();
    }
    
};