import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Your Dashboard</h1>
      <div className="space-x-4">
        <Link to="/upload" className="px-4 py-2 bg-green-600 text-white rounded">Upload New Image</Link>
        <Link to="/reports" className="px-4 py-2 bg-blue-600 text-white rounded">View Reports</Link>
      </div>
    </div>
  );
}
