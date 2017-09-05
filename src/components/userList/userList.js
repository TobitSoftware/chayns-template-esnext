import getUserElement from '../user/user';
import userStore from '../../stores/userStore';

const userListWrapper = document.querySelector('#usersList');

export default () => {
    render();
    userStore.subscribe(() => render());
}

const render = () => {
    const users = userStore.getUsers();

    userListWrapper.innerHTML = '';

    for (let i = 0, l = users.length; i < l; i++) {
        userListWrapper.appendChild(
            getUserElement(users[i], () => {
                userStore.removeUser(users[i].userId);
            })
        );
    }
};
