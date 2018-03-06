var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var HitTestPoint = (function (_super) {
    __extends(HitTestPoint, _super);
    function HitTestPoint() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.addToStage, _this);
        return _this;
    }
    HitTestPoint.prototype.addToStage = function (event) {
        this.drawText(); //初始化文字信息
        var sp = new egret.Shape();
        sp.graphics.beginFill(0x7cff46);
        // sp.graphics.drawRect(0,0,100,100);
        sp.graphics.drawCircle(0, 0, 100);
        // sp.y=100;
        // sp.x=100;
        sp.graphics.endFill();
        this.addChild(sp);
        //碰撞检测 1
        // var isHit:boolean=sp.hitTestPoint(10,10);
        //碰撞检测 2  圆形半径是100 检测的是70 坐标重合 超过100就是没碰撞
        var isHit = sp.hitTestPoint(70, 70, true);
        this.infoText.text = "碰撞检测" + isHit;
        /**
         * 第一种检测，坐标点检测
         * 碰撞成功是 ture 不对 就添加宽高。
         * sp.hitTestPoint(10,10); 坐标在图形里面sp.graphics.drawRect(0,0,100,100);
         *
         * 第二种检测，图像碰撞检测
         * 第三个参数是判断是否与图形相结合（精准）
         * sp.hitTestPoint(40,40,true);
         *
         */
    };
    HitTestPoint.prototype.drawText = function () {
        this.infoText = new egret.TextField();
        this.infoText.y = 200;
        this.infoText.text = "碰撞检测";
        this.addChild(this.infoText);
    };
    return HitTestPoint;
}(egret.DisplayObjectContainer));
__reflect(HitTestPoint.prototype, "HitTestPoint");
//# sourceMappingURL=HitTestPoint.js.map