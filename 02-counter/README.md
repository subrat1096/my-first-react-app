# React Hooks

# Benefits of Using React Hooks

Hooks provide a lot of benefits to the developers. It makes your component better, and it helps in writing clear, concise, and maintainable code. It just cut all the unnecessary code from your component and makes your code more readable. But the question is when to use React hooks?

Use Hooks when you’re writing a function component, and you want to add some state to it. Earlier this job was done by using a Class, but now you can write the hooks inside a function component.

# Rules of Hook

Below are the main rules of using React hooks…

1. Always call hooks at the top level. Do not call it inside loops, conditions, or nested functions. You will be ensured that hooks can be called in the same order each time component renders.

2. Hooks can not be called from regular JavaScript functions. You can call it from React function components. One hook can call another hook.

# Hooks Effect

Hooks effect allows you to perform a side effect in function components. Hooks effect has no use of function components available in-class components. Hooks effects are similar to the lifecycle method componentDidMount(), componentDidUpdate(), and componentWillUnmount().

Hooks effect has the common features given below…

* Updating the DOM
* Fetching and Consuming data from server API
* Setting up subscription
