import { useState } from "react";
const crypto = require('crypto-js');


function create() {

    const [service, setService] = useState('')
    const [phrase, setPhrase] = useState('')

    const savePhrase = (e) => {
        const encPhrase = crypto.AES.encrypt(phrase, process.env.NEXT_PUBLIC_SECRET_PHRASE).toString();
        const encService = crypto.AES.encrypt(service, process.env.NEXT_PUBLIC_SECRET_PHRASE).toString();
        const uid = sessionStorage.getItem('uid');
        const saveObj = {
            uid: uid,
            phrase: encPhrase,
            service: encService
        }
        const localArr = localStorage.getItem('saved');
        var savedArr
        if (!localArr) {
            savedArr = []
        } else {
            savedArr = JSON.parse(localArr);
        }

        savedArr.push(saveObj);
        const tempArr = JSON.stringify(savedArr);
        console.log(savedArr, tempArr)
        localStorage.setItem('saved', tempArr);
        setPhrase('');
        setService('');
    }

    return (
        <div>
            <input type="text" value={service} onChange={e => setService(e.target.value)} placeholder="Type service name" />
            <input type="password" value={phrase} onChange={e => setPhrase(e.target.value)} placeholder="Paste Your Seed Phrase" />
            <button type="submit" onClick={() => {
                savePhrase()
                console.log(process.env.NEXT_PUBLIC_SECRET_PHRASE)
            }}>Save Phrase</button>
        </div>
    )
}

export default create
