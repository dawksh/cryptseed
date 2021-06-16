import { useEffect, useState } from "react";
const crypto = require("crypto-js");
import { useUID } from "../utils/useUID";
import DecryptList from "../components/DecryptList";

import Head from "next/head";

import { Flex, Button, Heading } from "@chakra-ui/react";

function decrypt() {
    const uid = useUID();
    const [locArr, setLocArr] = useState(undefined);
    const [encUID, setEncUID] = useState(undefined);

    useEffect(() => {
        setTimeout(() => {
            const data = localStorage.getItem("saved");
            const tempArr = JSON.parse(data);
            setEncUID(tempArr.shift());
            setLocArr(tempArr);
        }, 1000);
    }, []);

    if (!uid) {
        return (
            <Flex alignItems="center" justifyContent="center">
                <Head>
                    <title>Decrypt | Cryptseed</title>
                </Head>
                <Heading>
                    You should first login before decrypting phrases.
                </Heading>
            </Flex>
        );
    } else {
        if (!locArr) {
            return (
                <div>
                    <Head>
                        <title>Decrypt // Cryptseed</title>
                    </Head>
                    <Button variant="flushed">Loading</Button>
                </div>
            );
        } else {
            const decUID = crypto.AES.decrypt(
                encUID,
                process.env.NEXT_PUBLIC_SECRET_PHRASE
            ).toString(crypto.enc.Utf8);

            if (decUID === uid) {
                const data = locArr.map(({ phrase, service }) => {
                    var decPh = crypto.AES.decrypt(
                        phrase,
                        process.env.NEXT_PUBLIC_SECRET_PHRASE
                    ).toString(crypto.enc.Utf8);

                    var decSer = crypto.AES.decrypt(
                        service,
                        process.env.NEXT_PUBLIC_SECRET_PHRASE
                    ).toString(crypto.enc.Utf8);

                    return (
                        <DecryptList
                            key={decPh}
                            decSer={decSer}
                            decPh={decPh}
                        />
                    );
                });

                return (
                    <Flex
                        justifyContent="center"
                        flexDirection="column"
                        alignItems="center"
                        p={6}
                    >
                        <Head>
                            <title>Decrypt // Cryptseed</title>
                            <link
                                href="https://fonts.googleapis.com/css?family=Inter:100,200,300,regular,500,600,700,800,900"
                                rel="stylesheet"
                            />
                        </Head>
                        <Heading fontFamily="Inter" mb={8}>
                            Decrypted Phrases
                        </Heading>
                        {data}
                    </Flex>
                );
            } else {
                return (
                    <Flex
                        textAlign="center"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Head>
                            <title>Decrypt | Cryptseed</title>
                        </Head>
                        <Heading>
                            Use the same account to login which you used to
                            encrypt phrases.
                        </Heading>
                    </Flex>
                );
            }
        }
    }
}

export default decrypt;
