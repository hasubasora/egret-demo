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
var CardMain = (function (_super) {
    __extends(CardMain, _super);
    /**
     * 显示自定义类myCard
     */
    function CardMain() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.addStart, _this);
        return _this;
    }
    CardMain.prototype.addStart = function () {
        var _myCard = new MyCard();
        var _myCard2 = new MyCard();
        //加入显示列表
        this.addChild(_myCard);
        /**
         * 深度管理
         * 1.获取有多少个子元素在页面
         * 2.坐标从0开始
         */
        console.log(this.numChildren);
        /**
         * 删除
         */
        //把A添加到B中 
        // _myCard.addChild(_myCard1);
        //删除对象，但是还在内存中 只是不参与渲染
        // this.removeChild(_myCard);
        //判断一下存在的时候再删掉
        if (_myCard2.parent) {
            _myCard.parent.removeChild(_myCard2);
        }
        /**
         *
         * 自己创建容器
         */
    };
    return CardMain;
}(egret.DisplayObjectContainer));
__reflect(CardMain.prototype, "CardMain");
//# sourceMappingURL=CardMain.js.map