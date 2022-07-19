const Router = require('@koa/router');
require('module-alias/register');
const { isAuthenticated } = require('@root/auth');
const { getCharacteristicsList, 
    createCharacteristics, 
    getCharacteristicById, 
    udpateCharacteristicById, 
    deleteCharacteristicById } = require('@root/controllers/characteristics');

const router = new Router();

router.get('/', getCharacteristicsList);
router.post('/profile', createCharacteristics);
router.get('/:characteristic_id', getCharacteristicById);
router.put('/:characteristic_id', udpateCharacteristicById);
router.delete('/:characteristic_id', deleteCharacteristicById);

module.exports = router;