import { api } from '@/axios.ts';
export default {
	signIn(payload) {
		return api().post('auth/sign-in', payload);
	},
	getAvailableCountries() {
		return api().get('countries/available-countries');
	},
	checkPhoneValidation(payload) {
		return api().post('auth/check-phone-validation', payload);
	},
	signUp(payload) {
		return api().post('auth/sign-up', payload);
	},
	verifyOtp(payload) {
		return api().post('auth/verify-otp', payload);
	},
	resendOtp(payload) {
		return api().post('auth/generate-otp', payload);
	},
	selectVaultType(payload) {
		return api().patch('select-vault-type', payload);
	},
	selectVaultActivities(payload) {
		return api().patch('select-vault-activities', payload);
	},
	getVaultActivities() {
		return api().get('vault-activities');
	},
	createSumSubAccessToken() {
		return api().post('sumsub/create-access-token');
	},
	forgetUsername(payload) {
		return api().post('forgot-username', payload);
	},
	forgetPassword(payload) {
		return api().post('forgot-password', payload);
	},
	resetPassword(payload) {
		return api().post('reset-password', payload);
	},
};
