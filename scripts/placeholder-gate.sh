#!/bin/sh
# SEA-160 預防 gate：掃 build 輸出，擋佔位/撰稿指示文字與內部檔名洩漏到公開站。
# 由 ci.yml（PR/push 回饋）與 deploy.yml（部署前置，讓 gate 真的擋上線）共用。
# 用法：sh scripts/placeholder-gate.sh <輸出目錄，預設 dist>
set -u
DIR="${1:-dist}"

# 內部檔名 / 撰稿標記 / 佔位詞。-i 已處理大小寫；\[ *BIO 容忍 [ 後空白。
PATTERN='bio-variants|voice\.md|values-scaffold|SeanOS|\[ *BIO|\[待填|占位|佔位|placeholder|lorem ipsum|TODO|FIXME|撰稿指示|標記詞'

if [ ! -d "$DIR" ]; then
  echo "::error::gate 找不到輸出目錄 $DIR（build 是否成功？）"
  exit 1
fi

# -I 跳過 binary（圖片/字型）；不限副檔名，遞迴掃所有文字輸出（html/js/json/xml/txt/css…）。
grep -rnIE "$PATTERN" "$DIR"
rc=$?
if [ "$rc" -eq 0 ]; then
  echo "::error::偵測到佔位/撰稿指示文字或內部檔名洩漏（見上）。填真內容後再上線（SEA-160）。"
  exit 1
elif [ "$rc" -ne 1 ]; then
  # rc=1＝乾淨無命中；其餘（2/權限/IO）＝掃描本身出錯，fail-closed 不放行。
  echo "::error::gate 掃描發生錯誤（grep rc=$rc）"
  exit 1
fi
echo "✓ 佔位符 gate 通過：$DIR 無洩漏樣式"
