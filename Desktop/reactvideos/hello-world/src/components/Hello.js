import React from 'react'

function Hello() {
    // return (
    //     <div>
    //         <h1>hello sheenam</h1>
    //     </div>
    // )

    return React.createElement('div',
    {id:"hello",className:"hello"},
    React.createElement('h1',null,'hello sheenam'))
}


export default Hello


