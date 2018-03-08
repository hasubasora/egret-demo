/**
 * 访问容器子对象
 */

class ChildrenObject extends egret.DisplayObjectContainer {
    public constructor() {
        super()
    }

    private onAddToStage(event: egret.Event) {
        var spr: egret.Sprite = new egret.Sprite();
        this.addChild(spr);

        var spr1: egret.Sprite = new egret.Sprite();
        spr1.graphics.beginFill(0x0ff00);
        spr1.graphics.drawRect(0, 0, 100, 100);
        spr1.graphics.endFill();
        spr1.x = 50;
        spr1.name = "Hello";
        spr.addChild(spr1);
        /**
         * 容器.getChildAt( 深度值 );
         * var _spr: egret.DisplayObject = spr.getChildAt(0);
         * 根据当前容器的显示列表查询的指定深度的显示对象，并作为返回值返回给对象，比较快，不需要大量运算。（推荐）
         * 
         * 容器.getChildByName( 显示对象 )
         * var _spr: egret.DisplayObject = spr.getChildByName("Hello");
         * 要对容器的所有子对象进行编译同时匹配相同name属性值，匹配相同返回给用户。虽然相关算法优化，还是消耗性能。
         */


        // var _spr: egret.DisplayObject = spr.getChildAt(0);
        var _spr: egret.DisplayObject = spr.getChildByName("Hello");
        _spr.scaleX = 0.5;
    }
}

