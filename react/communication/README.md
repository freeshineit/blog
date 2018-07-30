## React 组件间通讯


### 父子组件间通讯

父传子使用props进行接收

父组件`index.jsx`

```jsx

import * as React from 'react';
import Hello from './hello';

class Home extends React.Component{
	constructor(props) {
		super(props)
	}

	render() {
		retrun (
			<div>
				<Hello id='hello'/>
			</div>
		)
	}
}
```

子组件同一级目录下`hello.jsx`组件

```jsx

import * as React from 'react';

class Hello extends React.Component{
	constructor(props) {
		super(props)
	}

	render() {
		let {id} = this.props // porps中的id 就是父组件传递的值
		retrun (
			<div id={id}></div>
		)
	}
}

export default Hello;
```

子传父 (回调函数或使用状态管理工具 Redux)


### 不相关的组件之间的通讯













