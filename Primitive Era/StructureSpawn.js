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
    return spawnFeature;
}());
module.exports = Spawn;