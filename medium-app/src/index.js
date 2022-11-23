import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import { Provider } from "react-redux";
import {AuthContextProvider} from './store/auth-context';
import ImageState from './store/ImageState';
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <BrowserRouter>
      <Provider store={store}>
        <ImageState>
          <App />
        </ImageState>
      </Provider>
    </BrowserRouter>
  </AuthContextProvider>
  
);
