import { Trans } from '@lingui/macro'
import { Percent } from '@uniswap/sdk-core'
import styled from 'styled-components/macro'

import { ThemedText } from '../../theme'
import { RowBetween, RowFixed } from '../Row'
import SettingsTab from '../Settings'

const StyledSwapHeader = styled.div`
  padding: 8px 12px 16px;
  margin-bottom: 25px;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.deprecated_text1};
  color: ${({ theme }) => theme.deprecated_text2};
`

export default function SwapHeader({ allowedSlippage }: { allowedSlippage: Percent }) {
  return (
    <StyledSwapHeader>
      <RowBetween>
        <RowFixed>
          <ThemedText.DeprecatedBlack fontWeight={500} fontSize={22} style={{ marginRight: '8px' }}>
            <Trans>Exchange</Trans>
          </ThemedText.DeprecatedBlack>
          <ThemedText.DeprecatedBlack fontWeight={400} fontSize={10} style={{ marginRight: '8px' }}>
            <Trans>Swap Token</Trans>
          </ThemedText.DeprecatedBlack>
        </RowFixed>
        <RowFixed>
          <SettingsTab placeholderSlippage={allowedSlippage} />
        </RowFixed>
      </RowBetween>
    </StyledSwapHeader>
  )
}
