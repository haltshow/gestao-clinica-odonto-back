export class UserEntity {
    name = ''
    email = ''
    password = ''

    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    validate() {
        // if (!this.verifyName()) {
        //     return "O nome precisa ter no máximo 100 caracteres"
        // }
        // if (!this.verifyEmail()) {
        //     return "O email precisa ter no máximo 100 caracteres"
        // }
        // if (!this.verifyPassword()) {
        //     return "A senha precisa ter entre 6 e 40 caracteres"
        // }
        // return ""
        this.verifyName()
        this.verifyEmail()
        this.verifyPassword()
    }

    verifyName() {
        if (this.name.length >= 100) {
            // return false
            throw new Error('O nome precisa ter no máximo 100 caracteres')
        }
        return true
    }

    verifyEmail() {
        if (this.email.length >= 100) {
            // return false
            throw new Error('O email precisa ter no máximo 100 caracteres')
        }
        return true
    }

    verifyPassword() {
        if (this.password.length < 6 || this.password.length > 40) {
            // return false
            throw new Error('A senha precisa ter entre 6 e 40 caracteres')
        }
        return true
    }
}