import {
    Box,
    Container,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';

import Link from 'next/link'

export default function SmallWithNavigation() {
    return (
        <Box
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Container
                as={Stack}
                maxW={'6xl'}
                py={8}
                mt={8}
                textAlign="center"
                display="flex"
                alignItems="center"
            >
                <Text fontWeight="bold" >© 2021 Cryptseed</Text>

                <Text mt={5}>Made with by <Link href="https://twitter.com/dawksh">Daksh 🦄</Link></Text>
            </Container>
        </Box>
    );
}