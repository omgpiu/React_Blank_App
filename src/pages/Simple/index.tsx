import { Sample } from '../../features/widgets/_Sample'
import { Layout } from '../../layouts'
import { Styled } from '../../styles/DynamicStyledComponent'

export const TodoPage = () => (
  <Layout.Main>
    <Styled.div column middle>
      <Sample.Container />
    </Styled.div>
  </Layout.Main>
)
