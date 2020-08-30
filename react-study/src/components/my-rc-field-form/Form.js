import React from 'react';
import FieldContext from './FieldContext'
import useForm from './useForm';

export default function Form({ children , form, onFinish, onFinishFailed}, ref) {
  const [fromInstance] = useForm(form)
  React.useImperativeHandle(ref, () => fromInstance)
  fromInstance.setCallback({
    onFinish,
    onFinishFailed
  })
  
  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        fromInstance.submit()
      }}>
        <FieldContext.Provider value={fromInstance}>
        {children}
        </FieldContext.Provider>
    </form>
  )

}