import { createSlice } from '@reduxjs/toolkit';



 const appSlice = createSlice({
  name: 'app',
  initialState :{
    channelId:null,
    channelName:null,
  },
   
  reducers: {
    setchannelId: (state,action) => {
      state.channelId += action.payload;
    },

    logout:(state,action) =>{
         state.app =null;
    }

  },
});

const appActions=appSlice.actions;

export const {setchannelId} = appSlice.actions;

export const selectChannelId = (state) => state.app.channelID;
export const selectChannelName = (state) => state.appp.channelName 

export {appSlice,appActions};
  