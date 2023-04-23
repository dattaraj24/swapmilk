import React from 'react';
import styled from 'styled-components';
import MoveLiquidity from './Components/MoveLiquidity';
import RemoveLiquidity from './Components/RemoveLiquidity';
import AddLiquidity from './Components/AddLiquidity';
import Stake from './Components/Stake';
import MigrationHeadlineCard from '../../components/MigrationHeadlineCard';

const Container = styled.div`
  padding: 32px 16px;
`;

export default function Pool() {

  return (
    <>
      <MigrationHeadlineCard />
      <Container>
        <MoveLiquidity />
        <RemoveLiquidity />
        <AddLiquidity />
        <Stake />
      </Container>
    </>
  )
}