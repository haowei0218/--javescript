/**實作集合 */
class Set {
         constructor(args) {
                  this.items = {};
         }
         has(value) {
                  return this.items.hasOwnProperty(value); //找到集合中特定的元素 只需要確認物件中是否有該key值
         }
         add(value) {//先使用has方法判斷集合內是否存在同樣的值
                  if (!this.has(value)) {
                           this.items[value] = value;
                           return true;
                  } else {
                           return false;
                  }
         }
         remove(value) {
                  if (this.has(value)) {
                           delete this.items[value];
                           return true;
                  } else {
                           return false;
                  }
         }
         clear() {
                  this.items = {};
         }
         size() { }
         values() {
                  return (Object.keys(this.items));
         }

         /**聯集 */
         union(otherSet) {
                  let unionSet = new Set();
                  let values = this.values();
                  for (let i = 0; i < values.length; i++) {
                           unionSet.add(JSON.parse(values[j]));
                  }
                  values = otherSet.values();
                  for (let j = 0; j < values.length; j++) {
                           unionSet.add(JSON.parse(values[j]));
                  }
                  return unionSet;
         }
         /**交集 */
         intersection(otherSet) {
                  let interSet = new Set();
                  let value = this.values();
                  for (let i = 0; i < value.length; i++) {
                           if (otherSet.has(value[i])) {
                                    interSet.add(JSON.parse(value[i]));
                           }
                  }
                  return interSet;

         }

         /**差集 */
         difference(otherSet) {
                  let differenceSet = new Set();
                  let values = this.values();
                  for (let i = 0; i < values.length; i++) {
                           if (!otherSet.has(values[i])) {
                                    differenceSet.add(JSON.parse(values[i]));
                           }
                  }
                  values = otherSet.values();
                  for (let j = 0; j < values.length; j++) {
                           if (!this.has(values[j])) {
                                    differenceSet.add(JSON.parse(values[j]));
                           }
                  }
                  return differenceSet;
         }
         /**子集 */
         subSet(otherSet) {
                  if (this.size() > otherSet.size()) {
                           return false;
                  } else {
                           let values = this.values();
                           for (let i = 0; i < values.length; i++) {
                                    if (!otherSet.has(values[i])) {
                                             return false;
                                    }
                                    return true;
                           }
                  }
         }
}