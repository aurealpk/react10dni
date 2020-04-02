import React from 'react'


const Form = ({submitFn}) => (
    <form onSubmit={submitFn}>
        <input placeholder="name" />
        <input placeholder="link" />
        <input placeholder="image" />
        <textarea placeholder="description" 
        name="description" />
        <button type="submit">Add new item</button>

    </form>
)

export default Form;