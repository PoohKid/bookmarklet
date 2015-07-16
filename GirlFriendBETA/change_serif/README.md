# セリフ変更
マイページのセリフを任意のものに変更します  
2ch の拾い物でしたが最近動かなかったので修正しました

* 2015.06.29 の UI リニューアルに対応

■これをブックマーク  
`javascript:(function(){var div=document.querySelector('div.js_topGirlComment.topGirlComment');div.style.opacity=100;var input=document.createElement('input');input.type='text';input.style.width="100%";input.value=div.innerText;input.onchange=function(){div.innerText=input.value;if(input.parentNode)input.parentNode.removeChild(input);if(!input.value)div.style.opacity=0;};div.innerText='';div.appendChild(input);input.select();})()`

## サンプル
![chloe](./chloe.png)
