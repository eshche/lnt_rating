const getCharacteristicsList = require('./getCharacteristicsList');
const createCharacteristics = require('./createCharacteristics');
const getCharacteristicById = require('./getCharacteristicById');
const udpateCharacteristicById = require('./updateCharacteristicById');
const deleteCharacteristicById = require('./deleteCharacteristicById');


module.exports = {
    getCharacteristicsList,
    createCharacteristics,
    getCharacteristicById,
    udpateCharacteristicById,
    deleteCharacteristicById
};