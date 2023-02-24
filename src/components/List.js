import React from 'react'

function List({user:{id,avatar,first_name,last_name,email}}) {
  return (
    <div style={{border:'1px solid #000',width:'300px',paddingBottom:'10PX',borderRadius:'7PX'}}>
        <img  src={avatar} alt='rasm' className='avatar' />
        <h1 id={id}>{first_name} {last_name}</h1>

        <a href={`mailto:${email}`}>{email}</a>
    </div>
  )
}

export default List