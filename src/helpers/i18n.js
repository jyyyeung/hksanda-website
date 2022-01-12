import * as OpenCC from "opencc-js";

// 將繁體中文（香港）轉換為簡體中文（中國大陸）
const converter = OpenCC.Converter({ from: "hk", to: "cn" });
// 設定轉換起點為根節點，即轉換整個頁面
const rootNode = document.documentElement;
// 將所有 zh-HK 標籤轉為 zh-CN 標籤
export const HTMLConvertHandler = OpenCC.HTMLConverter(
  converter,
  rootNode,
  "zh-HK",
  "zh-CN"
);
// HTMLConvertHandler.convert(); // 開始轉換  -> 汉语
// HTMLConvertHandler.restore(); // 復原      -> 漢語
