export interface IInsult {
    beginning:string
    middle:string
    end:string
}

export class Insult implements IInsult {
    beginning:string = " "
    middle:string = " "
    end:string = " "
}