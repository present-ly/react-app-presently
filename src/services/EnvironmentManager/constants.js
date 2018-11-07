const ENVIRONMENTS = {
    LOCAL: 'LOCAL',
    DEV: 'DEVELOPMENT',
    PROD: 'PRODUCTION'
};

const ENVIRONMENT_URLS = {
    "LOCAL": {
        "api": "http://localhost:1337/api/v1"
    },
    "DEVELOPMENT": {
        "api": "https://dev.api.present-ly.com/api/v1"
    },
    "PRODUCTION": {
        "api": "https://api.present-ly.com/api/v1"
    }
};

export {
    ENVIRONMENTS,
    ENVIRONMENT_URLS
};