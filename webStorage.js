

$(function(){


//データの保存
function setItem () {
    sessionStorage.setItem('key','value');
    }


//データの取得
function getItem () {
    sessionStorage.getItem('key');
    }


//データの削除
function saveItem () {
    sessionStorage.removeItem('key');
    }


//データの一括削除
function clearItem () {
    sessionStorage.clear();
}






//オブジェクトの保存と取り出し

let data = {
    apple: 'りんご',
    orange: 'みかん'
    };

//オブジェクトを文字列に変換
let dataStr = JSON.stringify(data);
sessionStorage.setItem('fruits', dataStr);
    
let fruits = sessionStorage.getItem('fruits');
    
//文字列をオブジェクトに変換
const fruitsObj = JSON.parse(fruits);

//配列の保存と取り出し
let data = ['ぶどう', 'いちご'];

//配列を文字列に変換
let dataStr = data.join();
sessionStorage.setItem('fruits', dataStr);

let fruits = sessionStorage.getItem('fruits');

//文字列を配列に変換
let fruitsArr = animals.split(',');








//バリデーションチェック
//・価格、ページ数、発行部数

 // 入力欄が空のとき
$("input[name='hoge']").blur(function(){
    if($(this).val() == ""){
        errorMessage01.show();
    }
  });


 // 数字入力必須
  $("input[name='hoge']").blur(function(){
    if(!$(this).val().match(/^[0-9]+$/)){
        errorMessage02.show();
    }
  });
  



		});


