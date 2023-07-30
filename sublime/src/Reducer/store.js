import { configureStore } from "@reduxjs/toolkit";

import formReducer from "../Reducer/formSlice"


const store = configureStore({reducer:{form: formReducer,},})

export {store}