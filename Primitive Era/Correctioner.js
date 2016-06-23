/**
 * Created by akerr on 23/06/2016.
 */
function StructureSpawnError(){
    var temp = Error.apply(this,arguments);
    temp.name = this.name = 'Structure Spawn Error';
    this.stack = temp.stack;
    this.message = temp.message;
}

StructureSpawnError.prototype = Object.create(Error.prototype,{
    constructor: {
        value: MyError,
        writable: true,
        configurable: true
    }
});