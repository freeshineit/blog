## flex box

### display: flex | inline-flex

定义了一个flex容器; 内联或块取决于给定的值。它为所有直接的子元素提供了一个弹性环境。

```css
.container{
	dispaly: flex | inline-flex;
}
```

### flex-direction: row | row-reverse | column | column-reverse 

建立了主轴，从而定义了flex项目放置在flex容器中的方向。Flexbox是单向布局概念。将flex项目视为主要布置在水平行或垂直列中。

+	`row`浏览器中默认， 主轴方向 从左到右 默认不换行
+	`row-reverse` 主轴反方向排序 从右到左 默认不换行
+	`column` 侧轴方向  从上到下
+	`column-reverse` 侧轴反方向 从下到上


```css
.container{
	flex-direction: row | row-reverse | column | column-reverse 
}
```

###  flex-wrap: nowrap | wrap | wrap-reverse

默认情况下，flex项目将全部尝试适合一行。你可以改变它，并允许项目根据需要用这个属性进行换行。

+	`nowrap` 默认 不换行
+	`wrap`  flex项目将从上到下成多行
+	`wrap-reverse` flex项目将从下到上成多行

```css
.container{
	flex-wrap: nowrap | wrap | wrap-reverse
}
```

### flex-flow: <‘flex-direction’> || <‘flex-wrap’> 
	
这是一个简写`flex-direction`和`flex-wrap`属性，它们一起定义了flex容器的主轴和交叉轴。默认是`row nowrap`。

```css
.container{
	flex-flow: <‘flex-direction’> || <‘flex-wrap’>
}
```

### justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly

定义了沿主轴的对齐。当一条线上的所有弹性物品都不灵活或灵活但达到其最大尺寸时，它有助于分配剩余空间。当物品溢出时，它也对物品的排列起到一定的控制作用。

+	`flex-start` 项目从起始位置排列
+	`flex-end` 项目从结束位置排列
+	`center` 项目沿着这条线居中
+	`space-between` 项目均匀分布在行中; 第一项是在起始行，最后一行是最后一行
+	`space-around` 物品均匀分布在线上，周围有相同的空间。请注意，视觉上空间不相等，因为所有物品在两侧都有相同的空间。第一个项目将在容器边缘有一个空间单位，但下一个项目之间有两个空间单元，因为下一个项目有其自己的间距
+	`space-evenly` 项目是分布式的，以便任何两个项目之间的间距（以及到边缘的空间）相等


```css
.container{
	justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly
}
```

###	align-items: flex-start | flex-end | center | baseline | stretch

定义了flex项目沿当前行的侧轴放置的默认行为。可以将其视为`justify-content`侧轴（垂直于主轴）的版本。

+	`flex-start`  项目侧轴上边沿对齐
+	`flex-end` 项目侧轴下边沿对齐
+	`center` 项目侧轴剧中
+	`baseline` 项目基线对齐对齐
+	`stretch` 默认  拉伸填充容器

```css
.container{
	align-items: flex-start | flex-end | center | baseline | stretch
}
```

### align-content: flex-start | flex-end | center | space-between | space-around | stretch

当侧轴上有额外的空间时，这会将Flex容器的按`justify-content`对齐，类似于如何在主轴内对齐各个项目。
注意：只有一行是弹性项目时，此属性不起作用


### order: <integer>

默认情况下，Flex项目按源代码顺序排列。但是，该`order`属性控制它们在flex容器中的显示顺序。
`order`属性用于更改在主轴方向上排列顺序。
`order`数值越小，排列越靠前，默认为0，可以为负数。

```css
.item {
  order: <integer>; /* default is 0 */
}
```

### flex-grow:<number>

定义了Flex项目在必要时增长的能力。它接受作为比例的无单位价值。它规定了该项目应该占用的flex容器内的可用空间量。
如果所有项目都`flex-grow`设置为1，则容器中剩余的空间将平均分配给所有子元素。如果其中一个元素的值为2，则剩余空间将占用其他空间的两倍。
注意：负数无效, 为0时不伸缩

```css
.item{
	flex-grow: <number> /*default 0 */
}
```

### flex-shrink: <number>

定义了Flex项目在必要时收缩的能力。
注意：负数无效

```css
.item{
	flex-shrink: <number>; /* default 1 */
}
```

```css
.container_8{
	display: flex;
	width: 300px;
}
.container_8 .flex_item{
	width: 100px;
	height: 100px;
}
.container_8 .flex_item:nth-child(1){
	flex-shrink: 0;
}
.container_8 .flex_item:nth-child(2){
	flex-shrink: 2;
}
.container_8 .flex_item:nth-child(3){
	flex-shrink: 2;
}
.container_8 .flex_item:nth-child(4){
	flex-shrink: 2;
}
```

上例中 shrink的总数值为 6 , `.container_8 .flex_item:nth-child(1)`的shrink值为0, 则其宽度为 100px。而其他三个元素的宽度为(300 - 100) / 6 * 2 = 66.67px


### flex-basis: <length> | auto

这将在分配剩余空间之前定义元素的默认大小。它可以是一个长度（例如20％，5rem等）或关键字。该`auto`关键字的意思是“看看我的宽度或高度属性”（暂时由`main-size`关键字完成，直到弃用）。该`content`关键字的意思是“它根据项目的内容大小”,此关键字不能很好地支持，所以很难进行测试，并更难知道它的兄弟`max-content`，`min-content`和`fit-content`。
如果设置为0，则不会考虑内容的额外空间。如果设置为`auto`，多余空间将根据其`flex-grow`值分配。

```css
.item{
	flex-basis: <length> | auto; /* default auto */
}
```

### flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]

这是速记`flex-grow`, `flex-shrink`和`flex-basis`组合。第二个和第三个参数（`flex-shrink`和`flex-basis`）是可选的。默认是 `0 1 auto`。

```css
.item{
	flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
}
```

### align-self: auto | flex-start | flex-end | center | baseline | stretch

允许`align-items`为各个Flex项目覆盖默认对齐方式（或由其指定的对齐方式).
请注意`float`，`clear`并且`vertical-align`对Flex项目没有影响。

```css
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```

```css
.container_11{
	display: flex;
	align-items: flex-start;
	height: 150px;
}
.container_11 .flex_item{
	width: 100px;
	height: 100px;
}
.container_11 .flex_item:nth-child(1){
	align-self: center
}
.container_11 .flex_item:nth-child(2){
	align-self: flex-end;
}
```

by @shine(xiaoshaoqq@gmail.com)

date: 2018-03-06

[github地址](https://github.com/freeshineit/blog/tree/master/css/flexbox)

[example](https://github.com/freeshineit/blog/tree/master/css/flexbox/example)

参考：[Flexbox完整指南](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)






















