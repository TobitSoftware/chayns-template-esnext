import './modeSwitch.scss';
import isAdmin from '../../utils/isAdmin';

export default () => {
    if (isAdmin()) {
        chayns.ui.modeSwitch.init({
            items: [{
                name: chayns.env.user.name, // setting the username as a modes name, this is used as the default user mode
                value: 0,
                default: true
            }, {
                name: 'chayns® Manager',
                value: 1
            }],
            callback: (data) => { // The callback provides a parameter which contains the selected mode. You can distinguish them by the mode.value
                if (data.value === 1) {
                    document.body.classList.add('admin-view');
                } else {
                    document.body.classList.remove('admin-view');
                }
            }
        });
    }
};
