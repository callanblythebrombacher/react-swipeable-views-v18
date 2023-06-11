import React, { useState, useRef, forwardRef, useImperativeHandle} from 'react';
import './SwipeableViews.css'; // Import the CSS file

const SwipeableViews = forwardRef((props, ref) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [startX, setStartX] = useState(0);
    const containerRef = useRef(null);
    const dragThreshold = 50; // Adjust this value to set the drag threshold

    const handleMouseDown = (event) => {
        setStartX(event.clientX);
    };

    const handleMouseMove = (event) => {
        if (startX === 0) return;

        const currentX = event.clientX;
        const diffX = currentX - startX;

        containerRef.current.style.transform = `translateX(calc(-${
            activeIndex * 100
        }% + ${diffX}px))`;
    };

    const handleMouseUp = (event) => {
        const currentX = event.clientX;
        const diffX = currentX - startX;

        if (diffX > dragThreshold && activeIndex > 0) {
            swipeBackward();
        } else if (diffX < -dragThreshold && activeIndex < props.children.length - 1) {
            swipeForward();
        } else {
            resetPosition();
        }

        setStartX(0);
    };

    const handleMouseLeave = () => {
        resetPosition();
        setStartX(0);
    };

    const swipeForward = () => {
        if (activeIndex < props.children.length - 1) {
            setActiveIndex((prevIndex) => prevIndex + 1);
        }
    };

    const swipeBackward = () => {
        if (activeIndex > 0) {
            setActiveIndex((prevIndex) => prevIndex - 1);
        }
    };

    const resetPosition = () => {
        containerRef.current.style.transform = `translateX(-${activeIndex * 100}%)`;
    };

    useImperativeHandle(ref, () => ({
        swipeForward,
        swipeBackward,
        resetPosition
    }));

    return (
        <div
            className="swipeable-container"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className="slider-container"
                style={{
                    transform: `translateX(-${activeIndex * 100}%)`,
                    transition: 'transform 0.3s ease',
                }}
                ref={containerRef}
            >
                {props.children.map((child, index) => (
                    <div key={index} className="slide">
                        {child}
                    </div>
                ))}
            </div>
            <div className="pagination">
                {props.children.map((_, index) => (
                    <button
                        key={index}
                        className={`dot ${index === activeIndex ? 'active' : ''}`}
                        onClick={() => setActiveIndex(index)}
                    />
                ))}
            </div>
            <div className="buttons">
                <button onClick={swipeBackward} disabled={activeIndex === 0}>
                    Swipe Backward
                </button>
                <button
                    onClick={swipeForward}
                    disabled={activeIndex === props.children.length - 1}
                >
                    Swipe Forward
                </button>
            </div>
        </div>
    );
});


SwipeableViews.displayName = 'SwipeableViews';
export default SwipeableViews;
