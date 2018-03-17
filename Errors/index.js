// Ayva State manager
var Ayva = require('ayva')
var StateManager = Ayva.StateManager

var InactiveIntentErrorHandler = function(Context){
    StateManager.getState(Context).then(function(state) {
        Context.assistant.say("This command is currently not available.").finish()
    })
    
}


module.exports = {
    "InactiveIntentError": InactiveIntentErrorHandler,
}

