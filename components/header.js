export default function Header({ user }) {
  return <header className='grid grid-cols-2 grid-rows-1 px-8 py-5 bg-emerald-400'>
      <h1 className='ml-20 text-4xl'>Cookie Stand Admin</h1>
      <div className="absolute grid grid-cols-3 grid-rows-1 gap-3 mb-5 left-3/4">
        <p className="order-1 w-20 p-1 bg-white rounded-md">{user.username}</p>
        <button className="order-2 w-20 p-1 rounded-md bg-emerald-600">Sign Out</button>
        <button className="order-3 w-20 p-1 bg-white">Overview</button>
      </div>
      </header>
}