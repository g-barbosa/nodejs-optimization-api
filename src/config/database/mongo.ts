import mongoose from 'mongoose'
import 'dotenv/config'

mongoose.connect(process.env.MONGO_URL!!, {
  dbName: 'sample_training',
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('conectado')).catch((e: any) => console.log(e))