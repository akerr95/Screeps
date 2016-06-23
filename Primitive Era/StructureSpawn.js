/**
 * Created by akerr on 23/06/2016.
 */
var Country = require('SpecialNames'),
    _=require('lodash');


var Spawn = (function () {
    var spawnFeature = {};

    spawnFeature.FindHQ = function () {
        var possibleHeadQuarters = Game.spawns;
        var headQuarter;

        if (_.isEmpty(possibleHeadQuarters)) {
            throw new Error('Spawn location was not found.');
        } else {
            for (var hqo in possibleHeadQuarters) {

                if (possibleHeadQuarters.hasOwnProperty(hqo)) {
                    if (hqo === Country.Capital) {
                        headQuarter = hqo;
                    }
                }
            }
            return Game.spawns[headQuarter];
        }

    };

    spawnFeature.CreateEnergyMiner = function (location) {
        var location = location || spawnFeature.FindHQ();
        var energyEngineer= Country.energyMiner;

        if (!location.canCreateCreep(energyEngineer.body)) {
            location.createCreep(energyEngineer.body, "", energyEngineer.memory);
        } else {
            console.log("Either no energy or something currently being spawned. ");
        }
    };

    spawnFeature.CreateDeathTroop = function (location) {
        var guard =  Country.guard;
        var location = location || spawnFeature.FindHQ();

        if (!location.canCreateCreep(guard.body)) {
            location.createCreep(guard.body, "", guard.role);
        } else {
            console.log("Error Code: " + location.canCreateCreep(guard.body));
        }
    }
    return spawnFeature;
}());
module.exports = Spawn;