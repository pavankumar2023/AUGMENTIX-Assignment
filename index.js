import mutations from './module/auth/mutations';
import actions from './module/auth/actions';
import getters from './module/auth/getters';

export default {
    namespaced: true,
    state() {
        return {
            token: '',
            email: '',
            userId: '',
            refreshToken: '',
            expiresIn: 'sdsds',
            autoLogout: false,
        };
    },
    mutations,
    getters,
    actions,
};