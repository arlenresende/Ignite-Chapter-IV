import Header from '../../components/Header';
import { Flex } from '@chakra-ui/react';
import BannerSingle from '../../components/Banner/single'
import Content from '../../components/Content/index'
import Cities from '../../components/Cities/index'


export default function Continente(){
    return(
        <Flex direction="column">
            <Header />
            <BannerSingle />
            <Flex direction="column" maxW="1160px" mx="auto" mb="10" px="1rem">
                <Content />
                <Cities />
            </Flex>
        </Flex>
    )
}