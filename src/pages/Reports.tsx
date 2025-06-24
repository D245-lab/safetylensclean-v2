import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function Reports() {
  const [reports, setReports] = useState<any[]>([]);

  useEffect(() => {
    supabase.from("reports").select("*").order("created_at", { ascending: false }).then(({ data, error }) => {
      if (!error) setReports(data || []);
    });
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>AI Reports</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {reports.map((report, idx) => (
          <div key={idx} style={{ margin: '20px', border: '1px solid #ddd', padding: '10px', width: '300px' }}>
            <img src={report.image_url} alt="Workplace" style={{ width: '100%', height: 'auto' }} />
            <p><b>Hazards:</b> {report.analysis?.hazards?.join(', ')}</p>
            <p><b>Compliance Score:</b> {report.analysis?.complianceScore}%</p>
          </div>
        ))}
      </div>
    </div>
  )
}
