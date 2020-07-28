

一个灵活的JavaScript框架，主张通过小块且独立的组件(component)来实现复杂的UI以及各种交互

组件中的功能来源于React.Component基类，组件中的render方法可以有效地对界面进行实时渲染，像这样

```
class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}
```

在 React 中，有一个命名规范，通常会将代表事件的监听 prop 命名为 on[Event]，将处理事件的监听方法命名为 handle[Event] 这样的格式。

一般来说，有两种改变数据的方式。第一种方式是直接修改变量的值，第二种方式是使用新的一份数据替换旧数据。

简化复杂的功能

跟踪数据的改变

确定在 React 中何时重新渲染

函数组件

不需要像类那样继承react的基类，当只需要render方法时，接收props作为参数，然后返回需要渲染的元素即可

JSX

JS的一个语法扩展

JSX语法中，可以用大括号内放置变量（你甚至可以放表达式）以及表达式来对数据进行填充和实时修改，JSX也是一个表达式，编译时会被当做对象使用，在大括号内填充的内容在编译的时候会被转译成字符串，所以不用担心会受到注入攻击

ReactDOM.render(element, document.getElementById('root'));

将JSX元素插入根节点

React 元素是不可变对象

在实践中，大多数 React 应用只会调用一次 ReactDOM.render()

React 元素可以是用户自定义的组件

组件名称必须以大写字母开头    React 会将以小写字母开头的组件视为原生 DOM 标签

建议从组件自身的角度命名 props，而不是依赖于调用组件的上下文命名

组件无法修改自身的props

> 所有 React 组件都必须像纯函数一样保护它们的 props 不被更改

State 与 props 类似，但是 state 是私有的，并且完全受控于当前组件。

生命周期方法

componentDidMount()

componentWillUnmount()		这两个方法分别在挂载和卸载的时候执行

不要直接修改 State		构造函数是唯一可以给 this.state 赋值的地方

State 的更新可能是异步的

State 的更新会被合并

数据是向下流动的

在JSX中要谨慎对待回调函数 中的this，事件触发时回调函数中的this将不再是该类，所以记得bind一下，或者养成使用箭头函数的习惯，因为箭头函数不会自动创建this对象(但是作为props传入子对象的时候可能会需要一些额外的渲染，使用bind能更好的解决一些性能问题)

key 帮助 React 识别哪些元素改变了，比如被添加或删除。因此应当给数组中的每一个元素赋予一个确定的标识。

元素的 key 只有放在就近的数组上下文中才有意义。

一个好的经验法则是：在 map() 方法中的元素需要设置 key 属性。

key 只是在兄弟节点之间必须唯一

计算属性名称的语法

```
this.setState({
  [name]: value});
```

将value赋值给name的值所对应的变量

在 React 应用中，任何可变数据应当只有一个相对应的唯一“数据源”。

组合

在未知子组件的条件下，props.children可以通过JSX嵌套来将子组件传递给它们

或者说，可以自定义这类''洞''的名称，将JSX对象当作变量传递即可

继承

继承？不存在的