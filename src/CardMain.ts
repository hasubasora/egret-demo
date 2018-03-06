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
		var _myCard2: MyCard = new MyCard();
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
		if(_myCard2.parent){
			_myCard.parent.removeChild(_myCard2);
		}


		/**
		 * 
		 * 自己创建容器
		 */
	}
}