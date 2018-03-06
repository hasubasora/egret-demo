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
// class MyCard extends egret.Shape{
var MyCard = (function (_super) {
    __extends(MyCard, _super);
    /**
     * 自定义显示对象
     * 扩展至图形类
     */
    function MyCard() {
        var _this = _super.call(this) || this;
        //调用方法
        _this.drawCard();
        return _this;
    }
    MyCard.prototype.drawCard = function () {
        this.graphics.beginFill(0x3b8cff); //开始绘制，填充颜色
        this.graphics.drawCircle(0, 0, 50); //圆形 （x,y,r)
        this.graphics.drawCircle(100, 100, 50);
        this.graphics.beginFill(0x7cff46); //开始绘制，填充颜色
        this.graphics.drawCircle(100, 0, 50);
        this.graphics.drawCircle(0, 100, 50);
        this.graphics.endFill(); //结束绘制
        this.y = 100;
        // this.anchorOffsetX =150;//修改上例锚点的位置，让锚点居于正方形左上角x轴 50 像素的位置
        // this.anchorOffsetY =150;
        this.x = 100;
    };
    return MyCard;
}(egret.Sprite));
__reflect(MyCard.prototype, "MyCard");
//# sourceMappingURL=MyCard.js.map