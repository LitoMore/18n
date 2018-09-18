# 18n

A simple i18n module

## Install

```bash
$ npm install 18n
```

## Usage

`18n` will read the configuration from the `18n.config.js` in your package root.

### Configuration

```javascript
// 18n.config.js
module.exports = {
  langPath: 'languages',
  langPacks: [
    'en-us',
    'zh-cn'
  ],
  selector: () => {
    const {language} = navigator;
    switch (language) {
      case 'zh':
      case 'zh-cn':
        return 'zh-cn';
      default:
        return 'en-us';
    }
  }
};
```

## License

MIT © [LitoMore](https://github.com/LitoMore)
