// 定义一个仓库
import React from 'react';

class FormStore {
  constructor(props) {
    this.store = {}
    // 存储下Field实例
    this.fieldEntities = []

    this.callbacks = {}
  }

  // 有注册一定要有取消注册
  registerField = (entity) => {
    this.fieldEntities.push(entity)
    return () => {
      // 取消
      this.fieldEntities = this.fieldEntities.filter(item => item !== entity)
      delete this.store[entity.props.name]
    }
  }

  setCallback = callback => {
    this.callbacks = {
      ...this.callbacks,
      ...callback
    }
  }

  // 获取store的值
  getFieldValue = name => {
    return this.store[name]
  }
  // 设置this.store
  setFieldsValue = (newStore) => {
    console.log(newStore)
    // 合并
    this.store = {
      ...this.store,
      ...newStore
    }
    console.log(this.store)
    //store已经更新，下一步更新组件
    this.fieldEntities.forEach(entity => {
      const { name } = entity.props
      Object.keys(newStore).forEach(key => {
        if (key === name) {
          entity.onStoreChange()
        }
      })
    })
  }
  validate = () => {
    let err = [];
    // todo
    this.fieldEntities.forEach(entity => {
      const { name, rules } = entity.props;
      let value = this.getFieldValue(name);
      let rule = rules && rules[0];
      if (rule && rule.required && (value === undefined || value === "")) {
        // 出错
        err.push({
          [name]: rules.message,
          value
        });
      }
    });
    return err;
  };

  submit = () => {
    console.log('submit')
    let err = this.validate();
    // 在这里校验 成功的话 执行onFinish ，失败执行onFinishFailed
    const { onFinish, onFinishFailed } = this.callbacks;

    // 校验
    if (err.length === 0) {
      // 成功的话 执行onFinish
      onFinish(this.store);
    } else if (err.length > 0) {
      // ，失败执行onFinishFailed
      onFinishFailed(err);
    }

    // 根据校验结果，如果校验成功则调用onFinish 否则 onFinishFailed
  }

  getForm = () => {
    return {
      getFieldValue: this.getFieldValue,
      setFieldsValue: this.setFieldsValue,
      registerField: this.registerField,
      submit: this.submit,
      setCallback: this.setCallback
    }
  }
}

export default function useForm(form) {

  const formRef = React.useRef()
  if (!formRef.current) {
    if(form) {
      formRef.current = form
    } else {
      const formStore = new FormStore()
      formRef.current = formStore.getForm()
    }
    
  }


  return [formRef.current]
}