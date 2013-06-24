# make markdown links

A bookmarklet makes url link for markdown style.

```javascript
// Copy this to your URL bar:
javascript:(function(){var o=location.href,t=document.title,n="["+t+"]"+"("+o+")";window.prompt("Copy to clipboard: ⌘+C or Ctrl+C then Enter",n)})();
```
