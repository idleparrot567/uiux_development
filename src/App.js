import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';

import { createTheme} from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary:{
      light: '#FDE8E9',
      main: '#D34F73',
      dark: '#1F2232',
      contrastText: '',

    },
    secondary: {
      light:'#D3FAD6',
      main: '#D1EFB5',
      dark: '#596475',
      contrastText:'#ffffff',
    },
  },
  });

function App() {
  return (
    <div className="App">
     <Header></Header>
     <div>
     <Main></Main>
     <Basket></Basket>
     </div>
    </div>
  );
}

export default App;
