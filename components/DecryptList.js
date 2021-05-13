import {
    Flex,
    Heading,
    Button,
    useClipboard,
    useColorModeValue
} from '@chakra-ui/react'

import Head from 'next/head'

function DecryptList({ decSer, decPh }) {
    const { hasCopied, onCopy } = useClipboard(decPh)

    const formBackground = useColorModeValue('gray.100', 'gray.700')

    return (
        <>
            <Head><link href="https://fonts.googleapis.com/css?family=Inter:100,200,300,regular,500,600,700,800,900" rel="stylesheet" /></Head>
            <Flex
                width={{ base: "xs", md: "xl" }}
                justifyContent="center"
                alignItems="center"
                p={{ base: 4, md: 8 }}
                mb={5}
                flexDirection="column"
                background={formBackground}
                rounded={6}
            >
                <Heading
                    fontSize="2xl"
                    mb={4}
                    fontFamily="Inter"
                >
                    {decSer}
                </Heading>
                <Button
                    variant="outline"
                    onClick={onCopy}
                >
                    {hasCopied ? ("Copied!") : ("Copy Phrase")}
                </Button>
            </Flex>
        </>
    )
}

export default DecryptList
