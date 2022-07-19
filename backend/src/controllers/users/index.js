const getUsers = require('./getUsers');
const getUserProfile = require('./getUserProfile');
const login = require('./login');
const register = require('./register');
const getUserById = require('./getUserById');
const updateUserById = require('./updateUserById');
const deleteUserById = require('./deleteUserById');


module.exports = {
    getUsers,
    getUserProfile,
    login, 
    register, 
    getUserById, 
    updateUserById, 
    deleteUserById
    
};