// import React from 'react'
import { configureStore} from '@reduxjs/toolkit';
import { userSlice } from '../features/userSlice';
import { userReducer } from '../features/userSlice';
import { appReducer } from '../features/appSlice';
 
import { appSlice } from '../features/appSlice';


const store=configureStore({
  reducer:{
      user:userSlice.reducer,
      app:appSlice.reducer,  
  }
}
);
  

export default store
