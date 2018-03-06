class DisplayObject extends egret.DisplayObjectContainer {
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onPlay, this);
		//抛出一个事件，当前完成舞台创建，第一个调用的方法，this一定要添加
	}
	private onPlay(event: egret.Event) {
		var sp: egret.Sprite = new egret.Sprite();
		sp.graphics.beginFill(0xff0000);
		sp.graphics.drawRect(0, 0, 200, 200);
		sp.graphics.endFill();
		//坐标
		sp.x = 100;
		sp.y = 100;
		//缩放 
		sp.scaleX = 0.5;
		sp.scaleY = 0.5;
		//透明度 0~1
		sp.alpha = 0.8;
		//旋转
		sp.rotation=45;
		//宽高
		sp.width=200;
		sp.height=200;
		//斜切
		sp.skewX=100;
		sp.skewY=100;
		//可见否
		sp.visible=true;
		this.addChild(sp);


		/**
		 * DisplayObject 显示对象基类，所有显示对象继承自盖磊 
		 *  有四个派生类
		 *  - DisplayObjectContainer
		 *   - Bitmap 位图显示操作
		 *   - Shape 矢量图绘制的显示对象
		 *   - TextField 和 TextInput 文本操作
		 *  - Sprite
		 *   - Stage
		 *   - MovieClip
		 *   - Bitmap Text
		 */
	}
}