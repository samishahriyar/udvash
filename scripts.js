containerDOM = document.querySelector("ul#video-note-tab.nav.cardNavBtn.flex-column.nav-pills");

linkDOM = document.querySelector("li.nav-item.d-none.active");

directLinks = linkDOM.dataset.allVideoSource.split(",");

directLinksQuality = linkDOM.dataset.allResolution.split(",");

youtubeLink = linkDOM.dataset.youtubeVideo;

directLinks.forEach(function(e, f){
    containerDOM.innerHTML += elementText(e, directLinksQuality[f], "Direct class link");
});

if(youtubeLink){
    containerDOM.innerHTML += elementText("https://www.youtube.com/watch?v=" + youtubeLink, "YouTube", "YouTube class link");   
}

containerDOM.innerHTML +=
`
    <li class="nav-item d-flex">
            <a href="fdm://" class="nav-link btn btn-videos d-flex align-items-center py-1">
                <img src="/Content/UmsTheme/assets/img/MC/icons/video.png" alt="Launch FDM">
                <span class="name">FDM</span>
            </a>
        </li>
`

function elementText(link, qual, type){
    return `
        <li class="nav-item d-flex">
            <a href="${link}" target="_blank" class="nav-link btn btn-videos d-flex align-items-center py-1">
                <img src="/Content/UmsTheme/assets/img/MC/icons/video.png" alt="${type}">
                <span class="name">${qual}</span>
            </a>
            <button data-link="${link}" class="nav-link btn btn-videos d-flex align-items-center py-1 dbtn">
                <img src="/Content/UmsTheme/assets/img/MC/icons/video.png" alt="${type}">
                <span class="name">Copy</span>
            </button>
        </li>
    `;
}

document.querySelectorAll(".dbtn").forEach(function(e){
    e.addEventListener("click",function(){
        navigator.clipboard.writeText(e.dataset.link);
    });
});