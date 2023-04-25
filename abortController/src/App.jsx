import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();
        const fetchPosts = async () => {
            try {
                const res = await fetch(
                    'https://jsonplaceholder.typicode.com/posts',
                    {
                        signal: abortController.signal,
                    }
                );
                const data = await res.json();
                setData(data);
            } catch (e) {
                console.log('error msg:', e);
            }
        };

        fetchPosts();

        return () => abortController.abort();
    }, []);

    return (
        <div className="App">
            <h1>use abortController.signal to avoid re-fetch data twitce</h1>
            <h2>Here is the data below:</h2>
            <p>{JSON.stringify(data)}</p>
        </div>
    );
}

export default App;
