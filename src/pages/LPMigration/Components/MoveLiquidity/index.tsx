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


const MoveLiquidity = function () {
    return (
        <>
            <AppBody>
                <Card>
                    <CardHeader>
                        <Text color="text" bold>Move LP tokens to wallet</Text>
                        <Text color="textSubtle" small>Unstake your old LP tokens from farms and other projects.</Text>
                    </CardHeader>
                    <CardBody>
                        <Text color="text" bold>Unstake LP tokens from old Farms</Text>
                        <CardBody>
                            <Text color="text" mb="16px">All farms will gradually switch to new farms, one-by-one. You can wait until farms switch over, or you can unstake in advance.</Text>
                            <Row>
                                <Button fullWidth>Go to Farms</Button>
                            </Row>
                        </CardBody>
                    </CardBody>
                </Card>
            </AppBody>
            <ArrowDownIconContainer><ArrowDownIcon/></ArrowDownIconContainer>
        </>
    )
};

export default MoveLiquidity;