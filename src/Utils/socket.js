import { BaseUrl } from './constant'

import io from 'socket.io-client'

export const CreateSocketConnectionClient = ()=>{
    if(location.hostname === 'localhost'){
        return io(BaseUrl)
    }else{
        return io('/' , {path:'/api/socket.io'})
    }
}