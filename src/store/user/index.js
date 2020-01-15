const state = {
	name:'orange',
	age:15,
	token: 1,
	userInfo: '1'
};
const mutations = {
	loginStatus: (state, data) => {
		state.userInfo = data;
		sessionStorage.setItem('userInfo', JSON.stringify(data));
	}
};

export default {
	namespaced:true,
	state,
	mutations
}