const request = require("supertest")
const {expect } = require ('chai')

describe('Login', () => {
    describe ('POST/LOGIN', () => {
        it('Deve retornar 200 com tokem em string quando usar credenciais validas', async ()=> {
            const resposta = await request ('http://localhost:3000')
                .post('/login')
                .set('Content-Type', 'application/json')
                .send({
                    'username': 'leo',
                    'senha': '1234'
                })
            //mostra somente o conteudo e o status da variavel resposta
            console.log(resposta.status);
            console.log(resposta.body)

            expect (resposta.status).to.equal(200);
            expect (resposta.body.token).to.be.a('string');
        })

    })
})