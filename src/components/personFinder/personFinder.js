import userStore from '../../stores/userStore';

export default () => {
    document.querySelector('#personFinder').addEventListener('finderChange', (data) => {
        // eslint-disable-next-line no-param-reassign
        data.srcElement.value = '';
        userStore.addUser(data.user);
    });
};
