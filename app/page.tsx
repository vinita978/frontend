"use client"
import { getHome } from "@/services/api";
import { useState, useEffect } from "react";

export default function Home() {
  interface person {
    "FirstName": string,
    "LastName": string,
    "Email": string,
    "password": number
  }
  const [data, setData] = useState<person[]>([]);

  useEffect(() => {
    getHome().then((result) => {
      console.log(result);
      setData(result);
    });
  },[]);


  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Data</h1>
      {
        data.map((item:person,index:number)=>(
          <div key={index} className="border p-4 mt-4 rounded">
            <p><strong>First Name:</strong>{item.FirstName}</p>
            <p><strong>Last Name:</strong>{item.LastName}</p>
            <p><strong>Email:</strong>{item.Email}</p>
            <p><strong>Password:</strong>{item.password}</p>
          </div>
        ))
      }

    </div>
  );
}
