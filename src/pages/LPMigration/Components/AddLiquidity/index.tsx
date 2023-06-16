import React from 'react';
import styled from 'styled-components';
import { Button, CardBody, Text, Card, ArrowDownIcon  } from '@pancakeswap-libs/uikit';
import AppBody from '../../../AppBody';

const CardHeader = styled.div`
    background: linear-gradient(111.68deg, rgb(242, 236, 242) 0%, rgb(232, 242, 246) 100%);
    padding: 24px;
`;

const Row = styled.div`
    align-items: center;
    display: flex;
    font-size: 14px;
    justify-content: space-between;
    margin-bottom: 8px;
`

const ArrowDownIconContainer = styled.div`
    margin-top: 24px;
    margin-bottom: 24px;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
`;


const AddLiquidity = function () {
    return (
        <>
            <AppBody>
                <Card>
                    <CardHeader>
                        <Text color="text" bold>Add Liquidity to new Liquidity Pools</Text>
                        <Text color="textSubtle" small>Stake your tokens in the updated Liquidity Pools.</Text>
                    </CardHeader>
                    <CardBody>
                        <Text color="text" mb="16px">Any new liquidity you add will use the updated system by default. Simple!</Text>
                        <Button fullWidth>Add Liquidity</Button>
                    </CardBody>
                </Card>
            </AppBody>
            <ArrowDownIconContainer><ArrowDownIcon/></ArrowDownIconContainer>
        </>
    )
};

export default AddLiquidity;