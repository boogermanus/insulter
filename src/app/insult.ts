export interface IInsult {
    beginning:string
    middle:string
    end:string
}

export class Insult implements IInsult {
    beginning:string = "beginning"
    middle:string = "middle"
    end:string = "end"
}