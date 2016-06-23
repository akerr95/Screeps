/**
 * Created by akerr on 23/06/2016.
 */
var CivFunctions = (function(){
    var civ = {};
    civ.BeginWorkEnergyEng =function(energySource, headQuarters) {
        var path;
        var energyEngineers = [];
        for (var i in Game.creeps) {
            if (Memory.creeps[i].role === 'Energy Engineer') {
                energyEngineers.push(Game.creeps[i]);
            }
        }

        energyEngineers.forEach(function(energyEngineer) {
            path = energyEngineer.room.findPath(energyEngineer.pos,
                energySource.pos);
            if (energyEngineer.carryCapacity === energyEngineer.carry.energy) {
                path = energyEngineer.room.findPath(energyEngineer.pos,
                    headQuarters.pos);
                if (path.length > 1) {
                    energyEngineer.moveByPath(path);
                } else {
                    console.log(energyEngineer.transfer(headQuarters, RESOURCE_ENERGY));
                }
                console.log(path);
                return;
            }
            if (path.length > 1) {
                energyEngineer.moveByPath(path);
            } else {
                energyEngineer.harvest(energySource);
            }
        });
    }

    civ.DeathTroopEnemySearch = function (deathTroop){
        var enemy = deathtroop.room.find(FIND_HOSTILE_CREEPS);

        console.log(enemy);
    }

    civ.FindEnergySource= function(headQuarter){
        var sources = headQuarter.room.find(FIND_SOURCES);
        var targetSource;
        var closestposition;
        for (var source in sources){
            var tempComparison;
            if(sources.hasOwnProperty(source)){
                var stepsXRequired = headQuarter.pos.x - sources[source].pos.x;
                var stepsYRequired = headQuarter.pos.y - sources[source].pos.y;
                if(stepsYRequired < 0){
                    stepsYRequired*=-1;
                }
                if(stepsXRequired < 0){
                    stepsXRequired *=-1;
                }
                if(targetSource === undefined && closestposition === undefined){
                    targetSource = sources[source];
                    closestposition = stepsXRequired + stepsYRequired;
                }else{
                    tempComparison = stepsXRequired + stepsYRequired;
                    if(tempComparison< closestposition ){
                        targetSource = sources[source];
                        closestposition = tempComparison;
                    }
                }
            }
        }
        return targetSource;
    }

    return civ;
}());

module.exports = CivFunctions;