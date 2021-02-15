# Sprint 2 - Module 1 : Reducers

## [Training Kit](https://github.com/LambdaSchool/Full-Stack-Web-Curriculum/tree/main/03-WebApplications-II/Sprint%2002%20-%20Advanced%20State%20Management/Module%201%20-%20The%20Reducer%20Pattern)

### [Previous Lesson Plan](https://github.com/LambdaSchool/Web-ReducerPattern-Guided-Project)
----

## Objectives

By the end of this module, learners should be able to:
* explain what immutability is in programming and demonstrate its benefits
* describe reducer functions
* employ the `useReducer` hook to manage state in a component

----

## Instructor Resources
* 🐙 [Guided Project Starter](https://github.com/LambdaSchool/web-guided-project-reducer)
* 🐙 [Guided Project Solution](https://github.com/LambdaSchool/web-guided-project-reducer-solution)
* 🐙 [Module Project](https://github.com/LambdaSchool/reducer-todo)
* 🐙 [Module Project Solution]()

----

## Guided Project Slack Message
> 1. Clone without forking the following repo: https://github.com/LambdaSchool/web-guided-project-reducer
> 2. Navigate into both the review and followAlong folders and run npm i to load dependences.
>
> :point_right: Technical issues spinning up the project? Please head over to the help channel!
> :point_right: If you fall behind during lecture and wish to catch up:
>
> git fetch && git reset --hard origin/lecture
>
> :point_right: Slido event: *insert slido link*

----

## Guided Project Zoom Invitation:
> Unit 3 | Sprint 2 | **Module 1: Reducers**
> _______________________________________________________
> Zoom Link : *insert zoom link*
>
> Slido: *insert slido link*
>
> Guided Project: https://github.com/LambdaSchool/web-guided-project-reducer
>
> Class Project: https://github.com/LambdaSchool/reducer-todo

----

## Check for Understanding Questions

These are the questions used internally to check student understanding. Students will be instructed to answer these questions after the guided project. Please make sure to emphasize the concepts behind these answers.

#### Why is it important to follow immutability principles in React?
* React components will only re-render if your state updates are mutable
* **mutable updates make state management more predictable**
* React components will only re-render if your state updates are immutable
* You can only have a certain number of mutable properties in React

#### In programming in general, what does a reducer function do?
* aggregates values based on app settings
* Takes in one argument and returns two seperate items
* Reduce sauce for your steak dinner
* **takes in two arguments and returns a single item**

#### When you call useReducer and pass in a reducer and an initial state object, what does it return?
* [state, action]
* [props, action]
* **[state, dispatch]**
* [action, dispatch]

#### What is the required property in action objects?
* dataType
* data
* payload
* **type**

#### What would be the proper case statement for the following state and action objects
```js
const initialState = {
  user: {},
  friends: [],
  hobbies: []
}
```

```js
{ type: "ADD_HOBBY", payload: newHobby }
```
* 
```js
case "HOBBY_UPDATER":
  return {
    ...state,
    hobbies: [...state.hobbies, action.payload]
  }
```
* 
**
```js
case "ADD_HOBBY":
  return {
    ...state,
    hobbies: [...state.hobbies, action.payload]
  }
```
**

* 
```js
case "ADD_HOBBY":
  return {
    ...state,
    addHobby: [...state.hobbies, action.payload]
  }
```
* 
```js
case "ADD_HOBBY":
  return {
    hobbies: [...state.hobbies, action.payload]
  }
```

## Guided Project Outline

### Introduction to the Week
* Started with construction and testing of components
* This week we will be concentrating on management of state

### Introduction to the Module
* We are talking about how to look at an application as data, in addition to UI.

### Building on top of Stateful Logic
* Discuss how data defines the business of our application.
* Stress that the saving and manipulation of data is at the heart of any application.
* Stress data organization as a mindset.
* A manipulation of data is called an action.

### Model the Business logic of Todo App
* Discuss what is the data of a todo app.
* Discuss what are the actions of todo app.
* Stress the focus an clearity of action

### Model the Business logic of Calculator
* Discuss what is the data of a calculator app.
* Discuss what are the actions of calculator app.

### Model the Business logic of Coffeeshop
* Discuss what is the data of a coffeeshop app.
* Discuss what are the actions of coffeeshop app.

### The Problems of using Component State for Business Logic
* Ask what are the issues of using component state to hold business logic.
* Highlight how simple and messy our state modifications currently are.
* Highlight the lack of scaling. Need for prop drilling.
* Define component state as for components not, application.

## Show the value of reducers
1. Respects seperation of concerns.
2. Orders our actions and business logic.
3. Implementation agnostic
4. Prop drilling is not needed.
5. Immutable, predictable and single source of truth.

### BREAK

### Walkthrough Reducer Calls
* Show reducer code we already have briefly.
* Walk through a reducer call.
* Open up review project.
* Call the reducer with a new current value with an ADD action.
* Call the reducer with a new current value with an SUBTRACT action.
* Discuss the componsition of entire state object.
* Call the reducer with a new current value with an ADD_TO_MEMORY action.
* Show that we are now simulating all of our calulator functions.

### Show the use of creating actions.
* Show that making action creators allow us to note make redundent code.
* Make an addAction action creator.
* Make a subtractAction action creator.
* Modularize all of our actions.

### Show how we would go about adding in new actions.
* Add multiplication action in reducer and action creator.
  1. Add in an action to our reducer.
  2. Add in an action creator.
  3. Use it in our code.

### Show the use of constants in action creators.
* Easy to get into spelling mishaps when having random strings.
* Constants make it easiler to map.

### Linking reducer functions to our ui
* We will be using two, useReducer and redux.
* Add in our useReducer hook and 3 buttons that work with our reducer.
```js
const [ state, dispatch ] = useReducer(reducer, initialState);
```
* Add in state from useReducer hook.
* Add in eventListeners to trigger our actions.
* Note that we need to trigger that action and also rerender our application. It needs to be reactive. This is what dispatch does.
* Go through the reactive process of dispatch.

### Walkthrough Dispatch
1. Start at the component
2. Trigger an action
3. Pass that action to dispatch
4. Update State in reducer.
5. Rerender.

### Note the similarities between this and state reactivity.

### BREAK

### Walkthrough our followAlong.
* Show the solution code.
* Highlight that we are currently using state and will convert that to reducers.
* Note the editing flag and flags in general as a part of state.

### Walkthrough Reducer Creation
1. Create the recuder file first.
2. Build out your actions.
3. Connect your UI.

### NOTE THAT YOU SHOULD DO ONE THING AT A TIME!!!!

### Create your reducer
# Create folder and file.
# Note that every reducer is just an immutable function that modifies state.
# Create function.
# Create switch on type.
# Create cases.
# Make initialState.
# Add default.

### Test your reducer
# Import reducer into your main code.
# Connect useReducer.

### Edit Reducer Code.
# Note the return of modified state in each action.

### Add Action Creators
# Add folder and file.
# Create and export actions.
# Add your constants

### Test actions
# Make a fake button to show the action works.

### Connect to UI
# Put in state for display
# Put in dispatch of action creators for event handlers.

### Final walkthrough of reducer code.


### Module Project Review
* [Reducer Todo](https://github.com/LambdaSchool/reducer-todo)

## Breakout Slack Messages

----

## After Class Message
Hope you all enjoyed today's guided Lesson!
A reminder if that office hours are from 2:30 - 3:30 Lambda Time. Don't forget to complete the days Check for Understanding and Pulse Checks! 

Module Project: [Reducer Todo](https://github.com/LambdaSchool/reducer-todo)
Lecture Video: https://www.youtube.com/watch?v=9fsarwPVJc8&list=PLWX9jswdDQ0X-xzXG8jI9o9LNyYULSNcK&index=13
Lecture Slides: https://docs.google.com/presentation/d/1XhCZWfyGUbxRAuhHvf38baQBcn4sl5jxZjSjKCSPFqw/edit?usp=sharing

Here is a review of today's material.

Key Terminology
* 📝 *switch* - [a javascript keyword used to streamline complex if else logic](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
* 📝 *action* - [a single piece of data manipulation in a reducer pattern](https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow)
* 📝 *reducer* - [a pure, predictible immutable function that executes action on state data](https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow)
* 📝 *immutiblity* - [an object or variable that can not be modified (and thus should only be copied)](https://www.youtube.com/watch?v=5qQQ3yzbKp8)
* 📝 *pure functions* - [a pure, predictible immutable function that executes action on state data](https://www.youtube.com/watch?v=dZ41D6LDSBg)

Key Concepts
* 📝 *Business Logic* - [The outline of the data and types of manipulations of data needed to create a working application](https://simplicable.com/new/business-logic)
* 📝 *Application State* - [Data that is used across all of our application's components.](https://www.youtube.com/watch?v=7ilYJAG-_Ug)
* 📝 *Component State* - [Data that is used within the context of a single component](https://stackoverflow.com/questions/22883759/what-is-the-difference-between-application-state-and-component-local-state-in-cl)
* 📝 *The Reducer Pattern* - [A design pattern for managing and modularizing out application state.](https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow)
* 📝 *useReducer Hook* - [A hook used to connect reducers and state to a React component](https://www.geeksforgeeks.org/reactjs-usereducer-hook/)
