const express = require('express')
const authRouter = require('./authRouter')
const { connect } = require('mongoose')
const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json())
app.use('/auth', authRouter)

const start = async () => {
  try {
    await connect(`mongodb+srv://artUser:art123@authcluster.ece86.mongodb.net/auth?retryWrites=true&w=majority`, 
      { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
      }
    );
    app.listen(PORT, () => console.log(`server started on port ${PORT}`))
  } catch (e) {

  }
}

start()