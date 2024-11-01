export default class RandomData {
         constructor() {
                  this.uid = [];
                  this.name = [];
                  this.email = [];
                  this.number = Math.floor(100000 * Math.random())

         }

         RandomUserId() {
                  let number = Math.floor(100000 * Math.random())
                  if (this.checkSame(this.uid, number)) {
                           number++
                           return this.RandomUserId()
                  }
                  this.uid.push(number)
                  return `UID${number}`
         }
         RandomEmail() {
                  let email = `User${this.number}@email.com`
                  if (this.checkSame(this.email, email)) {
                           this.number++
                           return this.RandomEmail()
                  }
                  this.email.push(email);
                  return email
         }
         RandomName() {
                  let name = `User${this.number}`
                  if (this.checkSame(this.name, name)) {
                           this.number++
                           return this.RandomName()
                  }
                  this.name.push(name)
                  return name

         }
         Wallet() {
                  let number = Math.floor(100 * Math.random())
                  return number
         }
         checkSame(database, result) {
                  return database.includes(result)
         }
}
