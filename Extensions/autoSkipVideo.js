// NAME: Auto Skip Video
// AUTHOR: khanhas
// DESCRIPTION: Auto skip video

<adblock.js="%appdata%\spicetify\Extensions" />

(function SkipVideo() {
	Spicetify.Player.addEventListener("songchange", () => {
		const data = Spicetify.Player.data || Spicetify.Queue;
		if (!data) return;

		const meta = data.item.metadata;
		// Ads are also video media type so I need to exclude them out.
		if (meta["media.type"] === "video" && meta.is_advertisement !== "true") {
			Spicetify.Player.next();
		}
	});
})();
