import React from 'react'

export default function Form(props) {
    const { values, update, submit } = props

    const onChange = evt => {
        const { name, value } = evt.target
        update(name, value)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group inputs'>
                <label htmlFor='memberName'>Name
                    <input
                    id="memberName"
                    type='text'
                    name='memberName'
                    onChange={onChange}
                    ></input>
                </label><br></br>

                <label htmlFor="email">Email
                <input
                id='email'
                type='email'
                name='email'
                onChange={onChange}
                value={values.email}
                ></input>
                </label><br></br>

                <label htmlFor='role'>Role
                <select id='role' name='role' onChange={onChange} value={values.role}>
                    <option value=''>--Select a Role--</option>
                    <option value='Teacher'>Teacher</option>
                    <option value="Student">Student</option>
                    <option value='MiddleManagement'>Middle Management</option>
                    <option value='ProfessionalPokerPlayer'>Professional Poker Player</option>
                    <option value="RonBurgundy">I'm Ron Burgundy?</option>
                </select>
                </label>
                <div className='submit'>
                    <button>submit</button>
                </div>
            </div>

        </form>
    )



}