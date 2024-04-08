import Header from './Header'
import { Container } from './StyledComponents'
import {ThemeProvider} from 'styled-components'
const StyledComponets2 = () => {
  const theme = {
    colors : {
      body:'green'
    }
  }
  return (
    <>
    <ThemeProvider theme = {theme}>
    <Header />
    <Container>
      <h1>Hello World</h1>
    </Container>
    </ThemeProvider>
    </>
  )
}

export default StyledComponets2
