/**
 * This class will be initialized of the user is a chayns manager.
 * In turn this class initializes the ModeSwitch, which allows the user to switch between the user mode and admin mode ..
 * .. by displaying or hiding secured content depending on the value provided on switching the mode.
 */

export default class admin {
    constructor() {
        this.init();
        this.usersCount = 0; //this variable will be used in the 'addUserToList' function
    }

    init() {
        /**
         * The modeswitch accepts an object as parameter.
         * This object contains a callback for mode switches and an array containing uac group objects
         */
        chayns.ui.modeSwitch.init({
            items: [{
                name: chayns.env.user.name, //setting the username as a modes name, this is used as the default user mode
                value: 0,
                default: true
            }, {
                name: "chayns® Manager",
                value: 1
            }],
            callback: (data) => { //The callback provides a parameter which contains the selected mode. You can distinguish them by the mode.value
                if (data.value === 1) {
                    document.getElementById("securedContent").classList.remove("hidden");
                } else {
                    document.getElementById("securedContent").classList.add("hidden");
                }
            }
        });
        this.setPersonFinder();
    }

    /**
     * This tapp uses the chayns person finder to search for users via the chayns api
     * You have to set a callback for the person finder event
     */
    setPersonFinder() {
        document.getElementById("securedPersonFinder").addEventListener("finderChange", (data) => {
            this.addUserToList(data.user);
        });
    }

    /**
     * This functions builds an element displaying the user and appends it to the usersList in the DOM.
     * This can be done using the two functions .createElement() and .appendChild() which create DOM elements and append them to other DOM elements.
     * Other properties can be specified by accessing the variable containing the element.
     */
    addUserToList(_user) {
        let container = document.createElement("div");
        container.classList.add("listUserItem");

        let name = document.createElement("div");
        name.innerHTML = _user.name;
        name.classList.add("listUserName");

        let image = document.createElement("div");
        image.style.backgroundImage = `url('https://sub60.tobit.com/u/${_user.personId}?size=40')`;
        image.classList.add("listUserImage");

        container.appendChild(image);
        container.appendChild(name);

        //if no user has appended to the list yet, remove the placeholder text from the user list
        if (this.usersCount === 0) document.getElementById("usersList").innerHTML = null;
        this.usersCount++;
        document.getElementById("usersList").appendChild(container);
    }
}
