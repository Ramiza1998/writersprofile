import React, { useState } from 'react'

function ProfileForm(submit) {
    const [profile, setProfile] = useState({
      firstname:"",
      lastname:"",
      email:"",
      phone:""
    });


    const handler =(event) =>{
     setProfile((prev)=>({
     ...prev,
     [event.target.name] : event.target.value
     })); 
    } 

    const handleForm =(e)=>{
        e.preventDefualt();
        submit(profile)
    }
  return (
    <div className='formContianer'>
    <h3>Profile Form</h3>
    <form>
    <fieldset>
    <legend>Bio Data</legend>
    <div className='names'>

    <label>
    First names
    <input name='firstname' type="text" onChange={handler}/>
    </label>

    <label>
    Last name
    <input name='lastname' type="text" onChange={handler}/>
    </label>

    <label>
    Email
    <input name='email' type="email" onChange={handler}/>
    </label>

    <label>
    Phone
    <input name='phone' type="tel" onChange={handler}/>
    </label>

    </div>

    </fieldset>
    <button className='form' onclick={handleForm}>Add Profile</button>

    </form>

    </div>
  )
}

export default ProfileForm
