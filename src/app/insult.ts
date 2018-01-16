export interface IInsult {
    beginning:string
    middle:string
    end:string
}

export class Insult implements IInsult {
    beginning:string = "Test"
    middle:string = "Test"
    end:string = "Test"
}