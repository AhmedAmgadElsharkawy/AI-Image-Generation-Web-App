import {surpriseMePrompts} from "../constants"

export function getRandomPrompt(prompt){
    const randomIndex = Math.floor(surpriseMePrompts.length * Math.random())
    const randomPromt = surpriseMePrompts[randomIndex]
    if(promt === randomPromt) getRandomPrompt(prompt)
    return randomPromt
}