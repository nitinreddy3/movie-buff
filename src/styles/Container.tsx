import styled, { css } from 'styled-components';

interface Props
{
  Vertical: boolean;
  Horizontal: boolean;
}

export const CenterAlignedVertical = css`
  display: flex;
  align-items: center;
  // width: 1200px;
`;

export const CenterAlignedHorizontal = css`
  display: flex;
  justify-content: center;
  // width: 1200px;
`;

export const CenterVerticalHorizontal = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CenterAligned = styled.div`
  /* This is an example of a nested interpolation */
  ${ ( props: Props ) => ( props.Vertical ? CenterAlignedVertical : "" ) }
  ${ ( props: Props ) => ( props.Horizontal ? CenterAlignedHorizontal : "" ) }
`;