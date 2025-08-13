let count_nnnnn_A = 880008008;

//-------------------------------------2023ご当地


async function nnnnn(msg,namess,usernamessssss,itemcounts,itemCODEs,original_name) {
	
	var msggps = msg;
	
	//位置の借り分け
	if (itemCODEs == 999999 ){
		var tytyty = 7308 + Math.round( Math.random()*5);
		//itemCODEs =parseInt(tytyty);
		//itemCODEs =parseInt(3733);　//ゾウ通常＝3489　ブタ20倍＝3733
	}
	
	
	//膨大個数処理用　〒〒〒（3個以上）が含まれていれば 1ループで留める
	var items_counts_ttt = 1;

	items_counts_ttt = itemcounts;
	
	
	//コピペここまで共通-------------------------------------------------
	
		
		var msgttt = msg + itemCODEs;
		
		//ファンタなどの処理
		if (items_counts_ttt >= 100) {
			
			fantastic(namess);
			
		}else if (items_counts_ttt >= 50) {
			
			greatsss(namess);
			
		}else if (items_counts_ttt >= 20) {
			
			
		}
		
		var roop_c = 1;
		var sizes = 100 + Math.round( Math.random()*100);
		
		
		
		//ぞうさんーーーーーーーーーーーーー
		if (msgttt.indexOf('3489') != -1 ) {
		
			playSound("imgs/nnnnn/zou.mp3", 0.4);  // 0.4の音量で再生
				
			////friends_syutugen_text_tate2(namess+"ちゃん、応援ゾウさんありがとう！",'#70db70',50);
			
				
			//ゲージ加算関数
			const amount=(80 * items_counts_ttt);
			//await updateGauge(amount);  // → ポイント加算
			
			await loadUserData();
			addUserPoint(usernamessssss, namess, original_name, amount);
			addLogEntry(namess + "ちゃんから応援ゾウさん🎁[+" + amount + "p]");
			await sleep(100);
			
			
				var file_num = 1 + Math.round( Math.random()*2);
				nnnnn_tizu(file_num,sizes,480,200,84);
				await sleep( 200 );
				
				nnnnn_tizu(file_num,sizes,260,100,83);
				await sleep( 200 );
				
				nnnnn_tizu(file_num,sizes,700,100,83);
				await sleep( 200 );
			
			
			  	// アイテム投下されたら呼ぶ/////////////////////////////////////////////
			  	await sleep( 4000 );		
				for(  var ird2 = 0;  ird2 < items_counts_ttt;  ird2++ ){
					//throwItemToKusudama("imgs/nnnnn/1676852021633_1.png",80);
					await sleep(300);
				}
				//updateKusudamaGauge(amount); // ←これでゲージ減る！	
				
				// アイテム投下されたら呼ぶ/////////////////////////////////////////////
			

				

		
		//ブタ通常
		}else if (msgttt.indexOf('3731') != -1 ) {
			
			
			playSound("imgs/nnnnn/sanba.mp3", 0.4);  // 0.4の音量で再生
			//friends_syutugen_text_tate2(namess+"ちゃん、応援ブタさんありがとう！",'#7094db',50);
			
			//ゲージ加算関数
			const amount=(80 * items_counts_ttt);
			//await updateGauge(amount);  // → ポイント加算
			
			await loadUserData();
			addUserPoint(usernamessssss, namess, original_name, amount);
			addLogEntry(namess + "ちゃんから応援ブタさん🎁[+" + amount + "p]");
			await sleep(100);
			
			
			
			
				var file_num = 21 + Math.round( Math.random()*1);
				nnnnn_tizu(file_num,sizes,480,200,84);
				await sleep( 200 );
				
				nnnnn_tizu(file_num,sizes,260,100,83);
				await sleep( 200 );
				
				nnnnn_tizu(file_num,sizes,700,100,83);
				await sleep( 200 );
				
			  	// アイテム投下されたら呼ぶ/////////////////////////////////////////////
				await sleep( 4000 );	
				for(  var ird2 = 0;  ird2 < items_counts_ttt;  ird2++ ){
					//throwItemToKusudama("imgs/nnnnn/item_ouen-pig_waifu2x_art_noise3_scale_waifu2x_art_noise3_scale.png",80);
					await sleep(300);
				}
				//updateKusudamaGauge(amount); // ←これでゲージ減る！	
				// アイテム投下されたら呼ぶ/////////////////////////////////////////////
			

				
		//ブタ２倍
		}else if (msgttt.indexOf('3732') != -1 ) {
			
			playSound("imgs/nnnnn/sanba.mp3", 0.4);  // 0.4の音量で再生
			//friends_syutugen_text_tate2(namess+"ちゃん、2倍ブタさんありがとう！",'#7094db',54);
			
			//ゲージ加算関数
			const amount=(160 * items_counts_ttt);
			//await updateGauge(amount);  // → ポイント加算
			
			await loadUserData();
			addUserPoint(usernamessssss, namess, original_name, amount);
			addLogEntry(namess + "ちゃんから2倍！応援ブタさん🎁[+" + amount + "p]");
			await sleep(100);


				var file_num = 21 + Math.round( Math.random()*1);
				
				nnnnnn_bonus('x2',sizes,99,3);
				
				nnnnn_tizu(file_num,sizes,1000,100,84);
				await sleep( 200 );
				
				nnnnn_tizu(file_num,sizes,10,100,83);
				await sleep( 200 );
				
				nnnnn_tizu(file_num,sizes,700,100,83);
				await sleep( 200 );
				
				nnnnn_tizu(file_num,sizes,300,100,82);
				await sleep( 200 );	
				
				
			  	// アイテム投下されたら呼ぶ/////////////////////////////////////////////
				await sleep( 4000 );	
				for(  var ird2 = 0;  ird2 < items_counts_ttt*2;  ird2++ ){
					//throwItemToKusudama("imgs/nnnnn/item_ouen-pig_waifu2x_art_noise3_scale_waifu2x_art_noise3_scale.png",80);
					await sleep(300);
				}
				//updateKusudamaGauge(amount); // ←これでゲージ減る！				
				// アイテム投下されたら呼ぶ/////////////////////////////////////////////
				
				
		//ブタ20倍
		}else if (msgttt.indexOf('3733') != -1 ) {
		
			
			playSound("imgs/nnnnn/sanba.mp3", 0.4);  // 0.4の音量で再生

			//friends_syutugen_text_tate2(namess+"ちゃんが20倍ブタさんを連れて来てくれた！",'#7094db',60);
			
						
			//ゲージ加算関数
			const amount=(1600 * items_counts_ttt);
			//await updateGauge(amount);  // → ポイント加算
			
			await loadUserData();
			addUserPoint(usernamessssss, namess, original_name, amount);
			addLogEntry(namess + "ちゃんから20倍！応援ブタさん🎁[+" + amount + "p]");
			await sleep(100);
			
			
			
				var file_num = 21;
				nnnnn_tizu(file_num,sizes,480,200,84);
				await sleep( 200 );
				
				nnnnn_tizu(file_num,sizes,120,200,84);
				await sleep( 200 );
				
				nnnnn_tizu(file_num,sizes,840,200,84);
				await sleep( 200 );
				
				nnnnn_tizu(file_num,sizes,260,100,83);
				await sleep( 200 );
				
				nnnnn_tizu(file_num,sizes,700,100,83);
				await sleep( 200 );
				
				nnnnnn_bonus('x20b',sizes,120,10);
					
				nnnnn_tizu(file_num,sizes,480,0,82);
				await sleep( 2000 );			
			
				file_num = 22;
				nnnnn_tizu(file_num,sizes,480,200,84);
				await sleep( 200 );
				
				nnnnn_tizu(file_num,sizes,120,200,84);
				await sleep( 200 );
				
				nnnnn_tizu(file_num,sizes,840,200,84);
				await sleep( 200 );
				
				nnnnn_tizu(file_num,sizes,260,100,83);
				await sleep( 200 );
				
				nnnnn_tizu(file_num,sizes,700,100,83);
				await sleep( 200 );
				
				nnnnn_tizu(file_num,sizes,480,0,82);
				await sleep( 2000 );			
			
				file_num = 21;
				nnnnn_tizu(file_num,sizes,480,200,84);
				await sleep( 200 );
				
				nnnnn_tizu(file_num,sizes,120,200,84);
				await sleep( 200 );
				
				nnnnn_tizu(file_num,sizes,840,200,84);
				await sleep( 200 );
				
				nnnnn_tizu(file_num,sizes,260,100,83);
				await sleep( 200 );
				
				nnnnn_tizu(file_num,sizes,700,100,83);
				await sleep( 200 );
				
				nnnnn_tizu(file_num,sizes,480,0,82);
				await sleep( 200 );	
				
				
			  	// アイテム投下されたら呼ぶ/////////////////////////////////////////////
				await sleep( 4000 );	
				for(  var ird2 = 0;  ird2 < items_counts_ttt*20;  ird2++ ){
					//throwItemToKusudama("imgs/nnnnn/item_ouen-pig_waifu2x_art_noise3_scale_waifu2x_art_noise3_scale.png",80);
					await sleep(300);
				}
				//updateKusudamaGauge(amount); // ←これでゲージ減る！			
				// アイテム投下されたら呼ぶ/////////////////////////////////////////////
			
				
		//ぞうさん５ーーーーーーーーー
		}else if (msgttt.indexOf('3490') != -1) {

			playSound("imgs/nnnnn/zou.mp3", 0.4);  // 0.4の音量で再生
			
			
			//friends_syutugen_text_tate2(namess+"ちゃん、5倍ゾウさんありがとう！",'#70db70',54);
			
			
						
			//ゲージ加算関数
			const amount=(400 * items_counts_ttt);
			//await updateGauge(amount);  // → ポイント加算
			
			await loadUserData();
			addUserPoint(usernamessssss, namess, original_name, amount);
			addLogEntry(namess + "ちゃんから5倍！応援ゾウさん🎁[+" + amount + "p]");
			await sleep(100);
			
			
			for(  var ir2 = 0;  ir2 < items_counts_ttt;  ir2++ ){
				//sakura2025_addPetals(10,namess,test_items[test_items_counts]+" 応援ゾウさん",5,usernamessssss + ":" + namess);
				//await sleep(200);
			}
			
			
				var file_num = 1 + Math.round( Math.random()*2);
				nnnnnn_bonus('x5',sizes,40,3);
				nnnnn_tizu(file_num,sizes,480,200,84);
				await sleep( 200 );
				
				nnnnn_tizu(file_num,sizes,260,100,83);
				await sleep( 200 );
				
				nnnnn_tizu(file_num,sizes,700,100,83);
				await sleep( 200 );
				
				nnnnn_tizu(file_num,sizes,480,0,82);
				await sleep( 200 );	
				
				playSound("imgs/nnnnn/hihihi.mp3", 0.4);  // 0.4の音量で再生
								
				// アイテム投下されたら呼ぶ/////////////////////////////////////////////
			  	await sleep( 4000 );		
				for(  var ird2 = 0;  ird2 < items_counts_ttt*5;  ird2++ ){
					//throwItemToKusudama("imgs/nnnnn/1676852021633_1.png",80);
					await sleep(200);
				}
				//updateKusudamaGauge(amount); // ←これでゲージ減る！	
				// アイテム投下されたら呼ぶ/////////////////////////////////////////////
			
		//ぞうさん10ーーーーーーーーー
		}else if (msgttt.indexOf('3491') != -1) {

			playSound("imgs/nnnnn/zou.mp3", 0.4);  // 0.4の音量で再生

			
			//friends_syutugen_text_tate2(namess+"ちゃん、10倍ゾウさんありがとう！",'#70db70',56);

						
			//ゲージ加算関数
			const amount=(800 * items_counts_ttt);
			//await updateGauge(amount);  // → ポイント加算
			
			await loadUserData();
			addUserPoint(usernamessssss, namess, original_name, amount);
			addLogEntry(namess + "ちゃんから10倍！応援ゾウさん🎁[+" + amount + "p]");
			await sleep(100);
			
			
				var file_num = 1 + Math.round( Math.random()*2);
				nnnnn_tizu(file_num,sizes,480,200,84);
				await sleep( 200 );
				
				nnnnn_tizu(file_num,sizes,120,200,84);
				await sleep( 200 );
				
				nnnnn_tizu(file_num,sizes,840,200,84);
				await sleep( 200 );
				
				nnnnn_tizu(file_num,sizes,260,100,83);
				await sleep( 200 );
				
				nnnnn_tizu(file_num,sizes,700,100,83);
				await sleep( 500 );
				
				nnnnnn_bonus('x10',sizes,100,8);
				
				
				playSound("imgs/nnnnn/hihihi.mp3", 0.4);  // 0.4の音量で再生

				
				nnnnn_tizu(file_num,sizes,480,0,82);
				await sleep( 3000 );	
				
				
				
				file_num = 1 + Math.round( Math.random()*2);
				nnnnn_tizu(file_num,sizes,480,200,84);
				await sleep( 200 );
				
				nnnnn_tizu(file_num,sizes,120,200,84);
				await sleep( 200 );
				
				nnnnn_tizu(file_num,sizes,840,200,84);
				await sleep( 200 );
				
				nnnnn_tizu(file_num,sizes,260,100,83);
				await sleep( 200 );
				
				nnnnn_tizu(file_num,sizes,700,100,83);
				await sleep( 200 );
				
				nnnnn_tizu(file_num,sizes,480,0,82);
				await sleep( 200 );	
				
				
				playSound("imgs/nnnnn/zou.mp3", 0.4);  // 0.4の音量で再生
					
					
				// アイテム投下されたら呼ぶ/////////////////////////////////////////////
			  	await sleep( 4000 );		
				for(  var ird2 = 0;  ird2 < items_counts_ttt*10;  ird2++ ){
					//throwItemToKusudama("imgs/nnnnn/1676852021633_1.png",80);
					await sleep(300);
				}
				//updateKusudamaGauge(amount); // ←これでゲージ減る！			
				// アイテム投下されたら呼ぶ/////////////////////////////////////////////
				
			
		//ぞうさん20ーーーーーーーーー
		}else if (msgttt.indexOf('3492') != -1) {

			playSound("imgs/nnnnn/zou.mp3", 0.4);  // 0.4の音量で再生

			
			//friends_syutugen_text_tate2(namess+"ちゃん、20倍ゾウさんキタキタキタ～！！",'#70db70',60);
			
						
			//ゲージ加算関数
			const amount=(1600 * items_counts_ttt);
			//await updateGauge(amount);  // → ポイント加算
			
			await loadUserData();
			addUserPoint(usernamessssss, namess, original_name, amount);
			addLogEntry(namess + "ちゃんから20倍！応援ゾウさん🎁[+" + amount + "p]");
			await sleep(100);

			
			
				var file_num = 1;
				nnnnn_tizu(file_num,sizes,480,200,84);
				await sleep( 200 );
				
				nnnnn_tizu(file_num,sizes,120,200,84);
				await sleep( 200 );
				
				nnnnn_tizu(file_num,sizes,840,200,84);
				await sleep( 200 );
				
				nnnnn_tizu(file_num,sizes,260,100,83);
				await sleep( 200 );
				
				nnnnn_tizu(file_num,sizes,700,100,83);
				await sleep( 500 );
				
				nnnnnn_bonus('x20',sizes,120,10);
					
					
				playSound("imgs/nnnnn/hihihi.mp3", 0.4);  // 0.4の音量で再生
				
				
				nnnnn_tizu(file_num,sizes,480,0,82);
				await sleep( 3000 );			
				
			
				file_num = 2;
				nnnnn_tizu(file_num,sizes,480,200,84);
				await sleep( 200 );
				
				nnnnn_tizu(file_num,sizes,120,200,84);
				await sleep( 200 );
				
				nnnnn_tizu(file_num,sizes,840,200,84);
				await sleep( 200 );
				
				nnnnn_tizu(file_num,sizes,260,100,83);
				await sleep( 200 );
				
				nnnnn_tizu(file_num,sizes,700,100,83);
				await sleep( 500 );

				playSound("imgs/nnnnn/zou.mp3", 0.4);  // 0.4の音量で再生
				playSound("imgs/nnnnn/hihihi.mp3", 0.4);  // 0.4の音量で再生
				
				nnnnn_tizu(file_num,sizes,480,0,82);
				await sleep( 3000 );			
			
				file_num = 3;
				nnnnn_tizu(file_num,sizes,480,200,84);
				await sleep( 200 );
				
				nnnnn_tizu(file_num,sizes,120,200,84);
				await sleep( 200 );
				
				nnnnn_tizu(file_num,sizes,840,200,84);
				await sleep( 200 );
				
				nnnnn_tizu(file_num,sizes,260,100,83);
				await sleep( 200 );
				
				nnnnn_tizu(file_num,sizes,700,100,83);
				await sleep( 200 );
				
				nnnnn_tizu(file_num,sizes,480,0,82);
				await sleep( 200 );			
				
				// アイテム投下されたら呼ぶ/////////////////////////////////////////////
			  	await sleep( 4000 );		
				for(  var ird2 = 0;  ird2 < items_counts_ttt*20;  ird2++ ){
					//throwItemToKusudama("imgs/nnnnn/1676852021633_1.png",80);
					await sleep(300);
				}
				//updateKusudamaGauge(amount); // ←これでゲージ減る！			
				// アイテム投下されたら呼ぶ/////////////////////////////////////////////
				
				
		//33犬
		}else if (msgttt.indexOf('4745') != -1) { 
		
		
		
		//ねずみ
		}else if (msgttt.indexOf('4961') != -1) { 
		
		
		}
		
		
		
		//もりねこ
		if (msgttt.indexOf('3215') != -1) {
				
			//items_counts_ttt
			let tatete = 450;// + Math.sin(i * 0.6) * 100;
			let zzzzIndex = 85;// + Math.sin(i * 0.6) * 100;
			
			for(  var ir2 = 0;  ir2 < items_counts_ttt;  ir2++ ){
				const count = 12;
				const spacingX = window.innerWidth / (count + 2);
				
				for (let i = 0; i < count; i++) {
				    const yokoko = spacingX * (i + 1);

				    nnnnn_mori_neko('11', 150, tatete, yokoko,zzzzIndex);
				    await sleep(90);
				}
				tatete-=70;
				zzzzIndex-=1;
				await sleep( 200 );		
				
			}
			

			
		}
		
		//金メガホン
		if (msgttt.indexOf('3774') != -1) {

			var yokoko = 0;
			
			for (  var inn = 0;  inn < 1;  inn++  ) {
				rotata = 11 + Math.round(Math.random()*1);

				//nnnnn_mori_neko('11',150,1,yokoko);
			}
		}
		
		//黒メガホン
		if (msgttt.indexOf('3775') != -1) {

			var yokoko = 0;
			
			for (  var inn = 0;  inn < 1;  inn++  ) {
				rotata = 11 + Math.round(Math.random()*1);

				//nnnnn_mori_neko('11',150,1,yokoko);
			}
		}
	//}
}


//表彰状
async function nnnnnn_bonus(file_num,rand_tate,rand_zindex,dir) {		

	const div_text2 = document.createElement('div');
	div_text2.id="text" + count_nnnnn_A;
	count_nnnnn_A++;
	div_text2.style.position = 'fixed'; 
	div_text2.style.zIndex  = rand_zindex; 
	div_text2.style.top = '50%';
	div_text2.style.left = '50%';
	div_text2.style.transform = 'translate(-50%, -50%) scale(0.7)';

    let img_element2 = document.createElement('img');
	img_element2.src = 'imgs/nnnnn/' + file_num + '.png'; 
	img_element2.width = 200+rand_tate; // 横サイズ（px）
			
	div_text2.appendChild(img_element2);	
	document.body.appendChild(div_text2); //body直下へ挿入
	
   var tl = gsap.timeline()
	await tl.to("#"+div_text2.id, {duration: 3,rotation:2160})
		.to("#"+div_text2.id, {duration: dir+1,scale:1});
	
	div_text2.parentNode.removeChild(div_text2); //画面上の移動終了後に削除
}	


async function nnnnn_mori_neko(file_num,size,tatete,yokoko,zzzzIndex) {
 
	let div_text2 = document.createElement('div');
	div_text2.id="text"+count_nnnnn_A;
	count_nnnnn_A++;
	div_text2.style.zIndex  = zzzzIndex;
	div_text2.style.position = 'fixed'; 
	//div_text.style.whiteSpace = 'nowrap' 

	div_text2.style.left = yokoko + 'px';
	div_text2.style.top =  tatete + 'px';  
      
	var img_element2 = document.createElement('img');
	img_element2.src = 'imgs/nnnnn/' + file_num + '.gif'; 
	img_element2.width = size; // 横サイズ（px）

	div_text2.appendChild(img_element2);
	
	document.body.appendChild(div_text2); //body直下へ挿入

//	var tl = gsap.timeline()   
//	await tl.to("#"+div_text2.id, {duration: 1,rotation:10})
//			.to("#"+div_text2.id, {y:-50})
//			.to("#"+div_text2.id, {y:20})
//			.to("#"+div_text2.id, {duration:0.2})
//			.to("#"+div_text2.id, {y:-50})
//			.to("#"+div_text2.id, {y:20})		
//			.to("#"+div_text2.id, {duration:0.2})
//			.to("#"+div_text2.id, {y:-50})
//			.to("#"+div_text2.id, {y:20})
//			.to("#"+div_text2.id, {duration:1});
	
	var tl = gsap.timeline();

await tl
  .to("#" + div_text2.id, { duration: 0.1, scaleY: 0.7, scaleX: 1.2 })  // しゃがむ
  .to("#" + div_text2.id, { y: -150, rotation: 360, scaleY: 1.2, scaleX: 1, duration: 0.4, ease: "back.out(2)" }) // ジャンプ回転
  .to("#" + div_text2.id, { y: 20, scaleY: 1, scaleX: 1, duration: 0.3 })  // 着地
  .to("#" + div_text2.id, { x: -20, duration: 0.1 })
  .to("#" + div_text2.id, { x: 20, duration: 0.1 })
  .to("#" + div_text2.id, { x: 0, rotation: 0, duration: 0.1 });

await tl
  .to("#" + div_text2.id, { duration: 0.1, scaleY: 0.7, scaleX: 1.2 })  // しゃがむ
  .to("#" + div_text2.id, { y: -150, rotation: 360, scaleY: 1.2, scaleX: 1, duration: 0.4, ease: "back.out(2)" }) // ジャンプ回転
  .to("#" + div_text2.id, { y: 20, scaleY: 1, scaleX: 1, duration: 0.3 })  // 着地
  .to("#" + div_text2.id, { x: -20, duration: 0.1 })
  .to("#" + div_text2.id, { x: 20, duration: 0.1 })
  .to("#" + div_text2.id, { x: 0, rotation: 0, duration: 0.1 });

await tl
  .to("#" + div_text2.id, { duration: 0.1, scaleY: 0.7, scaleX: 1.2 })  // しゃがむ
  .to("#" + div_text2.id, { y: -150, rotation: 360, scaleY: 1.2, scaleX: 1, duration: 0.4, ease: "back.out(2)" }) // ジャンプ回転
  .to("#" + div_text2.id, { y: 20, scaleY: 1, scaleX: 1, duration: 0.3 })  // 着地
  .to("#" + div_text2.id, { x: -20, duration: 0.1 })
  .to("#" + div_text2.id, { x: 20, duration: 0.1 })
  .to("#" + div_text2.id, { x: 0, rotation: 0, duration: 0.1 });
	div_text2.parentNode.removeChild(div_text2); //画面上の移動終了後に削除

}


async function nnnnn_mori_neko2(file_num,size,tatete,yokoko) {

	let div_text2 = document.createElement('div');
	div_text2.id="text"+count_nnnnn_A;
	count_nnnnn_A++;
	div_text2.style.zIndex  = 85;
	div_text2.style.position = 'fixed'; 
	//div_text.style.whiteSpace = 'nowrap' 

	div_text2.style.left = yokoko + 'px';
	div_text2.style.top =  '350px';  
      
	var img_element2 = document.createElement('img');
	img_element2.src = 'imgs/nnnnn/12.png'; 
	img_element2.width = size; // 横サイズ（px）

	div_text2.appendChild(img_element2);
	
	document.body.appendChild(div_text2); //body直下へ挿入

	var tl = gsap.timeline()   
	await tl.to("#"+div_text2.id, {duration: 1,rotation:-10})
			.to("#"+div_text2.id, {y:-100})
			.to("#"+div_text2.id, {y:100});
	
	div_text2.parentNode.removeChild(div_text2); //画面上の移動終了後に削除

}



async function nnnnn_tizu(file_num,size,yokoko,tatete,indz) {

  let div_text2 = document.createElement('div');
  div_text2.id="text"+count_nnnnn_A; 
  count_nnnnn_A++;
  div_text2.style.position = 'fixed'; 
	div_text2.style.zIndex  = indz-30; 
  div_text2.style.left = yokoko + 'px'; 
  div_text2.style.top =  tatete + 'px';  
  div_text2.style.opacity =  1;  
  
  
  var randomgg = Math.round( Math.random()*50) + 100;
  
  let img_element2 = document.createElement('img');
	img_element2.src = 'imgs/nnnnn/' + file_num + '.gif'; 
	img_element2.width = 400; // 横サイズ（px）
			
	div_text2.appendChild(img_element2);
  document.body.appendChild(div_text2); //body直下へ挿入

  var randomgg4444 = 500 + Math.round( Math.random()*300);
  var randomgg5555 = -1 * (500 + Math.round( Math.random()*500));
  
   var tl = gsap.timeline()   	
	await tl.to("#"+div_text2.id, {duration:5});
	
  div_text2.parentNode.removeChild(div_text2); //画面上の移動終了後に削除

}


	
	
async function roop_white_kuma(file_num,size) {

  let div_text2 = document.createElement('div');
  div_text2.id="text"+count_nnnnn_A; 
  count_nnnnn_A++;
  div_text2.style.position = 'fixed'; 
	div_text2.style.zIndex  = 58; 
  div_text2.style.left = '1300px'; 
  let random = -1 * Math.round( Math.random()*500);
  div_text2.style.top =  '0px';  
  //div_text2.appendChild(document.createTextNode(count_B)); 
  
  let randomgg = Math.round( Math.random()*50) + 100;
  
  
  let img_element2 = document.createElement('img');
	img_element2.src = 'imgs/whitedayday/' + file_num + '.gif'; 
	img_element2.width = 300; // 横サイズ（px）
		
	//var attrnode = document.createAttribute('class');
	//attrnode.value = 'btn keyframe animation';
	//img_element2.setAttributeNode(attrnode);
	
	div_text2.appendChild(img_element2);
  document.body.appendChild(div_text2); //body直下へ挿入

   
  let randomgg4444 = 500 + Math.round( Math.random()*300);
  let randomgg5555 = -1 * (500 + Math.round( Math.random()*500));
  
   var tl = gsap.timeline()   	
	await tl.to("#"+div_text2.id, {x:-400,duration:2});
			
			for (  var i = 0;  i < 13;  i++  ) {
				var hhhhh = 1 + Math.round( Math.random()*3);
				roop_buss_white(hhhhh,'1000');
				await sleep( 200 );
			}
			
	await tl .to("#"+div_text2.id, {x:-800,duration:2});
			
			for (  var i = 0;  i < 13;  i++  ) {
				var hhhhh = 1 + Math.round( Math.random()*3);
				roop_buss_white(hhhhh,'600');
				await sleep( 200 );
			}
	await tl .to("#"+div_text2.id, {x:-1200,duration:2});
			
			for (  var i = 0;  i < 13;  i++  ) {
				var hhhhh = 1 + Math.round( Math.random()*3);
				roop_buss_white(hhhhh,'200');
				await sleep( 200 );
			}
	await tl .to("#"+div_text2.id, {x:-1600,duration:2});
			
	
	
	
  div_text2.parentNode.removeChild(div_text2); //画面上の移動終了後に削除

}

