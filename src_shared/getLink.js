function getLink(srcUrl) {
    let regx = new RegExp("(?<=_).*\.(jpg|png)$","ig");
    let match = srcUrl.match(regx)[0];
    if (!match) {
        alert("Sorry we couldn't get this link, please file an issue at https://github.com/techy2493/kultura-link-grabber/issues and we'll get it fixed as soon as possible!")
        return;
    }
    let link = `[${match.replaceAll("_","-")}]`
    console.log('Generated Link: ', link, 'From: ', srcUrl);
    return link;
}