import React, { useState, useEffect } from 'react';

// Hides the child component when user is scrolling.
const HideBetweenOnScroll = (props) => {
    const [showContent, setShowContent] = useState(true);

    useEffect(() => {});
    if (showContent) {
        return <>{props.children}</>;
    }

    return <></>;
};

export default HideBetweenOnScroll;
