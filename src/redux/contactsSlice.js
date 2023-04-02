import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, deleteContact, addContact } from './operations';

function isRejectedAction(action) {
  return action.type.endsWith('rejected');
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchContacts.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
      state.error = null;
    });

    builder.addCase(deleteContact.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(deleteContact.fulfilled, (state, action) => {
      state.isLoading = false;
      const index = state.items.findIndex(
        contact => contact.id === action.payload
      );
      state.items.splice(index, 1);
      state.error = null;
    });
    builder.addCase(addContact.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(addContact.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    });
    builder.addMatcher(isRejectedAction, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});
// [fetchContacts.fulfilled](state, action) {
//   state.isLoading = false;
//   state.items = action.payload;
//   state.error = null;
// },
// [fetchContacts.rejected](state, action) {
//   state.isLoading = false;
//   state.error = action.payload;
// },
// },
// reducers: {
//   addContact: {
//     reducer(state, action) {
//       return {
//         ...state,
//         items: [...state.items, action.payload],
//       };
//     },
//     prepare(values) {
//       return {
//         payload: {
//           id: nanoid(),
//           name: values.name,
//           number: values.number,
//         },
//       };
//     },
//   },
//   deleteContact(state, action) {
//     return {
//       ...state,
//       items: state.items.filter(item => item.id !== action.payload),
//     };
//   },
// },
// });

export const contactsReducer = contactsSlice.reducer;
