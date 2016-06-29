/**
 * Created by akerr on 23/06/2016.
 */

var spawn=require('StructureSpawn'),
    civ = require('CivilizationFunctions'),
    country = require('SpecialNames');

var isStructure=false;

var miner = {
    isMinerNeeded:true,
    ProduceMiner: function (){
        var occup = civ.Occupants(country.Occupation.eMin).length;

        if ( (occup >= 0) && (occup <=2)){
            try{
                spawn.CreateEnergyMiner();
            }catch(e){
                console.log(e.message);
            }finally {
                isStructure = false;
            }
        }
    },

}


var start = function (){
    miner.MinerControll();
}


module.exports= start;