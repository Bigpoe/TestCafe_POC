import { t, Selector } from 'testcafe'

class Dashboard{

    constructor(){
        this.addTaskButton = Selector('.plus_add_button')
        this.taskTextField = Selector('.public-DraftStyleDefault-block')
        this.addTaskConfirmButton = Selector('.ist_button')
        this.taskAdded = Selector('.task_list_item__content__content_wrapper').withText('New Task')
        this.todayButton = Selector('.date_today')
        this.tomorrowButton = Selector('button').withAttribute('data-action-hint', 'scheduler-suggestion-tomorrow')
        this.searchbox = Selector('#quick_find')
    }

    addTaskProcess = async() =>{
        await t
            .wait(5000)
            .click(this.addTaskButton)
            .click(this.taskTextField)
            .typeText(this.taskTextField, 'New Task', {paste:true})
            .wait(2000)
            .click(this.todayButton)
            .click(this.tomorrowButton)
            .click(this.addTaskConfirmButton)
            .wait(2000)
    }
}

export default new Dashboard()
