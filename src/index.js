import modeSwitchInit from './components/modeswitch/modeSwitch';
import personFinderInit from './components/personFinder/personFinder';
import userListInit from './components/userList/userList';
import userStore from './stores/userStore';
import SERVER_URL from './constants/server-url';
import { DEV, QA } from './constants/environment';

const init = async () => {
    await chayns.ready;

    console.info('ServerUrl for current environment:', SERVER_URL);

    if (DEV || QA) {
        // Logs userStores state to console if it gets changed.
        userStore.subscribe(() => console.log('userStore', userStore.getUsers()))
    }


    modeSwitchInit();
    personFinderInit();
    userListInit();
};

init();
