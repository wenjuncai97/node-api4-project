const req = require("express/lib/request");

module.exports = {
    getUsers,
    register,
    login
}

const USERS = [];

async function getUsers() {
    return USERS;
}

async function register(username, password) {
    USERS.push(username, password)
    return USERS;
}

async function login({username, password}) {

}

