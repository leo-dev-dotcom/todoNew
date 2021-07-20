import React from 'react'
import { useState } from 'react'

function Form(props) {
    const [titles, setTitle] = useState('')
    const [desc, setDecs] = useState('')
    const [date, setDate] = useState('')
    const [statuses, setStatus] = useState('')
    let title = (e) => {
        setTitle(() => {
            return e.target.value
        })
    }
    let descr = (e) => {
        setDecs(() => {
            return e.target.value
        })
    }
    let dates = (e) => {
        setDate(() => {
            return e.target.value
        })

    }
    let status = (e) => {
        setStatus(() => {
            return e.target.value
        })
    }
    let formSubmit = (e) => {
        e.preventDefault();
        console.log('submitted')
        const data = {
            titles: titles,
            desc: desc,
            date: date,
            status: statuses,
        }
        props.demo(data)
    }

    return (
        <div>
            <div className="row">
                <div className="col-6">
                    <form onSubmit={formSubmit}>
                        <br />
                        <div className="form-group mb-3">
                            <label htmlFor="title">Title</label><br />
                            <input type="text" onChange={title} />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="description">Description</label>
                            <br />
                            <input type="text" onChange={descr} />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="date">Date</label><br />
                            <input type="date" onChange={dates} />
                        </div>
                        <label htmlFor="status">Status</label><br />

                        <input type="text" name="" onChange={status} />
                        <button className='btn btn-sm btn-primary' type='submit'>Submit</button>
                    </form>
                </div>
                <div className="col-6">
                    <br />
                    <h5>
                        Title: {titles}
                    </h5>
                    <h5>
                        Description:  {desc}
                    </h5>
                    <h5>
                        Date:  {date}
                    </h5>
                    <h5>
                        Status: {statuses}
                    </h5>
                </div>
            </div>


        </div>
    )
}

export default Form
