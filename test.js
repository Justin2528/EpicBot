const fs = require("fs");
fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err)
    


    
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0) {
        console.log("[LOGS] No Javascript Files. Nothing Loaded.")
    } 
    
    jsfile.forEach((f, i) => {
        let pull = require(`./commands/${f}`);
      console.log(`${f} loaded!`)
    })
});

console.log("COMPLETE!")