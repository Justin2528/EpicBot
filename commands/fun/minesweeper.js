const Discord = require('discord.js');
const Minesweeper = require('discord.js-minesweeper');
module.exports = {
    name: "minesweeper",
    category: "fun",
    description: "Game of Minesweeper",
     usage: "<rows> <columns> <mines>",
 aliases: ["ms"],
    run: async (client, message, args,ops) => {
let ok1 = require("../../boop.json");
        let chance = Math.floor(Math.random() * (100 - 1 + 1) + 1);
let ok2 = ok1.ads
      let ok3 = ok2[Math.floor(Math.random() * ok2.length)]
         if (chance < 30) {
        message.channel.send(ok3)
         }
      
 const rows = parseInt(args[0]);
    const columns = parseInt(args[1]);
    const mines = parseInt(args[2]);
 
    if (!rows) {
      return message.channel.send(':warning: Please provide the number of rows.');
    }
 
    if (!columns) {
      return message.channel.send(':warning: Please provide the number of columns.');
    }
 
    if (!mines) {
      return message.channel.send(':warning: Please provide the number of mines.');
    }
 
    const minesweeper = new Minesweeper({ rows, columns, mines });
    const matrix = minesweeper.start();
 
    return matrix
      ? message.channel.send(matrix)
      : message.channel.send(':warning: You have provided invalid data.');
    }
}
