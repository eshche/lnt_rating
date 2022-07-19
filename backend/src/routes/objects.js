const Router = require('@koa/router');
require('module-alias/register');
const { isAuthenticated } = require('@root/auth');
const { getObjectsList,
     createObject, 
     getObjectById, 
     udpateObjectById, 
     deleteObjectById, 
     getObjectCharacteristics,
     addObjectCharacteristics,
      getObjectsRanks, 
      addRankByCharacteristic, 
      deleteObjectsCharacteristic, 
      getRankAverage } = require('@root/controllers/objects');

const router = new Router();

router.get('/', getObjectsList);
router.post('/profile', createObject);
router.get('/:object_id', getObjectById);
router.put('/:object_id', udpateObjectById);
router.delete('/:object_id', deleteObjectById);
router.get('/:object_id/сharacteristics', getObjectCharacteristics)
router.post('/:object_id/сharacteristics', addObjectCharacteristics)
//router.get('/:object_id/сharacteristics/:сharacteristic_id', getObjectsRanks);
//router.post('/:object_id/сharacteristics/:сharacteristic_id', addRankByCharacteristic);
//router.delete('/:object_id/сharacteristics/:сharacteristic_id', deleteObjectsCharacteristic);
//router.get('/:object_id/сharacteristics/:id/average', getRankAverage);

module.exports = router;