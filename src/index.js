import("./style.sass");

import { drawGalleryItem } from './item';
import items from './items';

const galleryRootEl = document.getElementById('galleryRoot');

items.map(item => galleryRootEl.appendChild(drawGalleryItem(item)))