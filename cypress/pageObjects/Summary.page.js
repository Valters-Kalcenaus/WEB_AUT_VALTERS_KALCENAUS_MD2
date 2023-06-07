import BasePage from "./Base.page";

class SummaryPage extends BasePage{
    static get url(){
        return "/appointment.php#summary";
    }
    static get facilityText(){
        return cy.get("#facility");
    }
    static get applyForReadmissionText(){
        return cy.get("#hospital_readmission");
    }
    static get healthcareProgramText(){
        return cy.get("#program");
    }
    static get visitDateText(){
        return cy.get("#visit_date");
    }
    static get commentText(){
        return cy.get("#comment");
    }
}

export default SummaryPage;