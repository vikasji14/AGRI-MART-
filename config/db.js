import mongoose from "mongoose";
import colors from "colors";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://admin:admin@cluster0.puvdo76.mongodb.net/?retryWrites=true&w=majority");
    // const conn = await mongoose.connect('mongodb+srv://vikasji14:vikasji14@database1.9ulraxk.mongodb.net/')
    console.log(
      `Conneted To Mongodb Databse ${conn.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    console.log(`Errro in Mongodb ${error}`.bgRed.white);
  }
};

export default connectDB;
