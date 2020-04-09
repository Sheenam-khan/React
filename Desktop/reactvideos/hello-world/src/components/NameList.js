import React from 'react'
import Person from './Person';

function NameList() {
//     const names=['bruce','kelle','diana']
//     const nameList=  names.map(name=> <h2>{name}</h2>)

//     return (
//         <div>

// {nameList}


//             {/* {
//   names.map(name=> <h2>{name}</h2>)
//             } */}


//           {/* <h2>{names[0]}</h2> 
//           <h2>{names[1]}</h2>  
//           <h2>{names[2]}</h2>   */}
//         </div>
//     )


const names=['bruce','kelle','bruce','diana']
const persons=[
    {
    id:1,
    name:'A',
    age:14,
    skill:"java"
    },
    {
    id:2,
    name:'B',
    age:45,
    skill:"FSd"
    }
];
// const personList=persons.map(person=><h2>I am{person.name},i am {person.age}years old, i know{person.skill}</h2>)
// return(
// <div>{personList}</div>
// )

const personList=persons.map(person=>(<Person key={person.id} person={person}></Person>) )


// const nameList=names.map(name=><h1 key={name}>{name}</h1>)
const nameList=names.map((name,index)=><h1 key={index}>{index}{name}</h1>)

if(nameList){
    return(
        <div>{nameList}</div>
        )
}
else{
    return(
        <div>{personList}</div>
        )
}













}

export default NameList
