import { createStackNavigator } from '@react-navigation/stack';
import App from './(tabs)';
import SongSearch from './(tabs)/SongSearch';
import ChantDesperance from './ChantDesperance';
import ChantDetails from './ChantDetails';
import ChoeurFrancais from './ChoeurFrancais';
import English from './English';
import FavoritesScreen from './FavoritesScreen';
import Foire from './Foire';
import HymneEtLouange from './HymneEtLouange';
import Politique from './Politique';
import SearchResults from './SearchResults';


const Stack = createStackNavigator();
const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="index">
      <Stack.Screen name="index" component={App} />
      <Stack.Screen name="ChantDetails" component={ChantDetails} options={{headerShown: false,}} />
      <Stack.Screen name="Favorites" component={FavoritesScreen} />
      <Stack.Screen name="HymneEtLouange" component={HymneEtLouange} /> 
      <Stack.Screen name="ChantDesperance" component={ChantDesperance} /> 
      <Stack.Screen name="English" component={English} /> 
      <Stack.Screen name="ChoeurFrancais" component={ChoeurFrancais}/>
      <Stack.Screen name="SearchResults" component={SearchResults}/>
      <Stack.Screen name="SongSearch" component={SongSearch}/>
      <Stack.Screen name="Politique" component={Politique} />
      <Stack.Screen name="Foire" component={Foire} />
      <Stack.Screen name="FavoritesScreen" component={FavoritesScreen} />
    </Stack.Navigator>
  );
};
export default AppNavigator;
