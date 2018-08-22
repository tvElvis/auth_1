const bcrypt =  require('bcrypt');
const {MD5} = require('crypto-js');
const jwt = require('jsonwebtoken');

// bcrypt.genSalt(10,(err,salt)=>{
//   if(err) return next(err);

//   bcrypt.hash('password123',salt,(err,hash)=>{
//     if(err) return next(err);
//     console.log(hash)
//   })
// })

// const secret = 'mysercretpassword';
// const secretSalt = 'asfagasg'

// const user = {
//   id:1,
//   token:MD5('asdasfa').toString() + secretSalt
// }

// const receivedToken = '4eea97a6c7af52fb1f3e5eeea4924c8aasfagasg';
// if(receivedToken ===user.token){
//   console.log('move forward')
// }

// console.log(user)

const id = '1000';
const secret = 'supersecret';

const resivedToken = 'eyJhbGciOiJIUzI1NiJ9.MTAwMA.L9PmEqLlZjettygguzj25agunJu6NkvVtG9RFRBnK2Y';

const token = jwt.sign(id,secret);
const decodeToken = jwt.verify(resivedToken,secret);

console.log(decodeToken)