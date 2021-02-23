const id =  "kultura-game-link"

console.log("Loaded")
menu.create({
    id: "kultura-game-link",
    title: "Copy Game Link",
    contexts: ["image"],
    documentUrlPatterns: ["*://kultura.oww.io/*"]
})

menu.onClicked.addListener(async function (info, page) {
    if (info.menuItemId == "kultura-game-link") {
        if (info.srcUrl) {
            // Regex for src url
            let link = getLink(info.srcUrl);
            if (link) {
                act(link);
            }
        }
    }
});
