import { useEffect, useState, useRef } from 'react';


export default function useNearScreen({ distance = '100px'} = {}) {
    const [isNearScreen, setIsNearScreen] = useState(false);
    const fromRef = useRef();

    useEffect(() => {
        let observer;

        const onChange = (entries, observer) => {
            const elem = entries[0];

            if(elem.isIntersecting) {
                setIsNearScreen(true);
                observer.disconnect();
            }
        }

        // Polyfill para IE
        Promise.resolve(
            typeof IntersectionObserver !== 'undefined'
                ? IntersectionObserver
                : import('intersection-observer')
        ).then(() => {
            observer = new IntersectionObserver(onChange, {
                rootMargin: distance
            });

            observer.observe(fromRef.current);
        });

        return () => observer && observer.disconnect();
    }, [])

    return {isNearScreen, fromRef};
}