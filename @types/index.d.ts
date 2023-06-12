// @ts-ignore
import React, { ReactNode } from 'react';

export interface SwipeableViewsProps {
    children: ReactNode[];
    loop?: boolean;
    autoSwipe?: boolean;
    autoSwipeInterval?: number;
    swipeThreshold?: number;
    hideBackButton?: boolean;
    hideForwardButton?: boolean;
    backButtonProps?: ButtonProps;
    forwardButtonProps?: ButtonProps;
}

export interface ButtonProps {
    text: string;
}

export interface SwipeableViewsRef {
    swipeForward: () => void;
    swipeBackward: () => void;
    resetPosition: () => void;
}

declare const SwipeableViews: React.ForwardRefExoticComponent<
    SwipeableViewsProps & React.RefAttributes<SwipeableViewsRef>
>;

export default SwipeableViews;
