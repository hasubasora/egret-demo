class CardMain extends egret.DisplayObjectContainer {
	/**
	 * 显示自定义类myCard
	 */
	public constructor() {
		super() 
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.addStart, this)
	}
	private addStart() {
		var _myCard: MyCard = new MyCard();
		//加入显示列表
		this.addChild(_myCard);
		//有多少个子元素在页面
		console.log(this.numChildren);
		// _myCard.addChild(_myCard1);
		//删除对象，但是还在内存中
		// this.removeChild(_myCard);
	}
}