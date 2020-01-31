import { useState, useEffect } from 'react';

export default function useNetworkResource(url) {
  const [response, setResponse] = useState();
  const [fetched, setFetched] = useState(false);
  const [error, setError] = useState();
  const [retry, setRetry] = useState(false);

  useEffect(() => {
    const doStuff = async () => {
      try {
        const response = await fetch(url);
        // show off our pretty loading experience because our backend is too blazing fast to need a loader
        // await new Promise(resolve => setTimeout(() => resolve(), 1000));

        if (response.status !== 200) {
          throw new Error('bad');
        }

        const responseData = await response.json();

        setResponse(responseData);
      } catch (error) {
        setError(error);
      } finally {
        setFetched(true);
      }
    };

    // useEffect cannot take an async function
    doStuff();

    return () => {
      // called before next useEffect
      setFetched(false);
      setError();
    };
  }, [url, retry]);

  return [response, fetched, { error, forceRetry: () => setRetry(!retry) }];
}
