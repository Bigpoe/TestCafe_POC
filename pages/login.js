import { t, Selector } from 'testcafe'

class Login{

    constructor(){
        this.emailField = Selector ('#email')
        this.passwordField = Selector ('#password')
        this.loginButton = Selector ('.submit_btn')
        this.signupButton = Selector ('a').withText('Sign up')
        this.errorMessage = Selector ('.error_msg')
    }

    loginProcess = async() => {
        await t
            .typeText(this.emailField, 'email')
            .typeText(this.passwordField, 'password')
            .click(this.loginButton)
            .wait(5000)
    }
}

export default new Login()
