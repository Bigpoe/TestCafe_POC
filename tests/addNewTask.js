import Home from '../pages/home'
import Login from '../pages/login'
import Dashboard from '../pages/dashboard'

fixture `Login Test`.page(`https://todoist.com/es`)

test(`Show me an error in login process`, async t =>{
    await Home.clickLogin()
    await Login.loginProcess()
    await Dashboard.addTaskProcess()
    await t.expect(Dashboard.taskAdded.withText('New Task').exists).ok()
})
