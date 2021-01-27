const crypto = require('crypto');
const uuid = require('uuid');
const randomString = require('crypto-random-string');
const jwt = require('jsonwebtoken');
 
let secretKey = randomString({length: 10, type: 'alphanumeric'});
console.log("secret key :" + secretKey);
// let bytes = crypto.randomBytes(16);
// let key = crypto.randomBytes(32 );
// let cipher = crypto.createCipheriv('aes256', key, bytes);
 
// let publicKey = cipher.update(secretKey, 'utf8', 'hex');
// console.log(publicKey);
 
// let decipher = crypto.createDecipheriv('aes256', key, bytes);
// let decipherKey = decipher.update(publicKey, 'hex', 'utf8');
// console.log(decipherKey);
var iss = "Blitzkrieg Software";
var sub = "joe@user.org";
var aud = "http://blitzkriegsoftware.net";
var exp = "24h";
 
var signOptions = {
    issuer : iss,
    subject: sub,
    audience: aud,
    algorithm: "RS256"
};
var verifyOptions = {
    issuer : iss,
    subject: sub,
    audience: aud,
    algorithms: ["RS256"]
};
var payload = { };

// Populate with fields and data
payload.field01 = "Data 01";
payload.field02 = "Data 02";
payload.field03 = "Data 03";
let signature = jwt.sign(payload, secretKey);
console.log("signature: " + signature );
 
let verify = jwt.verify(signature, secretKey);
console.log("verify: " + JSON.stringify(verify ));