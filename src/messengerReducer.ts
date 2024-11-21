export type State = {
  selectedId: number;
  messages: { [key: number]: string };
}

export type Action =
  | { type: 'selected_contact'; contactId: number }
  | { type: 'edited_message'; message: string };

export const initialState: State = {
  selectedId: 0,
  messages: {
    0: '', // Taylor
    1: '', // Alice
    2: '', // Bob
  }
};

export function messengerReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'selected_contact': {
      return {
        ...state,
        selectedId: action.contactId,
      };
    }
    case 'edited_message': {
      return {
        ...state,
        messages: {
          ...state.messages,
          [state.selectedId]: action.message
        }
      };
    }
    default:
      return state;
  }
}
