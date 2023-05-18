import { Converter, HTMLConverter } from "opencc-js";

// 將繁體中文（香港）轉換為簡體中文（中國大陸）
const t2s_converter = Converter({ from: "hk", to: "cn" });
const s2t_converter = Converter({ from: "cn", to: "hk" });
// 設定轉換起點為根節點，即轉換整個頁面
const rootNode = document.documentElement;

// 將所有 zh-HK 標籤轉為 zh-CN 標籤
export const t2s_HTMLConvertHandler = ()=>(HTMLConverter(
    t2s_converter,
    rootNode,
    "zh-HK",
    "zh-CN"
));
export const s2t_HTMLConvertHandler = ()=>(HTMLConverter(
    s2t_converter,
    rootNode,
    "zh-CN",
    "zh-HK"
));
