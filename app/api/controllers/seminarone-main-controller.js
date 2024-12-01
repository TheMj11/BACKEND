"use strict";
const SeminaroneMainAbl = require("../../abl/seminarone-main-abl.js");

class SeminaroneMainController {
  init(ucEnv) {
    return SeminaroneMainAbl.init(ucEnv.getUri(), ucEnv.getDtoIn(), ucEnv.getSession());
  }

  load(ucEnv) {
    return SeminaroneMainAbl.load(ucEnv.getUri(), ucEnv.getSession());
  }

  loadBasicData(ucEnv) {
    return SeminaroneMainAbl.loadBasicData(ucEnv.getUri(), ucEnv.getSession());
  }
}

module.exports = new SeminaroneMainController();
