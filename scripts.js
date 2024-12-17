containerDOM = document.querySelector("ul#video-note-tab.nav.cardNavBtn.flex-column.nav-pills")

linkDOM = document.querySelector("li.nav-item.d-none.active")

directLinks = linkDOM.dataset.allVideoSource.split(",")
directLinksQuality = linkDOM.dataset.allResolution.split(",")
youtubeLink = linkDOM.dataset.youtubeVideo

for(i = 0; i < directLinks.length; i++){
    containerDOM.innerHTML += elementText(directLinks[i], directLinksQuality[i], "Direct class link")
}
if(youtubeLink){
    containerDOM.innerHTML += elementText("https://www.youtube.com/watch?v=" + youtubeLink, "YouTube", "YouTube class link")
}

function elementText(link, qual, type){
    return `
        <li class="nav-item d-block">
            <a href="${link}" target="_blank" class="nav-link btn btn-videos d-flex align-items-center py-1">
                <img src="/Content/UmsTheme/assets/img/MC/icons/video.png" alt="${type}">
                <span class="name">${qual}</span>
            </a>
        </li>
    `
}