import {
    Flex,
    Heading,
    Button,
    useClipboard,
    useColorModeValue
} from '@chakra-ui/react'

function DecryptList({ decSer, decPh }) {
    const { hasCopied, onCopy } = useClipboard(decPh)

    const formBackground = useColorModeValue('gray.100', 'gray.700')

    return (
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
    )
}

export default DecryptList
