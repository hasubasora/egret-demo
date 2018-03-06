// class MyCard extends egret.Shape{
class MyCard extends egret.Sprite{
	/**
	 * 自定义显示对象
	 * 扩展至图形类
	 */
	public constructor() {
		super();
		//调用方法
		this.drawCard();

	}
	private drawCard(){
		this.graphics.beginFill(0x3b8cff);
		this.graphics.drawCircle(0,0,50);
		this.graphics.drawCircle(100,100,50);
		this.graphics.beginFill(0x7cff46);
		this.graphics.drawCircle(100,0,50);
		this.graphics.drawCircle(0,100,50);
		this.graphics.endFill();
		this.y=100;
		this.x=100;


	}
}