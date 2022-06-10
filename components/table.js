import { hours } from "../data"

export default function CookieStandTable({stands, deleteStand}){

  let total_list = []
  
  if (stands.length == 0) {
    return (
      <h2 className='mx-auto my-5 text-2xl text-center'>No Cookie Stands Available</h2>
    )

  }
  else{
    return (
      <table className="w-3/5 mx-auto mt-5 mb-5 rounded-md bg-emerald-500">
        <thead>
          <tr>
            <th>Location</th>
            {hours.map((hour,idx) => (
              <th key={idx} className="border border-emerald-600">{hour}</th>
            ))}
            <th>Totals</th>
          </tr>
        </thead>
        <tbody>
              {stands.map(stand => (
                <ReportTableRow key={stand.key} storeData={stand} deleteStand={deleteStand} total_list={total_list}/>
              ))}
        </tbody>
        <tfoot className="bg-emerald-400">
          <TotalRow total_list={total_list} />
        </tfoot>
      </table>
    )
  }
}

function ReportTableRow({ storeData, deleteStand, total_list }){
  function clickHandler(){
    deleteStand(storeData.id);
  }
  if (storeData.hourly_sales.length == 0){
    storeData.hourly_sales = [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36];
    total_list.push(storeData.hourly_sales)
  }
  else if ((storeData.hourly_sales[0] !== 48) && (storeData.hourly_sales[-1] !== 36)){
    total_list.push(storeData.hourly_sales)
  }

  return (
    <tr className="bg-emerald-300">
      <th className="border border-emerald-600">{storeData.location} <button onClick={clickHandler}>[x]</button></th>

      {storeData.hourly_sales.map((slot,idx) => <td key={idx} className="p-2 border border-emerald-600">{slot}</td>)}

      <td className="p-2 border border-emerald-600">{storeData.hourly_sales.reduce((num,sum) => num + sum, 0)}</td>

    </tr>
  )
}

function TotalRow({ total_list }){
  function addTotalArray(total_list){
    console.log(total_list)
    let totalValues = []
    for (let i=0; i <= 13; i++){
      let totalColumn = 0;
      for (let j=0; j < total_list.length; j++){
        totalColumn += total_list[j][i];
      }
      totalValues.push(totalColumn)
    }
    return totalValues
  }
  let totalsArray = addTotalArray(total_list)
  return (
    <tr>
      <th className="border border-emerald-600">Totals</th>
      {totalsArray.map((value, idx) => <td className="p-2 border border-emerald-600" key={idx}>{value}</td>)}
      <td className="p-2 border border-emerald-600">{totalsArray.reduce((num, sum) => num + sum, 0)}</td>
    </tr>
  )
}