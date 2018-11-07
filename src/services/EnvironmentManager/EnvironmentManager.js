// THIRD PARTY
import axios from 'axios';
// CUSTOM
import {
    ENVIRONMENTS,
    ENVIRONMENT_URLS
} from "./constants";


'./constants';
// CONSTANTS
const DEFAULT_TIMEOUT = 3000;
const DEFAULT_ENVIRONMENT = ENVIRONMENTS.PROD;

export default class EnvironmentManager {
    constructor(environment = DEFAULT_ENVIRONMENT, timeout = DEFAULT_TIMEOUT) {
        this.currentEnvironment = environment;
        this.currentApi = ENVIRONMENT_URLS[environment].api;
        this.timeout = timeout;
        this.http = axios.create({
            url: this.currentApi,
            timeout: timeout
        });
        this.headers = {};
    }

    setEnvironment(environment) {
        this.currentEnvironment = environment;
    }

    getEnvironment() {
        return this.currentEnvironment;
    }

    getApi() {
        return this.currentApi;
    }

    getHttpClient() {
        return this.http;
    }

    setAuthHeader(authToken) {
        this.headers.Authorization = `Bearer ${authToken}`;
    }

    getTimeout() {
        return this.timeout;
    }

    setTimeout(millaseconds) {
        this.timeout = millaseconds;
    }

    async testClient() {
        return await this.http.get('/users');
    }

    log() {
        console.log(`************************ ENVIRONMENT ************************
@@@@ HTTP @@@@
LIBRARY: axios
TIMEOUT: ${this.timeout}
AUTH HEADER: 
API: ${this.currentApi}
HTTP CLIENT: ${this.http}
`);
    }
}