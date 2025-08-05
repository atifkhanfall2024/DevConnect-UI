import { BaseUrl } from './constant'

import io from 'socket.io-client'

export const CreateSocketConnectionClient = ()=>{
    return io(BaseUrl)
}