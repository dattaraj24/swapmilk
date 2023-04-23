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


const Stake = function () {
    return (
        <>
            <AppBody>
                <Card>
                    <CardHeader>
                        <Text color="text" bold>Stake in New Farms</Text>
                        <Text color="textSubtle" small>Stake your updated LP tokens in PancakeSwap farms</Text>
                    </CardHeader>
                    <CardBody>
                        <Text color="text" mb="16px">If you are able to stake in a farm with your new LP tokens, that means it’s the updated type. Stake as usual and you’re done!</Text>
                        <Button fullWidth>Go to Farms</Button>
                    </CardBody>
                </Card>
            </AppBody>
        </>
    )
};

export default Stake;