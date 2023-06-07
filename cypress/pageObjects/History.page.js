import BasePage from "./Base.page";

class HistoryPage extends BasePage{
    static get url(){
        return "/history.php#history";
    }

    static get historyField(){
        return cy.get(".col-sm-12").find("p");
    }
}

export default HistoryPage;