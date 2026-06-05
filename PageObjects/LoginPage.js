class LoginPage {

    constructor(page) {
        this.page = page;
        this.userName = page.locator('#userEmail') 
        this.password = page.getByPlaceholder('enter your passsword')
        this.loginBtn = page.getByRole('button', { name: 'Login' });
    }

    async goToLoginPage(URL) {
       await this.page.goto(URL)
    }
    
    async validLogin(username, password) {
        await this.userName.fill(username);
        await this.password.fill(password);
        await this.loginBtn.click();
        await this.page.waitForNavigation();
    }
}
//export default LoginPage;
module.exports = {LoginPage};