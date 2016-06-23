
// Green Light
function CreateEnergyEngineer (headQuarter){
    var energyEngineer = {
      body:[WORK, MOVE, CARRY],
      memory:{role:"Energy Engineer"}
    };

    if(!headQuarter.canCreateCreep(energyEngineer.body)){
      headQuarter.createCreep(energyEngineer.body,"",energyEngineer.memory);
    }else{
      console.log("Error Code: " + headQuarter.canCreateCreep(energyEngineer.body));
    }
}
//Green Light
function FindEnergySource(headQuarter){
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

// Green Light
function FindHQ(){
    var possibleHeadQuarters= Game.spawns;
    var headQuarter;

    for (var possibleHeadQuarter in possibleHeadQuarters){
        if(possibleHeadQuarters.hasOwnpossibleHeadQuartererty(possibleHeadQuarter)){
            if(possibleHeadQuarter === "Alpha"){
                headQuarter = possibleHeadQuarter;
            }
        }
    }

  return Game.spawns[headQuarter];
}

//Green Light
function CreateDeathTroop(headQuarter){
  var energyEngineer = {
    body:[TOUGH, MOVE, ATTACK],
    role:"Death Trooper"
  };

  if(!headQuarter.canCreateCreep(energyEngineer.body)){
    headQuarter.createCreep(energyEngineer.body,"",energyEngineer.role);
  }else{
    console.log("Error Code: " + headQuarter.canCreateCreep(energyEngineer.body));
  }
}

//Green Light
function BeginWorkEnergyEng(energySource, headQuarters) {
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

function DeathTroopEnemySearch(deathTroop){
    var enemy = deathtroop.room.find(FIND_HOSTILE_CREEPS);

    console.log(enemy);
}
