$(function () {
  //スムーズスクロール
  let runScroll = function () {
    $('a[href^="#"]').click(function () {
      let speed = 400;
      let href = $(this).attr("href");
      let $target = $(href == "#" || href == "" ? "html" : href);
      let position = $target.offset().top - 100;

      $("body,html").animate(
        {
          scrollTop: position,
        },
        speed,
        "swing"
      );
      return false;
    });
  };

  // ハンバーガーメニューチェックボックス外す処理
  let unlockCheckBox = function () {
    let $trigger = $(".l-header__nav a");
    let $target = $('input[type="checkbox"]');

    $trigger.click(function () {
      $target.prop("checked", false);
    });
  };

 
  runScroll();
  unlockCheckBox();
});

// タイトルのフェードイン
function fadeAnime() {
 
  $(".js-fadeUpTrigger").each(function () {
   
    var elemPos = $(this).offset().top - 30; 
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();

    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("is-show__fadeUp"); 
    } else {
      $(this).removeClass("is-show__fadeUp"); 
    }
  });
}


$(window).scroll(function () {
  fadeAnime(); 
}); 
$(window).on("load", function () {
  fadeAnime();
});


// ローディング
var bar = new ProgressBar.Line(loading_text, {//id名を指定
  easing: 'easeInOut',//アニメーション効果linear、easeIn、easeOut、easeInOutが指定可能
  duration: 1000,//時間指定(1000＝1秒)
  strokeWidth: 0.2,//進捗ゲージの太さ
  color: '#555',//進捗ゲージのカラー
  trailWidth: 0.2,//ゲージベースの線の太さ
  trailColor: '#bbb',//ゲージベースの線のカラー
  text: {//テキストの形状を直接指定       
    style: {//天地中央に配置
      position: 'absolute',
      left: '50%',
      top: '50%',
      padding: '0',
      margin: '-30px 0 0 0',//バーより上に配置
      transform:'translate(-50%,-50%)',
      'font-size':'3rem',
      color: '#fff',
    },
    autoStyleContainer: false //自動付与のスタイルを切る
  },
  step: function(state, bar) {
    bar.setText(Math.round(bar.value() * 100) + ' %'); //テキストの数値
  }
});

//アニメーションスタート
bar.animate(1.0, function () {//バーを描画する割合を指定します 1.0 なら100%まで描画します
  $("#loading").delay(500).fadeOut(800);//アニメーションが終わったら#splashエリアをフェードアウト
}); 