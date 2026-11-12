import $ from "jquery";
$(function () {
  // ハンバーガーメニューをクリックした時
  $(".p-navi__hamburger").on("click", function () {
    // ハンバーガーメニューの共通処理を呼び出す
    hamburger();
  });
  // メニューのリンクをクリックした時
  $(".p-navi__link").on("click", function () {
    // ハンバーガーメニューの共通処理を呼び出す
    hamburger();
  });
});

///////ハンバーガー共通処理///////
function hamburger() {
  // toggleClassを使用することで、hamburgerクラスにis-openクラスが存在する場合は削除、
  // 存在しない場合を追加する処理を自動で行ってくれる
  $(".p-navi__hamburger").toggleClass("is-open");

  if ($(".p-navi__hamburger").hasClass("is-open")) {
    // hamburgerクラスにis-openクラスが存在する場合は、navi-listにもis-openクラスを追加する
    $(".p-navi__list").addClass("is-open").addClass("is-open");
  } else {
    // hamburgerクラスにis-openクラスが存在しない場合は、listからis-openクラスを削除する
    $(".p-navi__list").removeClass("is-open").removeClass("is-open");
  }
}

$(function () {
  //ページトップへ戻る
  var $pageTop = $(".p-footer__pagetop");
  $pageTop.on("click", function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      300,
    );
    return false;
  });
});
