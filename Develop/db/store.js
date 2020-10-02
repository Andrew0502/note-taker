const util = require("util");
const fs = require("fs");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
    read(){
        return readFileAsync("Develop/db/db.json", "utf8");
    }
    // write(){
    //     return writeFileAsync("Develop/db/db.json", parseSet); 
    // }
    getNotes(){
        return this.read().then((notes)=> {
            let parseNotes;
            try {
                parseNotes = [].concat(JSON.parse(notes))
            } catch (error) {
                parseNotes = [];
            } 
            return parseNotes;
        });
    }
    // setNotes(){
    //     return this.write().then((notes)=> {
    //         var parseSet;
    //         try{
    //             parseSet = [].concat(JSON.parse(notes))
    //         } catch (error){
    //             parseSet = []; 
    //         }
    //         return parseSet;
    //         });
    // }
}

module.exports = new Store();