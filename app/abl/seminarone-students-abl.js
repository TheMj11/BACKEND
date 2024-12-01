"use strict";
const { DaoFactory, ObjectStoreError } = require("uu_appg01_server").ObjectStore;
const { Schemas } = require("./constant.js");
const { Validator } = require("uu_appg01_server").Validation;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const Errors = require("../api/errors/seminarone-students-error.js");

const WARNINGS = {
    createUnsupportedKeys: {
        code: `${Errors.Create.UC_CODE}unsupportedKeys` ,
    },

    listUnsupportedKeys: {
        code: `${Errors.List.UC_CODE}unsupportedKeys` ,
    },
    
    updateUnsupportedKeys: {
        code: `${Errors.List.UC_CODE}unsupportedKeys` ,
    },
    
    createUnsupportedKeys: {
        code: `${Errors.List.UC_CODE}unsupportedKeys` ,
    },
};

class SeminaroneStudentsAbl {

    constructor() {
        this.validator = Validator.load();
        this.dao = DaoFactory.getDao(Schemas.STUDENT);
    }

    async create(awid, dtoIn, session, authorizationResult) {
        let validationResult = this.validator.validate("createDtoInType", dtoIn);

        let uuAppErrorMap = ValidationHelper.processValidationResult(
            dtoIn,
            validationResult,
            WARNINGS.createUnsupportedKeys.code,
            Errors.Create.InvalidDtoIn
        );

        const uuObject = {
            ...dtoIn,
            awid,
            uuIdentity: session.getIdentity().getUuIdentity(),
            uuIdentityName: session.getIdentity().getName(),
          };

        try {
            var student = await this.dao.create(uuObject);
        } catch (e) {
            throw e;
        }

        return {
            id: student.id,
            dtoIn,
            uuAppErrorMap: uuAppErrorMap,
        };
    }

    async list (awid, dtoIn){
        let validationResult = this.validator.validate("listDtoInType", dtoIn);

        let uuAppErrorMap = ValidationHelper.processValidationResult(
            dtoIn,
            validationResult,
            WARNINGS.listUnsupportedKeys.code,
            Errors.List.InvalidDtoIn
        );

        let list = await this.dao.list(awid);

        return{
            awid: awid,
            list,
            dtoIn,
            uuAppErrorMap: uuAppErrorMap,
        };
    }

    async get (awid, dtoIn){
        let validationResult = this.validator.validate("getDtoInType", dtoIn);

        let uuAppErrorMap = ValidationHelper.processValidationResult(
            dtoIn,
            validationResult,
            WARNINGS.listUnsupportedKeys.code,
            Errors.List.InvalidDtoIn
        );

        const item = await this.dao.get(awid, dtoIn.id);
        if (!item) {
            throw new Errors.Delete.StudentDoesNotExists({ uuAppErrorMap }, { studentId: dtoIn.id });
        }

        return{
            item,
            dtoIn
        };
    }

    async update (awid, dtoIn){
        let validationResult = this.validator.validate("updateDtoInType", dtoIn);

        let uuAppErrorMap = ValidationHelper.processValidationResult(
            dtoIn,
            validationResult,
            WARNINGS.createUnsupportedKeys.code,
            Errors.Update.InvalidDtoIn
        );

        const student = await this.dao.get(awid, dtoIn.id);
        if (!student) {
          throw new Errors.Update.StudentDoesNotExists({ uuAppErrorMap }, { studetnId: dtoIn.id });
        }

        await this.dao.updateById(awid, dtoIn.id, dtoIn);

        return {
            dtoIn,
            uuAppErrorMap: uuAppErrorMap,
        };
    }
    async delete (awid, dtoIn){
        const student = await this.dao.get(awid, dtoIn.id);
        if (!student) {
            throw new Errors.Delete.StudentDoesNotExists({ uuAppErrorMap }, { studentId: dtoIn.id });
        }

        await this.dao.deleteById(awid, dtoIn.id);

        return {
            deleted: "true"
        };
    }
}

module.exports = new SeminaroneStudentsAbl();