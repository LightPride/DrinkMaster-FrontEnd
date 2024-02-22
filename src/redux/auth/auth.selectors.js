export const selectUser = (state) => state.auth.userData;
export const selectIsLoggedIn = (state) => state.auth.authenticated;
export const selectIsRefreshing = (state) => state.auth.isLoading;
