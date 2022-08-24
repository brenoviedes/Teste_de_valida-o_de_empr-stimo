import bankLending from "./bankLending";

describe ('Retorna se o tipo de cliente é válido e seus perfis', () => {
    test('Testa de retorno do tipo do client standard', () =>{
        const lending = new bankLending()
        lending.clientType('standard')
        expect(lending.client).toBe('standard')
        expect(lending.fees).toBe(2.5)
        expect(lending.amountLimit).toBe(10000)
        expect(lending.installmentsLimit).toBe(12)
    })
    test('Testa de retorno do tipo do client platinum', () =>{
        const lending = new bankLending()
        lending.clientType('platinum')
        expect(lending.client).toBe('platinum')
        expect(lending.fees).toBe(1.99)
        expect(lending.amountLimit).toBe(50000)
        expect(lending.installmentsLimit).toBe(24)
    })
    test('Testa de retorno do tipo do client gold', () =>{
        const lending = new bankLending()
        lending.clientType('gold')
        expect(lending.client).toBe('gold')
        expect(lending.fees).toBe(1.2)
        expect(lending.amountLimit).toBe(250000)
        expect(lending.installmentsLimit).toBe(48)
    })
    test('Testa de retorno do tipo do client não encontrado', () =>{
        const lending = new bankLending()
        lending.clientType('abc')
        expect(lending.client).toBe('')
        expect(lending.fees).toBe(0)
        expect(lending.amountLimit).toBe(0)
        expect(lending.installmentsLimit).toBe(0)
    })
})

describe ('Simulação do empréstimo', () => {
    test('Testa se o empréstimo do client standard será aceito', () =>{
       const lending = new bankLending()
       lending.simulation('standard', 3000, 6)
       expect(lending.client).toBe('standard')
       expect(lending.amountRequested).toBe(3000)
       expect(lending.installmentsRequested).toBe(6)
       expect(lending.acceptedorDenied).toBe('Empréstimo aceito')
       expect(lending.amountIndebted.toFixed(0)).toBe('3450')
       expect(lending.installmentsValue.toFixed(0)).toBe('575')
    })

    test('Testa se o empréstimo do client standard será recusado', () =>{
        const lending = new bankLending()
        lending.simulation('standard', 15000, 13)
        expect(lending.client).toBe('standard')
        expect(lending.amountRequested).toBe(0)
        expect(lending.installmentsRequested).toBe(0)
        expect(lending.acceptedorDenied).toBe('Empréstimo negado')
    })

    test('Testa se o empréstimo do client platinum será aceito', () =>{
        const lending = new bankLending()
        lending.simulation('platinum', 40000, 18)
        expect(lending.client).toBe('platinum')
        expect(lending.amountRequested).toBe(40000)
        expect(lending.installmentsRequested).toBe(18)
        expect(lending.acceptedorDenied).toBe('Empréstimo aceito')
        expect(lending.amountIndebted).toBe(54328)
       expect(lending.installmentsValue.toFixed(2)).toBe('3018.22')
    })

    test('Testa se o empréstimo do client platinum será recusado', () =>{
         const lending = new bankLending()
         lending.simulation('platinum', 51000, 25)
         expect(lending.client).toBe('platinum')
         expect(lending.amountRequested).toBe(0)
         expect(lending.installmentsRequested).toBe(0)
         expect(lending.acceptedorDenied).toBe('Empréstimo negado')
    })

    test('Testa se o empréstimo do client gold será aceito', () =>{
        const lending = new bankLending()
        lending.simulation('gold', 230000, 40)
        expect(lending.client).toBe('gold')
        expect(lending.amountRequested).toBe(230000)
        expect(lending.installmentsRequested).toBe(40)
        expect(lending.acceptedorDenied).toBe('Empréstimo aceito')
        expect(lending.amountIndebted).toBe(340400)
       expect(lending.installmentsValue).toBe(8510)
    })

    test('Testa se o empréstimo do client gold será recusado', () =>{
        const lending = new bankLending()
        lending.simulation('gold', 554000, 72)
        expect(lending.client).toBe('gold')
        expect(lending.amountRequested).toBe(0)
        expect(lending.installmentsRequested).toBe(0)
        expect(lending.acceptedorDenied).toBe('Empréstimo negado')
    })
})
 