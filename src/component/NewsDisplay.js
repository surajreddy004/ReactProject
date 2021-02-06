import React from 'react'

const NewsDiaplay = (props) =>{

    const renderList = props.newsData.map((data) => {

    return(
        <div>
            <h1>{data.id}</h1>
            <h1>{data.month}</h1>
            <h2>{data.title}</h2>
        </div>

    )
    })
    return(
        <div>
             {renderList}
        </div>
    )
}

export default NewsDiaplay;