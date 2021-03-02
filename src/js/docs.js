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

require("prismjs/components/prism-bash");
require("prismjs/components/prism-http");
require("prismjs/components/prism-json");
require("prismjs/components/prism-twig");

Prism.languages.nunjucks = Prism.languages.twig;
Prism.languages.env = Prism.languages.bash;

Prism.languages.http['request-line'].pattern = /^(?:GET|HEAD|POST|PUT|DELETE|CONNECT|OPTIONS|TRACE|PATCH|PRI|SEARCH)\s(?:https?:\/\/|\/)\S*/m;
