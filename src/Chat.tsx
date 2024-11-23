import { useState } from 'react'
import { Action } from './messengerReducer'
import { Contact } from './App'

import { Dispatch } from 'react'

export default function Chat({ contact, message, dispatch }: { contact: Contact; message: string; dispatch: Dispatch<Action> }) {
  return (
    <section className="chat">
      <textarea
        value={message}
        placeholder={'Chat to ' + contact.name}
        onChange={e => {
          dispatch({
            type: 'edited_message',
            message: e.target.value
          })
        }}
      />
      <br />
      <button
        onClick={() => {
          dispatch({
            type: 'sent_message',
            message
          })
        }}
      >
        Send to {contact.email}
      </button>
    </section>
  )
}
