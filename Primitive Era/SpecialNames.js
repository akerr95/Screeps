/**
 * Created by akerr on 23/06/2016.
 */
var Country = (function () {
    var my = {};

    my.Occupation = {
        eMin: 'Energy Miner',
        Gua:'Guard'
    };
    my.Capital = "Spawn1";
    my.energyMiner = {
        body: [WORK, MOVE, CARRY],
        memory: {role:Occupation.energyMiner}
    };
    my.guard = {
        body: [TOUGH, MOVE, ATTACK],
        memory: {role:Occupation.Gua}
    };
    return my;
}());

module.exports = Country;