export default class bankLending {
    private _clientType: string
    private _fees: number
    private _installmentsLimit: number
    private _installmentsRequested: number
    private _installmentsValue: number
    private _amoutLimit: number
    private _amountRequested: number
    private _amountIndebted: number
    private _acceptedorDenied: string

    constructor() {
        this._clientType = ''
        this._fees = 0
        this._installmentsLimit = 0
        this._installmentsRequested = 0
        this._amoutLimit = 0
        this._amountRequested = 0
        this._amountIndebted = 0
        this._acceptedorDenied = ''
        this._installmentsValue = 0
    }

    clientType(client: string) {
        if (client.toLowerCase() == 'standard') {
            this._clientType = client
            this._fees = 2.5
            this._amoutLimit = 10000
            this._installmentsLimit = 12
        } else if(client.toLowerCase() == 'platinum') {
            this._clientType = client
            this._fees = 1.99
            this._amoutLimit = 50000
            this._installmentsLimit = 24
        } else if (client.toLowerCase() == 'gold') {
            this._clientType = client
            this._fees = 1.2
            this._amoutLimit = 250000
            this._installmentsLimit = 48
        } else {
            console.log('Tipo de cliente não encontrado')
        }
     }

     simulation(client: string, amountRequested: number, installmentsRequested: number) {
       
        this.clientType(client)

        if (amountRequested <= this._amoutLimit) {
            this._amountRequested = amountRequested
        } else {
            console.log(`Valor pedido está acima do limite, o valor limite é de ${this._amoutLimit}`)
        }

        if(installmentsRequested <= this._installmentsLimit) {
            this._installmentsRequested = installmentsRequested
        } else {
            console.log(`Esta quantidad de parcela está acima do limite, o limte é de ${this._installmentsLimit}`)
        }

        if(amountRequested == this._amountRequested && installmentsRequested == this._installmentsRequested) {
            this._acceptedorDenied = 'Empréstimo aceito'
            console.log(this._acceptedorDenied)
        } else {
            this._acceptedorDenied = 'Empréstimo negado'
            console.log(this._acceptedorDenied)
        }

        if(this.acceptedorDenied == 'Empréstimo aceito') {
            this._amountIndebted = (this._amountRequested * (1 + ((this._fees/100) * this._installmentsRequested)))
           

            this._installmentsValue = this.amountIndebted / this.installmentsRequested
            
        }

     }

    get client() {
        return this._clientType
    }

    get fees() {
        return this._fees
    }

    get amountLimit() {
        return this._amoutLimit
    }

    get installmentsLimit() {
        return this._installmentsLimit
    }

    get amountRequested() {
        return this._amountRequested
    }

    get installmentsRequested() {
        return this._installmentsRequested
    }

    get acceptedorDenied() {
        return this._acceptedorDenied
    }

    get amountIndebted() {
        return this._amountIndebted
    }

    get installmentsValue() {
        return this._installmentsValue
    }


}