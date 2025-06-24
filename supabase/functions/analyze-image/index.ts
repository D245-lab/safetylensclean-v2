import { serve } from 'https://deno.land/x/sift@0.6.0/mod.ts'

serve(async (req) => {
  try {
    const { image_url } = await req.json()

    // === Your AI logic will go here later ===

    const analysisResult = {
      hazards: ["No hard hat", "No safety glasses", "Open scaffolding"],
      complianceScore: 65
    }

    return new Response(JSON.stringify(analysisResult), {
      headers: { "Content-Type": "application/json" }
    })
  } catch (err) {
    console.error(err)
    return new Response("Internal Server Error", { status: 500 })
  }
})
