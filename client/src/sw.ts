/* eslint-disable no-restricted-globals */

const APP_CACHE = "tower-defence-v1";

const putIntoAppCache = async (
  request: RequestInfo,
  response: Response
): Promise<void> => {
  console.log("hello");

  const cache = await caches.open(APP_CACHE);
  return cache.put(request, response);
};

const canBeCached = (request: Request) =>
  request.method === "GET" && request.url.startsWith("http");

// no type definitions for the event :(
self.addEventListener("fetch", (event: any) => {
  if (!canBeCached(event.request)) {
    return event.respondWith(fetch(event.request));
  }

  event.respondWith(
    (async () => {
      try {
        const fetchedResponse = await fetch(event.request);
        if (fetchedResponse.ok) {
          putIntoAppCache(event.request, fetchedResponse.clone());
        }
        return fetchedResponse;
      } catch {
        return caches.match(event.request);
      }
    })()
  );
});

/* eslint-enable no-restricted-globals */
