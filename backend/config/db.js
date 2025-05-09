import mongoose from "mongoose";



const connectDb = async () => {
    try {
        let connect = await mongoose.connect("mongodb+srv://manujothish722:XPv9O5qXZj0lLfgj@cluster0.wpn39wt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log('mongodb connected');
    } catch (error) {
        console.log(error);

    }
}
      
export default connectDb