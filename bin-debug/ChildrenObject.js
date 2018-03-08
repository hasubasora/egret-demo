/**
 * 访问容器子对象
 */
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
var ChildrenObject = (function (_super) {
    __extends(ChildrenObject, _super);
    function ChildrenObject() {
        return _super.call(this) || this;
    }
    ChildrenObject.prototype.onAddToStage = function (event) {
        var spr = new egret.Sprite();
        this.addChild(spr);
        var spr1 = new egret.Sprite();
        spr1.graphics.beginFill(0x0ff00);
        spr1.graphics.drawRect(0, 0, 100, 100);
        spr1.graphics.endFill();
        spr1.x = 50;
        spr1.name = "Hello";
        spr.addChild(spr1);
        /**
         * 容器.getChildAt( 深度值 );
         * var _spr: egret.DisplayObject = spr.getChildAt(0);
         *
         *
         *
         * 容器.getChildByName( 显示对象 )
         */
        // var _spr: egret.DisplayObject = spr.getChildAt(0);
        var _spr = spr.getChildByName("Hello");
        _spr.scaleX = 0.5;
    };
    return ChildrenObject;
}(egret.DisplayObjectContainer));
__reflect(ChildrenObject.prototype, "ChildrenObject");
//# sourceMappingURL=ChildrenObject.js.map