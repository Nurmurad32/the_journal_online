import { useEffect } from "react"

const useTitle = title =>{
    useEffect(() =>{
        document.title = `${title} - THE JOURNAL ONLINE` || "THE JOURNAL ONLINE";
    },[title]);
}

export default useTitle;