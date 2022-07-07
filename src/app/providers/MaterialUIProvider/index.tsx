import { ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'

export const MaterialUIProvider: FC = ({ children }) => {
  console.log('render')
  const theme = createTheme({
    palette: {
      // primary: {
      //   main: ColorsScheme.RaiffeisenWhite(),
      // },
      // secondary: {
      //   main: ColorsScheme.RaiffeisenBlack(),
      // },
    },
  })
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
