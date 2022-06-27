import videoSources from "../backingservice/models/videos/videoSources"
import processVideo from "../backingservice/models/videos/processVideo"
import videoprocesscontroller from "./videomanager.controller"
import { Types } from 'mongoose'
const settings = require("../../settings.js")


class VIDEOCONTROLLER {
    
    async convertVideoWebmToMp4(originUrlVideo: string) {
        try {
            const originUrlVideoFromLocal = `${settings.PROJECT_DIR}/inputvideo.webm`
            const { responseVideo } = await this.createVideoDocument(originUrlVideoFromLocal || originUrlVideo)
            const {outputPath} = await videoprocesscontroller.convert(originUrlVideoFromLocal || originUrlVideo, responseVideo?._id)
            await this.setStatusFinishToVideoDocument(responseVideo?._id, outputPath)
            return outputPath;
        } catch (error) {
            throw error
        }
    }

    async createVideoDocument(originUrlVideo: string) {
        try {
            // console.log("🚀 ~ file: video.controller.ts ~ line 14 ~ VIDEOCONTROLLER ~ createVideoDocument ~ originUrlVideo", originUrlVideo)

            const [responseVideo] = await videoSources.create([{
                urlStorage: originUrlVideo,
                storage: originUrlVideo,
                bucket: 'BootcampBackend',
                typeVideo: 'webm',
                status: 'pending'
            }])
            // console.log("🚀 ~ file: video.controller.ts ~ line 31 ~ VIDEOCONTROLLER ~ createVideoDocument ~ responseVideo", responseVideo)

            const responseProcessVideo = await this.createStatusProcessVideo('init', responseVideo?._id)
            // console.log("🚀 ~ file: video.controller.ts ~ line 40 ~ VIDEOCONTROLLER ~ createVideoDocument ~ responseProcessVideo", responseProcessVideo)

            return { responseVideo, responseProcessVideo }

        } catch (error) {
            // console.log("🚀 ~ file: video.controller.ts ~ line 37 ~ VIDEOCONTROLLER ~ createVideoDocument ~ error", error.code)
            if (error.code == 11000) {
                 console.log('Key Duplicada: UrlStorage duplicado');
            }
            throw error
        }
    }

    async createStatusProcessVideo(status: any, videoId: any) {
        try {
            const [responseProcessVideo] = await processVideo.create([
                {
                    status,
                    videoId
                }
            ])
            return responseProcessVideo
        } catch (error) {
            throw error
        }
    }

    async setStatusFinishToVideoDocument(videoId: any, outputPath: string) {
        try {
            let querySearch = {
                _id: new Types.ObjectId(videoId)
            }
            let queryUpdate = {
                oldStatus: 'pending',
                status: 'finished',
                outputPath
            }
            let queryOptions = {
                new: true
            }
            const newDocumentUpdate = await videoSources.findOneAndUpdate(querySearch, queryUpdate, queryOptions)
            console.log("🚀 ~ file: video.controller.ts ~ line 63 ~ VIDEOCONTROLLER ~ setStatusFinishToVideoDocument ~ newDocumentUpdate", newDocumentUpdate)
        } catch (error) {
            throw error
        }
    }

    async listVideos(){
        try {

            const [result] = await videoSources.find({});
            return result;
        } catch (error) {
            throw error
        }
    }
}

export default new VIDEOCONTROLLER()