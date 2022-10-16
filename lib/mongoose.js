import {connect, connection} from 'mongoose'

export const initMongoose = async () =>  {
  if(connection.readyState) {
    return connection.asPromise()
  }
  await connect(process.env.MONGODB_URI)
}