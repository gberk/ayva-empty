DefaultStateProvider = function(){
    return {
        getState: () => {
            return new Promise((resolve, reject) =>{
                return resolve("default")
            }) 
        }
    }
}()

module.exports = DefaultStateProvider;