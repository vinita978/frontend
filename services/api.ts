const API_URL = "http://127.0.0.1:8000/api/home";

export async function getHome(){
    const res=await fetch(API_URL)
    return res.json();
};
