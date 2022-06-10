export default function Footer({ locations }) {
  return <footer className='px-8 py-6 text-center bg-emerald-400'>
      <p>{locations.length} Locations World Wide</p>
  </footer>
}