# Sprint 2 - Module 1 : Reducers

## [Training Kit](https://github.com/LambdaSchool/Full-Stack-Web-Curriculum/tree/main/03-WebApplications-II/Sprint%2002%20-%20Advanced%20State%20Management/Module%201%20-%20The%20Reducer%20Pattern)

### [Previous Lesson Plan] (https://github.com/LambdaSchool/Web-ReducerPattern-Guided-Project)
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
> Slido: *insert slido link*
> Guided Project: https://github.com/LambdaSchool/web-guided-project-reducer
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


### Module Project Review
* [Reducer Todo](https://github.com/LambdaSchool/reducer-todo)

## Breakout Slack Messages

----

## After Class Message
Hope you all enjoyed today's guided Lesson!
A reminder if that office hours are from 3:30 - 4:30 Lambda Time. Don't forget to complete the days Check for Understanding and Pulse Checks! 

Module Project
[Reducer Todo](https://github.com/LambdaSchool/reducer-todo)

Here is a review of today's material.

Key Terminology
* 📝 *term* - [description](#)

Key Concepts
* 📝 *concept* - [description](#)