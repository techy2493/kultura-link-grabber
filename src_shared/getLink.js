function getLink(srcUrl) {
    let regx = new RegExp("(?<=_).*\.(jpg|png)$","ig");
    let link = `[${srcUrl.match(regx)[0].replaceAll("_","-")}]`
    console.log('Generated Link: ', link, 'From: ', srcUrl);
    return link;
}