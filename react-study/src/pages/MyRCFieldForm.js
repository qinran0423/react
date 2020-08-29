import React, { Component, useEffect } from 'react';
// import Form, { Field } from "rc-field-form";
import Form, {Field} from '../components/my-rc-field-form'
import Input from  '../components/Input'

const nameRules = {required: true, message: "请输入姓名！"};
const passworRules = {required: true, message: "请输入密码！"};


export default function MyRCFieldForm(props) {
	// 什么时候我会⽤ Hook？ 如果你在编写函数组件并意识到需要向其添加⼀些 state，以前的做法是必须将其它转化为 class。现在你可以在现有的函数组件中使⽤ Hook。
	// 自定义hook
	const [form] = Form.useForm();


	const onFinish = val => {
		console.log('onFinish', val)
	}

	const onFinishFailed = val => {
		console.log('onFinishFailed', val)
	}

	useEffect(() => {
		console.log('form', form)
		form.setFieldsValue({username:'randy'})
	},[])

	return (
		<div>
			<h3>MyRCFieldForm</h3>
			<Form
				form={form}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}>
				<Field name="username" rules={[nameRules]}>
					<Input placeholder="Username" />
				</Field>
				<Field name="password" rules={[passworRules]}>
					<Input placeholder="Password" />
				</Field>
				<button>Submit</button>
			</Form>
		</div>
	)
}


// export default class MyRCFieldForm extends Component {
// 	formRef = React.createRef();

// 	componentDidMount() {
// 		console.log('form', this.formRef.current)
// 		this.formRef.current.setFieldsValue({username:'default'})
// 	}

// 	onFinish = val => {
// 		console.log('onFinish', val)
// 	}

// 	onFinishFailed = val => {
// 		console.log('onFinishFailed', val)
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<h3>MyRCFieldForm</h3>
// 				<Form
// 					ref={this.formRef}
// 					onFinish={this.onFinish}
// 					onFinishFailed={this.onFinishFailed}>
// 					<Field name="username" rules={[nameRules]}>
// 						<Input placeholder="Username" />
// 					</Field>
// 					<Field name="password" rules={[passworRules]}>
// 						<Input placeholder="Password" />
// 					</Field>
// 					<button>Submit</button>
// 				</Form>
// 			</div>
// 		)
// 	}
// }
