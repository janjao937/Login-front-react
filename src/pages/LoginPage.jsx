export default function LoginPage(){
    return (
        <section className='flex flex-col gap-4 bg-white p-4 rounded-md'>
        <div>
          <label className='block mb-1 font-semibold' htmlFor=''>Username</label>
          <input className='w-full outline-none px-3 py-1.5 rounded-md focus:ring-2 focus:ring-blue-600 border' type='text' />
        </div>
        <div>
          <label className='block mb-1 font-semibold' htmlFor=''>Password</label>
          <input className='w-full outline-none px-3 py-1.5 rounded-md focus:ring-2 focus:ring-blue-600 border' type='text' />
        </div>
        <button className='bg-blue-800 px-3 py-1.5 text-white rounded-md'>Sign Up</button>
      </section>
    )
}