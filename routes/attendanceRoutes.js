//const router = require('router');

const {getSingle, getMultiple, getClass, markSingle, markMultiple, updateSingle, updateMultiple, deleteSingle, deleteMultiple } = require('.././routes/controller/controller')
routing = (router) => {
    router.get('/getSingle/:id', getSingle)
      

    
    router.get('/getMultiple', getMultiple)
    

    
    router.get('/getClass/:id', getClass)
    
    router.post('/markSingle', markSingle)
    
    router.post('/markMultiple', markMultiple)
    
    router.put('/updateSingle/:id', updateSingle)
    
    router.put('/updateMultiple/:id', updateMultiple)
    
    
    router.delete('/deleteSingle/:id', deleteSingle)
    
    router.delete('/deleteMultiple/:id',deleteMultiple)

}



module.exports=routing;