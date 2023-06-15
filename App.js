import { StatusBar } from 'react-native';
import Screens from './screens';
import './local/i18next'

export default function App() {
  return (
      <>
        <Screens />
        <StatusBar/>
      </>
  );
}
