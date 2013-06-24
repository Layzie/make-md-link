/*jshint strict:false, browser:true */
(function bookmarklet() {
  var url = location.origin + location.pathname,
      title = document.title,
      markdownLink = '[' + title + ']' + '(' + url + ')';

  window.prompt('Copy to clipboard: ⌘+C or Ctrl+C then Enter', markdownLink);
}());
