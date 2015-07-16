# スチル表示
マイページのナビゲーターやボタンなどを非表示にしてスチル表示っぽくします

* 2015.06.29 の UI リニューアルに対応

■これをブックマーク  
`javascript:(function(){document.querySelector('div.js_menuBtn.absolute.z3').style.display='none';document.querySelector('section.relative.z2').style.display='none';document.querySelector('div.absolute.js_prev.floatLeft.z3.js_fadeout').style.display='none';document.querySelector('div.absolute.js_next.floatRight.z3.js_fadeout').style.display='none';document.querySelector('div.js_specialBtn').style.display='none';document.querySelector('div.js_voiceBtn').style.display='none';document.querySelector('div.js_girlChangeBtn.absolute.z3').style.display='none';})()`

## サンプル
![still](./still.png)
