// class Mask extends DisplayObject{
class Mask extends egret.DisplayObjectContainer {
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.addToRect, this);
	}
	//private 私有函数
	private addToRect(event: egret.Event) {
		//正方形
		var sp: egret.Shape = new egret.Shape();
		sp.graphics.beginFill(0xFF0000);
		sp.graphics.drawRect(0, 0, 100, 100);
		sp.graphics.endFill();
		this.addChild(sp);
		//圆形
		var sp2: egret.Shape = new egret.Shape();
		sp2.graphics.beginFill(0x00ff00);
		sp2.graphics.drawCircle(0, 0, 20);
		sp2.graphics.endFill();
		sp2.x = 20;
		sp2.y = 20;
		this.addChild(sp2);
		//遮罩
		var rect: egret.Rectangle = new egret.Rectangle(10, 20, 50, 20);
		// new egret.Rectangle(x,y,需要显示宽度，需要显示高度)
		sp.mask = rect;
	}
}