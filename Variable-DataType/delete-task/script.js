import React, { useState } from 'react'

const script = () => {
    const [data, setData] = useState([
        { id: 1, task: "Go Back!" },
        { id: 2, task: "Hello Java!" },
        { id: 3, task: "Office Work!" },
        { id: 4, task: "BTM" },
        { id: 5, task: "Hostal Life!!!" },
    ])
    console.log(data, 'dattaaa');

    const handleClick = (taskId) => {
        const selectedId = data.filter((item) => item.id === taskId);
        setData(selectedId);
    }

    return (
        <div>
            {data.map((item) =>
                <li key={item.id}>item.task</li>,
                <button onClick={handleClick(item.id)}>Delete</button>
            )}

        </div>
    )
}

export default script