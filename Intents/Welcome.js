var Welcome = function(Context){
    Context.assistant
    .say("Hello!")
    .pause("500ms")
    .say("Welcome to my application")
    .finish()
}

module.exports = Welcome;