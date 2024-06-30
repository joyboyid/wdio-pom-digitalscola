import InventoryPage from "../pageobjects/inventory.page.js";
import LoginPage from "../pageobjects/login.page.js";
import CartPage from "../pageobjects/cart.page.js";
import CheckoutPage from "../pageobjects/checkout.page.js";
import FinishPage from "../pageobjects/finish.page.js";


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
        await CheckoutPage.Checkout()

        await CheckoutPage.Continue(
            process.env.FNAME,
            process.env.LNAME,
            process.env.ZIPCODE
        )

        await CheckoutPage.validateOnPage()
    });

    it('Finish', async ()=>{
        await FinishPage.open()
        await FinishPage.finish()
    })
});
