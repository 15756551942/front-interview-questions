//原型链继承
// function SuperType(){

// }

// function SubType(){

// }

// SubType.prototype = new SuperType()

// var instance = new SubType()

//借用构造函数继承
// function SuperType(){

// }

// function SubType(){
//     SuperType.call(this)
// }

// var instance = new SubType()

//组合继承
// function SuperType(){

// }

// function SubType(){
//     SuperType.call(this)
// }

// SubType.prototype = new SuperType()
// SubType.prototype.constructor = SubType

// var instance = new SubType()

//原型式继承
//
function object(o) {
    function F() {}
    F.prototype = o
    return new F()
}
//寄生式继承
// function createAnother(o) {
//     var clone = object(o)
//     clone.say = function() {

//     }
//     return clone
// }

//寄生组合式继承
function inheritePrototype(super,sub) {
    var prototype = super.prototype
    prototype.constructor = sub
    sub.prototype = prototype
}

function SuperType(){

}

function SubType(){
    SuperType.call(this)
}

inheritePrototype(SuperType,SubType)

var instance = new SubType()