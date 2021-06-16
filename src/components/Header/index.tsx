import { Flex, Grid, Image, Link, Icon } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';

import { RiArrowLeftSLine } from 'react-icons/ri'


export default function Header(){

    const { asPath } = useRouter();

    const noHomePage = asPath !== "/" 

    return(
        <Flex
            bg="white"
            w="100%"
            as="header"
            mx="auo"
            px="1rem"
            h={
                ["50px", "100px"]
            }
            align="center"
            justify="center"
        >
        <Grid
            h="100%"
            mx="auto"
            w="100%"
            maxW="1160px"
            alignItems="center"
            templateColumns="repeat(3, 1fr)"
            justifyContent="center"
            alignSelf="start"
        >
            {
                noHomePage && (
                    <Link href="/">
                        <Icon as={RiArrowLeftSLine} fontSize={[20,40]} justifySelf="start" />
                    </Link>
                )
            }
        <Image
            w={["80px","180px"]}
            src="/logo.svg"
            alt="Logotipo world trip"
            justifySelf="center"
            gridColumn="2"
        />
        </Grid>
        </Flex>
    )
}