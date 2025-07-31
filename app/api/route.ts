import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.formData();
    
    // Convert FormData to URLSearchParams for Google Apps Script
    const urlParams = new URLSearchParams();
    for (const [key, value] of body.entries()) {
      urlParams.append(key, value.toString());
    }

    const googleScriptUrl = "https://script.google.com/macros/s/AKfycbwJOpVN72EWVGX-RpHpFDo7D5u5c6yHo5Qlbe_vHeP25AJMnRELLpb5q61U3XTHYk3d/exec";

    const response = await fetch(googleScriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: urlParams,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.text();
    
    // Try to parse as JSON, fallback to text
    let result;
    try {
      result = JSON.parse(data);
    } catch {
      result = { success: true, message: data };
    }
    
    return NextResponse.json(result);

  } catch (error) {
    console.error('Error submitting form:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to submit form',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}