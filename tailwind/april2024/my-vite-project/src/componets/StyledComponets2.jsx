import Header from './Header'
import { Container } from './StyledComponents'
import {ThemeProvider} from 'styled-components'
const StyledComponets2 = () => {
  const theme = {
    color : {
      body: 'green'
    }
  }
  return (
    <>
    <ThemeProvider>
    <Header />
    <Container>
      <h1>Hello World</h1>
    </Container>
    </ThemeProvider>
    </>
  )
}

export default StyledComponets2
