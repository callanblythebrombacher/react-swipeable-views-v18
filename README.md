# React Swipeable Views v18

A replacement for react swipeable views for React 18.

## Installation

```bash
npm install react-swipeable-views-v18
```

## Usage

```jsx
import React from 'react';
import SwipeableViews from 'react-swipeable-views-v18';

const App = () => {
  return (
    <SwipeableViews>
      <div>Slide 1</div>
      <div>Slide 2</div>
      <div>Slide 3</div>
    </SwipeableViews>
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

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any improvements or bug fixes.

## License

This project is licensed under the MIT License.
```

Feel free to request any adjustments to the code by submiiting an issue on github or a pull request.