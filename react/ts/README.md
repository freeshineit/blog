
#### react + typescript 创建组件

IBoxProps是一个接口 在组件中充当 props
IBoxState是一个接口 在组件中充当 state

```
	interface IBoxProps extends React.Props<IBoxProps> {
    x?: number;
    y?: number;
    height?: number;
    width?: number;
}

interface IBoxState {
    visible?: boolean;
}

export default class DrawBox extends React.Component<IBoxProps, IBoxState> {
    static defaultProps: IBoxProps;

    constructor(props: IBoxProps) {
        super(props);
    }
    ...
}

DrawBox.defaultProps = {
    x=0;
    y=0;
    height=10;
    weight=10;
};

```

[原解决方案](https://stackoverflow.com/questions/37262047/react-with-typescript-define-defaultprops-in-stateless-function/37262331)