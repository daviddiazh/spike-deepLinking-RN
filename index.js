/* eslint-disable no-lone-blocks */
import {AppRegistry, Linking} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

//!WEB
{
  /*
  <div className="App">
      <a href='app://testapp/bankID=ABC123'>Open App</a>
    </div>
*/
}

const handleDeepLink = async url => {
  if (url) {
    console.log({url});
    const urlSplitted = url.split('/');
    const bankID = urlSplitted[urlSplitted.length - 1];
    console.log({bankID});

    return url;
  }
};

Linking.getInitialURL().then(handleDeepLink).catch(console.error);
Linking.addEventListener('url', event => handleDeepLink(event.url));

AppRegistry.registerComponent(appName, () => App);
