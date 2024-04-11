const firebase = require('../config/firebase')
const userColletion = firebase.firestore().collection('users')

exports.createUser = async (userData) => {
    try {
        await userColletion.doc(userData.id).set(userData);
        return {
            success: true
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
};

exports.findUserById = async (userId) => {
    try {
        const userFound =await userColletion.doc(userId).get()
        if (userFound.exists) {
            return {
                success: true,
                user: userDoc.data()
            }
        } else {
            return {
                success: false,
                error: 'Usuario not Found'
            }
        }
    } catch (error) {
        return {
            success: false,
            error: error.message
        }
    }
}

exports.findUserByEmail = async (email) => {
    try {
        const userEmail = await userColletion.where('email', '==', email).get()
        if (!userEmail.empty){
            const userFound = userEmail.docs[0]
            return {
                success: true,
                user: userFound.data()
            }
        } else {
            return {
                success: false,
                error: 'User not Found'
            }
        }
    } catch (error) {
        return {
            success: false,
            error: error.message
        }
    }
}