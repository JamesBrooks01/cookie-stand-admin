import { hours } from "../data"

export default function ReportTable({ hourly_sales, storeNames }){
  
  if (storeNames.length == 0) {
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
              <th key={idx}>{hour}</th>
            ))}
            <th>Totals</th>
          </tr>
        </thead>
        <tbody>
            <tr className="bg-emerald-300">
              <th className="border border-black">Calexico</th>
              {hourly_sales.map((number, idx) => (
                <td key={idx} className="p-2 border border-black">{number}</td>
              ))}
              <td className="p-2 border border-black">516</td>
            </tr>
            <tr className="bg-emerald-300">
              <th className="border border-black">Barcelona</th>
                {hourly_sales.map((number, idx) => (
                  <td key={idx} className="p-2 border border-black">{number}</td>
                ))}
              <td className="p-2 border border-black">516</td>
            </tr>
            <tr className="bg-emerald-300">
              <th className="border border-black">Vancouver</th>
              {hourly_sales.map((number, idx) => (
                <td key={idx} className="p-2 border border-black">{number}</td>
                ))}
              <td className="p-2 border border-black">516</td>
            </tr>
            <tr className="bg-emerald-300">
              <th className="border border-black">Milano</th>
              {hourly_sales.map((number, idx) => (
                <td key={idx} className="p-2 border border-black">{number}</td>
                ))}
              <td className="p-2 border border-black">516</td>
            </tr>
            <tr className="bg-emerald-300">
              <th className="border border-black">Detroit</th>
              {hourly_sales.map((number, idx) => (
                <td key={idx} className="p-2 border border-black">{number}</td>
                ))}
              <td className="p-2 border border-black">516</td>
            </tr>
            <tr className="bg-emerald-300">
              <th className="border border-black">Addis Ababa</th>
              {hourly_sales.map((number, idx) => (
                <td key={idx} className="p-2 border border-black">{number}</td>
                ))}
              <td className="p-2 border border-black">516</td>
            </tr>
            <tr className="bg-emerald-300">
              <th className="border border-black">Dublin</th>
              {hourly_sales.map((number, idx) => (
                <td key={idx} className="p-2 border border-black">{number}</td>
                ))}
              <td className="p-2 border border-black">516</td>
            </tr>
            <tr className="bg-emerald-300">
              <th className="border border-black">Tacoma</th>
              {hourly_sales.map((number, idx) => (
                <td key={idx} className="p-2 border border-black">{number}</td>
                ))}
              <td className="p-2 border border-black">516</td>
            </tr>
        </tbody>
        <tfoot className="bg-emerald-400">
          <tr>
            <th className="border border-black">Totals</th>
            <td className="p-2 border border-black">384</td>
            <td className="p-2 border border-black">336</td>
            <td className="p-2 border border-black">240</td>
            <td className="p-2 border border-black">192</td>
            <td className="p-2 border border-black">336</td>
            <td className="p-2 border border-black">192</td>
            <td className="p-2 border border-black">288</td>
            <td className="p-2 border border-black">336</td>
            <td className="p-2 border border-black">336</td>
            <td className="p-2 border border-black">384</td>
            <td className="p-2 border border-black">288</td>
            <td className="p-2 border border-black">336</td>
            <td className="p-2 border border-black">192</td>
            <td className="p-2 border border-black">288</td>
            <td className="p-2 border border-black">4128</td>
          </tr>
        </tfoot>
      </table>
    )
  }
}
