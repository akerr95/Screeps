/**
 * Created by akerr on 24/06/2016.
 */
Memory.roomOne.location = [];


var memorySystem = {
    get CivSpawn() {
        if (Memory.roomOne.location.length > 0)
            return JSON.parse(Memory.roomOne.location[0]);
    },
    set CivSpawn(options) {
        var saveSpawn;
        try {
            var saveSpawn = JSON.stringify(options);
            Memory.roomOne.location.push(saveSpawn);
        }
        catch (e) {
            console.log(e.message);
        }
    }
};

/***
 * Spawn
 *  Name
 *  GameById
 ***/