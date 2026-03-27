const request = require("supertest")
const {expect } = require ('chai')
require('dotenv').config()
const postLogin = require ('../fixtures/postLogin.json')

describe('Login', () => {
    describe ('POST/LOGIN', () => {
        it('Deve retornar 200 com tokem em string quando usar credenciais validas', async ()=> {
            const bodyLogin = {...postLogin}
            const resposta = await request (process.env.BASE_URL)
                .post('/login')
                .set('Content-Type', 'application/json')
                .send(bodyLogin)
            //mostra somente o conteudo e o status da variavel resposta
            console.log(resposta.status);
            console.log(resposta.body)

            expect (resposta.status).to.equal(200);
            expect (resposta.body.token).to.be.a('string');
        })

    })
})