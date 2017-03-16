
//Create stylesheets for each script in the same folder with the same naming (if necessary) and import it.
import "./index.css";
import _isAdmin from "./utils/uacCheck"; //an utility function for checking if an user is member of the uac group 'chayns manager'
import _admin from "./components/admin_view/admin"; //the class containing all the admin functions
import _user from "./components/user_view/user"; //containing the user functions

/**
 * chayns ready promise
 */
chayns.ready.then(function resolved() {
    init();
}).catch(function rejected() {
    console.error("no chayns environment found. you need to implement this website in your chayns-website");
}).then(function always() {
    //Will always be executed
});


/**
 * Will be executed when the chayns-API is loaded
 */
const init = () => {

    let user = new _user(); //initialize the user class. It builds a list for user objects and appends it to the DOM
    let admin = null; //placeholder for the admin class

    "use strict";

    /**
     * You can get the basic information about the logged in user by using the chayns variables "chayns.env.user"
     * @type {string}
     */
    document.querySelector('#headline').innerHTML = `Hello ${chayns.env.user.name}!`; //If no user is logged in an empty string will be returned by the user object

    if(chayns.env.user.isAuthenticated){ //checks if a valid user is logged in
        //create an instance of the utility function class imported at the beginning of the document
        let adminCheck = new _isAdmin(chayns.env.user.groups);
        //check if the current user is member of the uac group 'chayns manager'
        if (adminCheck.checkIfAdmin())
            admin = new _admin(); //if the user is a chayns manager, initialize the admin class
    }

    /**
     * The webpack files use the webpack-replace loader for replacing the "server_url"
     * @type {string}
     */
    console.log('########################################################');
    console.log(`You are running the ##server_url##-Version of your Tapp`);
    console.log('########################################################');
};