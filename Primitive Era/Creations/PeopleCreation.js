/**
 * Created by akerr on 24/06/2016.
 */
var Society = require('SpecialNames');
function Creep(options) {
    this.person = options || Society.shield;
    CreateCreep(this.person);
}


function CreateCreep(person) {
    var code = location.canCreateCreep(person.body);
    if (code === OK) {
        location.createCreep(person.body, "", person.memory);
    } else {
        throw new Error('Problem with creating ' + person.memory.title + ' Error Code: ' + code);
    }
}
function CreatePersonFactory() {
    CreatePersonFactory.prototype.createPerson = function (person) {
        var parentclass = null;
        if (person.hasOwnProperty(memory)) {
            switch (person.memory.role) {
                case Society.Occupation.eMin:
                    try {
                        parentclass = Creep;
                    }
                    catch (e) {
                        console.log(e.message);
                    }
                    break;
                case Society.Occupation.gua:
                    try {
                        parentclass = Creep;
                    }
                    catch (e) {
                        console.log(e.message);
                    }
                    break;
                default:
                    try {
                        parentclass = Creep;
                    }
                    catch (e) {
                        console.log(e.message);
                    }
                    break;
            }
        }
        return new parentclass(options);
    }
}

module.exports = {Create: CreatePersonFactory};



// function getSource() {
//     var sourceList = [];
//     var source;
//     for (var i in Game.rooms) {
//         source = Game.rooms[i].find(FIND_SOURCES);
//     }
//
//     for (var i = 0; i < source.length; i++) {
//
//         sourceList.push(source[i].pos);
//     }
//
//     return sourceList;
// }
// function randompos(decrease) {
//     var maxDistance =10;
//     var minDistance = 5;
//     var pos = {x: 0, y: 0};
//     if (((maxDistance + list[0].x) >= 50) && ((maxDistance + list[0].y) >= 50)) {
//         maxDistance -= decrease;
//         minDistance -= decrease;
//     }
//
//     pos.x = Math.floor(Math.random() * ((maxDistance + list[0].x) - (minDistance + list[0].x) + 1)) + min;
//     pos.y = Math.floor(Math.random() * ((maxDistance + list[0].x) - (minDistance + list[0].x) + 1)) + min;
//     return pos;
// }
//
// function bestSpot() {
//     var maxDistance = 10;
//     var minDistance = 5;
//     var list = getSource();
//
//     //TODO Details to determine viable spot needs more thought
// }
// function Spawn(options) {
//     this.base = options ||
//         CreateSpawn(this.base);
// }
//
//
// function CreateSpawn(spawn) {
//
//     var code = createConstructionSite(spawn.pos, STRUCTURE_SPAWN);
//     if (code !== OK) {
//         throw new Error('Problem with creating ' + spawn.name + ' Error Code: ' + code);
//     }
// }