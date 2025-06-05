import mongoose from "mongoose";

const connectDB = async () => {
    try {
        // mongoose ek object return karta hai
        const connectionIstance = await mongoose.connect(`${process.env.MONGODB_URI}`);
        console.log(`\n Mongo DB CONNECTED !! DB HOST :${connectionIstance.connection.host}`);
    } catch (err) {
        console.log("Mongo Db connection error", err);
        // process ko exit krr do
        process.exit(1);
    }
};

export default connectDB;
