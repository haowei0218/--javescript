var person = {}; //建立一個空物件
var person1 = {
         name: {
                  first: "bob", last: "smith"
         },
         age: 32,
         gender: "male",
         interests: ["music", "skiing"],
         bio: function () {
                  alert(this.name[0] + this.age);
         },
         greeting: function () {
                  alert("hi I'm" + this.name[0] + ".");
         }
}

//存取物件的屬性 點記法
person1.age;
person1.interests[1];
person1.bio();

//存取物件屬性 括弧記法
person1["age"] = person1.age;
person1["name"]["first"] = person1.name.first;

//設定物件屬性的值(更新)
person1.age = 45;
person1["name"]["first"] = "White";

/**建立物件的屬性 */
person1["color"] = "yellow";
person1.sayHello = function () {
         console.log("hello world");
}

//動態設定成員數值
var myDataName = "height";
var myDataValue = "1.75m";
person1[myDataName] = myDataValue;


//物件原型
function Person(first, last, age, gender, interests) {
         this.name = {
                  'first': first,
                  'last': last
         }
         this.age = age;
         this.gender = gender;
         this.interests = interests;

         this.bio = function () {
                  var string = this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years od . ';
                  var pronoun;
                  if (this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === "M") {
                           pronoun = "he likes";
                  } else if (this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
                           pronoun = "she likes";
                  } else {
                           pronoun = 'they like';
                  }
                  string += pronoun;
                  if (this.interests.length === 1) {
                           string += this.interests[0] + ".";
                  } else if (this.interests.length === 2) {
                           string += this.interests[0] + 'and' + this.interests[1] + '.';
                  } else {
                           for (let i = 0; i < this.interests.length; i++) {
                                    if (i === this.interests.length - 1) {
                                             string += 'and' + this.interests[i] + '.';

                                    } else {
                                             string += this.interests[i] + ',';
                                    }


                           }
                  }
                  alert(string);
         }
         this.greeting = function () {
                  alert('hi' + this.name.first + '.');
         }
}
let person1 = new Person('Tammi', 'Smith', 32, 'neutral', ['music', 'skiing', 'kickboxing']);


/**物件導向程式設計 */
class Person1 {
         constructor(name) {
                  this.personName = name;
         }
         name = this.personName;
         introdcceSelf() { }
         sayHello() {
                  console.log(`hi my name is ${this.name}`)
         }
}
class Professor extends Person1 {
         constructor(name, teaches) {
                  this.name = name;
                  this.teaches = teaches;
         }
         grade(paper) {
                  console.log(paper);
         }
         introduceSelf() { }

}

const walsh = new Professor("walsh", "psychology");
walsh.name;
walsh.introduceSelf();
walsh.grade('hello world');
walsh.sayHello();

class Student extends Person1 {
         #year; //私有資料屬性 此year僅能在此類內部使用
         constructor(name, year) {
                  super(name);
                  this.#year = year;
         }
         introduceSelf() {
                  console.log(`Hi! I'm ${this.name}, and I'm in year ${this.#year}`);
         }
         canStudyArchery() {
                  return this.#year > 1;
         }
}
const summers = new Student("summers", 2);
summers.introdcceSelf();
summers.canStudyArchery();
// summers.#year; 這行會報錯


2/**JSON是一種遵循Javascript物件語法的基於文字的資料格式 */
/**JSON結構 */
const Json = {
         "squadName": "Super hero squad",
         "homeTown": "Metro City",
         "formed": 2016,
         "secretBase": "Super tower",
         "active": true,
         "members": [
                  {
                           "name": "Molecule Man",
                           "age": 29,
                           "secretIdentity": "Dan Jukes",
                           "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
                  },
                  {
                           "name": "Madame Uppercut",
                           "age": 39,
                           "secretIdentity": "Jane Wilson",
                           "powers": [
                                    "Million tonne punch",
                                    "Damage resistance",
                                    "Superhuman reflexes"
                           ]
                  },
                  {
                           "name": "Eternal Flame",
                           "age": 1000000,
                           "secretIdentity": "Unknown",
                           "powers": [
                                    "Immortality",
                                    "Heat Immunity",
                                    "Inferno",
                                    "Teleportation",
                                    "Interdimensional travel"
                           ]
                  }
         ]
};
Json.members[1].age /**一樣使用物件的存取方式 */

/**JSON陣列 */
const JSON_Array = [
         {
                  "name": "Molecule Man",
                  "age": 29,
                  "secretIdentity": "Dan Jukes",
                  "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
         },
         {
                  "name": "Madame Uppercut",
                  "age": 39,
                  "secretIdentity": "Jane Wilson",
                  "powers": [
                           "Million tonne punch",
                           "Damage resistance",
                           "Superhuman reflexes"
                  ]
         }
]

/**物件的內建方法 */
/**Object.create()：建立一個新對象 使用現有對象作為新創建對象的原型*/
const person22 = {
         isHuman: false,
         printIntroduction: function () {
                  console.log(`my name is ${this.name} . Am I human? ${this.isHuman}`)
         }
}
const me = Object.create(person22);
me.name = "John";
me.isHuman = true;
me.printIntroduction();

/**使用Object.create()進行繼承 */
function shape() {
         this.x = 0;
         this.y = 0;
}
shape.prototype.move = function (x, y) {
         this.x += x;
         this.y += y;
         console.info("shape moved");
}
function Rectangle() {
         shape.call(this);
}
Rectangle.prototype = Object.create(shape.prototype, {
         constructor: {
                  value: Rectangle,
                  enumerable: false,
                  writable: true,
                  configurable: true,
         }
})
const rect = new Rectangle();
console.log('Is rect an instance of rectangle? ', rect instanceof Rectangle);
console.log('Is rect an instance of shape? ', rect instanceof shape);
rect.move(1, 1)


const o = {};
o = Object.create(Object.prototype);
o = Object.create(Object.prototype, {
         foo: {
                  writable: true,
                  configurable: true,
                  value: "hello"
         },
         bar: {
                  configurable: false,
                  get() {
                           return 10;
                  },
                  set(value) {
                           console.log("Setting `o.bar` to", value);
                  }
         }
})
o = Object.create({}, { p: { value: 42 } });

/**Object.defineProperties():直接在物件上定義新屬性或修改現有屬性 然後傳回該物件 */
/**Object.defineProperties(obj,props) obj:要定義或修改屬性的物件 props：一個對象,其鍵表示要定義或修改的屬性名稱*/
/**
 * 資料描述符號和存取器描述符號可以選擇包含以下鍵
 * 1. configurable : true 代表該屬性可以更改且該屬性可以從相應的物件中刪除 預設為false
 * 2. enumerable:true當該屬性在對應物件的屬性枚舉期間出現 預設為false
 * 3. value:與屬性關聯的值 可以是任何有效的Javascript值（數字,物件,函數) 預設undefined
 */
const object1 = {};
Object.defineProperties(object1, {
         property1: {
                  value: 42,
                  writable: true, //定義為可寫的屬性
         },
         property2: {}
})
console.log(object1.property1);

/**Object.fromEntries():將鍵值對列表轉換為物件 回傳一個對象*/
const entries = new Map(['foo', 'bar'], ['baz', 42]);
const obj = Object.fromEntries(entries);
console.log(obj); //output {foo:"bar",baz:42}


const array1 = [
         ['0', 'a'],
         ['1', 'b'],
         ['2', 'c']
]
const obj1 = Object.fromEntries(array1);
console.log(obj1); //output {0:'a',1:'b',2:'c'}