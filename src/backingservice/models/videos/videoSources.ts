import mongoose from 'mongoose'
import { dbVideos } from '../../databases/mongo'

const {Schema} = mongoose

// typeVideo => mp4, webm, avi, mov

const VideoSourcesSchema = new Schema({
    storage:  {type: String, required: true}, //'aws/s3',
    bucket:  {type: String, lowercase: true, required: true},//'cdn.universalkrowdy.com',
    urlStorage:  {type: String, required: true, unique: true},//'https://cdn.universalkrowdy.com/videos/format/process/videO1.mp4',
    typeVideo: {type: String, enum: ['mp4', 'webm', 'avi', 'mov']},
    urlStorageMp4: {type: String},
    status: { type: String, enum: ['pending', 'error', 'finished'], required: true},
    oldStatus: { type: String, enum: ['pending', 'error', 'finished']},
    outputPath: {type: String}
}, {
    timestamps: true
})

export default dbVideos.model('VideoSources', VideoSourcesSchema)