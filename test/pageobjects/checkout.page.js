import Page from "./page.js";

class CheckoutPage extends Page {
    open(path) {
        return super.open("cart.html")
    }

    get checkoutIcon(){
        return $("#checkout")
    }

    async Checkout(){
        await this.checkoutIcon.click()
    }

    get firstName(){
        return $("#first-name")
    }

    get lastName(){
        return $("#last-name")
    }

    get zipCode(){
        return $("#postal-code")
    }

    get continueIcon(){
        return $("#continue")
    }

     async Continue(firstname, lastname, zipcode){
        await this.firstName.setValue(firstname);
        await this.lastName.setValue(lastname);
        await this.zipCode.setValue(zipcode);
        await this.continueIcon.click();
    }

    async validateOnPage() {
        // this.cartIcon.waitForDisplayed({ timeout: 100000 })
        // expect(this.cartIcon).toBeDisplayed()
        
        browser.pause(500000)
    }
}

export default new CheckoutPage();
