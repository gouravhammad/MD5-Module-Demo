const md5 = require('md5')

var password = 'geeks123'

console.log('Normal password : ', password)
console.log('Hashed password : ', md5(password))