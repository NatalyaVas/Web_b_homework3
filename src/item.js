export function drawGalleryItem(item) {
    const itemEl = document.createElement('div');
    itemEl.className = 'gallery-item';

    const resourseWrapEl = document.createElement('div');
    resourseWrapEl.className = 'gallery-item__resourse';

    if (item.type === 'image') {
        const imgEl = document.createElement('img');
        imgEl.className = 'gallery-item__img';
        imgEl.src = item.resource;

        resourseWrapEl.appendChild(imgEl);
    } else if (item.type === 'audio') {
        const audioEl = document.createElement('audio');
        audioEl.className = 'gallery-item__audio';
        audioEl.src = item.resource;
        audioEl.controls = true;

        resourseWrapEl.appendChild(audioEl);
    } else if (item.type === 'video') {
        const audioEl = document.createElement('video');
        audioEl.className = 'gallery-item__video';
        audioEl.src = item.resource;
        audioEl.controls = true;

        resourseWrapEl.appendChild(videoEl);
    }

    const titleEl = document.createElement('span');
    titleEl.className = "gallery-item__title";
    titleEl.textContent = item.title;

    itemEl.appendChild(resourseWrapEl);
    itemEl.appendChild(titleEl);
    
    return itemEl;
}