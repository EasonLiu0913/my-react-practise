import { useState, useEffect } from 'react';
import { useOnlineStatus } from '../customhooks/useOnlineStatus';

export function StatusBar() {
    // 在 component 引入 custom hook 取得上線狀態，並依照狀態改變畫面結果。
    const isOnline = useOnlineStatus();
    return <h2>{isOnline ? '✅ Online' : '❌ Disconnected'}</h2>;
}
