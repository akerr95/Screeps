/**
 * Created by akerr on 23/06/2016.
 */
var special = require('SpecialNames');
var CivFunctions = (function(){
    var civ = {};

    civ.Occupants= function (role) {
        var occupantsList=[];
        for (var i in Game.creeps){
            if(Memory.creeps[i].role === role){
                occupantsList.push(Game.creeps[i]);
            }
        }
    };
    function GoToStructure(pos,dest){
        var path;
        path = energyMiner.room.findPath(energyMiner.pos,
            energySource.pos);
        energyMiner.moveByPath(path);
    }
    function CheckComponentSize(component){

    }
    civ.BeginMining =function(energySource, headQuarters) {
        var path;
        var energyMiners = [];
        energyMiners=civ.Occupants(special.Occupants.eMin);

        energyMiners.forEach(function(energyMiner) {
            path = energyMiner.room.findPath(energyMiner.pos,
                energySource.pos);
            if (energyMiner.carryCapacity === energyMiner.carry.energy) {
                path = energyMiner.room.findPath(energyMiner.pos,
                    headQuarters.pos);
                if (path.length > 1) {
                    energyMiner.moveByPath(path);
                } else {
                    console.log(energyMiner.transfer(headQuarters, RESOURCE_ENERGY));
                }
                console.log(path);
                return;
            }
            if (path.length > 1) {
                energyMiner.moveByPath(path);
            } else {
                energyMiner.harvest(energySource);
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