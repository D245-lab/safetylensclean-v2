import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useNavigate } from 'react-router-dom';

export default function Upload() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();

  async function handleUpload() {
    if (!file) return;
    setUploading(true);
    const fileExt = file.name.split('.').pop();
    const filePath = `${Date.now()}.${fileExt}`;
    const { error: uploadError } = await supabase.storage.from('uploads').upload(filePath, file);
    if (uploadError) {
      alert('Upload failed');
      setUploading(false);
      return;
    }
    const { data: publicUrlData } = await supabase.storage.from('uploads').getPublicUrl(filePath);
    if (publicUrlData?.publicUrl) {
      await analyzeImageWithAI(publicUrlData.publicUrl);
    }
    setUploading(false);
    navigate('/reports');
  }

  async function analyzeImageWithAI(publicUrl: string) {
    const response = await fetch("https://hjnonobmqlqnsekinqey.functions.supabase.co/analyze-image", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ image_url: publicUrl }),
    });

    if (response.ok) {
      const aiResult = await response.json();
      await supabase.from("reports").insert([{ image_url: publicUrl, analysis: aiResult }]);
    } else {
      console.error("AI analysis failed");
    }
  }

  return (
    <div style={{ textAlign: 'center', padding: '100px' }}>
      <h1>Upload Workplace Image</h1>
      <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} />
      <br/><br/>
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? "Uploading..." : "Upload & Analyze"}
      </button>
    </div>
  )
}
