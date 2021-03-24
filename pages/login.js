import { t, Selector} from 'testcafe'

class Login{

    constructor(){
        this.emailField = Selector ('#email')
        this.passwordField = Selector ('#password')
        this.loginButton = Selector ('button').withText('Log in')
        this.signupButton = Selector ('a').withText('Sign up')
        this.errorMessage = Selector ('.error_msg')
    }

    loginProcess = async() => {
        await t
            .typeText(this.emailField, 'my_email')
            .typeText(this.passwordField, 'my_password')
            .click(this.loginButton)
            // .wait(3000)
    }
}

export default new Login()
