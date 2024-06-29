import Page from "./page.js";

class CheckoutPage extends Page {
    open(path) {
        return super.open("cart.html")
    }
    // get cartIcon() {
    //     return $("#shopping_cart_container")
    // }

    get checkoutIcon(){
        return $("#checkout")
    }

    async Checkout(){
        await this.checkoutIcon.click()
    }

    async validateOnPage() {
        this.cartIcon.waitForDisplayed({ timeout: 100000 })
        expect(this.cartIcon).toBeDisplayed()
        
        browser.pause(500000)
    }
}

export default new CheckoutPage();
