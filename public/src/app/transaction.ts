export class Transaction {
    constructor(
        public action: string = "",
        public amount: number = 0,
        public value: number = 0,
        public id: number = 0
    ){}
}
