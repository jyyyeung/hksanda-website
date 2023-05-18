import mongoose from "mongoose";

const url =
    "mongodb+srv://admin:c2pthQMtDkADQVi@cluster0.olxpa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


export const mongooseConnect = () => {
    mongoose.connect(url).then(
        () => {
            console.log("Connected correctly to server!");
        },
        (err) => {
            console.log(err);
        }
    );

}
