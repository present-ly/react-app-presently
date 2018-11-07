import axios from 'axios';
// CONSTANTS
const DOMAIN = 'http://localhost:1337';
const API = '/api/v1';
const MODEL = 'users';

export default class UserRepo {

    constructor() {
        this.baseUrl = `${DOMAIN}${API}/${MODEL}`;
        this.signUpUrl = `${DOMAIN}${API}/entrance/signup`;
        this.http = axios;
    }

    signUp(emailAddress, password, firstName, lastName) {
        const body = {
            emailAddress,
            firstName,
            lastName,
            password
        };
        console.log('signUp BODY', body);
        return this.http.post(this.signUpUrl, body);
    }

    fetch(userId) {
        return this.http.get(`${this.baseUrl}/${userId}`);
    }

    fetchMany(query, page) {
        return this.http.get(`${this.baseUrl}`);
    }
}
