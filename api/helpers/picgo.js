/*
 * @Author: YYYeung
 * @Github: https://github.com/sheepyy039
 * @Date: 2022-01-18 18:07:10
 * @LastEditors: YYYeung
 * @LastEditTime: 2022-01-18 18:36:36
 * @FilePath: /hksanda-website/api/helpers/picgo.js
 * @Description:a file to init and use picgo
 */
import PicGo from "picgo";
const picgo = new PicGo("picgo.json");

export const uploadPicGo = async (path) => {
  const res = await picgo.upload([path]); // <- 请确保upload函数里的参数为一个数组，哪怕只有一张图片
  console.log("🚀 ~ file: image.js ~ line 36 ~ uploadPicGo ~ res", res);

  return res[0];
};
