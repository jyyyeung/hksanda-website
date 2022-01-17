import * as OpenCC from "opencc-js";

// 將繁體中文（香港）轉換為簡體中文（中國大陸）
const t2s_converter = OpenCC.Converter({ from: "hk", to: "cn" });
const s2t_converter = OpenCC.Converter({ from: "cn", to: "hk" });
// 設定轉換起點為根節點，即轉換整個頁面
const rootNode = document.documentElement;
// 將所有 zh-HK 標籤轉為 zh-CN 標籤
export const HTMLConvertHandler = OpenCC.HTMLConverter(
  t2s_converter,
  rootNode,
  "zh-HK",
  "zh-CN"
);
// HTMLConvertHandler.convert(); // 開始轉換  -> 汉语
// HTMLConvertHandler.restore(); // 復原      -> 漢語

const isSimplified = () => {
  const languages = navigator.languages;
  languages.forEach((language) => {
    if (language.includes("CN")) {
      return true;
    }
  });
  return false;
};

export const translate = (source) => {
  const isObject = typeof source == "object";
  source = isObject ? JSON.stringify(source) : source;
  const converted = isSimplified()
    ? t2s_converter(source)
    : s2t_converter(source);

  return isObject ? JSON.parse(converted) : converted;
};
