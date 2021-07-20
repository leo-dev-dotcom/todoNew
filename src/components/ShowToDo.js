import React from 'react'
import Form from './Form'
import './ShowToDo.css'
function ShowToDo() {
    let demo = (data) => {
        let { titles, desc, date, status } = data
        console.log(`Title: ${titles}, Description: ${desc}, Date: ${date}, Status: ${status}`)
    }
    return (
        <div className='container my-5 card '>
            <Form demo={demo}></Form>
        </div>
    )
}

export default ShowToDo
