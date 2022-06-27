import {Router} from 'restify-router'
import VideoRouter from './video.routes'


const routerInstance = new Router()
const listOfRoutes = new Router()

listOfRoutes.add('/video', VideoRouter)

routerInstance.add('/api/v1', listOfRoutes)
// htttp://dns.domain/api/v1/video/list
// htttp://dns.domain/api/v1/video/process/convert
// routerInstance.add('app', VideoRouter)


export default routerInstance