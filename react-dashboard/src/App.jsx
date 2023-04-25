import { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import Dashborad from './pages/Dashborad';
import { router } from './router';

function App() {
    const [count, setCount] = useState(0);

    return <RouterProvider router={router} />;
}

export default App;
