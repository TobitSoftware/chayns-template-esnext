import htmlToElement from 'html-to-element';

import './user.scss';

const getUser = (user, onDelete) => {
    const element = htmlToElement(`
        <div class="user">
            <div class="user__info">
                <div class="user__image" style="background-image: url(https://sub60.tobit.com/u/${user.userId});"></div>
                <div class="user__name">
                    ${user.name}
                </div>
            </div>
            <div class="user__remove admin-only">
                <span>x</span>
            </div>
        </div>`);

    element.querySelector('.user__remove').addEventListener('click', () => onDelete());

    return element;
};

export default getUser;
