const linksSocialMedia = {
    instagram: 'juaanrib',
    twitter: 'juaanrib'
}

function changeSocialMediaLinks(){

    for(let li of socialLinks.children) {
        const social = li.getAttribute('class')
        
        li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`

    }
}

changeSocialMediaLinks()

function getGitHubProfileInfos(){
    const url = `https://api.github.com/users/${linksSocialMedia.github}`

    fetch(url)
    .then(response => response.json())

}

getGitHubProfileInfos()