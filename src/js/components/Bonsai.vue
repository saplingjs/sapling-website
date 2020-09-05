<template>
	<div id="bonsai" :class="{ 'v': animated }">
		<img src="/images/bonsai.svg" class="svg" id="bonsai-svg" style="display: none;" />
	</div>
</template>

<script>

import inlineSVG from 'inline-svg';

export default {
	name: 'bonsai',

	data() {
		return {
			animated: false,

			offset: 650,

			leafLocations: [
				[529, 543], [530, 576], [565, 603], [622, 649], [609, 637], [590, 627], [580, 615], [569, 609], [515, 542], [520, 545], [466, 536], [478, 552], [492, 558], [448, 528], [443, 513], [441, 521], [446, 539], [433, 485], [428, 466], [428, 453], [434, 496], [444, 514], [445, 518], [541, 584], [495, 544], [502, 562], [471, 542], [613, 640], [598, 632], [562, 600], [223, 475], [209, 474], [215, 484], [209, 494], [204, 488], [239, 445], [191, 513], [251, 428], [192, 442], [166, 426], [180, 438], [180, 537], [174, 551], [233, 398], [307, 378], [283, 355], [244, 451], [216, 457], [187, 532], [322, 401], [297, 363], [260, 301], [218, 297], [188, 294], [247, 334], [396, 257], [485, 301], [422, 208], [438, 209], [462, 198], [451, 201], [453, 267], [353, 245], [290, 309], [272, 324], [232, 451], [305, 401], [300, 372], [338, 275], [351, 263], [341, 168], [377, 161], [421, 158], [317, 138], [311, 216], [225, 282], [229, 386], [481, 323], [524, 337], [541, 341], [211, 300], [192, 296], [365, 145], [240, 344], [419, 269], [554, 344], [516, 282], [411, 265], [290, 309], [271, 300], [445, 148], [410, 205], [288, 157], [396, 195], [481, 324], [390, 191], [228, 338], [384, 184], [385, 265], [416, 278], [391, 229], [396, 160], [461, 244], [453, 295], [493, 330], [482, 301], [505, 335], [505, 288], [409, 160], [334, 194], [352, 175], [296, 156], [375, 157], [268, 144], [281, 150], [392, 157], [435, 288], [284, 154], [353, 164], [435, 153], [399, 160], [369, 146], [442, 148], [370, 136], [377, 122]
			]
		};
	},

	mounted() {
		let self = this;

		inlineSVG.init({
			svgSelector: 'img.svg',
			initClass: 'js-inlinesvg',
		}, function(){
			document.querySelector("#bonsai-svg").style.display = '';

			setTimeout(function(){
				self.animated = true;

				for(var i = 0; i < self.leafLocations.length; i++) {
					self.generateLeaf(self.leafLocations[i][0], self.leafLocations[i][1]);
				}
			}, 400);
		});

	},

	methods: {
		generateLeaf(x, y) {
			const leafID = Math.floor(Math.random() * 32) + 1;
			const rotation = Math.floor(Math.random() * 360);

			let tag = document.createElementNS('http://www.w3.org/2000/svg', 'use');
			tag.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#Leaf-' + leafID);
			tag.setAttribute('transform', 'translate('+x+', '+y+') rotate('+rotation+') scale(0)');

			document.querySelector("#bonsai-svg").appendChild(tag);

			setTimeout(function(){
				tag.setAttribute('transform', 'translate('+x+', '+y+') rotate('+rotation+') scale(1)');
			}, this.offset);

			this.offset += 12;
		}
	}
};

</script>

<style lang="stylus">

#bonsai {
	svg {
		height: 65%;
		height: 65vh;
		width: auto;
		max-height: 700px;
		margin: -6rem auto 0;
		display: block;

		* {
			transition: all 400ms cubic-bezier(0.19, 1, 0.22, 1);
		}
	}


	/* Main trunk */

	#Trunk-A {
		transform: translate(377px, 664px) rotate(28deg) scale(0);
	}
	&.v #Trunk-A {
		transform: translate(377px, 664px) rotate(28deg) scale(1);
	}

	#Trunk-B {
		transform: translate(420px, 575px) rotate(-72deg) scale(0);
		transition-delay: 100ms;
	}
	&.v #Trunk-B {
		transform: translate(420px, 575px) rotate(-72deg) scale(1);
	}

	#Trunk-C {
		transform: translate(326px, 538px) rotate(-64deg) scale(0);
		transition-delay: 200ms;
	}
	&.v #Trunk-C {
		transform: translate(326px, 538px) rotate(-64deg) scale(1);
	}

	#Trunk-D {
		transform: translate(278px, 504px) scale(0);
		transition-delay: 300ms;
	}
	&.v #Trunk-D {
		transform: translate(278px, 504px) scale(1);
	}

	#Trunk-E {
		transform: translate(293px, 442px) rotate(61deg) scale(0);
		transition-delay: 400ms;
	}
	&.v #Trunk-E {
		transform: translate(293px, 442px) rotate(61deg) scale(1);
	}

	#Trunk-F {
		transform: translate(363px, 368px) rotate(-22deg) scale(0);
		transition-delay: 500ms;
	}
	&.v #Trunk-F {
		transform: translate(363px, 368px) rotate(-22deg) scale(1);
	}


	/* Branches */

	#Branch-A1 {
		transform: translate(433px, 581px) rotate(40deg) scale(0);
		transition-delay: 200ms;
	}
	&.v #Branch-A1 {
		transform: translate(433px, 581px) rotate(40deg) scale(1);
	}

	#Branch-A2 {
		transform: translate(467px, 547px) rotate(90deg) scale(0);
		transition-delay: 300ms;
	}
	&.v #Branch-A2 {
		transform: translate(467px, 547px) rotate(90deg) scale(1);
	}

	#Branch-A3 {
		transform: translate(486px, 547px) rotate(128deg) scale(0);
		transition-delay: 400ms;
		transition-duration: 650ms;
	}
	&.v #Branch-A3 {
		transform: translate(486px, 547px) rotate(128deg) scale(1);
	}

	#Branch-A4 {
		transform: translate(455px, 547px) rotate(-16deg) scale(0);
		transition-delay: 250ms;
	}
	&.v #Branch-A4 {
		transform: translate(455px, 547px) rotate(-16deg) scale(1);
	}

	#Branch-B1 {
		transform: translate(370px, 536px) scale(0);
		transition-delay: 200ms;
	}
	&.v #Branch-B1 {
		transform: translate(370px, 536px) scale(1);
	}

	#Branch-D1 {
		transform: translate(259px, 469px) rotate(-90deg) scale(0);
		transition-delay: 400ms;
	}
	&.v #Branch-D1 {
		transform: translate(259px, 469px) rotate(-90deg) scale(1);
	}

	#Branch-D2 {
		transform: translate(220px, 471px) rotate(-150deg) scale(0);
		transition-delay: 500ms;
	}
	&.v #Branch-D2 {
		transform: translate(220px, 471px) rotate(-150deg) scale(1);
	}

	#Branch-D3 {
		transform: translate(221px, 469px) rotate(-50deg) scale(0);
		transition-delay: 600ms;
	}
	&.v #Branch-D3 {
		transform: translate(221px, 469px) rotate(-50deg) scale(1);
	}

	#Branch-D4 {
		transform: translate(219px, 468px) rotate(50deg) scale(0);
		transition-delay: 650ms;
	}
	&.v #Branch-D4 {
		transform: translate(219px, 468px) rotate(50deg) scale(1);
	}

	#Branch-D5 {
		transform: translate(254px, 438px) rotate(-20deg) scale(0);
		transition-delay: 850ms;
	}
	&.v #Branch-D5 {
		transform: translate(254px, 438px) rotate(-20deg) scale(1);
	}

	#Branch-E1 {
		transform: translate(316px, 409px) rotate(-31deg) scale(0);
		transition-delay: 600ms;
	}
	&.v #Branch-E1 {
		transform: translate(316px, 409px) rotate(-31deg) scale(1);
	}

	#Branch-F1 {
		transform: translate(324px, 323px) rotate(-94deg) scale(0);
		transition-delay: 700ms;
	}
	&.v #Branch-F1 {
		transform: translate(324px, 323px) rotate(-94deg) scale(1);
	}

	#Branch-F2 {
		transform: translate(286px, 317px) rotate(-59deg) scale(0);
		transition-delay: 850ms;
	}
	&.v #Branch-F2 {
		transform: translate(286px, 317px) rotate(-59deg) scale(1);
	}

	#Branch-F3 {
		transform: translate(246px, 333px) rotate(184deg) scale(0);
		transition-delay: 850ms;
	}
	&.v #Branch-F3 {
		transform: translate(246px, 333px) rotate(184deg) scale(1);
	}

	#Branch-F4 {
		transform: translate(234px, 292px) rotate(-98deg) scale(0);
		transition-delay: 1000ms;
		transition-duration: 900ms;
	}
	&.v #Branch-F4 {
		transform: translate(234px, 292px) rotate(-98deg) scale(1);
	}

	#Branch-F5 {
		transform: translate(322px, 276px) rotate(66deg) scale(0);
		transition-delay: 650ms;
		transition-duration: 600ms;
	}
	&.v #Branch-F5 {
		transform: translate(322px, 276px) rotate(66deg) scale(1);
	}

	#Branch-F6 {
		transform: translate(384px, 256px) rotate(120deg) scale(0);
		transition-delay: 800ms;
		transition-duration: 800ms;
	}
	&.v #Branch-F6 {
		transform: translate(384px, 256px) rotate(120deg) scale(1);
	}

	#Branch-F7 {
		transform: translate(379px, 244px) rotate(61deg) scale(0);
		transition-delay: 900ms;
	}
	&.v #Branch-F7 {
		transform: translate(379px, 244px) rotate(61deg) scale(1);
	}

	#Branch-F8 {
		transform: translate(433px, 282px) rotate(40deg) scale(0);
		transition-delay: 1000ms;
		transition-duration: 900ms;
	}
	&.v #Branch-F8 {
		transform: translate(433px, 282px) rotate(40deg) scale(1);
	}

	#Branch-F9 {
		transform: translate(417px, 214px) rotate(-36deg) scale(0);
		transition-delay: 1050ms;
		transition-duration: 900ms;
	}
	&.v #Branch-F9 {
		transform: translate(417px, 214px) rotate(-36deg) scale(1);
	}

	#Branch-F10 {
		transform: translate(465px, 309px) rotate(60deg) scale(0);
		transition-delay: 1150ms;
		transition-duration: 1000ms;
	}
	&.v #Branch-F10 {
		transform: translate(465px, 309px) rotate(60deg) scale(1);
	}

	#Branch-F11 {
		transform: translate(317px, 226px) rotate(32deg) scale(0);
		transition-delay: 700ms;
		transition-duration: 600ms;
	}
	&.v #Branch-F11 {
		transform: translate(317px, 226px) rotate(32deg) scale(1);
	}

	#Branch-F12 {
		transform: translate(347px, 175px) rotate(-70deg) scale(0);
		transition-delay: 900ms;
		transition-duration: 700ms;
	}
	&.v #Branch-F12 {
		transform: translate(347px, 175px) rotate(-70deg) scale(1);
	}

	#Branch-F13 {
		transform: translate(362px, 162px) rotate(82deg) scale(0);
		transition-delay: 1000ms;
		transition-duration: 1300ms;
	}
	&.v #Branch-F13 {
		transform: translate(362px, 162px) rotate(82deg) scale(1);
	}

	#Branch-F14 {
		transform: translate(320px, 159px) scale(0);
		transition-delay: 1100ms;
		transition-duration: 1800ms;
	}
	&.v #Branch-F14 {
		transform: translate(320px, 159px) scale(1);
	}
}


</style>