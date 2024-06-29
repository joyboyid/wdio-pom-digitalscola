import InventoryPage from "../pageobjects/inventory.page.js";
import LoginPage from "../pageobjects/login.page.js";
import CartPage from "../pageobjects/cart.page.js";
import CheckoutPage from "../pageobjects/checkout.page.js"
import checkoutPage from "../pageobjects/checkout.page.js";

describe('Login test', () => {
    it('Successful Login', async () => {
        await LoginPage.open()
        await LoginPage.login(process.env.SAUCE_USERNAME, process.env.SAUCE_PASSWORD)

        await InventoryPage.validateOnPage()
    });
    it('Add item', async() => {
        await InventoryPage.open()
        await InventoryPage.addItem()
         
        await CartPage.validateOnPage()
    });

    it('Checkout', async () => {
        await CartPage.open()
        await checkoutPage.Checkout()
    })

});
