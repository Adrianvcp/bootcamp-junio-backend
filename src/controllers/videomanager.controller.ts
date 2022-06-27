import videoController from "./video.controller"
import {spawn} from 'child_process'
import videomanger from "./videomanger"
const settings = require("../../settings.js")

class VIDEOPROCESSCONTROLLER {
    // __dirname
    // fs
    // syncDir
    // implementar la funcion createoutputpath
    // convertfile
    // retornar el path de video
    async convert(originUrlVideo: string, videoId: any) {
        try {
            await videoController.createStatusProcessVideo('download', videoId)

            const localPathVideo = await this.downloadFile(originUrlVideo)

            await videoController.createStatusProcessVideo('validate', videoId)

            const isValidFile = await this.validateFile(localPathVideo)

            if(!isValidFile) throw new Error('Error en el archivo')
            const outputVideoPath = await this.createOuputPath(videoId)

            await videoController.createStatusProcessVideo('convert', videoId)

            await this.convertFile(localPathVideo, outputVideoPath)

            await videoController.createStatusProcessVideo('upload', videoId)

            // const newOriginUrlVideoConvert = await this.uploadFile(outputVideoPath)

            await videoController.createStatusProcessVideo('notified', videoId)

            // this.logExecuteProcess(newOriginUrlVideoConvert)
            // return newOriginUrlVideoConvert
            return {
                outputPath: outputVideoPath
            }
        } catch (error) {
            await videoController.createStatusProcessVideo('error', videoId)
            throw error
        }
    }

    async downloadFile(originUrlVideo: string) {
        console.log("🚀 ~ file: videomanager.controller.ts ~ line 44 ~ VIDEOPROCESSCONTROLLER ~ downloadFile ~ originUrlVideo", originUrlVideo)
        return originUrlVideo
    }
    // ffprobe
    async validateFile(localPathVideo: string) {
        // ffprobeFromSpawn(localPath)
        // return true/false
        const result =  await new Promise((reject,response) => {
            let options = {
                shell: true
            }
        
            let args = [localPathVideo]
        
            const child =  spawn('ffprobe', args, options)
        
    
            child.on('close', (code)=> {
                // console.log("🚀 ~ file: videomanger.ts ~ line 38 ~ child.on ~ code", code)
                if (code != 0) reject(false)
                else reject(true)     
            })

        })
        // console.log("🚀 ~ file: videomanager.controller.ts ~ line 74 ~ VIDEOPROCESSCONTROLLER ~ a ~ a", result)
        return result
    }

    async createOuputPath(videoId: any) {
        // `${__dirname}/videoMp4/${videoId}
        return `${settings.PROJECT_DIR}/videoMp4/${videoId}.mp4`;
    }

    async convertFile(localPathVideo: string, ouputPath: string) {
        try {
            console.log("converting...")
            await videomanger.changeFormatVideo(localPathVideo,ouputPath);
            console.log("video converted")
        } catch (error) {
            console.log("🚀 ~ file: videomanager.controller.ts ~ line 93 ~ VIDEOPROCESSCONTROLLER ~ convertFile ~ error", error)
            throw error
        }
    }

    async uploadFile(ouputPath: string) {
        try {
            // subir el file y retornal el newOriginUrlVideoConvert
            return ''
        } catch (error) {
            throw error
        }
    }

    logExecuteProcess(newOriginUrlVideoConvert: string) {
        console.log("🚀 ~ >>>>>>> newOriginUrlVideoConvert", newOriginUrlVideoConvert)
    }
}

export default new VIDEOPROCESSCONTROLLER()