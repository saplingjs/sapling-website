import 'docsify';
import 'docsify-themeable';
import 'docsify-pagination';
import 'docsify-copy-code';

import 'prismjs/components/prism-bash.js';
import 'prismjs/components/prism-http.js';
import 'prismjs/components/prism-json.js';
import 'prismjs/components/prism-twig.js';


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
		crossChapterText: false,
	},
};

window.Prism.languages.nunjucks = window.Prism.languages.twig;
window.Prism.languages.env = window.Prism.languages.bash;

window.Prism.languages.http['request-line'].pattern = /^(?:GET|HEAD|POST|PUT|DELETE|CONNECT|OPTIONS|TRACE|PATCH|PRI|SEARCH)\s(?:https?:\/\/|\/)\S*/m;
