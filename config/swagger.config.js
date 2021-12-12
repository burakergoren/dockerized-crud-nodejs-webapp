var swaggerJsdoc = require("swagger-jsdoc");
var swaggerUi = require("swagger-ui-express");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Nodejs Rest CRUD API with Swagger",
            version: "0.1.0",
            description:
                "This is a sample Rest CRUD API project using Node.js, Express, Pug, MongoDb, Swagger, Mocha & Chai for testing",
            license: "",
            contact: {
                name: "Burak Ergoren",
                url: "https://www.linkedin.com/in/burakergoren/"
            },
        },
        servers: [
            {
                url: "http://localhost:3000",
            },
        ],
    },
    apis: ["./routes/user.routes.js"],
};

const swaggerSpecs = swaggerJsdoc(options);

exports.swaggerSpecs = swaggerSpecs;
exports.swaggerUi = swaggerUi; 
