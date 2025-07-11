import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MONGODB connected Successfully")
    } catch (error) {
        console.log("error connecting to mongodb : ", error);
        process.exit(1) // 1 means failure
    }
}