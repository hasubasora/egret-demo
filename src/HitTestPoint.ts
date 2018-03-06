
class HitTestPoint extends egret.DisplayObjectContainer{
		public constructor() {
			super();
			this.addEventListener(egret.Event.ADDED_TO_STAGE,this.addToStage,this);
		}
		private addToStage(event:egret.Event){
			this.drawText();//初始化文字信息
			var sp:egret.Shape =new egret.Shape();
			sp.graphics.beginFill(0x7cff46);
			// sp.graphics.drawRect(0,0,100,100);
			sp.graphics.drawCircle(0,0,100);
			// sp.y=100;
			// sp.x=100;
			sp.graphics.endFill();
			this.addChild(sp);
			//碰撞检测 1
			// var isHit:boolean=sp.hitTestPoint(10,10);
			//碰撞检测 2
			var isHit:boolean=sp.hitTestPoint(70,70,true);
			this.infoText.text="碰撞检测"+isHit;
		
			/**
			 * 第一种检测，坐标点检测
			 * 碰撞成功是 ture 不对 就添加宽高。
			 * sp.hitTestPoint(10,10); 坐标在图形里面sp.graphics.drawRect(0,0,100,100);
			 * 
			 * 第二种检测，图像碰撞检测
			 * 第三个参数是判断是否与图形相结合（精准）
			 * sp.hitTestPoint(40,40,true);
			 * 
			 */
		}
		private infoText:egret.TextField;
		private drawText(){
			this.infoText=new egret.TextField();
			this.infoText.y=200;
			this.infoText.text="碰撞检测";
			this.addChild(this.infoText);
		}
	}
