function getLink(srcUrl) {
    let regx = new RegExp("(?<=_).*\.(jpg|png|jpeg)$","ig");
    let matches = srcUrl.match(regx);
    if (!matches) {
        alert("Sorry we couldn't get this link, please file an issue at https://github.com/techy2493/kultura-link-grabber/issues and we'll get it fixed as soon as possible!")
        return;
    }
    let link = `[${matches[0].replaceAll("_","-")}]`
    console.log('Generated Link: ', link, 'From: ', srcUrl);
    return link;
}