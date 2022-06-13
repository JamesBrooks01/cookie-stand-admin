export default function CreateForm({ user, createResource }) {

    function formFilledHandler(e){
        e.preventDefault();
        const storeData = {
            location: e.target.location.value,
            minimum_customers_per_hour: parseInt(e.target.minimum.value),
            maximum_customers_per_hour: parseInt(e.target.maximum.value),
            average_cookies_per_sale: parseFloat(e.target.average.value),
            owner: user.id,
        }
        createResource(storeData)
        e.target.reset()
    }

  return (
      <div className='w-3/5 mx-auto mt-5 rounded-lg bg-emerald-300'>
          <form onSubmit={formFilledHandler} className='p-2'>
              <div className='grid grid-cols-2 grid-rows-2 m-5 gap-x-5'>
                  <label htmlFor="location" className='order-1 text-center'>ADD LOCATION</label>
                  <button className='order-2 row-span-2 mx-5 bg-emerald-600'>CREATE STAND</button>
                  <input type="text" id="location" className='order-3' placeholder="Cookie Stand Location"/>
              </div>
              <div className='grid grid-cols-3 grid-rows-1 my-5 gap-x-5'>
                  <div className="order-1 p-2 rounded-md bg-emerald-300">
                      <label htmlFor='minimum' className='text-sm text-center'>MINIMUM CUSTOMERS PER HOUR</label>
                      <input id='minimum' type='number' min='0' placeholder="0"/>
                  </div>
                  <div className="order-2 p-2 rounded-md bg-emerald-300">
                      <label htmlFor='maximum' className='text-sm'>MAXIMUM CUSTOMERS PER HOUR</label>
                      <input id='maximum' type='number' min='0' placeholder="0"/>
                  </div>
                  <div className="order-3 p-2 rounded-md bg-emerald-300">
                      <label htmlFor='average' className='text-sm'>AVERAGE COOKES PER SALE</label>
                      <input id='average' type='number' step='0.1' min='0' placeholder="0"/>
                  </div>
              </div>
          </form>
      </div>
  )
}