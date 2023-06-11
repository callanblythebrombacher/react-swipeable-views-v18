
# SwipeableViews for React V18

### Please note this package is not type script compatible yet... 

SwipeableViews is a React component that provides swipeable views with touch support. It allows you to create a swipeable container with multiple views that can be navigated by swiping or using buttons.

## Installation

Install the package from npm:

```
npm install react-swipeable-views-v18
```

or

```
yarn add react-swipeable-views
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

### Props

The `SwipeableViews` component accepts the following props:

- `children`: The child components that represent the swipeable views.

### Imperative Handler

To access the swipe functions (`swipeForward`, `swipeBackward`, `resetPosition`) outside the component, you can use the `ref` attribute and the imperative handler.

```jsx
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
      {/* Your views */}
    </SwipeableViews>

    <button onClick={handleSwipeBackward}>Swipe Backward</button>
    <button onClick={handleSwipeForward}>Swipe Forward</button>
    <button onClick={handleResetPosition}>Reset Position</button>
  </div>
);
```

This allows you to programmatically trigger swipe actions or reset the position of the swipeable views.

## Customization

You can customize the appearance and behavior of the SwipeableViews component by modifying the CSS classes or adding inline styles. The component uses the following CSS classes:

- `swipeable-container`: The container element that wraps the swipeable views.
- `slider-container`: The container for the views that is translated to achieve the swipe effect.
- `slide`: The individual view elements.
- `pagination`: The pagination dots for navigating between views.
- `dot`: The individual dot element representing a view in the pagination.
- `dot.active`: The active dot element indicating the current view.

You can override these classes or provide additional styles to achieve the desired look and feel.

## Contributing

Contributions are welcome! If you find a bug or want to suggest an enhancement, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
```

Feel free