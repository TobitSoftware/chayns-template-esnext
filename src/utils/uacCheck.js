/**
 * This class contains a simple function that checks whether the current user is member of the specified uac group.
 * ( chayns® manager group in this case )
 * The id of the chayns manager group is '1' for any chayns site.
 * The groups are provided in the constructor and will be iterated in the checking function
 */
export default class uacCheck {
    constructor(_groups) {
        this._groups = _groups;
    }


    /**
     * The chayns manager (admin) uac group has the id 1 on any chayns site
     * You can iterate through the users uac groups by accessing it from the user object
     */
    checkIfAdmin() {
        for (let i=0;i<this._groups.length;i++)
            if (this._groups[i].id === 1) return true;
        return false;
    }
}