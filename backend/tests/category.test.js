import app from '../index.js'; // Assuming your Express app is in 'app.js'
import request from 'supertest';
import { expect } from 'chai';
import {
    jwt, categoryId,
    updatedCategoryName
} from '../utils/data.js';

describe('POST /api/category', () => {
    it('should create a new category', (done) => {
        const categoryName = 'Test Category';

        request(app)
            .post('/api/category')
            .send({ name: categoryName })
            .set('Cookie', [`jwt=${jwt}`])
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);

                expect(res.body.name).to.equal(categoryName);
                done();
            });
    });

    it('should handle missing category name', (done) => {
        request(app)
            .post('/api/category')
            .set('Cookie', [`jwt=${jwt}`])
            .expect(400)
            .end(done);
    });
    it('should update an existing category', async () => {


        const response = await request(app)
            .put(`/api/category/${categoryId}`)
            .send({ name: updatedCategoryName })
            .set('Cookie', [`jwt=${jwt}`]);

        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('name').equal(updatedCategoryName);
    });
});
