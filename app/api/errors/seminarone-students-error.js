"use strict";
const SeminaroneMainUseCaseError = require("./seminarone-main-use-case-error.js");

const List = {
    UC_CODE: `${SeminaroneMainUseCaseError.ERROR_PREFIX}list/`,

    InvalidDtoIn: class extends SeminaroneMainUseCaseError {
        constructor() {
            super(...arguments);
            this.code = `${List.UC_CODE}invalidDtoIn`;
            this.message = "DtoIn is not valid.";
        }
    },
};

const Create = {
    UC_CODE: `${SeminaroneMainUseCaseError.ERROR_PREFIX}create`,

    InvalidDtoIn: class extends SeminaroneMainUseCaseError {
    constructor() {
        super(...arguments);
        this.code = `${Create.UC_CODE}invalidDtoIn`;
        this.message = "DtoIn is not valid.";
        }
    },

};const Update = {
    UC_CODE: `${SeminaroneMainUseCaseError.ERROR_PREFIX}update`,

    InvalidDtoIn: class extends SeminaroneMainUseCaseError {
    constructor() {
        super(...arguments);
        this.code = `${Update.UC_CODE}invalidDtoIn`;
        this.message = "DtoIn is not valid.";
        }
    },

    StudentDoesNotExists: class extends SeminaroneMainUseCaseError {
        constructor() {
            super(...arguments);
            this.code = `${Delete.UC_CODE}studentDoesNotExists`;
            this.message = "Student does not exists.";
            }
        },
};

const Delete = {
    UC_CODE: `${SeminaroneMainUseCaseError.ERROR_PREFIX}delete`,

    InvalidDtoIn: class extends SeminaroneMainUseCaseError {
    constructor() {
        super(...arguments);
        this.code = `${Delete.UC_CODE}invalidDtoIn`;
        this.message = "DtoIn is not valid.";
        }
    },

    StudentDoesNotExists: class extends SeminaroneMainUseCaseError {
        constructor() {
            super(...arguments);
            this.code = `${Delete.UC_CODE}studentDoesNotExists`;
            this.message = "Student does not exists.";
            }
        },
};
module.exports = {
    List,
    Create,
    Update,
    Delete
};