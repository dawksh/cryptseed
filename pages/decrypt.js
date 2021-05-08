import { useEffect, useState } from "react"
const crypto = require('crypto-js');
import { useUID } from '../utils/useUID'

function decrypt() {
    const uid = useUID();
    const [locArr, setLocArr] = useState(undefined)
    const [encUID, setEncUID] = useState(undefined)

    useEffect(() => {
        setTimeout(() => {
            const data = localStorage.getItem("saved")
            const tempArr = JSON.parse(data)
            setEncUID(tempArr.shift())
            setLocArr(tempArr)
        }, 1000);
    }, [])

    if (!uid) {
        return (
            <div>
                You should first login before decrypting phrases.
            </div>
        )
    } else {
        if (!locArr) {
            return (
                <div>
                    loading ...
                </div>
            )
        } else {
            const decUID = crypto.AES.decrypt(encUID, process.env.NEXT_PUBLIC_SECRET_PHRASE).toString(crypto.enc.Utf8)

            if (decUID === uid) {
                const data = locArr.map(({ phrase, service }) => {
                    var decPh = crypto.AES.decrypt(phrase, process.env.NEXT_PUBLIC_SECRET_PHRASE).toString(crypto.enc.Utf8)
                    var decSer = crypto.AES.decrypt(service, process.env.NEXT_PUBLIC_SECRET_PHRASE).toString(crypto.enc.Utf8)
                    return (
                        <div key={phrase}>
                            {decSer} - {decPh}
                        </div>
                    )
                })
                return (
                    <div>
                        this is decryption page
                        {data}
                    </div>
                )
            } else {
                return (
                    <div>
                        Use the same account to login which you used to encrypt phrases.
                    </div>
                )
            }

        }


    }

}

export default decrypt
