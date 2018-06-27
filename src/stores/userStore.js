let users = [];
const subscribers = [];

const notifySubscribers = () => {
    for (let i = 0, l = subscribers.length; i < l; i += 1) {
        subscribers[i]();
    }
};


const getUsers = () => [...users];

const addUser = (user) => {
    if (users.find(u => u.userId === user.userId)) {
        return false;
    }

    users = [...users, user];
    notifySubscribers();
    return true;
};

const removeUser = (userId) => {
    users = users.filter(u => u.userId !== userId);
    notifySubscribers();
};

const subscribe = (func) => {
    subscribers.push(func);
};

export default {
    getUsers,
    addUser,
    removeUser,
    subscribe
};
