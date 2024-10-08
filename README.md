# phpMyAdmin Dark Mode

A simple Chrome extension that adds a dark mode to phpMyAdmin, enhancing the user experience while using the phpMyAdmin interface.

## Features

- Toggles dark mode on and off on phpMyAdmin pages.
- Supports `hstgr.io` subdomains with a dynamic format.
- Uses local storage to remember the dark mode state between sessions.

## Installation

1. Clone or download this repository.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable developer mode at the top right.
4. Click on "Load unpacked extension".
5. Select the folder containing the extension files.

## Usage

- Click on the extension icon in the Chrome toolbar.
- Press the "Toggle Dark Mode" button to enable or disable dark mode.
- The dark mode state will be remembered and automatically applied the next time phpMyAdmin is opened.

## Development

### Technologies Used

- HTML
- CSS
- JavaScript
- Chrome Extensions API

### Project Structure

``` plaintext
phpmyadmin-dark-mode/
│
├── assets/
│   ├── css/
│   │   ├── sass/
│   │   │   └── dark-mode.scss
│   ├── js/
│   │   └── apply-dark-mode.js
│   ├── icon16.png
│   ├── icon32.png
│   ├── icon48.png
│   ├── icon128.png
│   └── pma.png
│
├── public/
│   ├── css/
│   │   └── dark-mode.css
│   └── js/
│       └── apply-dark-mode.js
│
├── popup.html
└── manifest.json
```

### Contributing

Contributions are welcome! If you want to improve this extension, feel free to submit a pull request.

### License

This project is under the MIT License. See the [LICENSE](https://opensource.org/licenses/MIT) file for more details.
