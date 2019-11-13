import request from 'supertest';
import app from '../../src/app';

describe('User', () => {
    it('should be able to register', async () => {
        const response = await request(app)
            .post('/api/users')
            .send({
                name: 'Lucas',
                email: 'lucas@gmail.com',
                password: '1234'
            });

        expect(response.body).toHaveProperty('id');
    });
});
