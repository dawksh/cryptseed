import { useEffect, useState } from "react"

import { useLocalStorage } from '../utils/useLocalStorage';


function decrypt() {
    const [uid, setUid] = useState(undefined)
    const [locArr, setLocArr] = useState()

    useEffect(() => {
        setTimeout(() => {
            const data = localStorage.getItem("saved")
            setLocArr(JSON.parse(data))
            console.log(locArr)
        }, 1000);
    }, [])

    if (uid) {
        return (
            <>
                You should first login before decrypting phrases.
            </>
        )
    } else {

        return (
            <div>
                this is decryption page
            </div>
        )
    }

}

export default decrypt
