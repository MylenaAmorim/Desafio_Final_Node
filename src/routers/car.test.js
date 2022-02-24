const app = require('../server');
const request = require('supertest')

describe('teste da rota de carros', ()=>{
    it('deve retornar valores', async ()=>{
        const res = await request(app).get('/api/v1/car')

        expect(res.body).toHaveProperty('name')
    })
})