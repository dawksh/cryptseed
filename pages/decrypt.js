import { useState } from "react"

function decrypt() {
    const [uid, setUid] = useState(undefined)
    const [locArr, setLocArr] = useState(undefined)


    if (uid) {
        return (
            <>
                You should first login before decrypting phrases.
            </>
        )
    } else {
        const tempArr = window.localStorage.getItem('saved')
        setLocArr(JSON.parse(tempArr))
        console.log(locArr)
        return (
            <div>
                this is decryption page
            </div>
        )
    }

}

export default decrypt
