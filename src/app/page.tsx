"use client";

import { toast } from "@/components/ui/use-toast";
import { getProvince, ProvinceAPIResponse } from "@/utils/api";
import { useEffect, useState } from "react";

export default function Home() {
  const [province, setProvince] =
    useState<ProvinceAPIResponse | null>(null);

  async function fetchProvinceData() {
    console.log('test call');

    try {
      const result = await getProvince();
      console.log(result);
      
      setProvince(result);
    } catch (error: any) {
      toast({
        title: "Oops! something went wrong.",
        description: error.toString(),
        variant: "destructive",
      });
    }
  }

  useEffect(() => {
    console.log('oi');
    fetchProvinceData();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section>
        <h2 className="text-2xl font-black">Province</h2>
        {province?.rajaongkir.results && (
          <p>{province.rajaongkir.results.province}</p>
        )}
      </section>
    </main>
  );
}
