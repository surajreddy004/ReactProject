import React from 'react'

const NewsDiaplay = (props) =>{

    const renderList = props.newsData.map((data,key) => {

    return(
        <div>
            <h1 key={data.id}>{data.id}</h1>
            <h1>key={data.month}</h1>
            <h2>key={data.title}</h2>
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