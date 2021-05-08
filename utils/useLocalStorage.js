import { useState } from 'react'


export const useLocalStorage = ({ query }) => {

    const [data, setData] = useState(undefined);

    if (typeof window !== 'undefined') {
        const tempData = localStorage.getItem(query)
        setData(tempData)
        return data;
    } else {
        return false
    }
}