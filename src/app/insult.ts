export interface IInsult {
    beginning:string
    middle:string
    end:string
}

export class Insult implements IInsult {
    beginning:string = "test"
    middle:string = "test"
    end:string = "test"
}