import "docsify";
import "docsify-themeable";

window.$docsify = {
    name: 'Sapling',
    logo: '../images/logo.svg',
    repo: 'saplingjs/sapling',
    homepage: 'home.md',
    auto2top: true,
    loadSidebar: '_sidebar.md',
    executeScript: true,
    mergeNavbar: true,
    maxLevel: 4,
    subMaxLevel: 2,
    pagination: {
        crossChapter: true,
        crossChapterText: false
    }
};

require("docsify-pagination");
require("docsify-copy-code");