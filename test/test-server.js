var chai = require('chai');
var should = chai.should();
var chaiHttp = require('chai-http');
var server = require('../server')
var User = require("../models/user");
var sleep = require('sleep');
chai.use(chaiHttp);
var mockUser;


describe('User crud unit tests', () => {

    User.collection.drop();

    beforeEach((done) => {
        mockUser = new User({
            username: 'test',
            password: 'data',
            email: 'testdata'
        });
        mockUser.save(function (err) {
            done();
        });
        sleep.sleep(5)
    });

    afterEach((done) => {
        User.collection.drop();
        done();
    });

    describe('/getUsers', () => {
        it('should list ALL users', (done) => {
            chai.request(server)
                .get('/getUsers')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.should.be.json;
                    res.body.should.be.a('array');
                    res.body[0].should.have.property('_id');
                    res.body[0].should.have.property('username');
                    res.body[0].should.have.property('password');
                    res.body[0].should.have.property('email');
                    res.body[0].username.should.equal(mockUser.username);
                    res.body[0].password.should.equal(mockUser.password);
                    res.body[0].email.should.equal(mockUser.email);
                    done();
                });
        });
    });

    describe('/getUserByName', () => {
        it('should list user with name', (done) => {
            chai.request(server)
                .get('/getUserByName/' + mockUser.username)
                .end((err, res) => {
                    console.log('user found with name: ' + mockUser.username)
                    res.should.have.status(200);
                    res.should.be.json;
                    res.body.should.have.property('_id');
                    res.body.should.have.property('username');
                    res.body.should.have.property('password');
                    res.body.should.have.property('email');
                    res.body.username.should.equal(mockUser.username);
                    res.body.password.should.equal(mockUser.password);
                    res.body.email.should.equal(mockUser.email);
                    done();
                });
        });
    });

    describe('/getUserById', () => {
        it('should list user with id', (done) => {
            chai.request(server)
                .get('/getUserById/' + mockUser.id)
                .end((err, res) => {
                    console.log('user found with id: ' + mockUser.id)
                    res.should.have.status(200);
                    res.should.be.json;
                    res.body.should.have.property('_id');
                    res.body.should.have.property('username');
                    res.body.should.have.property('password');
                    res.body.should.have.property('email');
                    res.body.username.should.equal(mockUser.username);
                    res.body.password.should.equal(mockUser.password);
                    res.body.email.should.equal(mockUser.email);
                    done();
                });
        });
    });


    describe('/deleteUserById', () => {
        it('should delete user with id', (done) => {
            chai.request(server)
                .delete('/deleteUserById/' + mockUser.id)
                .end((err, res) => {
                    console.log('user found with id: ' + mockUser.id)
                    res.should.have.status(200);
                    res.text.match('user deleted with id:' + mockUser.id)
                    done();
                });
        });
    });

    describe('/addUser', () => {
        it('should add user', (done) => {
            chai.request(server)
                .post('/addUser')
                .set('content-type', 'application/x-www-form-urlencoded')
                .send(
                    {
                        'username': 'user',
                        'password': 'pass',
                        'email': 'mail'
                    })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.should.be.json;
                    res.body.should.have.property('_id');
                    res.body.should.have.property('username');
                    res.body.should.have.property('password');
                    res.body.should.have.property('email');
                    res.body.username.should.equal('user');
                    res.body.password.should.equal('pass');
                    res.body.email.should.equal('mail');
                    done();
                });
        });
    });

    describe('/editUserById', () => {
        it('should edit user', (done) => {
            chai.request(server)
                .put('/editUserById/' + mockUser.id)
                .set('content-type', 'application/x-www-form-urlencoded')
                .send(
                    {
                        'username': 'user'
                    })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.should.be.json;
                    res.body.should.have.property('_id');
                    res.body.should.have.property('username');
                    res.body.should.have.property('password');
                    res.body.should.have.property('email');
                    res.body.username.should.equal('user');
                    res.body.password.should.equal(mockUser.password);
                    res.body.email.should.equal(mockUser.email);
                    done();
                });
        });
    });

    describe('/register', () => {
        it('should register user', (done) => {
            chai.request(server)
                .post('/register')
                .set('content-type', 'application/x-www-form-urlencoded')
                .send(
                    {
                        'username': 'user',
                        'password': 'pass',
                        'email': 'mail'
                    })
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });
});