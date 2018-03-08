class ManageMent extends egret.DisplayObjectContainer {
    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.addToManageMent, this)

    }

    private addToManageMent() {
        var sprcon: egret.Sprite = new egret.Sprite(); //创建一个矢量图容器
        this.addChild(sprcon); //先添加进舞台
        sprcon.x = 10;
        for (var i: number = 0; i < 4; i++) {
            var spr: egret.Sprite = new egret.Sprite();
            spr.graphics.beginFill(0xff0000 * Math.random());
            spr.graphics.drawRect(0, 0, 100, 100);
            spr.graphics.endFill();
            spr.x = i * 20;
            sprcon.addChild(spr);

        }


        var sprNew: egret.Sprite = new egret.Sprite();
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
    }
}