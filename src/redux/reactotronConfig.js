import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import { name } from '../../app.json';

const reactotron = Reactotron.configure({ name }).useReactNative().use(reactotronRedux()).connect();

export default reactotron;
