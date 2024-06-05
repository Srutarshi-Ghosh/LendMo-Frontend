import store from '../store';

const checkIsAuthenticated = () => {
	return store.getState().auth.userId != null;
};

export default checkIsAuthenticated;
