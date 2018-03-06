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
var AnchorText = (function (_super) {
    __extends(AnchorText, _super);
    function AnchorText() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    AnchorText.prototype.onAddToStage = function (event) {
        var shp = new egret.Shape();
        shp.graphics.beginFill(0xff000);
        shp.graphics.drawRect(0, 0, 100, 100);
        shp.graphics.endFill();
        shp.x = 100;
        shp.y = 100;
        this.addChild(shp);
        //描点（设置中心点）
        shp.anchorOffsetX = 50;
        shp.anchorOffsetY = 50;
    };
    return AnchorText;
}(egret.DisplayObjectContainer));
__reflect(AnchorText.prototype, "AnchorText");
//# sourceMappingURL=AnchorText.js.map