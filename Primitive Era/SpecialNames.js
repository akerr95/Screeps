/**
 * Created by akerr on 23/06/2016.
 */
var Country = (function () {
    var my = {};

    my.Capital = "Jamaica";
    my.energyMiner = {
        body: [WORK, MOVE, CARRY],
        memory: {role: "Energy Miner"}
    };
    my.guard = {
        body: [TOUGH, MOVE, ATTACK],
        role: "Death Trooper"
    };
    return my;
}());

module.exports = Country;