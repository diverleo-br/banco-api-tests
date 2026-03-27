const request = require("supertest")
const {expect } = require ('chai')
require('dotenv').config()
const { obterToken } = require('../helpers/autenticacao.js')


describe ('Transferências', () =>{
    describe('POST /transferencias', () => {
        let token
        beforeEach (async () => {
            token = await obterToken('leo','1234')

        })
        it ('Deve retornar sucesso 201 quando o valor da transferencia for igual ou acima de R$ 10,00', async () => {
            //apos mudanca no cod usamos o comando para chamar o helpers (funcao passando user e senha)
        //cod antes da melhoria de helpers
        //     const respostaLogin = await request (process.env.BASE_URL)
        //         .post('/login')
        //         .set('Content-Type', 'application/json')
        //         .send({
        //             'username': 'leo',
        //             'senha': '1234'
        //         })
        //     const token = respostaLogin.body.token

            const resposta = await request (process.env.BASE_URL)
            .post('/transferencias')
            .set('Content-Type', 'application/json')
            .set('Authorization', 'Bearer ' + token)
            .send({
                contaOrigem: 2,
                contaDestino: 3,
                valor: 11,
                token: ""
                })
            expect(resposta.status).to.equal(201)

            console.log(resposta.body)
        })

        it ('Deve retornar falha 422 quando o valor da transferencia for abaixo de R$ 10,00', async () => {
            //  const respostaLogin = await request ('http://localhost:3000')
            //     .post('/login')
            //     .set('Content-Type', 'application/json')
            //     .send({
            //         'username': 'leo',
            //         'senha': '1234'
            //     })
            // const token = respostaLogin.body.token

            const resposta = await request ('http://localhost:3000')
            .post('/transferencias')
            .set('Content-Type', 'application/json')
            .set('Authorization', 'Bearer ' + token)
            .send({
                contaOrigem: 2,
                contaDestino: 3,
                valor: 7,
                token: ""
                })
            expect(resposta.status).to.equal(422)

            console.log(resposta.body)

    })

    })
} )