import { Flex, Button, useColorMode } from "@chakra-ui/react";

import Head from "next/head";
import Link from "next/link";

function app() {
    const { toggleColorMode } = useColorMode();
    return (
        <>
            <Head>
                <title>Home // Cryptseed</title>
            </Head>
            <Flex height="100vh" justifyContent="center" alignItems="center">
                <Flex direction="column" justifyContent="space-around">
                    <Button colorScheme="blue" mb={5} variant="solid">
                        <Link href="/create">Add Seed Phrases</Link>
                    </Button>
                    <Button colorScheme="red" mb={5} variant="solid">
                        <Link href="/decrypt">Decrypt Seed Phrases</Link>
                    </Button>
                    <Button colorScheme="pink" mb={5} variant="solid">
                        Export Seed Phrases (Coming Soon)
                    </Button>
                    <Button onClick={toggleColorMode}>☀</Button>
                </Flex>
            </Flex>
        </>
    );
}

export default app;
