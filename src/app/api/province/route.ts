import axios from 'axios';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  const PUBLIC_KEY = 'fe314865232ae20a778ac7390c7cc89c';
  const BASE_URL = 'https://api.rajaongkir.com/starter';
  console.log('baba');

  try {
    const response = await axios.get(`${BASE_URL}/province`, {
      headers: {
        key: PUBLIC_KEY
      }
    });

    return NextResponse.json(response.data, { status: 500 });
  } catch (error: any) {
    throw new Error(error.response?.data?.message);
  }
};
