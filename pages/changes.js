import { Heading, Flex } from "@chakra-ui/react";
import Head from "next/head";
import Timeline from "../components/VerticalTimeline";

export default function changelog() {
  return (
    <Flex
      p={5}
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Head>
        <title>Change Log // Cryptseed</title>
      </Head>
      <Heading mb={8}>Change Log</Heading>
      <Timeline />
    </Flex>
  );
}
