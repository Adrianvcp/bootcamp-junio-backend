import 'dotenv/config'
import {spawn} from 'child_process';
import {server} from './service/server'


const [,, portFromArgument] = process.argv

server.listen(portFromArgument, ()=> {
    console.log('Server Available: ', server.name, server.url)
})
// ffmpeg -fflags +genpts -i inputvideo.webm -r 24 inputvideo.mp4
