import { useState, useEffect } from 'react';

export function useOnlineStatus() {
    const [isOnline, setIsOnline] = useState(true);
    useEffect(() => {
        // 在沒有 api 的情況之下，使用 setInterval 簡易製作每三秒自動切換上線狀態功能，讓畫面產生變化。
        const myinterval = setInterval(() => {
            setIsOnline(!isOnline);
        }, 5000);
        return () => {
            clearInterval(myinterval);
        };
    }, [isOnline]);
    return isOnline;
}
