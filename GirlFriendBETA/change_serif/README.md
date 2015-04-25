# セリフ変更
マイページのセリフを任意のものに変更します  
2ch の拾い物でしたが最近動かなかったので修正しました

■これをブックマーク  
`javascript:(function(){var div=document.getElementById('girlsComment');var input=document.createElement('input');input.type='text';input.value=div.innerText;input.onchange=function(){var p=document.createElement('p');p.innerText=input.value;div.replaceChild(p,div.getElementsByTagName('input')[0]);};div.replaceChild(input,div.getElementsByTagName('p')[0]);input.select();})()`

## サンプル
![chloe](./chloe.png)
