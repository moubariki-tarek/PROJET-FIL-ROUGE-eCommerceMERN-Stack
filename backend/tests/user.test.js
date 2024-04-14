import app from '../index.js'; // Assuming your Express app is in 'app.js'
import request from 'supertest';
import { expect } from 'chai';
import {
    jwt, categoryId,
    updatedCategoryName
} from '../utils/data.js';

// describe('USER', async () => {
//     it('create User', async (done) => {
//         const email = 'test@gmail.com';


//         const response = await request(app)
//             .post('/api/users')
//             .send({ username: 'test', email: email, password: "123456" })
//             .set('Cookie', [`jwt=${jwt}`])

//         expect(response.status).to.equal(201);
//         expect(response.body).to.have.property('email').equal(email);
//     });


// });
describe('User Routes', () => {


    describe('LOGING', () => {
        it('loging', async () => {
            const userData = {
                email: 'admin@gmail.com',
                password: 'azerty'
            };

            const response = await request(app)
                .post('/api/users/auth')
                .send(userData);

            expect(response.status).to.equal(201);
            expect(response.body).to.have.property('email', 'admin@gmail.com');
        });
    });

    describe('LOGOUT', () => {
        it('logout', async () => {
            const response = await request(app)
                .post('/api/users/logout')

            expect(response.status).to.equal(200);
        });

    });
});