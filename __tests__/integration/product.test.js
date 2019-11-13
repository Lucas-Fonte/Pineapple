import request from 'supertest';
import app from '../../src/app';

describe('Product', () => {
    it('should be able to register', async () => {
        const response = await request(app).get('/api/products');

        expect.arrayContaining(response.body);
    });
});
