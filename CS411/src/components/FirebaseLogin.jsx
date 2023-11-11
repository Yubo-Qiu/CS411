import React, { useEffect, useRef } from 'react';
import { ui, uiConfig } from '../firebaseConfig';  // Adjust the path as needed

function FirebaseLogin() {
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
            ui.start(containerRef.current, uiConfig);
        }
        return () => {
            ui.reset();
        };
    }, []);

    return <div ref={containerRef}></div>;
}

export default FirebaseLogin;
