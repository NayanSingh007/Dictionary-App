import React from "react";

function Form({handleSubmit,search,setSearch}){
    return (
        <form onSubmit={handleSubmit} className='form'>
            <label htmlFor='search'>Search for a word</label>
            <input type='text' value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='game'/>
            <button type='submit' className='btn'>Submit</button>
        </form>
    )
}

export default Form;