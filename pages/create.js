import { useState } from "react";
const crypto = require('crypto-js');
import { useUID } from '../utils/useUID';
import Head from 'next/head'
import {
    Flex,
    Button,
    Input
} from '@chakra-ui/react'

function create() {

    const [service, setService] = useState('')
    const [phrase, setPhrase] = useState('')

    const savePhrase = (e) => {
        const encPhrase = crypto.AES.encrypt(phrase, process.env.NEXT_PUBLIC_SECRET_PHRASE).toString();
        const encService = crypto.AES.encrypt(service, process.env.NEXT_PUBLIC_SECRET_PHRASE).toString();
        const uid = crypto.AES.encrypt(useUID(), process.env.NEXT_PUBLIC_SECRET_PHRASE).toString();
        let saveObj = {
            phrase: encPhrase,
            service: encService
        };
        const localArr = localStorage.getItem('saved');
        var savedArr
        if (!localArr) {
            savedArr = [uid]

        } else {
            savedArr = JSON.parse(localArr);
        }

        savedArr.push(saveObj);
        const tempArr = JSON.stringify(savedArr);
        localStorage.removeItem('saved')
        localStorage.setItem('saved', tempArr);
        alert('Successfully saved the seed!')
        setPhrase('');
        setService('');

    }

    return (
        <>
            <Head><title>Add new seed | Cryptseed   </title></Head>
            <Flex justifyContent="center" height="100vh" alignItems="center" p={6}>
                <Flex direction="column" justifyContent="space-between">
                    <Input variant="filled" mb={6} size="md" type="text" value={service} onChange={e => setService(e.target.value)} placeholder="Type service name" />
                    <Input variant="filled" mb={6} size="md" type="password" value={phrase} onChange={e => setPhrase(e.target.value)} placeholder="Paste Your Seed Phrase" />
                    <Button variant="outline" type="submit" onClick={savePhrase}>Save Phrase</Button>
                </Flex>

            </Flex>
        </>
    )
}

export default create
