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


const RemoveLiquidity = function () {
    return (
        <>
            <AppBody>
                <Card>
                    <CardHeader>
                        <Text color="text" bold>Remove Liquidity</Text>
                        <Text color="textSubtle" small>Unstake your old LP tokens from the old liquidity pools</Text>
                    </CardHeader>
                    <CardBody>
                        <Text color="text" bold>V1 LP Tokens in wallet</Text>
                        <CardBody>
                            <Text color="text" mb="16px">If you added liquidity to V2 LPs during the migration attempt on April 23, you need to unstake and remove liquidity.</Text>
                            <Row>
                                <Button fullWidth>Remove</Button>
                            </Row>
                        </CardBody>
                    </CardBody>
                </Card>
            </AppBody>
            <ArrowDownIconContainer><ArrowDownIcon/></ArrowDownIconContainer>
        </>
    )
};

export default RemoveLiquidity;