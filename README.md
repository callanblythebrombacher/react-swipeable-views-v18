# React Swipeable Views v18

A replacement for react swipeable views for React 18.

## Installation

```bash
npm install react-swipeable-views-v18
```

## Usage

```jsx
import React, { useRef } from 'react';
import SwipeableViews from 'react-swipeable-views';

const App = () => {
  const swipeableViewsRef = useRef(null);

  const handleSwipeForward = () => {
    swipeableViewsRef.current.swipeForward();
  };

  const handleSwipeBackward = () => {
    swipeableViewsRef.current.swipeBackward();
  };

  const handleResetPosition = () => {
    swipeableViewsRef.current.resetPosition();
  };

  return (
    <div>
      <SwipeableViews ref={swipeableViewsRef}>
        <div>View 1</div>
        <div>View 2</div>
        <div>View 3</div>
      </SwipeableViews>

      <button onClick={handleSwipeBackward}>Swipe Backward</button>
      <button onClick={handleSwipeForward}>Swipe Forward</button>
      <button onClick={handleResetPosition}>Reset Position</button>
    </div>
  );
};

export default App;
```

## Features

- Swipeable views for React 18.
- Auto-swipe feature with customizable interval.
- Manual navigation with forward and backward buttons.
- Customizable button text.
- Adjustable swipe threshold.
- Looping behavior for infinite swiping.

## Props

| Prop                  | Type     | Default | Description                                     |
| --------------------- | -------- | ------- | ----------------------------------------------- |
| autoSwipe             | boolean  | false   | Enable or disable auto-swipe feature.            |
| autoSwipeInterval     | number   | 3000    | Auto-swipe interval in milliseconds.             |
| backButtonProps       | object   |         | Props for the backward button.                   |
| forwardButtonProps    | object   |         | Props for the forward button.                    |
| swipeThreshold        | number   | 50      | Drag threshold for swipe action.                 |
| loop                  | boolean  | true    | Enable or disable looping behavior.              |
| hideBackButton        | boolean  | false   | Hide the backward button.                        |
| hideForwardButton     | boolean  | false   | Hide the forward button.                         |

### `backButtonProps`

| Prop     | Type     | Default | Description                          |
| -------- | -------- | ------- | ------------------------------------ |
| text     | string   | 'Back'  | The text content of the back button.  |
| disabled | boolean  | false   | Disable the back button.              |

### `forwardButtonProps`

| Prop     | Type     | Default | Description                               |
| -------- | -------- | ------- | ----------------------------------------- |
| text     | string   | 'Next'  | The text content of the forward button.    |
| disabled | boolean  | false   | Disable the forward button.                |

## Customization

You can customize the appearance and behavior of the SwipeableViews component by modifying the CSS classes or adding inline styles. The component uses the following CSS classes:

- `swipeable-container`: The container element that wraps the swipeable views.
- `slider-container`: The container for the views that is translated to achieve the swipe effect.
- `slide`: The individual view elements.
- `pagination`: The pagination dots for navigating between views.
- `dot`: The individual dot element representing a view in the pagination.
- `dot.active`: The active dot element indicating the current view.
- `.buttons-container > button`: The forward and backward buttons.
- `.buttons-container > button.disabled`: The disabled forward and backward buttons.
- `.buttons-container`: The container for the forward and backward buttons.
-`.buttons-container > button:after`: The text content of the forward and backward buttons.
- `.buttons-container > button:disabled:after`: The text content of the disabled forward and backward buttons.
- `.buttons-container > button:active:after`: The text content of the active forward and backward buttons.

```css
You can override these classes or provide additional styles to achieve the desired look and feel.

## Contributing

Contributions are welcome! If you find a bug or want to suggest an enhancement, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

