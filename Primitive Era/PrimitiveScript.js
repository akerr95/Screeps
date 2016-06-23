
// Green Light

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


//Green Light


//Green Light



