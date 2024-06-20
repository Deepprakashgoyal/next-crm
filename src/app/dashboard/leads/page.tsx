import React from 'react'

async function getUsers(){
    const res = await fetch('https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=100')
    return await res.json()
}
const Leads = async () => {
    const users = await getUsers();
    const usersData = users.data;
  return (
    <div className=''>
        <h1>All Users Data</h1>
        <div className='grid grid-cols-3 gap-2'>
        {
            usersData && usersData.data.map((user: any) => (
            <p className='bg-slate-50 shadow rounded-md py-2 px-5 text-black my-2' key={user.email}>{user.email}</p>
        ))
        }
        </div>
    </div>
  )
}

export default Leads