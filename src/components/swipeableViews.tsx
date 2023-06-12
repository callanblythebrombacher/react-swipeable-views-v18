import React, {
    useState,
    useRef,
    forwardRef,
    useImperativeHandle,
    useEffect,
    Ref,
} from "react";
import "./SwipeableViews.css"; // Import the CSS file

interface SwipeableViewsProps {
    children: React.ReactNode;
    swipeThreshold?: number;
    autoSwipe?: boolean;
    autoSwipeInterval?: number;
    backButtonProps?: {
        text: string;
    };
    forwardButtonProps?: {
        text: string;
    };
    hideBackButton?: boolean;
    hideForwardButton?: boolean;
    loop?: boolean;
}

interface SwipeableViewsRef {
    swipeForward: () => void;
    swipeBackward: () => void;
    resetPosition: () => void;
}

const SwipeableViews = forwardRef(
    (props: SwipeableViewsProps, ref: Ref<SwipeableViewsRef>) => {
        const [activeIndex, setActiveIndex] = useState<number>(0);
        const [startX, setStartX] = useState<number>(0);
        const [loopEnabled, setLoopEnabled] = useState<boolean>(props.loop);
        const containerRef = useRef<HTMLDivElement>(null);
        const dragThreshold = props.swipeThreshold || 50; // Adjust the drag threshold using props

        const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
            setStartX(event.clientX);
            setLoopEnabled(false); // Disable looping while swiping
        };

        const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
            if (startX === 0) return;

            const currentX = event.clientX;
            const diffX = currentX - startX;

            if (containerRef.current) {
                containerRef.current.style.transform = `translateX(calc(-${
                    activeIndex * 100
                }% + ${diffX}px))`;
            }
        };

        const handleMouseUp = (event: React.MouseEvent<HTMLDivElement>) => {
            const currentX = event.clientX;
            const diffX = currentX - startX;

            if (diffX > dragThreshold) {
                swipeForward();
            } else if (diffX < -dragThreshold) {
                swipeBackward();
            } else {
                resetPosition();
            }

            setStartX(0);
        };

        const handleMouseLeave = () => {
            resetPosition();
            setStartX(0);
            setLoopEnabled(true); // Enable looping after leaving the container
        };

        const swipeForward = () => {
            let newIndex = activeIndex + 1;

            if (
                newIndex >= React.Children.count(props.children) &&
                loopEnabled
            ) {
                setActiveIndex(0);
            } else if (newIndex < React.Children.count(props.children)) {
                setActiveIndex(newIndex);
            }
        };

        const swipeBackward = () => {
            let newIndex = activeIndex - 1;

            if (newIndex < 0) {
                newIndex = React.Children.count(props.children) - 1;
            }

            setActiveIndex(newIndex);
        };

        const resetPosition = () => {
            if (containerRef.current) {
                containerRef.current.style.transform = `translateX(-${
                    activeIndex * 100
                }%)`;
            }
        };

        const startAutoSwipe = () => {
            if (props.autoSwipe) {
                setTimeout(() => {
                    swipeForward();
                }, props.autoSwipeInterval);
            }
            return null;
        };

        React.useEffect(() => {
            if (activeIndex <= React.Children.count(props.children)) {
                startAutoSwipe();
            }
        }, [activeIndex]);

        const stopAutoSwipe = (timerId: NodeJS.Timeout | null) => {
            if (timerId) {
                clearInterval(timerId);
            }
        };

        useImperativeHandle(ref, () => ({
            swipeForward,
            swipeBackward,
            resetPosition,
        }));

        useEffect(() => {
            let timerId: NodeJS.Timeout | null = null;

            if (props.autoSwipe) {
                timerId = startAutoSwipe();
            }

            return () => {
                stopAutoSwipe(timerId);
            };
        }, [props.autoSwipe]);

        const renderButton = (
            onClick: () => void,
            disabled: boolean,
            text: string
        ) => {
            return (
                <button onClick={onClick} disabled={disabled}>
                    {text}
                </button>
            );
        };

        const renderButtons = () => {
            const { backButtonProps, forwardButtonProps } = props;

            const backButton =
                backButtonProps && !props.hideBackButton
                    ? renderButton(
                          () => {
                              setLoopEnabled(false);
                              swipeBackward();
                          },
                          activeIndex === 0,
                          backButtonProps.text
                      )
                    : null;

            const forwardButton =
                forwardButtonProps && !props.hideForwardButton
                    ? renderButton(
                          () => {
                              setLoopEnabled(false);
                              swipeForward();
                          },
                          activeIndex ===
                              React.Children.count(props.children) - 1,
                          forwardButtonProps.text
                      )
                    : null;

            return (
                <div className="buttons-container">
                    {backButton}
                    {forwardButton}
                </div>
            );
        };

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
                        transition: "transform 0.3s ease",
                    }}
                    ref={containerRef}
                >
                    {React.Children.map(props.children, (child, index) => (
                        <div key={index} className="slide">
                            {child}
                        </div>
                    ))}
                </div>
                <div className="pagination">
                    {React.Children.map(props.children, (_, index) => (
                        <button
                            key={index}
                            className={`dot ${
                                index === activeIndex ? "active" : ""
                            }`}
                            onClick={() => setActiveIndex(index)}
                        />
                    ))}
                </div>
                {renderButtons()}
            </div>
        );
    }
);

SwipeableViews.displayName = "SwipeableViews";
export default SwipeableViews;
