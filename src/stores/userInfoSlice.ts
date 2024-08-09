import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IUserInfo {
	name: string;
	workPlace: string;
	workingSets: { times: []; weeks: [] };
}

export interface IUserInfoState extends IUserInfo {
	loading: boolean;
	error: string | null;
}

const initialState: IUserInfoState = {
	name: '',
	workPlace: '',
	workingSets: { times: [], weeks: [] },
	loading: false,
	error: null,
};

const userInfoSlice = createSlice({
	name: 'userInfo',
	initialState,
	reducers: {
		setUserInfo: (state, action: PayloadAction<IUserInfo>) => {
			state.name = action.payload.name;
			state.workPlace = action.payload.workPlace;
			state.workingSets = action.payload.workingSets;
			state.loading = false;
			state.error = null;
		},
		clearUserInfo: (state) => {
			state.name = '';
			state.workPlace = '';
			state.workingSets = { times: [], weeks: [] };
			state.loading = false;
			state.error = null;
		},
	},
});

export const { setUserInfo, clearUserInfo } = userInfoSlice.actions;
export default userInfoSlice.reducer;
