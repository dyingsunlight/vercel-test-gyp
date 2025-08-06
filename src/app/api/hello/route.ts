import { NextResponse } from 'next/server';
import * as sweph from 'sweph';
export async function GET() {
  sweph.calc(123,123,123)
  return NextResponse.json({
    message: 'Hello World!',
    timestamp: new Date().toISOString(),
  });
}

export async function POST() {
  return NextResponse.json({
    message: 'Hello World from POST!',
    timestamp: new Date().toISOString(),
  });
}