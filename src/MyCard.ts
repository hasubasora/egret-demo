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
		this.graphics.beginFill(0x3b8cff); //开始绘制，填充颜色
		this.graphics.drawCircle(0,0,50);  //圆形 （x,y,r)
		this.graphics.drawCircle(100,100,50);
		this.graphics.beginFill(0x7cff46); //开始绘制，填充颜色
		this.graphics.drawCircle(100,0,50);
		this.graphics.drawCircle(0,100,50);
		this.graphics.endFill(); //结束绘制
		this.y=100;
		// this.anchorOffsetX =150;//修改上例锚点的位置，让锚点居于正方形左上角x轴 50 像素的位置
		// this.anchorOffsetY =150;
		this.x=100;


	}
}