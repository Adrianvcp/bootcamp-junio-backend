import mongoose from 'mongoose'
import { dbVideos } from '../../databases/mongo'

const {Types} = mongoose

const ProcessVideoSchema = new mongoose.Schema({
    status: { type: String, enum: ['init', 'download', 'convert', 'validate', 'finished', 'upload', 'notified', 'error']},
    videoId: {type: Types.ObjectId, ref: 'VideoSources'}
}, {
    timestamps: true
})

export default dbVideos.model('ProcessVideos', ProcessVideoSchema)