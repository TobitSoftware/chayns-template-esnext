import getUserElement from '../user/user';
import userStore from '../../stores/userStore';

export default () => {
    render();
    userStore.subscribe(() => render());
}

const render = () => {
    const users = userStore.getUsers();

    const wrapper = document.querySelector('#usersList');
    wrapper.innerHTML = '';

    for (let i = 0, l = users.length; i < l; i++) {
        wrapper.appendChild(
            getUserElement(users[i], () => {
                userStore.removeUser(users[i].userId);
            })
        );
    }
};
