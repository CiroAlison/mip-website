import { neon } from "@neondatabase/serverless";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nome, telefono, email, servizio, messaggio } = body;

    if (!nome || !telefono || !email || !servizio) {
      return NextResponse.json(
        { error: "Campi obbligatori mancanti: nome, telefono, email, servizio." },
        { status: 400 }
      );
    }

    if (!process.env.DATABASE_URL) {
      return NextResponse.json(
        { error: "Configurazione database mancante." },
        { status: 500 }
      );
    }

    const sql = neon(process.env.DATABASE_URL);

    await sql`
      INSERT INTO richieste_preventivo (nome, telefono, email, servizio, messaggio)
      VALUES (${nome}, ${telefono}, ${email}, ${servizio}, ${messaggio ?? null})
    `;

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (err) {
    console.error("[api/contatti] error:", err);
    return NextResponse.json(
      { error: "Errore interno del server. Riprova più tardi." },
      { status: 500 }
    );
  }
}
