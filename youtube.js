(function highlightCurrentPlaylistElement() {
	/**
	 * Подсветка текущего видео в плейлисте
	 */
	var css = 'span.ytd-playlist-panel-video-renderer:not(:empty)~#meta {background: #8cc028;}',
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');
    style.type = 'text/css';
	if (style.styleSheet){
	  style.styleSheet.cssText = css;
	} else {
	  style.appendChild(document.createTextNode(css));
	}

	head.appendChild(style);
})();