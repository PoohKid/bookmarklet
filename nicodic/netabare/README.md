# ネタバレ表示
反転文字で非表示にされたテキストを表示します  
背景色がページによって違うため元の色は一切考慮していません  
記事中で style にて color 指定している箇所を全てリセットしています  
そのため強調表示で赤にしてる箇所などもリセットされてしまう恐れがありますが気にしない方向で

■これをブックマーク  
`javascript:(function(){javascript:(function(){$("#article [style*=color]").css("color", "");})()})()`
