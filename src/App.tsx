import { Route, Routes } from "react-router-dom";
import SignupScreen from "./screens/SignupScreen";
import SignInScreen from "./screens/SignInScreen";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/signup' element={<SignupScreen />} />
        <Route path='/' element={<SignInScreen />} />
      </Routes>
    </div>
  );
}

export default App;
