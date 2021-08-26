import { ContentWriter } from 'istanbul-lib-report';
import Types from '../types/likes';

export const addLikes=(content)=>({
    type :Types.ADD_LIKES,
    payload:content
})

export const removeLikes=(id)=>({
    type:Types.RMOVE_LIKES,
    payload:id,
})