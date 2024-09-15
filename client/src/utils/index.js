import {surpriseMePrompts} from "../constants"
import FileSaver from 'file-saver';

export function getRandomPrompt(prompt){
    const randomIndex = Math.floor(surpriseMePrompts.length * Math.random())
    const randomPromt = surpriseMePrompts[randomIndex]
    if(promt === randomPromt) getRandomPrompt(prompt)
    return randomPromt
}

export async function downloadImage(_id, photo){
    FileSaver.saveAs(photo,`download${_id}.jpg`)
}