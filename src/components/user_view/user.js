import "./user.css";

/**
 * This class simply initializes the user view by adding a placeholder text to the users list, if necessary
 * More user specific functions could be added to this class
 */
export default class user {
    constructor() {
        this.setUserListText();
    }

    /**
     * This functions checks whether any users are appended to the list.
     * If not, a placeholder text will be set
     */
    setUserListText() {
        let userList = document.getElementById("usersList");
        if (userList.childElementCount === 0) {
            userList.innerHTML = "No users have been selected";
        }
    }
}