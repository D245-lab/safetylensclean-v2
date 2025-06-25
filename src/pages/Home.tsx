import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '100px' }}>
      <h1 className="text-5xl font-bold mb-4">SafetyLens.pro v2</h1>
      <p>AI-Powered Workplace Safety Analysis</p>
      <div style={{ marginTop: '30px' }}>
        <Link to="/upload">
          <button style={{ padding: '10px 30px', margin: '10px' }}>Upload Image</button>
        </Link>
        <Link to="/reports">
          <button style={{ padding: '10px 30px', margin: '10px' }}>View Reports</button>
        </Link>
      </div>
    </div>
  )
}
