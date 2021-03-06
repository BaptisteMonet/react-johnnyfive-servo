// @flow
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { appName, appContainer, staticPath, wdsPort } from '../shared/config';

/**
 *
 * Application Markup
 *
 * This is a wrapper for all our application HTML — this is used by Express to
 * render our page and the app inside it so it's universally read, and not
 * just adding an overlay to the DOM.
 *
 */

const renderApp = () => (
  `<!doctype html>
  <html>
      <meta charset="utf-8">
      <title>${appName}</title>
      <link href="https://fonts.googleapis.com/css?family=Fira+Sans:400,500" rel="stylesheet">
      <link rel="stylesheet" href="/static/styles/style.css">
      <meta name="viewport" content="width=device-width, initial-scale=1">
  </html>
  <body>
    <div class="container">
      <h1 class="app-title">${appName}</h1>
      <div class="${appContainer}"></div>
    </div>
    <script src="/static/js/bundle.js"></script>
  </body>
  `
);

export default renderApp;
