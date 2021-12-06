
/**
 * @swagger
 * /getUsers:
 *   get:
 *     summary: Retrieve a list of users.
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The user ID.
 *                         example: 0
 *                       username:
 *                         type: string
 *                         description: The user's name.
 *                         example: buraker
 *                       password:
 *                         type: string
 *                         description: The user's password.
 *                         example: 24af3535      
 *                       email:
 *                         type: string
 *                         description: The user's email.
 *                         example: test@example.com
 * 
 * 
 * /getUserById/{id}:
 *   get:
 *     summary: Retrieve a single user by id.
 *     description: Retrieve single user from JSONPlaceholder. 
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *     responses:
 *       200:
 *         description: Retrieve selected id user.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The user ID.
 *                         example: 0
 *                       username:
 *                         type: string
 *                         description: The user's name.
 *                         example: buraker
 *                       password:
 *                         type: string
 *                         description: The user's password.
 *                         example: 24af3535         
 *                       email:
 *                         type: string
 *                         description: The user's email.
 *                         example: test@example.com
 * 
 * 
 * 
 * 
 * /getUserByName/{username}:
 *   get:
 *     summary: Retrieve a single user by name.
 *     description: Retrieve single user by name from JSONPlaceholder. 
 *     parameters:
 *       - in: path
 *         name: username
 *         required: true
 *         description: Name of the user to retrieve.
 *     responses:
 *       200:
 *         description: Retrieve selected named user.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The user ID.
 *                         example: 0
 *                       username:
 *                         type: string
 *                         description: The user's name.
 *                         example: buraker
 *                       password:
 *                         type: string
 *                         description: The user's password.
 *                         example: 24af3535        
 *                       email:
 *                         type: string
 *                         description: The user's email.
 *                         example: test@example.com
 *  
 * /addUser:
 *   post:
 *     summary: Create a user.
 *     description: post request body as json and create user. 
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: The user's name.
 *                 example: buraker
 *               password:
 *                 type: string
 *                 description: The user's password.
 *                 example: 24af3535
 *               email:
 *                 type: string
 *                 description: The user's email.
 *                 example: test@example.com
 *     responses:
 *       200:
 *         description: request body post successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The user ID.
 *                         example: 0
 *                       username:
 *                         type: string
 *                         description: The user's name.
 *                         example: buraker
 *                       password:
 *                         type: string
 *                         description: The user's password.
 *                         example: password        
 *                       email:
 *                         type: string
 *                         description: The user's email.
 *                         example: test@example.com
 *  
 * 
 * /editUserById/{id}:
 *   put:
 *     summary: Edit user by id.
 *     description: edit selected user by id and post request body as json. 
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: the id of user to be edited
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: The user's name.
 *                 example: buraker
 *               password:
 *                 type: string
 *                 description: The user's password.
 *                 example: 24af3535
 *               email:
 *                 type: string
 *                 description: The user's email.
 *                 example: test@example.com
 *     responses:
 *       200:
 *         description: selected id user is edited as request body.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The user ID.
 *                         example: 0
 *                       username:
 *                         type: string
 *                         description: The user's name.
 *                         example: buraker
 *                       password:
 *                         type: string
 *                         description: The user's password.
 *                         example: 24af3535        
 *                       email:
 *                         type: string
 *                         description: The user's email.
 *                         example: test@example.com
 * 
 * 
 * /editUserByName/{username}:
 *   put:
 *     summary: Edit user by username.
 *     description: edit selected user by name and post request body as json. 
 *     parameters:
 *       - in: path
 *         name: username
 *         required: true
 *         description: the name of user to be edited
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: The user's name.
 *                 example: buraker
 *               password:
 *                 type: string
 *                 description: The user's password.
 *                 example: 24af3535
 *               email:
 *                 type: string
 *                 description: The user's email.
 *                 example: test@example.com
 *     responses:
 *       200:
 *         description: selected named user is edited as request body.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The user ID.
 *                         example: 0
 *                       username:
 *                         type: string
 *                         description: The user's name.
 *                         example: buraker
 *                       password:
 *                         type: string
 *                         description: The user's password.
 *                         example: 24af3535         
 *                       email:
 *                         type: string
 *                         description: The user's email.
 *                         example: test@example.com
 * 
 * 
 * /deleteUserById/{id}:
 *   delete:
 *     summary: Delete user by id.
 *     decription: Selected id user is going to be deleted from db.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: the id of user to be deleted
 *     responses:
 *       200:
 *         description: selected id user is deleted.
 */

module.exports = (app) => {
  const User = require("../controllers/user.controller.js");
  const bodyParser = require('body-parser');
  app.use(bodyParser.urlencoded({ extended: false }));

  app.get("/getUserByName/:username", User.findUserByName);
  app.get("/getUserById/:id", User.findUserById);
  app.get("/getUsers", User.findUsers);
  app.post("/addUser", User.createNewUser);
  app.put("/editUserByName/:username", User.updateByName);
  app.put("/editUserById/:id", User.updateById);
  app.delete("/deleteUserById/:id", User.deleteUserById);
};
