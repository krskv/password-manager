/_ eslint-disable _/

# TASK

You need to complete the following test task:
Create "Password manager" app to manage all your passwords for different purposes (mails, devices, accounts, servers, etc.).
Push it to your own github repository and send me link to this repository.
App should have at least 3 pages: login, register, dashboard (main logged in view).
User should be able to add/edit/delete/reveal passwords on the dashboard after login.
All password data should be stored some where, so when user reloads pages, he'll be redirected back to the dashboard and all the passwords will be fetched.
You can choose any DB or local storage.
By default passwords should be hidden with "\*", when user clicks the password field it reveals the real password.

# STRUCTURE

##COMPONENTS:

 * --App
   * --Header
     * --Heading
     * --HeaderNav
   * --ROUTING:
     * +Dashboard
       * --List
         * --ListItem
       * --AddItemForm
     * +Login
       * --LoginForm
     * +Register
       * --RegisterForm
##SERVICES:

 * --GetDataService