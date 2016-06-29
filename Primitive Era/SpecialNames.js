/**
 * Created by akerr on 23/06/2016.
 */
var Country = (function (update) {
    var my = {};
    my.Occupation = {
        eMin: 'Energy Miner',
        gua: 'Guard',
        selfEmployed: 'Jobless',
    };
    my.Title = {
        Elder: 'Leader',
        layman: 'person'
    };
    my.Capital = "Spawn1";
    my.energyMiner = {
        body: [WORK, MOVE, CARRY],
        memory: {
            role: my.Occupation.eMin,
            title: my.Title.layman
        }
    };
    my.guard = {
        body: [TOUGH, MOVE, ATTACK],
        memory: {
            role: my.Occupation.gua,
            title: my.Title.layman
        }
    };
    my.shield = {
        body: [TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, MOVE],
        memory: {
            role: my.Occupation.selfEmployed,
            title: my.Title.layman
        }
    };
    return my;
}(UpdatedNames));

module.exports = Country;