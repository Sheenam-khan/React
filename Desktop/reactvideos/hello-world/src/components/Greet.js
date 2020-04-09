import React from 'react'
//function Greet() {
//     return <h1>hello sheenamb</h1>
// }

// const Greet=()=><h1>sheenamb</h1>


const Greet=(props)=>{
   const {name,heroname}=props
    // console.log(props)
    return (
        <div>
{/* <h1>{props.name}:{props.heroname}</h1>
{props.children} */}

<h1>{name}:{heroname}</h1>
 
</div>
    )
}
export default Greet;