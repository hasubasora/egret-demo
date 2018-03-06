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
// class Mask extends DisplayObject{
var Mask = (function (_super) {
    __extends(Mask, _super);
    function Mask() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.addToRect, _this);
        return _this;
    }
    //private 私有函数
    Mask.prototype.addToRect = function (event) {
        //正方形
        var sp = new egret.Shape();
        sp.graphics.beginFill(0xFF0000);
        sp.graphics.drawRect(0, 0, 100, 100);
        sp.graphics.endFill();
        this.addChild(sp);
        //圆形
        var sp2 = new egret.Shape();
        sp2.graphics.beginFill(0x00ff00);
        sp2.graphics.drawCircle(0, 0, 20);
        sp2.graphics.endFill();
        sp2.x = 20;
        sp2.y = 20;
        this.addChild(sp2);
        //遮罩
        var rect = new egret.Rectangle(10, 20, 50, 20);
        // new egret.Rectangle(x,y,需要显示宽度，需要显示高度)
        sp.mask = rect;
    };
    return Mask;
}(egret.DisplayObjectContainer));
__reflect(Mask.prototype, "Mask");
//# sourceMappingURL=Mask.js.map