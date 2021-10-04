# gobi-react

[![NPM](https://img.shields.io/npm/v/gobi-react.svg)](https://www.npmjs.com/package/gobi-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save gobi-react
```

## Usage

```tsx
import React, { Component } from 'react'

import { GobiReact } from 'gobi-react'

class Example extends Component {
  render() {
    return <GobiReact stories={['ragg9']} />
  }
}
```

### Props

| Props  | Type |
| ------------- | ------------- |
| stories  | REQUIRED string[] |
| animatedBubble  | boolean  |
| bubbleSize  | number  |
| color  | string  |
| hideTitle  | boolean  |
| showPlayIcon  | boolean  |
| autoStartWithSound  | boolean  |
| titleFontColor  | string  |


## License

MIT © [gobi](https://github.com/gobi)
