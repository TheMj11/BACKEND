"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class StudentMongo extends UuObjectDao {
    async createSchema() {
        await super.createIndex({ awid: 1 });
    }

    async get(awid, id) {
        return await super.findOne({ id, awid });
    }

    async list(awid) {
        const filter = { awid };
        // const sort = sorterList
        return await super.find(filter);
    }

    async updateSchema() {
        await super.updateIndex({ awid: 1 });
    }

    async deleteSchema() {
        await super.deleteIndex({ awid: 1 });
    }

    async deleteById(awid, id) {
        await super.deleteMany({ awid, id });
    }

    async create(uuObject) {
        return await super.insertOne(uuObject);
    }

    async updateById(awid, studentId, uuObject) {
        let filter = { id: studentId, awid: awid };
        return await super.findOneAndUpdate(filter, uuObject, "NONE");
    }
}

module.exports = StudentMongo;