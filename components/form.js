export default function CreateForm(props) {
  return (
      <div className='w-3/5 mx-auto mt-5 rounded-lg bg-emerald-400'>
          <p className='m-auto text-2xl text-center'>CookieStandForm</p>
          <form onSubmit={props.onSubmit} className='p-2'>
              <div className='block'>
                  <label for="location" className='float-left'>Location</label>
                  <input type="text" id="location" className='w-11/12'/>
              </div>
              <div className='grid grid-cols-4 grid-rows-1 my-5 gap-x-5'>
                  <div className="order-1 p-2 rounded-md bg-emerald-300">
                      <label for='minimum' className='text-sm'>Minimum Customers per Hour</label>
                      <input id='minimum' type='number' min='0'/>
                  </div>
                  <div className="order-2 p-2 rounded-md bg-emerald-300">
                      <label for='maximum' className='text-sm'>Maximum Customers per Hour</label>
                      <input id='maximum' type='number' min='0'/>
                  </div>
                  <div className="order-3 p-2 rounded-md bg-emerald-300">
                      <label for='average' className='text-sm'>Average Cookies per Sale</label>
                      <input id='average' type='number' step='0.1' min='0'/>
                  </div>
                      <button className='order-4 w-4/5 row-span-2 mx-5 rounded-md bg-emerald-600'>Create</button>
              </div>
          </form>
      </div>
  )
}