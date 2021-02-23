function getLink(srcUrl) {
    let regx = new RegExp("(?<=_).*\.jpg");
    let link = `[${srcUrl.match(regx)[0]}]`

    console.log('Generated Link: ', link, 'From: ', srcUrl);
    return link;
}