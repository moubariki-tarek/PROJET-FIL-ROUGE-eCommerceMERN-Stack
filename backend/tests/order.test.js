import app from '../index.js'; // Assuming your Express app is in 'app.js'
import request from 'supertest';
import { expect } from 'chai';
import {
    jwt, categoryId,
    updatedCategoryName
} from '../utils/data.js';


describe('ORDER Routes', () => {


    describe('total-orders', () => {
        it('total-orders', async () => {
            const response = await request(app)
                .get('/api/orders/total-orders')
                .set('Cookie', [`jwt=${jwt}`]);

            expect(response.status).to.equal(200);
        });
    });
    describe('total-sales', () => {
        it('total-sales', async () => {
            const response = await request(app)
                .get('/api/orders/total-sales')
                .set('Cookie', [`jwt=${jwt}`]);

            expect(response.status).to.equal(200);
        });
    });

});