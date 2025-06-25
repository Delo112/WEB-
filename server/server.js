
import config from './../config/config'
import app from './express'
import mongoose from 'mongoose'

// Connection URL
mongoose.Promise = global.Promise
mongoose.connect('mongodb+srv://WebClassroom:<db_password>@cluster0.laec3qo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('✅ Connected to MongoDB at', config.mongoUri)
})
.catch((err) => {
  console.error('❌ Failed to connect to MongoDB:', err)
  // Menampilkan error dan keluar dari proses
  process.exit(1)
});

app.listen(config.port, (err) => {
  if (err) {
    console.log(err)
  }
  console.info('Server started on port %s.', config.port)
})
