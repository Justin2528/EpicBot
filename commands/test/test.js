
module.exports = {
    name: "test",
    category: "test",
    description: "testing testing 123",
    run: async (client, message, args) => {
      
        message.channel.send("Aye! it worked!")
    }
}