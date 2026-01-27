import { TIMEOUT_SEC } from "./config.js";

console.log('HELPERS CARGADO');

const timeout= function (s){
    return new Promise(function(_, reject){
        setTimeout(function(){
            reject(new Error(`Request took too long! Timeout after ${s} second`))
        }, s*1000);
    });
};

export const getJSON = async function (url){
    try{
        //fetchPro
        const fetchPro= await fetch(url);

        //Promise.race
        const resp = await Promise.race([
            fetchPro,
            timeout(TIMEOUT_SEC),
        ]);

        //Data
        const data= await resp.json();

        if(!resp.ok) throw new Error (`${data.message} (${res.status})`);

        return data;
    } catch(error){
        throw error;
    }
};
