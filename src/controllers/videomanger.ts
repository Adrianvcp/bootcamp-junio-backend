import {spawn} from 'child_process'


class VIDEOMANAGER{ 
    
    async changeFormatVideo(sourceVideo: any,outputVideo: any): Promise<string>{
        try {
            await convertFilesWebmToMp4(sourceVideo, outputVideo)
            return 'ok'
        } catch (error) {
            console.log(`error: ${error}`)
            throw error
        }
    }
    
    
}

const convertFilesWebmToMp4 = (sourceVideo: any, outputVideo: any) => new Promise((reject, resolve)=> {
    let options = {
        shell: true
    }

    let args = ['-fflags', '+genpts', '-i', sourceVideo, '-r', '24', outputVideo]

    const child =  spawn('ffmpeg', args, options)

    
    child.stdout.on('data', (data: any)=> {
        console.log(`Output: ${data}`)
    })

    child.stderr.on('data', (data: any)=> {
        if(data.includes('Error')){
            console.log('error dice')
            reject('Error')
        }
           
    })

    child.on('close', (code)=> {
        console.log("🚀 ~ file: videomanger.ts ~ line 38 ~ child.on ~ code", code)
        reject(code)
    })

})


export default new VIDEOMANAGER()