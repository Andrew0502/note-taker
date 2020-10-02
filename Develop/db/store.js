const util = require("util");
const fs = require("fs");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
    read(){
        return readFileAsync("Develop/db/db.json", "utf8");
    }
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
}

module.exports = new Store();
// my mic died again 
//  i will end it here..
// lmk how it goes, u can email me or slaack me
// ?other than that i will xzee you on our next session  :)

