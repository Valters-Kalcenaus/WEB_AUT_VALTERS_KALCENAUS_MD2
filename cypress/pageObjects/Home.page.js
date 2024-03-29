import BasePage from "./Base.page";

class HomePage extends BasePage{
    static get url(){
        return "/";
    }
    static get makeAppointmentButton(){
        return cy.get("#btn-make-appointment");
    }
}

export default HomePage;