import PicGo from "picgo";

const picgo = new PicGo("picgo.json");

export const uploadPicGo = async (path) => {
    const res = await picgo.upload([path]); // <- 请确保upload函数里的参数为一个数组，哪怕只有一张图片
    console.log("🚀 ~ file: image.js ~ line 36 ~ uploadPicGo ~ res", res);

    return res[0];
};
