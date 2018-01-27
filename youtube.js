(function highlightCurrentPlaylistElement() {
	/**
	 * Подсветка текущего видео в плейлисте
	 */
	var current = document.querySelectorAll("span.ytd-playlist-panel-video-renderer:not(:empty)~#meta")[0];
	if(current !== undefined)
	    current.style.background =  "#8cc028";
})();