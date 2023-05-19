// import {PicGo} from "picgo";
//
// const picgo = new PicGo('picgo-config.json');
//
// export const uploadPicGo = async (path) => {
//     const res = await picgo.upload([path]); // <- 请确保upload函数里的参数为一个数组，哪怕只有一张图片
//     console.log("🚀 ~ file: image.js ~ line 36 ~ uploadPicGo ~ res", res);
//
//     return res[0];
// };
import smms from "smms-cli";


export const uploadSMMS = async (path) => {
    const res = await smms.upload(path);
    return res.data;
};

export const getUploadHistory = async () => {
    smms.history()
        .then(json => {
            console.log(json)
        })
        .catch(err => {
            console.error(err.message)
        })
};

export const deleteImage = async (hash) => {
    smms.delete(hash)
        .then(status => {
            console.log(status.msg);
        })
        .catch(err => {
            console.error(err.msg)
        })
};