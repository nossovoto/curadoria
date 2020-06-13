import CryptoJS from 'crypto-js'

const encryptKey = process.env.ENCRYPT_KEY ? process.env.ENCRYPT_KEY : ''

export const encrypt = (data: object) => {
    return CryptoJS.AES.encrypt(JSON.stringify(data), encryptKey)
}

export const decrypt = (ciphertext: any): object => {
    const bytes = CryptoJS.AES.decrypt(ciphertext.toString(), encryptKey)
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
}