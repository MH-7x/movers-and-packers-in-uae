import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import type { TrackEvent } from "@/lib/tracker";

const DATA_DIR = path.join(process.cwd(), "data");
const EVENTS_FILE = path.join(DATA_DIR, "events.json");

function ensureFile(): void {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(EVENTS_FILE)) fs.writeFileSync(EVENTS_FILE, "[]", "utf8");
}

function readEvents(): TrackEvent[] {
  ensureFile();
  try {
    return JSON.parse(fs.readFileSync(EVENTS_FILE, "utf8")) as TrackEvent[];
  } catch {
    return [];
  }
}

function writeEvents(events: TrackEvent[]): void {
  ensureFile();
  fs.writeFileSync(EVENTS_FILE, JSON.stringify(events, null, 2), "utf8");
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as TrackEvent;

    if (!body?.type) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }

    const event: TrackEvent = {
      type: body.type,
      label: body.label ?? undefined,
      destination: body.destination ?? undefined,
      page: body.page ?? undefined,
      timestamp: new Date().toISOString(),
    };

    const events = readEvents();
    events.push(event);
    writeEvents(events);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 200 });
  }
}

export async function GET() {
  try {
    const events = readEvents();
    return NextResponse.json({ events });
  } catch {
    return NextResponse.json({ events: [] });
  }
}
