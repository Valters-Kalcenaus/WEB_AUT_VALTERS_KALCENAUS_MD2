import BasePage from "./Base.page";

class AppointmentPage extends BasePage{
    static get url(){
        return "/#appointment";
    }
    static get facilitySelect(){
        return cy.get("#combo_facility");
    }
    static get readmissionCheckBox(){
        return cy.get("#chk_hospotal_readmission");
    }
    static get mediciadCheck(){
        return cy.get("#radio_program_medicaid");
    }
    static get visitDateSelect(){
        return cy.get("#txt_visit_date");
    }
    static get dateOptions(){
        return cy.get(".day");
    }
    static get appointmentSection(){
        return cy.get("#appointment");
    }
    static get commentBox(){
        return cy.get("#txt_comment");
    }
    static get bookAppointmentButton(){
        return cy.get("#btn-book-appointment");
    }
    static get menuButton(){
        return cy.get("#menu-toggle");
    }
    static get sideMenu(){
        return cy.get("#sidebar-wrapper");
    }
    static get historyOption(){
        return cy.contains("a", "History");
    }
}

export default AppointmentPage;