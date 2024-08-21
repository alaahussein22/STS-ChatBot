export default [
	{
		path: '/chat',
		component: () => import('./pages/Index.vue'),
		name: 'home',
		meta: {
			layout: 'DashboardLayout'
		}
	},
];
