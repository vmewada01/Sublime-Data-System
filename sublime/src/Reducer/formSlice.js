import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  forms: [],
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addQuestion: (state, action) => {
      state.forms.push(action.payload);
      localStorage.setItem('forms', JSON.stringify(state.forms));
    },
    editQuestion: (state, action) => {
        const { title, updatedQuestion } = action.payload;
        const formIndex = state.forms.findIndex((form) => form.title === title);
        if (formIndex !== -1) {
          state.forms[formIndex] = updatedQuestion;
          localStorage.setItem('forms', JSON.stringify(state.forms));
        }
      },
    deleteQuestion: (state, action) => {
        const slugToDelete = action.payload;
        state.forms = state.forms.filter((form) => form.title !== slugToDelete);
        localStorage.setItem('forms', JSON.stringify(state.forms));
      },
    // Add other reducer functions as needed
  },
});

export const { addQuestion ,deleteQuestion,editQuestion} = formSlice.actions;

export default formSlice.reducer;
