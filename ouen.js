let count_ouen = 0;
let count_ouen_s = 1;
let sougou_ouen = 0;
let randomgg45 = 0;	
let count_ouen_A = 4000000;
let count_ouen_B = 5000000;
let count_ouen_C = 6000000;
let count_ouen_D = 7000000;
let count_ouen_E = 8000000;
let count_ouen_F = 9000000;
let count_ouen_U = 10000000;

let sougou_ouen_nahabi = 0;
let sougou_ouen_rizent = 0;

let che_ouen = 0;
let che_ouen_check = 0;
let hyper_check = 0;


//
////////////////////////////////////////////////////////////////////////////////
////ゲージ用のトータルポインツ
////const userData = {}; 20250705 メインHTMLに統一
////-------------------------------------応援
//
//let haisinouen2025_list = {}; // ← 🔥これを上の方で宣言しておく！
//
//async function loadUserData_olds() {
//    const res = await fetch('http://127.0.0.1:8080/userData.json');
//    //haisinouen2025_list = await res.json();
//    //console.log(haisinouen2025_list);
//}
//
////////////////////////////////////////////////////////////////////////////////
//
//
//
////showPoyopoyoGacha('imgs/huwagacha.png');
//
//function showPoyopoyoGacha(imgPath, width = 150, bottom = 40, left = -10) {
//    // すでにある場合は消す（重複防止）
//    const oldGacha = document.getElementById('gacha-machine-11111');
//    if (oldGacha) oldGacha.remove();
//    
//    
//	let div_text2 = document.createElement('div');
//	div_text2.id="gacha-machine-11111"; 
//	div_text2.style.position = 'fixed'; 
//
//    div_text2.style.width = `${width}px`;
//    div_text2.style.bottom = `${bottom}px`;
//    div_text2.style.left = `${left}px`;
//    div_text2.style.animation = 'poyopoyo 2s infinite ease-in-out';
//
//	let img_element2 = document.createElement('img');
//	img_element2.src = imgPath; 
//	img_element2.width = 150; 
//	
//	div_text2.appendChild(img_element2);
//	
//  document.body.appendChild(div_text2); //body直下へ挿入
//  
//
//    // CSSアニメがまだない場合だけ追加
//    if (!document.getElementById('poyopoyo-style')) {
//        const style = document.createElement('style');
//        style.id = 'poyopoyo-style';
//        style.textContent = `
//            @keyframes poyopoyo {
//                0%   { transform: scale(1); }
//                25%  { transform: scale(1.05, 0.95); }
//                50%  { transform: scale(0.95, 1.05); }
//                75%  { transform: scale(1.05, 0.95); }
//                100% { transform: scale(1); }
//            }
//        `;
//        document.head.appendChild(style);
//    }
//}
//
//
//
//
//function setTurn(isListener) {
////    const display = document.getElementById('turnDisplay');
////    if (isListener) {
////        display.textContent = 'LISTENER\'s TURN';
////        display.classList.add('listener');
////        
////        //ここにリスナーに選んでもらう曲をランダム選出する処理
////        startGacha();
////            
////    } else {
////        display.textContent = 'LENNY\'s TURN';
////        display.classList.remove('listener');
////        
////        
////    }
////    animateTurnDisplay();
//}
//
//function animateTurnDisplay() {
//    const display = document.getElementById('turnDisplay');
//
//    // 中央 & 拡大へ
//    display.style.left = '50%';
//    display.style.top = '50%';
//    display.style.transform = 'translate(-50%, -50%) scale(2)';
//
//    // 1秒止まって元に戻す
//    setTimeout(() => {
//        display.style.left = '10%';
//        display.style.top = '10px';
//        display.style.transform = 'translateX(-50%) scale(1)';
//    }, 1500);
//}
//
//function animateTurn_lister() {
//    isListenerTurn = !isListenerTurn;
//    setTurn(isListenerTurn);
//}
//
//////////////////ゲージUP！//////////////////////////////////////////////////
//
//const maxPoints = 500; // 500Pごとにガチャ
//let currentPoints = 0;  // 現在ゲージ
//let totalPoints = 0;    // 累計ゲージ（これは減らさない）
//
//
//let displayedTotalPoints = totalPoints;
//let totalPointsInterval = null;
//
//function smoothUpdateTotalPoints() {
//    clearInterval(totalPointsInterval);
//    totalPointsInterval = setInterval(() => {
//        if (displayedTotalPoints < totalPoints) {
//            displayedTotalPoints++;
//            const totalDisplay = document.getElementById('total-points');
//            //totalDisplay.textContent = `応援P: ${displayedTotalPoints}P`;
//        } else {
//            clearInterval(totalPointsInterval);
//        }
//    }, 7);  // 速度調整（数字が増える間隔ms）
//}
//
//
//
//// --- 初期化：ローカルストレージから復帰 ---
//if (localStorage.getItem('currentPoints')) {
//    currentPoints = parseInt(localStorage.getItem('currentPoints'), 10);
//}
//if (localStorage.getItem('totalPoints')) {
//    totalPoints = parseInt(localStorage.getItem('totalPoints'), 10);
//}
//
////リセット関数
//function resetPoints() {
//    const confirmed = confirm('ポイントをリセットしてもよろしいですか？');
//    if (!confirmed) return;
//
//    currentPoints = 0;
//    totalPoints = 0;
//    displayedTotalPoints = 0;
//    
//    savePoints();
//    updateGaugeDisplay();
//    
//    const totalDisplay = document.getElementById('total-points');
//    //totalDisplay.textContent = `応援P: 0P`;
//
//    console.log('ポイントリセット完了！');
//}
//
//document.addEventListener('keydown', (e) => {
//    if (e.altKey && e.key.toLowerCase() === 'r') {
//        //resetPoints();
//        console.log('ポイントリセット！');
//    }
//});
//
//
//// --- 画面初期反映 ---
////updateGaugeDisplay();
//
//
//// --- ポイント加算処理（端数カット版） ---
//async function updateGauge(pointsToAdd) {
//    return new Promise((resolve) => {
//        currentPoints += pointsToAdd;
//        totalPoints += pointsToAdd;
//
//        // 保存
//        savePoints();
//
//        let isGachaAnimating = false;
//
//        if (currentPoints >= maxPoints) {
//            //currentPoints = 0; // 500超えたらリセット
//            currentPoints -= maxPoints; // 繰り越し制に変更
//            isGachaAnimating = true;
//
//            updateGaugeDisplay();
//            smoothUpdateTotalPoints();
//
//            savePoints();
//            resolve(); // ガチャ終わったら解決
//            
//            //ここにリスナーに選んでもらう曲をランダム選出する処理
//             if (isListenerTurn) {
//             	 
//             	 	//歌わせていただきます！に文言変更！
//    				storedResults.push(resultText_ouen);
//	    			updateStoredResults(); // 表示・保存
//    				
//    				showCenterDisplay("ゲージMAX！ありがとう！<br><span style=\"font-size:50px;\">🎶 " + resultText_ouen + " 🎶</span><br>歌わせてもらいます！");
//    				
//    				        // アニメ消えた後に display:none にする（0.5秒後）
//				    setTimeout(() => {
//				        display.style.display = 'none';
//				        display.style.opacity = 0;
//				        
//				        //ターンチェンジ
//				        animateTurn_lister();
//				    }, 10000);
//
//	        } else {
//    			startGacha();
//	        }
//        
//        } else {
//    	
//            updateGaugeDisplay();
//            smoothUpdateTotalPoints();
//            resolve();
//            
//        }
//    });
//}
//
//
//
//// --- ゲージ表示更新 ---
//function updateGaugeDisplay() {
//    const percentage = currentPoints / maxPoints * 100;
//    const gauge = document.getElementById('gauge-bar');
//    gauge.style.height = `${percentage}%`;
//
//    const totalDisplay = document.getElementById('total-points');
//    //totalDisplay.textContent = `応援P: ${totalPoints}P`;
//    
//    //レニー・リスナーターン表示バーにする
//}
//
//
//// --- ローカル保存 ---
//function savePoints() {
//    localStorage.setItem('currentPoints', currentPoints);
//    localStorage.setItem('totalPoints', totalPoints);
//}
//
//
//const minutes1 = [
//"ALRIGHT",
//"BRILLIANT WORLD",
//"BURN",
//"Chelsea Girl",
//"Changes Far Away",
//"DANDAN",
//"DEAR FEELING",
//"DRASTIC HOLIDAY",
//"FAIRY LAND",
//"Father",
//"FINE FINE FINE",
//"FOUR SEASONS",
//"GIRLIE",
//"メロメ",
//"HEART BREAK",
//"A HENな飴玉",
//"HONALOOCHIE BOOGIE",
//"horizon",
//"HOTEL宇宙船",
//"I",
//"I CAN BE SHIT,MAMA",
//"I LOVE YOU BABY",
//"I don't know",
//"JAM",
//"Love Communication",
//"LOVE IS ZOOPHILIA",
//"LOVE LOVE SHOW",
//"Love Sauce",
//"LOVERS ON BACKSTREET",
//"MOONLIGHT DRIVE",
//"MORALITY SLAVE",
//"MY WINDING ROAD",
//"NAI",
//"NEW YORK CITY LOSER",
//"O．K．",
//"パンチドランカー",
//"PUFF PUFF",
//"RED LIGHT",
//"ROCK STAR",
//"Romantist Taste",
//"SECOND CRY",
//"See-Saw Girl",
//"SHOCK HEARTS",
//"SLEEPLESS IMAGINATION",
//"マリーにくちづけ",
//"SO YOUNG",
//"Song For Night Snails",
//"SPARK",
//"Stars",
//"STONE BUTTERFLY",
//"SUCK OF LIFE",
//"Sweet＆Sweet",
//"tactics",
//"This Is For You",
//"Titta Titta",
//"TVのシンガー",
//"VERMILION HANDS",
//"welcome to my doghouse",
//"あじさい",
//"アバンギャルドで行こうよ",
//"イエ・イエ・コスメティックラブ",
//"ヴィーナスの花",
//"エブリデイ",
//"カナリヤ",
//"クズ社会の赤いバラ",
//"ゴージャス",
//"この恋のかけら",
//"サイキックNo.９",
//"ジュディ",
//"セックスレスデス",
//"ネバーギブアップ",
//"パール",
//"バラ色の日々",
//"ピリオドの雨",
//"プライマル。",
//"フリージアの少年",
//"ロザーナ",
//"仮面劇",
//"花吹雪",
//"街の灯",
//"楽園",
//"甘い経験",
//"間違いねえな",
//"球根",
//"空の青と本当の気持ち",
//"見して見して",
//"見てないようで見てる",
//"砂の塔",
//"紫の空",
//"審美眼ブギ",
//"人生の終わり",
//"聖なる海とサンシャイン",
//"赤裸々GO!GO!GO!",
//"創生児",
//"争いの街",
//"太陽が燃えている",
//"嘆くなり我が夜のFantasy",
//"淡い心だって言ってたよ",
//"追憶のマーメイド",
//"天国旅行",
//"天道虫",
//"峠",
//"熱帯夜",
//"悲しきASIANBOY",
//"未来は見ないで",
//"遥かな世界",
//"離れるな",
//"薔薇娼婦麗奈",
//"Island",
//"シュレッダー",
//"バッカ",
//"みらいのうた",
//"雨雲",
//"FLOWER",
//"VS",
//"Shine and Eternity",
//"WINNER",
//"Weekender",
//"異邦人",
//"煩悩コントロール",
//"Call me",
//"Final Countdown",
//"Naturally",
//"TALI",
//"鐘（レニーオリジナル）",
//"Love ＆ Peace",
//"ロマンティックあげるよ",
//"超絶☆ダイナミック！",
//"点描のしくみ",
//"BEAUTIFUL",
//"ビルマニア",
//"SHINE ON",
//"ソナタの暗闇",
//"ホテルニュートリノ",
//"Make Over"
//];
//
//
//
//let gachaBallCount = 125481520; // 連番カウンター
//
//let isListenerTurn = false;
//// --- 仮のガチャ発動関数（後で中身作る） ---
//function startGacha() {
//	
//    gachaBallCount++;
//    const uniqueId = `gacha-ball-${gachaBallCount}`;
//
//    const ball = document.createElement('img');
//    ball.src = 'imgs/824565.png';
//    ball.id = uniqueId;
//    ball.style.position = 'fixed';
//    ball.style.top = '500px';
//    ball.style.left = '20px';
//    ball.style.width = '200px';
//    ball.style.zIndex = '100';
//    ball.style.scale = '0';
//    document.body.appendChild(ball);
//    
//    const randomX = 350 + Math.random() * 350; // 250〜500の間
//    const randomR = 1750 + Math.random() * 1250; // 250〜500の間
//
//	var tl = gsap.timeline() 
//	tl.to(ball, {
//	    duration: 2.6,
//	    y: 0,
//	    x: randomX,
//	    rotation: randomR,
//	    scale: 1,
//	    ease: "bounce.out",
//	    onComplete: () => {
//		     gsap.delayedCall(1, () => {
//		     	 
//		        if (isListenerTurn) {
//		        	executeGacha(); 
//		        } else {
//		            executeGacha2();
//		        }
//		        
//		        ball.remove();
//	        });
//	    }
//	});
//
//}
//
//
//
//let resultText_ouen = '';
//    
//function executeGacha() {
//    const is3min = Math.random() < 0.1;
//
//    const randomIndex = Math.floor(Math.random() * minutes1.length);
//    resultText_ouen = minutes1[randomIndex];
//   
//    
//    showCenterDisplay("5分以内に応援アイテムでゲージを貯めて<br><span style=\"font-size:48px;\">🎶 " + resultText_ouen + " 🎶</span><br>歌わせてください！！");
//}
//
//function executeGacha2() {
//    const is3min = Math.random() < 0.1;
//
//    const randomIndex = Math.floor(Math.random() * minutes1.length);
//    resultText_ouen = minutes1[randomIndex];
//   
//    storedResults.push(resultText_ouen);
//	updateStoredResults(); // 表示・保存
//	
//    showCenterDisplay("ゲージMAX！ありがとう！<br><span style=\"font-size:50px;\">🎶 " + resultText_ouen + " 🎶</span><br>歌わせてもらいます！");
//    
//        // アニメ消えた後に display:none にする（0.5秒後）
//    setTimeout(() => {
//        display.style.display = 'none';
//        display.style.opacity = 0;
//    }, 10000);
//}
//
//const display = document.getElementById('gachaCenterDisplay');
//async function showCenterDisplay(text) {
//    display.innerHTML = text;
//
//    // ポップアップ表示
//    display.classList.add('show');
//    display.style.display = 'block';
//    display.style.opacity = 1;
//    
//    if (isListenerTurn) {
//		await reset_timer();      	
//		timer_start_2025();
//	}
//	
//    //演奏始まってたらおしゃくそ表示しない
//    if (show_toggureds == false){        	
//		//timer_start_2025();
//    }
//	
//
//    // 5分後に非表示
//    setTimeout(() => {
//        display.classList.remove('show');
//        
//        // アニメ消えた後に display:none にする（0.5秒後）
//        setTimeout(() => {
//            display.style.display = 'none';
//            display.style.opacity = 0;
//            
//            if (isListenerTurn) {
//            //ターンチェンジ
//            	//animateTurn_lister()
//	        }
//            	
//        }, 500);
//    }, 300000);
//}


////////////////ゲージUP！//////////////////////////////////////////////////




////////////////メイン関数・てか古いバージョン//////////////////////////////////////////////////

async function ouen(msg,namess,usernamessssss,itemcounts,itemCODEs,original_name) {
		
	var msggps = msg;
	
	//位置の借り分け
	if (itemCODEs == 999999 ){
		var tytyty = 7308 + Math.round( Math.random()*5);

		//itemCODEs =parseInt(tytyty);
		//itemCODEs =parseInt(7314);
		//itemCODEs =parseInt(2756);　//素ちあ＝2756　チア10倍＝2758　花火10倍＝2762　くす玉おんりー3756499
	}
		
		
	
	//膨大個数処理用　〒〒〒（3個以上）が含まれていれば 1ループで留める
	var items_counts_ttt = 1;
	var nados = '';

	
	items_counts_ttt = itemcounts;
	
		//document.write('<button id=\"button02\">て2</button>')
		//let randomgg445 = 0;
		randomgg445 = Math.round( Math.random()*14)+2594;
		
		
		msg = msg + itemCODEs;
		
		var roop_c = 1;
		var sizes = 100 + Math.round( Math.random()*100);
		
		//ポソポソ
		if (msg.indexOf('2876') != -1 || msg.indexOf('5560') != -1) {
			
			//count_music_points_total += 5;
			//item_com_func(namess ,"ポンポンありがとう！",5,'#7094db');
			friends_syutugen_text_tate2(namess+"ちゃん、ポンポンありがとう！",'#70db70',30);
			
			const amount=(8 * items_counts_ttt);
			//await updateGauge(amount);  // → ポイント加算
			

			roop_c = 3;	
			for (  var i = 0;  i < roop_c;  i++  ) {	
				ouen_ponpon('5','15');
				await sleep( 300 );
			}
			hyper_check = hyper_check +1 ;
			
			
		//くすだまおんりー
		}else if(msg.indexOf('3756499') != -1){
			
			//ゲージ加算関数
			const amount=(10 * items_counts_ttt);
			//await updateGauge(amount);  // → ポイント加算
			
			await loadUserData();
			addUserPoint(usernamessssss, namess, original_name, amount);
			addLogEntry(namess + "ちゃんから🎁[+" + amount + "p]");
			await sleep(100);
			
			
				// アイテム投下されたら呼ぶ/////////////////////////////////////////////
				//throwItemToKusudama("imgs/ouen/item_pay1.png",amount);
				//updateKusudamaGauge(amount); // ←これでゲージ減る！			
				// アイテム投下されたら呼ぶ/////////////////////////////////////////////
			
		//10倍ボソボソ
		}else if (msg.indexOf('2877') != -1 || msg.indexOf('5561') != -1) {
			//count_music_points_total += 50;
			//item_com_func(namess,"10倍ﾎﾟﾝﾎﾟﾝありがとぅおお！！",50,'#e6d375');
			friends_syutugen_text_tate2(namess+"ちゃん、10倍ポンポンありがとう！",'#70db70',50);
						
			const amount=(20 * items_counts_ttt);
			//await updateGauge(amount);  // → ポイント加算
			
			
			roop_c = 5;
			for (  var i = 0;  i < roop_c;  i++  ) {
				ouen_ponpon('6','20');
				await sleep( 300 );
			}	
			
			hyper_check = hyper_check +1 ;
			
			
		//旧チア--------------------
		}else if (msg.indexOf('911') != -1) {
			
			//count_music_points_total += 20;
			//item_com_func(namess,"チアガール",20,'#7094db');
			friends_syutugen_text_tate2(namess+"ちゃん、チアガールありがとう！",'#70db70',50);

			roop_c = 5;
			for (  var i = 0;  i < roop_c;  i++  ) {
				roop_chear('7',i);
				await sleep( 300 );
			}
			sougou_ouen_rizent += 10;
			hyper_check = hyper_check +3 ;
			
			
		//チア
		}else if (msg.indexOf('2756') != -1 || msg.indexOf('3137') != -1) {

			roop_c = 5;
			for (  var i = 0;  i < roop_c;  i++  ) {
				roop_chear('7',i);
				await sleep( 200 );
			}
			sougou_ouen_rizent += 10;
			hyper_check = hyper_check +3 ;
			
			
			//count_music_points_total += 20;
			//item_com_func(namess,"の応援団長で気合い入った！",20,'#7094db');
			//friends_syutugen_text_tate2(namess+"ちゃんの応援団長で気合い入った！",'#70db70',50);
			
			for(  var ir2 = 0;  ir2 < items_counts_ttt;  ir2++ ){
				//sakura2025_addPetals(10,namess,test_items[test_items_counts]+" 応援団長",1,usernamessssss + ":" + namess);
				//await sleep(200);
			}
			
			//ゲージ加算関数
			const amount=(80 * items_counts_ttt);
			//await updateGauge(amount);  // → ポイント加算
			
			await loadUserData();
			addUserPoint(usernamessssss, namess, original_name, amount);
			addLogEntry(namess + "ちゃんから応援団長🎁[+" + amount + "p]");
			await sleep(100);
			
			//user_list_plus(usernamessssss, namess, amount,original_name);
			
			
				// アイテム投下されたら呼ぶ/////////////////////////////////////////////
			  	await sleep( 4000 );
				for(  var ird2 = 0;  ird2 < items_counts_ttt;  ird2++ ){
					//throwItemToKusudama("imgs/ouen/item_pay1.png",80);
					await sleep(300);
				}
				//updateKusudamaGauge(amount); // ←これでゲージ減る！	
				// アイテム投下されたら呼ぶ/////////////////////////////////////////////
			
			
			
		//チア５倍
		}else if (msg.indexOf('2757') != -1 || msg.indexOf('3138') != -1) {
			
			roop_c = 10;
			nnnnnn_bonus('x5',sizes,40,3);
			
			for (  var i = 0;  i < roop_c;  i++  ) {
				roop_chear('8',i);
				await sleep( 200 );
			}
			sougou_ouen_rizent += 10;
			hyper_check = hyper_check +3 ;
			
			//count_music_points_total += 100;
			//item_com_func(namess,"の5倍団長で気合い十分！",100,'#7094db');
			//friends_syutugen_text_tate2(namess+"ちゃんの5倍団長で気合い十分！！",'#70db70',52);
			
			//ゲージ加算関数
			const amount=(400 * items_counts_ttt);
			//await updateGauge(amount);  // → ポイント加算
			
			await loadUserData();
			addUserPoint(usernamessssss, namess, original_name, amount);
			addLogEntry(namess + "ちゃんから5倍！応援団長🎁[+" + amount + "p]");
			await sleep(100);
			
			for(  var ir2 = 0;  ir2 < items_counts_ttt;  ir2++ ){
				//sakura2025_addPetals(10,namess,test_items[test_items_counts]+" 5倍応援団長",5,usernamessssss + ":" + namess);
				//await sleep(200);
			}
			
			//ゲージ加算関数
			//const amount=(80 * items_counts_ttt)*5;
			//user_list_plus(usernamessssss, namess, amount,original_name);
			
			
				// アイテム投下されたら呼ぶ/////////////////////////////////////////////
			  	await sleep( 4000 );
				for(  var ird2 = 0;  ird2 < items_counts_ttt*5;  ird2++ ){
					//throwItemToKusudama("imgs/ouen/item_pay1.png",80);
					await sleep(300);
				}
				//updateKusudamaGauge(amount); // ←これでゲージ減る！			
				// アイテム投下されたら呼ぶ/////////////////////////////////////////////
			
		//チア１０倍	
		}else if (msg.indexOf('2758') != -1 || msg.indexOf('3139') != -1) {
			
			roop_c = 10;
			nnnnnn_bonus('x10',sizes,100,4);
			
			for (  var i = 0;  i < roop_c;  i++  ) {
				roop_chear('8',i);
				await sleep( 200 );
			}
			sougou_ouen_rizent += 10;
			hyper_check = hyper_check +3 ;
			
			
			//count_music_points_total += 200;
			//item_com_func(namess ,"の10倍団長で燃え上がった！",200,'#7094db');
			//friends_syutugen_text_tate2(namess+"ちゃんの10倍団長で燃え上がった！",'#70db70',56);
			
			//ゲージ加算関数
			const amount=(800 * items_counts_ttt);
			//await updateGauge(amount);  // → ポイント加算
			
			await loadUserData();
			addUserPoint(usernamessssss, namess, original_name, amount);
			addLogEntry(namess + "ちゃんから10倍！応援団長🎁[+" + amount + "p]");
			await sleep(100);
			
			
			for(  var ir2 = 0;  ir2 < items_counts_ttt;  ir2++ ){
				//sakura2025_addPetals(10,namess,test_items[test_items_counts]+" 10倍応援団長",10,usernamessssss + ":" + namess);
				//await sleep(200);
			}
			//ゲージ加算関数
			//const amount=(80 * items_counts_ttt)*10;
			//user_list_plus(usernamessssss, namess, amount,original_name);
			
				// アイテム投下されたら呼ぶ/////////////////////////////////////////////
			  	await sleep( 4000 );
				for(  var ird2 = 0;  ird2 < items_counts_ttt*10;  ird2++ ){
					//throwItemToKusudama("imgs/ouen/item_pay1.png",80);
					await sleep(300);
				}
				//updateKusudamaGauge(amount); // ←これでゲージ減る！	
				// アイテム投下されたら呼ぶ/////////////////////////////////////////////
			
				
		//旧・チア１０倍	
		}else if (msg.indexOf('912') != -1) {
			
			roop_c = 10;
			
			for (  var i = 0;  i < roop_c;  i++  ) {
				roop_chear('8',i);
				await sleep( 200 );
			}
			sougou_ouen_rizent += 10;
			hyper_check = hyper_check +3 ;
			
			
			//count_music_points_total += 200;
			//item_com_func(namess,"の20倍団長！ここからが本気！！",200,'#7094db');
			//friends_syutugen_text_tate2(namess+"ちゃん、チアガールありがとう！",'#70db70',56);
			
			for(  var ir2 = 0;  ir2 < items_counts_ttt;  ir2++ ){
				//sakura2025_addPetals(10,namess,test_items[test_items_counts]+" チアガール",10,usernamessssss + ":" + namess);
				await sleep(200);
			}
				
				
		//チア２０倍
		}else if (msg.indexOf('2759') != -1 || msg.indexOf('3140') != -1) {
			
			roop_c = 14;
			
			nnnnnn_bonus('x20',sizes,120,5);
			
			for (  var i = 0;  i < roop_c;  i++  ) {
				roop_chear('8',i);
				await sleep( 200 );
			}
			
			sougou_ouen_rizent += 10;
			hyper_check = hyper_check +3 ;
			
			
			//count_music_points_total += 200;
			//item_com_func(namess,"の20倍団長！ここからが本気！！",200,'#7094db');
			//friends_syutugen_text_tate2(namess+"ちゃんの20倍団長！ここからが本気！！",'#70db70',60);
			
			//ゲージ加算関数
			const amount=(1600 * items_counts_ttt);
			//await updateGauge(amount);  // → ポイント加算
			
			await loadUserData();
			addUserPoint(usernamessssss, namess, original_name, amount);
			addLogEntry(namess + "ちゃんから20倍！応援団長🎁[+" + amount + "p]");
			await sleep(100);
			
			
			for(  var ir2 = 0;  ir2 < items_counts_ttt;  ir2++ ){
				//sakura2025_addPetals(10,namess,test_items[test_items_counts]+" 20倍応援団長",20,usernamessssss + ":" + namess);
				//await sleep(200);
			}
			//ゲージ加算関数
			//const amount=(80 * items_counts_ttt)*20;
			//user_list_plus(usernamessssss, namess, amount,original_name);
			
			
				// アイテム投下されたら呼ぶ/////////////////////////////////////////////
			  	await sleep( 4000 );
				for(  var ird2 = 0;  ird2 < items_counts_ttt*20;  ird2++ ){
					//throwItemToKusudama("imgs/ouen/item_pay1.png",80);
					await sleep(300);
				}
				//updateKusudamaGauge(amount); // ←これでゲージ減る！		
				// アイテム投下されたら呼ぶ/////////////////////////////////////////////
			
			
		//旧・花火
		}else if (msg.indexOf('1057') != -1) {

			for (  var i = 0;  i < 8;  i++  ) {
				ouen_hanabi_2('8');
				await sleep( 50 );
			}
			roop_ouen_hanabi('9','1');
				await sleep( 300 );
				
			roop_ouen_hanabi('9','2');
				await sleep( 300 );
			
			for (  var i = 1;  i < 6;  i++  ) {
				ouen_hanabi_chear( '7' ,i);
				await sleep( 200 );
			}
			sougou_ouen_nahabi += 100;
			hyper_check = hyper_check +5 ;
			
			
			//count_music_points_total += 120;
			//item_com_func(namess,"の応援花火が華麗に舞い上がった！",120,'#e6d375');
			
		//花火
		}else if (msg.indexOf('2760') != -1) {

	//ouen_hanabi_3('0');
	//await sleep( 30000 );

			for (  var i = 0;  i < 8;  i++  ) {
				ouen_hanabi_2('8');
				await sleep( 50 );
			}
			roop_ouen_hanabi('9','1');
				await sleep( 300 );
				
			roop_ouen_hanabi('9','2');
				await sleep( 300 );
			
			for (  var i = 1;  i < 6;  i++  ) {
				ouen_hanabi_chear( '7' ,i);
				await sleep( 200 );
			}
			sougou_ouen_nahabi += 100;
			hyper_check = hyper_check +5 ;
			for (  var i = 0;  i < 14;  i++  ) {
				ouen_hanabi_2('8');
				await sleep( 50 );
			}
			var random = 400 + Math.round( Math.random()*100);
			var random2 = Math.round( Math.random()*30);
			//roop_gage_6(4,random,random2,namess + "ありがとう(*'▽')",0);
			
			//count_music_points_total += 120;
			//item_com_func(namess ,"のエール花火が華麗に舞い上がった！",120,'#e6d375');
			//friends_syutugen_text_tate2(namess+"ちゃんのエール花火が華麗に舞い上がった！",'#70db70',50);
			
			//ゲージ加算関数
			const amount=(800 * items_counts_ttt);
			//await updateGauge(amount);  // → ポイント加算
			
			await loadUserData();
			addUserPoint(usernamessssss, namess, original_name, amount);
			addLogEntry(namess + "ちゃんからエール花火🎁[+" + amount + "p]");
			await sleep(100);
			
			
			for(  var ir2 = 0;  ir2 < items_counts_ttt;  ir2++ ){
				//sakura2025_addPetals(50,namess,test_items[test_items_counts]+" エール花火",1,usernamessssss + ":" + namess);
				//await sleep(200);
			}
			//ゲージ加算関数
			//const amount=(800 * items_counts_ttt);
			//user_list_plus(usernamessssss, namess, amount,original_name);
			const kinkonkan = items_counts_ttt*10;

				// アイテム投下されたら呼ぶ/////////////////////////////////////////////
			  	await sleep( 4000 );
				for(  var ird2 = 0;  ird2 < kinkonkan;  ird2++ ){
					//throwItemToKusudama("imgs/ouen/item_pay1.png",80);
					await sleep(300);
				}
				//updateKusudamaGauge(amount); // ←これでゲージ減る！			
				// アイテム投下されたら呼ぶ/////////////////////////////////////////////
				
				
		//花火5倍
		}else if (msg.indexOf('2761') != -1) {

			for (  var i = 0;  i < 14;  i++  ) {
				ouen_hanabi_2('8');
				await sleep( 50 );
			}
			
			nnnnnn_bonus('x5',sizes,99,3);
			
			roop_ouen_hanabi('10','3');
				await sleep( 300 );
				
			roop_ouen_hanabi('10','4');
				await sleep( 300 );
			
			for (  var i = 1;  i < 6;  i++  ) {
				ouen_hanabi_chear( '7' ,i);
				await sleep( 200 );
			}
						
			for (  var i = 1;  i < 8;  i++  ) {
				ouen_hanabi_chear2( '8' ,i);
				await sleep( 200 );
			}
			for (  var i = 0;  i < 14;  i++  ) {
				ouen_hanabi_2('8');
				await sleep( 50 );
			}
			hyper_check = hyper_check +5 ;
			sougou_ouen_nahabi += 100;
			
			var random = 400 + Math.round( Math.random()*100);
			var random2 = Math.round( Math.random()*30);
			//roop_gage_6(4,random,random2,namess + "ありがとう(*'▽')",0);
			
			//count_music_points_total += 600;
			//item_com_func(namess ,"の5倍ｴｰﾙ花火で夢に近づいた！",600,'#e6d375');
			//friends_syutugen_text_tate2(namess+"ちゃんの5倍ｴｰﾙ花火で夢に近づいた！",'#70db70',52);
			
			//ゲージ加算関数
			const amount=(4000 * items_counts_ttt);
			//await updateGauge(amount);  // → ポイント加算
			
			await loadUserData();
			addUserPoint(usernamessssss, namess, original_name, amount);
			addLogEntry(namess + "ちゃんから5倍！エール花火🎁[+" + amount + "p]");
			await sleep(100);
			
			
			
			for(  var ir2 = 0;  ir2 < items_counts_ttt;  ir2++ ){
				//sakura2025_addPetals(50,namess,test_items[test_items_counts]+" 5倍エール花火",5,usernamessssss + ":" + namess);
				//await sleep(200);
			}
			
			//ゲージ加算関数
			//const amount=(800 * items_counts_ttt)*5;
			//user_list_plus(usernamessssss, namess, amount,original_name);
			const kinkonkan = (items_counts_ttt*10)*5;
			
			
				// アイテム投下されたら呼ぶ/////////////////////////////////////////////
			  	await sleep( 4000 );
				for(  var ird2 = 0;  ird2 < kinkonkan;  ird2++ ){
					//throwItemToKusudama("imgs/ouen/item_pay1.png",80);
					await sleep(300);
				}
				//updateKusudamaGauge(amount); // ←これでゲージ減る！		
				// アイテム投下されたら呼ぶ/////////////////////////////////////////////
			
		//花火10倍
		}else if (msg.indexOf('2762') != -1) {

			for (  var i = 0;  i < 14;  i++  ) {
				ouen_hanabi_2('8');
				await sleep( 50 );
			}
			
			nnnnnn_bonus('x10',sizes,100,5);
			
			roop_ouen_hanabi('10','3');
				await sleep( 300 );
				
			roop_ouen_hanabi('10','4');
				await sleep( 300 );
			
			for (  var i = 1;  i < 6;  i++  ) {
				ouen_hanabi_chear( '7' ,i);
				await sleep( 200 );
			}
						
			for (  var i = 1;  i < 8;  i++  ) {
				ouen_hanabi_chear2( '8' ,i);
				await sleep( 200 );
			}
			for (  var i = 0;  i < 14;  i++  ) {
				ouen_hanabi_2('8');
				await sleep( 50 );
			}
			sougou_ouen_nahabi += 100;
			hyper_check = hyper_check +5 ;
			
			var random = 400 + Math.round( Math.random()*100);
			var random2 = Math.round( Math.random()*30);
			//roop_gage_6(4,random,random2,namess + "ありがとう(*'▽')",0);
			
			//count_music_points_total += 1200;
			//item_com_func(namess ,"の10倍ｴｰﾙ花火が俺の心に轟いた！！",1200,'#e6d375');
			//friends_syutugen_text_tate2(namess+"ちゃんの10倍ｴｰﾙ花火が俺の心に轟いた！！",'#70db70',56);
			
			//ゲージ加算関数
			const amount=(8000 * items_counts_ttt);
			//await updateGauge(amount);  // → ポイント加算
			
			await loadUserData();
			addUserPoint(usernamessssss, namess, original_name, amount);
			addLogEntry(namess + "ちゃんから10倍！エール花火🎁[+" + amount + "p]");
			await sleep(100);
			
			
			for(  var ir2 = 0;  ir2 < items_counts_ttt;  ir2++ ){
				//sakura2025_addPetals(50,namess,test_items[test_items_counts]+" 10倍エール花火",10,usernamessssss + ":" + namess);
				//await sleep(200);
			}
			//ゲージ加算関数
			//const amount=(800 * items_counts_ttt)*10;
			//user_list_plus(usernamessssss, namess, amount,original_name);
			const kinkonkan = (items_counts_ttt*10)*10;
			
			
				// アイテム投下されたら呼ぶ/////////////////////////////////////////////
			  	await sleep( 4000 );
				for(  var ird2 = 0;  ird2 < kinkonkan;  ird2++ ){
					//throwItemToKusudama("imgs/ouen/item_pay1.png",80);
					await sleep(300);
				}
				//updateKusudamaGauge(amount); // ←これでゲージ減る！			
				// アイテム投下されたら呼ぶ/////////////////////////////////////////////
			
			
		//旧・花火10倍
		}else if (msg.indexOf('1058') != -1) {

			for (  var i = 0;  i < 14;  i++  ) {
				ouen_hanabi_2('8');
				await sleep( 50 );
			}
			
			nnnnnn_bonus('x20',sizes,120,7);
			
			roop_ouen_hanabi('10','3');
				await sleep( 300 );
				
			roop_ouen_hanabi('10','4');
				await sleep( 300 );
			
			for (  var i = 1;  i < 6;  i++  ) {
				ouen_hanabi_chear( '7' ,i);
				await sleep( 200 );
			}
						
			for (  var i = 1;  i < 8;  i++  ) {
				ouen_hanabi_chear2( '8' ,i);
				await sleep( 200 );
			}
			
			for (  var i = 0;  i < 14;  i++  ) {
				ouen_hanabi_2('8');
				await sleep( 50 );
			}
			sougou_ouen_nahabi += 100;
			hyper_check = hyper_check +5 ;
			
			var random = 400 + Math.round( Math.random()*100);
			var random2 = Math.round( Math.random()*30);
			//roop_gage_6(4,random,random2,namess + "ありがとう(*'▽')",0);
			
			
				//count_music_points_total += 1200;
				
		//花火20倍
		}else if (msg.indexOf('2763') != -1) {

			for (  var i = 0;  i < 14;  i++  ) {
				ouen_hanabi_2('8');
				await sleep( 50 );
			}
			roop_ouen_hanabi('10','3');
				await sleep( 300 );
				
			roop_ouen_hanabi('10','4');
				await sleep( 300 );
			
			for (  var i = 1;  i < 6;  i++  ) {
				ouen_hanabi_chear( '7' ,i);
				await sleep( 200 );
			}
						
			for (  var i = 1;  i < 8;  i++  ) {
				ouen_hanabi_chear2( '8' ,i);
				await sleep( 200 );
			}
			
			for (  var i = 0;  i < 14;  i++  ) {
				ouen_hanabi_2('8');
				await sleep( 50 );
			}
			sougou_ouen_nahabi += 100;
			hyper_check = hyper_check +5 ;
			
			var random = 400 + Math.round( Math.random()*100);
			var random2 = Math.round( Math.random()*30);
			//roop_gage_6(4,random,random2,namess + "ありがとう(*'▽')",0);
			
			
			//count_music_points_total += 2400;
			//item_com_func(namess ,"の20倍ｴｰﾙ花火が世界に夢を届けた！",2400,'#e6d375');
			//friends_syutugen_text_tate2(namess+"ちゃんの20倍ｴｰﾙ花火が世界に夢を届けた！",'#70db70',60);
			
			//ゲージ加算関数
			const amount=(16000 * items_counts_ttt);
			//await updateGauge(amount);  // → ポイント加算
			
			await loadUserData();
			addUserPoint(usernamessssss, namess, original_name, amount);
			addLogEntry(namess + "ちゃんから20倍！エール花火🎁[+" + amount + "p]");
			await sleep(100);
			
			
			
			for(  var ir2 = 0;  ir2 < items_counts_ttt;  ir2++ ){
				//sakura2025_addPetals(50,namess,test_items[test_items_counts]+" 20倍エール花火",20,usernamessssss + ":" + namess);
				//await sleep(200);
			}
			//ゲージ加算関数
			//const amount=(800 * items_counts_ttt)*20;
			//user_list_plus(usernamessssss, namess, amount,original_name);
			const kinkonkan = (items_counts_ttt*10)*20;
			
			
				// アイテム投下されたら呼ぶ/////////////////////////////////////////////
			  	await sleep( 4000 );
				for(  var ird2 = 0;  ird2 < kinkonkan;  ird2++ ){
					//throwItemToKusudama("imgs/ouen/item_pay1.png",80);
					await sleep(300);
				}
				//updateKusudamaGauge(amount); // ←これでゲージ減る！				
				// アイテム投下されたら呼ぶ/////////////////////////////////////////////
		}
		

}


function pointsss_ouen() {
			var sampleAreaB = document.getElementById("sampleAreaB");
			sampleAreaB.innerHTML = "花火P:" + sougou_ouen_nahabi;
			
			var sampleAreaC = document.getElementById("sampleAreaC");
			sampleAreaC.innerHTML = "団長P:" + sougou_ouen_rizent;
			
}

async function ouen_ponpon(msg, msg2) {
  let div_text2 = document.createElement('div');
  div_text2.id = "text" + count_ouen_A;
  count_ouen_A++;
  div_text2.style.position = 'fixed';

  let randomX = 300 + Math.round(Math.random() * 700);
  div_text2.style.left = randomX + 'px';
  div_text2.style.top = '720px';

  let img_element2 = document.createElement('img');
  img_element2.src = 'imgs/ouen/' + msg + '.png';
  img_element2.width = msg * msg2;

  div_text2.appendChild(img_element2);
  document.body.appendChild(div_text2);

  // アニメ用ランダム値
  let randomRotation = 360 + Math.random() * 1060; // 一気にくるくる
  let jumpPower = 400 + Math.random() * 200;
  let jumpX = -100 + Math.random() * 200;

  let tl = gsap.timeline();

  // はじけて飛び出す感じ
  await tl.fromTo("#" + div_text2.id,
    {
      scale: 0,
      y: 0,
      rotation: 0,
      opacity: 0.7,
    },
    {
      scale: 1.5,
      y: -jumpPower,
      x: jumpX,
      rotation: randomRotation,
      opacity: 1,
      ease: "back.out(1.7)",
      duration: 0.8,
    }
  )
  .to("#" + div_text2.id,
    {
      scale: 1,
      y: "+=600",
      opacity: 0,
      ease: "power2.in",
      duration: 1.4
    });

  div_text2.remove(); // 終わったら削除
}



async function ouen_ponpon_old(msg,msg2) {

  let div_text2 = document.createElement('div');
  div_text2.id="text"+ count_ouen_A; 
  count_ouen_A++;
  div_text2.style.position = 'fixed'; 
  //div_text.style.whiteSpace = 'nowrap' 
  
  var random = 100 + Math.round( Math.random()*900);
  div_text2.style.left =random + 'px';  
  
  var random2 = 500 + Math.round( Math.random()*100);
  div_text2.style.top =  '720px';  
  
  
  let img_element2 = document.createElement('img');
	img_element2.src = 'imgs/ouen/' + msg + '.png'; 
	img_element2.width = msg * msg2; // 横サイズ（px）
	
	div_text2.appendChild(img_element2);
	
  document.body.appendChild(div_text2); //body直下へ挿入

   let random2b = Math.round(Math.random()*500 -300);
   let random3b = 200 + Math.round(Math.random()*100);
   
      var tl = gsap.timeline()
      	  
    await tl.to("#"+div_text2.id, {scale:2,y:(-1 * random2), rotation: random3b,duration: 1})
    		  .to("#"+div_text2.id, {scale:2,y:random2, rotation: (2 * random3b),duration: 2});
  
  div_text2.parentNode.removeChild(div_text2); //画面上の移動終了後に削除

}
	
	
async function roop_chear(msg,msg2) {

  let div_text2 = document.createElement('div');
  div_text2.id="text"+count_ouen_B; 
  count_ouen_B++;
  div_text2.style.position = 'fixed'; 
  //div_text.style.whiteSpace = 'nowrap' 
  div_text2.style.left = (document.documentElement.clientWidth) + 'px'; 
  
  let random = Math.round( Math.random()*400);
  div_text2.style.top = random + 'px';  
  
  
  let randomgg = Math.round( Math.random()*50) + 100;
  
  
  let img_element2 = document.createElement('img');
	img_element2.src = 'imgs/ouen/' + msg + '.png'; 
	img_element2.width = msg * 40; // 横サイズ（px）
	
	//let attrnode2 = document.createAttribute('class');
	//attrnode2.value = 'btn keyframe animation';
	//img_element2.setAttributeNode(attrnode2);
	
	div_text2.appendChild(img_element2);
	
	
  document.body.appendChild(div_text2); //body直下へ挿入

   let random2b = 200 + Math.round(Math.random()*200);
   let random3b = Math.round(Math.random()*100 -50);
   
   let random22b = Math.round(Math.random()*1000) +200;
   
   var tl = gsap.timeline()
   //var haba = random22b;//document.documentElement.clientWidth - (msg2*random22b);
   	let baseHaba = 1350;
let step = -220;
let minHaba = baseHaba + (msg2 * step);
let maxHaba = minHaba + step;
let haba = Math.floor(Math.random() * (maxHaba - minHaba)) + minHaba;

	if(msg == 7){
		await tl.to("#"+div_text2.id, {duration: 1, x:random2b,x: -1*(haba)
	})
	.to("#"+div_text2.id, {	scale: 1,rotate: 720,y:-100	})
	.to("#"+div_text2.id, {	scale: 1,y:50  })
	.to("#"+div_text2.id, {	x: 1*(haba) , scale: 0}	);
	
	}else if (msg == 8){
			await tl.to("#"+div_text2.id, {duration: 1, x:random2b,x: -1*(haba)
	})
	.to("#"+div_text2.id, {	scale: 1,rotate: 720,y:-100	})
	.to("#"+div_text2.id, {	scale: 1,y:50  })
	.to("#"+div_text2.id, {	scale: 1,rotate: 90,y:-100  })
	.to("#"+div_text2.id, {	scale: 1,rotate: 0,y:50  })
	.to("#"+div_text2.id, {	scale: 2,rotate: 70,y:-100  })
	.to("#"+div_text2.id, {	scale: 1,rotate: 0,y:50  })
	.to("#"+div_text2.id, {	x: 1300 , scale: 0}	);
	}
	
  div_text2.parentNode.removeChild(div_text2); //画面上の移動終了後に削除

}


//お名前表示
async function roop_gage_onamae(msg,msg2,msg3,namess,msg4) {
  let div_text2 = document.createElement('div');
  div_text2.id="text"+count_ouen_U; 
  count_ouen_U++;
  div_text2.style.position = 'fixed'; 
  div_text2.style.zIndex  = '5'; 
  div_text2.style.left =   '400px';
  div_text2.style.top =  msg2 + 'px';
  div_text2.appendChild(document.createTextNode(namess)); 
  document.body.appendChild(div_text2); //body直下へ挿入
  
	var tl = gsap.timeline()	    	
	await tl.to("#"+div_text2.id, {duration: msg,scale:2,rotation:msg4})
	        .to("#"+div_text2.id, {duration: 2});
  div_text2.parentNode.removeChild(div_text2); //画面上の移動終了後に削除
}


async function roop_ouen_hanabi(msg,msg2) {
	
  let div_text = document.createElement('div');
  div_text.id="text"+count_ouen_C; 
  count_ouen_C++;
  div_text.style.position = 'fixed'; 
  div_text.style.zIndex  = 85;
  //div_text.style.whiteSpace = 'nowrap' 
  	if(msg2 == 1){
  div_text.style.right = (document.documentElement.clientWidth) + 'px'; 
  	}else if(msg2 == 2){
  div_text.style.left = (document.documentElement.clientWidth) + 'px'; 
  	}else if(msg2 == 3){
  div_text.style.right = (document.documentElement.clientWidth) + 'px'; 
  	}else if(msg2 == 4){
  div_text.style.left = (document.documentElement.clientWidth) + 'px'; 
  	}
  let random = Math.round( Math.random()*500);
  div_text.style.top = '100px';  
  //div_text.appendChild(document.createTextNode(msg)); 
  
  let randomgg = Math.round( Math.random()*50) + 100;
  
	let img_element = document.createElement('img');
	img_element.src = 'imgs/ouen/' + msg + '.png'; 
	img_element.width = msg * 40; // 横サイズ（px）
	
	div_text.appendChild(img_element);
	
  document.body.appendChild(div_text); //body直下へ挿入

   var random2c = document.documentElement.clientWidth;
   random2c = random2c / 2 ;
   
   var random3c = document.documentElement.clientWidth;
   random3c = random3c / 2 ;
//alert(random3c + '-' + random2c);
   
   
   var tl = gsap.timeline()
   	   
	if(msg2 == 1){
		  await tl.to("#"+div_text.id, {scale:1, duration: 1, x: 1*(random3c)})
		  .to("#"+div_text.id, {	scale: 1,rotate: -40  })
		  .to("#"+div_text.id, {	scale: 1,rotate: 40  })
		  .to("#"+div_text.id, {	scale: 1,rotate: -40  })
		  .to("#"+div_text.id, {	scale: 1,rotate: 40  })
		  .to("#"+div_text.id, {	scale: 1,rotate: -40  })
		  .to("#"+div_text.id, {	scale: 1,rotate: 40  });
	}else if(msg2 == 2){
		  await tl.to("#"+div_text.id, {scale:1, duration: 1, x: -1*(random3c)})
		  .to("#"+div_text.id, {	scale: 1,rotate: 40  })
		  .to("#"+div_text.id, {	scale: 1,rotate: -40  })
		  .to("#"+div_text.id, {	scale: 1,rotate: 40  })
		  .to("#"+div_text.id, {	scale: 1,rotate: -40  })
		  .to("#"+div_text.id, {	scale: 1,rotate: 40  })
		  .to("#"+div_text.id, {	scale: 1,rotate: -40  });
	}else if(msg2 == 3){
		  await tl.to("#"+div_text.id, {scale:1, duration: 1, x: 1*(random3c)})
		  .to("#"+div_text.id, {	scale: 1,rotate: -40  })
		  .to("#"+div_text.id, {	scale: 1,rotate: 40  })
		  .to("#"+div_text.id, {	scale: 2,rotate: -40  })
		  .to("#"+div_text.id, {	scale: 1,rotate: 40  })
		  .to("#"+div_text.id, {	scale: 1,rotate: -40  })
		  .to("#"+div_text.id, {	scale: 1,rotate: 40  })
		  .to("#"+div_text.id, {	scale: 2,rotate: -40  })
		  .to("#"+div_text.id, {	scale: 1,rotate: 40  });
	}else if(msg2 == 4){
		  await tl.to("#"+div_text.id, {scale:1, duration: 1, x: -1*(random3c)})
		  .to("#"+div_text.id, {	scale: 1,rotate: 40  })
		  .to("#"+div_text.id, {	scale: 2,rotate: -40  })
		  .to("#"+div_text.id, {	scale: 1,rotate: 40  })
		  .to("#"+div_text.id, {	scale: 1,rotate: -40  })
		  .to("#"+div_text.id, {	scale: 1,rotate: 40  })
		  .to("#"+div_text.id, {	scale: 2,rotate: -40  })
		  .to("#"+div_text.id, {	scale: 1,rotate: 40  })
		  .to("#"+div_text.id, {	scale: 1,rotate: -40  });
	}

  
  div_text.parentNode.removeChild(div_text); //画面上の移動終了後に削除
}


async function ouen_hanabi_3(filenum) {
  let div_text = document.createElement('div');
  div_text.id="text"+count_ouen_D; 
  count_ouen_D++;
  div_text.style.position = 'fixed'; 	
  div_text.style.zIndex  = 83;
  //div_text.style.whiteSpace = 'nowrap' 
  var random = Math.round( Math.random()*900) + 100;
  div_text.style.right = random + 'px';  
  var random2 = Math.round( Math.random()*600);
  div_text.style.top = random2 + 'px';  
  //div_text.appendChild(document.createTextNode(msg)); 
  
  var randomgg = Math.round( Math.random()*100) + 150;
  var img_element = document.createElement('img');
  
  var randomghanabi = Math.round( Math.random()*8);
	img_element.src = 'imgs/hanabibibi/' + filenum + '.mp4'; 
	img_element.width = randomgg; // 横サイズ（px）
	div_text.appendChild(img_element);
	
  document.body.appendChild(div_text); //body直下へ挿入


  var random222 = Math.round( Math.random()*51)-30;
   await gsap.to("#"+div_text.id, {scale:5, rotation: random222,duration: 5, x:10,y:200});
  
  
  div_text.parentNode.removeChild(div_text); //画面上の移動終了後に削除
}


async function ouen_hanabi_2(msg) {
  let div_text = document.createElement('div');
  div_text.id="text"+count_ouen_D; 
  count_ouen_D++;
  div_text.style.position = 'fixed'; 
  div_text.style.zIndex  = 83;
  //div_text.style.whiteSpace = 'nowrap' 
  var random = Math.round( Math.random()*900) + 100;
  div_text.style.right = random + 'px';  
  var random2 = Math.round( Math.random()*600);
  div_text.style.top = random2 + 'px';  
  //div_text.appendChild(document.createTextNode(msg)); 
  
  var randomgg = Math.round( Math.random()*100) + 150;
  var img_element = document.createElement('img');
  
  var randomghanabi = Math.round( Math.random()*8);
	img_element.src = 'imgs/hanabi/' + randomghanabi + '.png'; 
	img_element.width = randomgg; // 横サイズ（px）
	div_text.appendChild(img_element);
	
  document.body.appendChild(div_text); //body直下へ挿入


  var random222 = Math.round( Math.random()*51)-30;
   await gsap.to("#"+div_text.id, {scale:5, rotation: random222,duration: 4, x:10,y:200});
  
  
  div_text.parentNode.removeChild(div_text); //画面上の移動終了後に削除
}


async function ouen_hanabi_chear(msg,msg2) {

  let div_text2 = document.createElement('div');
  div_text2.id="text"+count_ouen_E; 
  count_ouen_E++;
  div_text2.style.position = 'fixed'; 
  div_text2.style.zIndex  = 86;
  //div_text.style.whiteSpace = 'nowrap' 
  div_text2.style.left = (document.documentElement.clientWidth) + 'px'; 
  var random = Math.round( Math.random()*500);
  div_text2.style.top =  '300px';  
  //div_text2.appendChild(document.createTextNode(count_B)); 
  
  let randomgg = Math.round( Math.random()*50) + 100;
  
  
  let img_element2 = document.createElement('img');
	img_element2.src = 'imgs/ouen/' + msg + '.png'; 
	img_element2.width = msg * 40; // 横サイズ（px）
	
	div_text2.appendChild(img_element2);
	
	
  document.body.appendChild(div_text2); //body直下へ挿入

   let random2b = Math.round(Math.random()*500 -300);
   let random3b = Math.round(Math.random()*100 -50);
   
   var random22b = 1470 - (200 * msg2);

   
   var tl = gsap.timeline()
   	var haba = random22b;//document.documentElement.clientWidth - (msg2*random22b);
   	
	await tl.to("#"+div_text2.id, {
	delay:1, duration: 1, x: -1*(haba)
	})
	.to("#"+div_text2.id, {	scale: 1,rotate: 720,y:-100	})
	.to("#"+div_text2.id, {	scale: 1,y:50  })
	.to("#"+div_text2.id, {	x: 1*(haba) , scale: 0}	);
	
  div_text2.parentNode.removeChild(div_text2); //画面上の移動終了後に削除

}


async function ouen_hanabi_chear2(msg,msg2) {

  let div_text2 = document.createElement('div');
  div_text2.id="text"+count_ouen_E; 
  count_ouen_E++;
  div_text2.style.position = 'fixed'; 
  div_text2.style.zIndex  = 86;
  //div_text.style.whiteSpace = 'nowrap' 
  div_text2.style.left = (document.documentElement.clientWidth) + 'px'; 
  var random = Math.round( Math.random()*500);
  div_text2.style.top =  '450px';  
  //div_text2.appendChild(document.createTextNode(count_B)); 
  
  let randomgg = Math.round( Math.random()*50) + 100;
  
  
  let img_element2 = document.createElement('img');
	img_element2.src = 'imgs/ouen/' + msg + '.png'; 
	img_element2.width = msg * 40; // 横サイズ（px）
	
	div_text2.appendChild(img_element2);
	
	
  document.body.appendChild(div_text2); //body直下へ挿入

   let random2b = Math.round(Math.random()*500 -300);
   let random3b = Math.round(Math.random()*100 -50);
   
   var random22b = 1470 - (150 * msg2);

   
   var tl = gsap.timeline()
   	   var haba = random22b;//document.documentElement.clientWidth - (msg2*random22b);
   	
	await tl.to("#"+div_text2.id, {
	delay:1, duration: 1, x: -1*(haba)
	})
	.to("#"+div_text2.id, {	scale: 1,rotate: 720,y:-100	})
	.to("#"+div_text2.id, {	scale: 1,y:50  })
	.to("#"+div_text2.id, {	x: 1*(haba) , scale: 0}	);
	
  div_text2.parentNode.removeChild(div_text2); //画面上の移動終了後に削除

}

var tytimer_ouen = 180000 + Math.round( Math.random()*120000);
const logsss_ouen_buner = async function(){
	
	//warning_cyara_ouen_7();
	//warning_cyara_ouen_8();
};

setInterval(logsss_ouen_buner, 180000);


async function warning_cyara_ouen_7(){

	let div_text = document.createElement('div');
	div_text.id="text"+count_hallolloween2024; 
	count_hallolloween2024++;
	div_text.style.position = 'fixed'; 
	div_text.style.zIndex  = 91;
	//div_text.style.opacity  = 0.5;
	div_text.style.whiteSpace = 'nowrap';
	div_text.style.scale = 1;
	
	div_text.style.top = 550 + 'px'; 
	div_text.style.left = 1550 + 'px';  

	var sizess = Math.round( Math.random()*14);
	var img_element = document.createElement('img');
	img_element.width = 450; // 横サイズ（px）	
	img_element.src = 'imgs/ouen/ouen1.png'; 
		var attrnode = document.createAttribute('class');
		var sasa_random_top =  Math.round( Math.random()*1);
		
		if (sasa_random_top == 0){
			attrnode.value = 'btn purunpurun';
			
		}else if (sasa_random_top == 1){
			attrnode.value = 'btn ninjyamp';
		}
		
		img_element.setAttributeNode(attrnode);
	div_text.appendChild(img_element);

	document.body.appendChild(div_text); //body直下へ挿入

	var RRR = -50 + Math.round( Math.random()*100);
	
	var tl = gsap.timeline()   		
	await tl.to("#"+div_text.id, {duration: 20,x:-2000});

	div_text.parentNode.removeChild(div_text); //画面上の移動終了後に削除
}


async function warning_cyara_ouen_8(){

	let div_text = document.createElement('div');
	div_text.id="text"+count_hallolloween2024; 
	count_hallolloween2024++;
	div_text.style.position = 'fixed'; 
	div_text.style.zIndex  = 91;
	div_text.style.whiteSpace = 'nowrap';
	
	div_text.style.top = 490 + 'px'; 
	div_text.style.left = 1600 + 'px';  

	var img_element = document.createElement('img');
	img_element.width = 312; // 横サイズ（px）	
	img_element.src = 'imgs/ouen/ouen2.png'; 


		var attrnode = document.createAttribute('class');
			attrnode.value = 'btn yrayurayura2nd';
		img_element.setAttributeNode(attrnode);
		
	div_text.appendChild(img_element);
	document.body.appendChild(div_text); //body直下へ挿入

	
	var tl = gsap.timeline()   		
	await tl.to("#"+div_text.id, {duration: 20,x:-2000});

	div_text.parentNode.removeChild(div_text); //画面上の移動終了後に削除
}