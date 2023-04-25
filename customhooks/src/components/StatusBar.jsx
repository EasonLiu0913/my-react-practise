import { useState, useEffect } from 'react';
import { useOnlineStatus } from '../customhooks/useOnlineStatus';

export function StatusBar() {
    const isOnline = useOnlineStatus();
    return <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>;
}
