import "docsify";
import "docsify-copy-code";
import "docsify-themeable";

window.$docsify = {
    name: 'Sapling',
    logo: '../images/logo.svg',
    repo: 'groenroos/sapling',
    homepage: 'home.md',
    auto2top: true,
    loadSidebar: '_sidebar.md',
    executeScript: true,
    mergeNavbar: true,
    maxLevel: 4,
    subMaxLevel: 2,
}