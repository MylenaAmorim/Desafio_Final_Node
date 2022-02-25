const app = require('../../app');
const request = require('supertest');
require('jest')

const peapleService = require('../../app/service/PeapleService');

describe('Teste da rota GET  de pessoas', () => {
    it('verificar status quando há pessoas ou não cadastradas', async () => {
        const existe = await peapleService.findAll();

        if (!existe) {
            const res = await request(app).get('/api/v1/peaple');
            expect(res.status).toEqual({
                "description": "Not Found",
                "name": "No car found"
            })
        } else {
            const res = await request(app).get('/api/v1/peaple');
            expect(res.status).toEqual(200);
        }
    });
})