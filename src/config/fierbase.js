const admin = require('firebase-admin')
const servicesAccount = require('./servicesAccountKEY.json')

admin.initializeApp({
    credential: admin.credential.cert(servicesAccount)
})

module.exports = admin