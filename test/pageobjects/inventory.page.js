import Page from "./page.js";

class InventoryPage extends Page {
    open(path) {
        return super.open("inventory.html")
    }

    get buttonAdd(){
        return $("#add-to-cart-sauce-labs-backpack")
    }

    get cartIcon() {
        return $("#shopping_cart_container")
    }

    async addItem(){
        await this.buttonAdd.click()
    }

    async validateOnPage() {
        this.cartIcon.waitForDisplayed({ timeout: 100000 })
        expect(this.cartIcon).toBeDisplayed()
        
        browser.pause(500000)
    }
}

export default new InventoryPage();
