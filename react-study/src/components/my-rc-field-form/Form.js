import React from 'react';
import FieldContext from './FieldContext'

export default function Form({ children , form, onFinish, onFinishFailed}) {
  form.setCallback({
    onFinish,
    onFinishFailed
  })
  
  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        form.submit()
      }}>
        <FieldContext.Provider value={form}>
        {children}
        </FieldContext.Provider>
    </form>
  )

}