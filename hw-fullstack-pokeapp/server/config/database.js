import { connect } from 'mongoose'

const connectDatabase = async () => {
    try {
        const connection = await connect(process.env.MONGODB_URI)

        console.log(`MongoDB connected to host: ${connection.connection.host}`)
    }
    catch (error) {
        console.error(error)
        process.exit(1)
    }
}

export default connectDatabase