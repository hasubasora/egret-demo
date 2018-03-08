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
var ManageMent = (function (_super) {
    __extends(ManageMent, _super);
    function ManageMent() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.addToManageMent, _this);
        return _this;
    }
    ManageMent.prototype.addToManageMent = function () {
        var sprcon = new egret.Sprite(); //创建一个矢量图容器
        this.addChild(sprcon); //先添加进舞台
        sprcon.x = 10;
        for (var i = 0; i < 4; i++) {
            var spr = new egret.Sprite();
            spr.graphics.beginFill(0xff0000 * Math.random());
            spr.graphics.drawRect(0, 0, 100, 100);
            spr.graphics.endFill();
            spr.x = i * 20;
            sprcon.addChild(spr);
        }
        var sprNew = new egret.Sprite();
        sprNew.graphics.beginFill(0xff0000 * Math.random());
        sprNew.graphics.drawRect(0, 0, 150, 150);
        sprNew.graphics.endFill();
        sprNew.x = 10;
        sprNew.y = 10;
        sprcon.addChild(sprNew);
        sprcon.addChildAt(sprNew, 3); //插入容器层级
        /**
         * 容器.swapChildren(显示对象，显示对象)
         * 容器.swapChildrenAt(深度值，深度值)
         * 容器.setChildIndex(显示对象，新的深度值)
         */
        /**
         * 访问容器子对象
         */
    };
    return ManageMent;
}(egret.DisplayObjectContainer));
__reflect(ManageMent.prototype, "ManageMent");
//# sourceMappingURL=ManageMent.js.map