import AppointmentPage from "../pageObjects/Appointment.page";
import SummaryPage from "../pageObjects/Summary.page";
import BasePage from "../pageObjects/Base.page";
import HistoryPage from "../pageObjects/History.page";
import HomePage from "../pageObjects/Home.page";
import LoginPage from "../pageObjects/Login.page";

describe("CURAHealthcareService", () => {
  context("MD2", () => {
    beforeEach(() => {
      BasePage.visit();
    });

    it("Make an Appointment", () =>{
      HomePage.makeAppointmentButton.click();
      LoginPage.username.type("John Doe");
      LoginPage.password.type("ThisIsNotAPassword");
      LoginPage.loginButton.click();
      AppointmentPage.facilitySelect.select("Seoul CURA Healthcare Center");
      AppointmentPage.readmissionCheckBox.click();
      AppointmentPage.mediciadCheck.click();
      AppointmentPage.visitDateSelect.click();
      AppointmentPage.dateOptions.contains("30").click();
      AppointmentPage.appointmentSection.click("right");
      AppointmentPage.commentBox.type("CURA Healthcare Service");
      AppointmentPage.bookAppointmentButton.click();
      SummaryPage.facilityText.should("have.text", "Seoul CURA Healthcare Center");
      SummaryPage.applyForReadmissionText.should("have.text", "Yes");
      SummaryPage.healthcareProgramText.should("have.text", "Medicaid");
      SummaryPage.visitDateText.should("have.text", "30/05/2023");
      SummaryPage.commentText.should("have.text", "CURA Healthcare Service");
    });

    it("Appointment History Empty", () => {
      HomePage.makeAppointmentButton.click();
      LoginPage.username.type("John Doe");
      LoginPage.password.type("ThisIsNotAPassword");
      LoginPage.loginButton.click();
      AppointmentPage.menuButton.click();
      AppointmentPage.sideMenu.should("have.class", "active");
      AppointmentPage.historyOption.click()
      HistoryPage.historyField.should("have.text", "No appointment.")
    });
  });
    
});