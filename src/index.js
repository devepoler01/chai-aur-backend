import 'dotenv/config'
import connectDB from "./db/index.js";


connectDB()













/*
const app = express()
const port = process.env.PORT
const db_uri = process.env.MONGODB_URI

(async() => {
    try {
        await mongoose.connect(`${db_uri}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("App connection error: ", error)
            throw error
        })

        app.listen(port, () => {
            console.log(`App is running at port: ${port}`)
        })

    } catch (error) {
        console.error("DB connection error: ", error)
        throw error
    }
})()

*/
