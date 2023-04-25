import { useState, useEffect } from 'react';
import { StatusBar } from './components/StatusBar';

function App() {
    return (
        <>
            <h1>每五秒自動改變一次狀態</h1>
            <h2>
                （在 component 裡面使用 custom hook 去取得目前為 Online 或
                Disconnected）
            </h2>
            <StatusBar />
        </>
    );
}

export default App;
