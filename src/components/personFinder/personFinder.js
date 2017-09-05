import userStore  from '../../stores/userStore';

export default () => {
    document.querySelector('#personFinder').addEventListener('finderChange', (data) => {
        data.srcElement.value = '';
        userStore.addUser(data.user);
    });
}
