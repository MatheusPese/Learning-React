import React, { useState, useEffect } from 'react'

 function DarkModeChecker() {
    const [mode,setMode] = useState<"light" | "dark" | undefined>(
        window.matchMedia('(prefers-color-scheme: dark)').matches? "dark":"light"
        );
    useEffect(() => {
    const SelectMode =(event:any) => {
        let theme:string = event.matches? "dark":"light"
        if (theme == "dark"){
            console.log("Hello dark World!");
        }
        if(theme == "light"){
            console.log("Hello light World!");
        }
        setMode(event.matches? "dark":"light");
    };
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', SelectMode);
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change',SelectMode);
    },[]);
    return <></>
}
export default DarkModeChecker