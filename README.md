<center>Fitness App</center>

I. Purpose.

This app was designed and implemented to help its users track their calories, macronutrients as well as vital information about their weight, sleep and training. It has a built-in calorie calculator to help users determine their goals and they can update their information on the go via the forms. In order to have a healthy lifestyle, the diet is one of the most important aspects. This is why I have created a recipes page, where users can create, update, read and delete recipes in order to help with their dietary preferences. The app also has integrated profile function which is currently mainly cosmetic, however in the future there is a posibility for app integration and additional functionality like comments under the recipes as well as a dedicated forum section for discussions.

II. Installation.

In order to install the app, simply download the files from the github repo here: https://github.com/KristianKermedchiev/Angular-App.git and install them via the npm install command. Next you need to navigate to the folder via cd Fintess-App command and finally start the server with ng serve. Alternatively, the app is uploaded via Firebase as a host and is accessible trough this link: https://fitness-app-9c5ea.web.app/

III. Pages and Views.

1. Home page. 
The home page consists of only two buttons - Login and Register.

2. Login.
The login page contains a form with two fields 'E-mail' and 'Password'. Below the login button the user can reset their password by pressing on the 'Forgot Password?' or be routed to the 'Register' page via the 'Don't have an account?' link.

3. Register.
The register page contains a form with three fields where users can populate their e-mail, create and confirm their password. Below the register button users can re-route to the Login page in case they already have an account. Once registered the user will be routed to the login page.

4. Forgot password page.
The forgot password page sends a new temporary password to the user when they provide their e-mail address. The 'back' button will take them bem to the login page.

5. Dashboard page.
The Dashboard page has 9 total cards which show different information for the user, initially this will be empty and can be updated in the 'Statistics' page.

6. Statistics page.
The statistics page consists of 3 forms. Each form corelates to one of the 3 rows of cards on the Dashboard page. The form requires the user to fill all the fields, however each form can be filled independently from the others.

7. Calorie calculator page.
The calorie calculator page consists of a form where users can input their information to somewhat accurately get an idea of their daily calorie expendature. On the left of the form there are instruction on how to use the form and further information on how the formula works to determine the result. The result will be shown on 2 separate rows: Basal Metabolic Rate will show the calorie expendature without factoring in the exercise, these are the calories the body needs to keep us alive. The Result will show the final calculation factoring in the exercise, this is helpful to determine the actual calories needed by the body in order to more accurately set goals.

8. Recipes page.
The recipes page has a standard row (or column depending on the scren width) with cards representing each recipe. To create a recipe users can press the 'Create a recipe' button on the top side of the page.
    8.1 Create page.
    The create page consists of a form where users can provide the name, difficulty, spiciness, vegan or not, a picture and description of a recipe. The picture currently only accepts urls, however this may be improved in the future. The 'Return' button will take the users back to the recipes' main page.
    8.2. Details page.
    The details page can be accessed by clicking on the picture of the recipe. It will take the user to a detailed view of the recipe where further information is present like spicy/not-spicy, difficulty, or whether this recipe  is suitable for vegans or vegeratians. The page will have a 'Back' button that will take the user back to the main recipes page and the creators of the page will have access to 2 more buttons 'Edit' and 'Delete'.
    8.3. Edit page.
    The edit page consists of the same form as in the create view, it allows the creators of the recipe to update the recipe based on the already existing data and fields. The 'Return' button will take the users back to the recipes' main page.
    8.4. Delete.
    Pressing the delete button in the details page of a recipe, will allow the creator of the recipe to remove it from the app an the databse. Pressing the button will bring out a pop-up message that requests confirmation of deletion.

9. Profile page.
The profile page consists of the user's details, initially most of the fields will be empty besides the email that is set up during registration. The 'Update info' button allows the user to update their profile information. As stated above, this is currently purely cosmetic, however future involvement is possible via forum or comments pages.
    9.1. Update info page.
    The update info page consists of a form where the user can provide their information like names, gender, height, age and here they can change their email with which they log into the app. The profile picture field currently only accepts valid urls. The 'Return' button will take them back to the profile page.

10. Contact Us page.
The contact us page consists of the address, phone number and email info of the admin of the page as well as a map of the main office.

11. About us page.
The about us page currently consists of lorem ipsum, however serves to provide an insight of the team behind the app's creation.

12. Navigation.
The left navigation bar can be closed/expanded and consists of icons ( and names of the pages when expanded ). Its the main way to navigate between views. The top navigation bar consists of a greeting based on the email of the user, their profile picture and the Logout button. The logout button takes the users back to the Home page.

IV. Authentication and Data Storage.

The app is deployed and utilizes Firebase as its backend. Firebase provides the authentication function as well as the storage of users and recipes information in its databse.

V. Known issues and bugs.

The app is not utilized for very small screns, mainly phones. This is mainly due to the lack of CSS in the side-nav. Error handling, although there is error handling and validation, correct and consistent reasons for the errors is hard to display to the users due to Firebase showing multiple errors at once, therefore many errors will simply say 'Invalid Data' or 'Something went wrong1'.

