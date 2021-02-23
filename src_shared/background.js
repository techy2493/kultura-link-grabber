const id =  "kultura-game-link"

console.log("Loaded")
menu.create({
    id: "kultura-game-link",
    title: "Copy Game Link",
    contexts: ["image"]
})

menu.onClicked.addListener(async function (info) {
    if (info.menuItemId == "kultura-game-link") {
        if (info.srcUrl) {
            // Regex for src url
            let link = getLink(info.srcUrl);
            act(link);
        }
    }
});
