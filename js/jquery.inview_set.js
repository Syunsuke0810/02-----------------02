
//upスタイルが画面内にきたら、スタイルupstyleを適用する
$('.up').on('inview', function() {
	$(this).addClass('upstyle');
});

//downスタイルが画面内にきたら、スタイルdownstyleを適用する
$('.down').on('inview', function() {
	$(this).addClass('downstyle');
});

//leftスタイルが画面内にきたら、スタイルleftstyleを適用する
$('.left').on('inview', function() {
	$(this).addClass('leftstyle');
});

//rightスタイルが画面内にきたら、スタイルrightstyleを適用する
$('.right').on('inview', function() {
	$(this).addClass('rightstyle');
});

//transform1スタイルが画面内にきたら、スタイルtransform1styleを適用する
$('.transform1').on('inview', function() {
	$(this).addClass('transform1style');
});

//transform2スタイルが画面内にきたら、スタイルtransform2styleを適用する
$('.transform2').on('inview', function() {
	$(this).addClass('transform2style');
});

//transform3スタイルが画面内にきたら、スタイルtransform3styleを適用する
$('.transform3').on('inview', function() {
	$(this).addClass('transform3style');
});

//blurスタイルが画面内にきたら、スタイルblurstyleを適用する
$('.blur').on('inview', function() {
	$(this).addClass('blurstyle');
});

//crackerスタイルが画面内にきたら、クラッカーアニメーションを実行する
$('.cracker').on('inview', function() {
	$('.cracker').append('<span class="crackerstyle"><img src="images/cracker.gif" alt=""><img src="images/cracker.gif" alt=""></span>');
});


/*
 * じゃんけんの手
 * 0: グー
 * 1: チョキ
 * 2: パー
 * として処理する
 */
function rsp(playerSelect) {
	let result;
	let playerSelectHand;
	let comSelectHand;
	let resultString;
	let random = Math.random();
	let comSelect = Math.floor(random * 3);
	console.log(comSelect);
	console.log(playerSelect);

 

	/*
	 * 勝ち負けは（プレイヤーが）
	 * 0: 負け
	 * 1: 勝ち
	 * 2: あいこ
	 */

	if (playerSelect == comSelect) {
			// 一緒だったらあいこ
			result = 2;
	} else {
			// 違うので条件によって勝敗を振り分ける
			if (playerSelect == 0) {
					// プレイヤーはグー
					if (comSelect == 1) {
							// コンピューターはチョキ
							result = 1;
					} else {
							// コンピューターはパー
							result = 0;
					}
			} else if (playerSelect == 1) {
					// プレイヤーはチョキ
					if (comSelect == 0) {
							// コンピューターはグー
							result = 0;
					} else {
							// コンピューターはパー
							result = 1;
							
					}
			} else {
					// プレイヤーはパー
					if (comSelect == 0) {
							// コンピューターはグー
							result = 1;
					} else {
							// コンピューターはチョキ
							result = 0;
					}
			}
	}
	console.log(result);

	if (playerSelect == 0) {
			playerSelectHand = ('<img src=images/mygu_min.png>');
	} else if (playerSelect == 1) {
			playerSelectHand = ("<img src=images/mytyoki_min.png>");
	} else {
			playerSelectHand = ("<img src=images/mypa_min.png>");
	}

	if (comSelect == 0) {
			comSelectHand = ("<img src=images/enemygu_min.png>");
	} else if (comSelect == 1) {
			comSelectHand =  ("<img src=images/enemytyoki_min.png>");
	} else {
			comSelectHand = ("<img src=images/enemypa_min.png>");
	}

	if (result == 0) {
		resultString = `
			<div class="result-container">
				<img src="images/まけ.png">
				<p>まけ・・・</p>
			</div>`;
	} else if (result == 1) {
		resultString = `
			<div class="result-container">
				<img src="images/かち.png">
				<p>勝ち！！</p>
			</div>`;
	} else {
		resultString = `
			<div class="result-container">
				<img src="images/aiko2.png">
				<p>aiko！</p>
			</div>`;
	}
	

	document.getElementById('player').innerHTML = 'あなた<br>' + playerSelectHand;
	document.getElementById('computer').innerHTML =
			'あいて<br>'  +comSelectHand;
	document.getElementById('resultMsg').innerHTML = '結果<br>' + resultString;

	
// 下記のコードでアイコをズームにしたかったが断念した
	// 画像の初期スタイル
// const image = document.createElement('img');
// image.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB1VzzUD4grwv7-q5i2C98A5cs4xpbvwcDQw&usqp=CAU';
// image.style.width = '100px'; // 初期幅
// image.style.height = '100px'; // 初期高さ

// // 画像をbodyに追加
// document.body.appendChild(image);

// // ズームアニメーションのパラメータ
// const duration = 5000; // 5秒
// const endWidth = '800px'; // 最終幅
// const endHeight = '800px'; // 最終高さ

// // アニメーションの関数
// function zoomImage() {
//   const startTime = Date.now();
  
//   function animate() {
//     const currentTime = Date.now();
//     const elapsed = currentTime - startTime;
    
//     if (elapsed < duration) {
//       const progress = elapsed / duration;
//       const newWidth = (parseFloat(endWidth) - 100) * progress + 100;
//       const newHeight = (parseFloat(endHeight) - 100) * progress + 100;
//       image.style.width = newWidth + 'px';
//       image.style.height = newHeight + 'px';
//       requestAnimationFrame(animate);
//     } else {
//       image.style.width = endWidth;
//       image.style.height = endHeight;
//     }
//   }

//   requestAnimationFrame(animate);
// }

// // 画像を表示してすぐにズームアニメーションを開始
// zoomImage();



}
