import mongoose from 'mongoose';

const connectDB = async (DATABASE_URL) => {
  try {
    const DB_OPTIONS = {
      dbName: "authapi"
    }
    await mongoose.connect(DATABASE_URL, DB_OPTIONS)
    console.log('Database Connected Successfully...')
  } catch (error) {
    console.log("MONGODB connection FAILED ", error);
    process.exit(1)
  }
}

export default connectDB