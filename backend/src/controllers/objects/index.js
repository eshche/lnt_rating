const getObjectsList = require('./getObjectsList');
const createObject = require('./createObject');
const getObjectById = require('./getObjectById');
const udpateObjectById = require('./updateObjectById');
const deleteObjectById = require('./deleteObjectById');
const getObjectCharacteristics = require('./getObjectCharacteristics');
const addObjectCharacteristics = require('./addObjectCharacteristics');
const getObjectsRanks = require('./getObjectsRanks');
const addRankByCharacteristic = require('./addRankByCharacteristic');
const deleteObjectsCharacteristic = require('./deleteObjectsCharacteristic');
const getRankAverage = require('./getRankAverage');

module.exports = {
    getObjectsList,
    createObject,
    getObjectById,
    udpateObjectById,
    deleteObjectById,
    getObjectCharacteristics,
    addObjectCharacteristics,
    getObjectsRanks,
    addRankByCharacteristic,
    deleteObjectsCharacteristic,
    getRankAverage
}

