"use strict";
const SeminaroneStudentsAbl = require("../../abl/seminarone-students-abl.js");

class SeminarStudentsController {

    get(ucEnv) {
        return SeminaroneStudentsAbl.get(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
    }

    list(ucEnv) {
        return SeminaroneStudentsAbl.list(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
    }

    create(ucEnv) {
        return SeminaroneStudentsAbl.create(ucEnv.getUri().getAwid(), ucEnv.parameters, ucEnv.session, ucEnv.getAuthorizationResult());
    } 
    
    update(ucEnv) {
        return SeminaroneStudentsAbl.update(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
    } 
    
    delete(ucEnv) {
        return SeminaroneStudentsAbl.delete(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
    }
}

module.exports = new SeminarStudentsController();