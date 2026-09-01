import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

function getSupabase() {
  if (!supabaseUrl || !serviceRoleKey) return null;
  return createClient(supabaseUrl, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}

export async function POST(request: Request) {
  const supabase = getSupabase();
  if (!supabase) return NextResponse.json({ error: "Visitor service is not configured" }, { status: 503 });

  let sessionId: string | undefined;
  try {
    const body = await request.json();
    sessionId = typeof body.sessionId === "string" ? body.sessionId : undefined;
  } catch {}

  if (!sessionId) return NextResponse.json({ error: "Missing sessionId" }, { status: 400 });
  const { data, error } = await supabase.rpc("register_visitor", { p_session_id: sessionId });
  if (error) {
    console.error("Visitor registration failed:", error);
    return NextResponse.json({ error: "Visitor service failed" }, { status: 500 });
  }
  return NextResponse.json({ totalVisits: Number(data ?? 0) });
}

export async function GET() {
  const supabase = getSupabase();
  if (!supabase) return NextResponse.json({ error: "Visitor service is not configured" }, { status: 503 });
  const { data, error } = await supabase.rpc("get_visitor_stats");
  if (error) return NextResponse.json({ error: "Visitor service failed" }, { status: 500 });
  return NextResponse.json(data);
}
