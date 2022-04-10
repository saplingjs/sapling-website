<template>
	<div id="demo" :class="{ 'is-animated': animated }" ref="demo">
		<!-- Stage -->
		<figure id="demo-stage">
			<transition name="popfade">
				<!-- HTML code animation -->
				<div v-if="stage === 1" key="stage-1" id="code">
					<article class="code" v-html="highlightedMarkup"></article>
				</div>

				<!-- Shell command animation -->
				<div v-if="stage === 2" key="stage-2" id="shell">
					<article>
						$ <vue-typer
							text="sapling run"
							:repeat="0"
							:pre-type-delay="900"
							:type-delay="160"
						></vue-typer>
					</article>
				</div>

				<!-- Final result -->
				<div v-if="stage === 3" key="stage-3" id="final">
					<transition-group tag="article" name="popfade" class="columns">
						<!-- The result of the HTML markup -->
						<div id="form" key="form" class="column" v-if="!isTouch || !showDatabase" v-html="demo.markup" @submit.prevent="handleSubmit"></div>

						<!-- Database simulation -->
						<div id="database" key="database" class="column" v-if="!isTouch || showDatabase">
							<h2>Database table <code v-text="demo.collection"></code></h2>

							<div class="is-relative">
								<transition name="popfade">
									<pre v-if="currentObject" :key="generateID()" class="code" v-html="highlightedCurrentObject"></pre>
								</transition>
							</div>
						</div>
					</transition-group>
				</div>
			</transition>
		</figure>

		<!-- Caption for each slide -->
		<main id="demo-caption">
			<transition name="slidefade">
				<div v-if="stage === 1" key="caption-1" id="caption-1">
					<h1>Step 1</h1>
					<p>Write your HTML &ndash; for example, a <a v-text="demo.name" @click="update"></a>.</p>
				</div>
				<div v-if="stage === 2" key="caption-2" id="caption-2">
					<h1>Step 2</h1>
					<p>Run your project.</p>
				</div>
				<div v-if="stage === 3" key="caption-3" id="caption-3">
					<h1>Step 3</h1>
					<p>It already works &ndash; like magic.  Try it!</p>
				</div>
			</transition>
		</main>

		<!-- Slide controls -->
		<footer id="demo-dots">
			<button class="dot" @click="change(1)" :class="{ 'is-active': stage === 1 }"><div><div></div></div></button>
			<button class="dot" @click="change(2)" :class="{ 'is-active': stage === 2 }"><div><div></div></div></button>
			<button class="dot is-final" @click="change(3)" :class="{ 'is-active': stage === 3 }"><div></div></button>
		</footer>
	</div>
</template>

<script>

import Prism from 'prismjs';
import 'prismjs/components/prism-json.js';

import { VueTyper } from 'vue-typer';

export default {
	name: 'bonsai',

	data() {
		return {
			/* Current slide (1-3) */
			stage: 1,

			/* Current timeout to next slide */
			interval: false,

			/* Whether the HTML code animation should play */
			animated: false,

			/* Object of user submitted form data */
			currentObject: false,

			/* Randomly selected demo */
			demo: { name: null },

			/* Whether we're under the touch breakpoint */
			isTouch: false,

			/* Whether to show the database on mobile view */
			showDatabase: false,

			/* All the available demos */
			demos: [
				{
					name: 'contact form',
					markup: `<form method="post" action="/data/messages?redirect=/">
    <h2>Contact us</h2>
    <input type="text" name="name" placeholder="Your name" />
    <textarea name="message" placeholder="Your message" required></textarea>
    <button type="submit">Send message</button>
</form>`,
					collection: 'messages',
					object: data => ({
						_id: this.generateID(),
						_createdDate: this.generateTimestamp(),
						name: data.name,
						message: data.message
					})
				},
				{
					name: 'blog post editor',
					markup: `<form method="post" action="/data/posts?redirect=/">
    <h2>Create new blog post</h2>
    <input name="title" placeholder="Post title" required />
    <textarea name="content" placeholder="Write something..." required></textarea>
    <button type="submit">Publish post</button>
</form>`,
					collection: 'posts',
					object: data => ({
						_id: this.generateID(),
						_createdDate: this.generateTimestamp(),
						title: data.title,
						content: data.content
					})
				},
				{
					name: 'signup form',
					markup: `<form method="post" action="/api/register?redirect=/my-account">
    <h2>Create an account</h2>
    <input type="email" name="email" placeholder="Email" required />
    <input type="password" name="password" placeholder="Password" required />
    <button type="submit">Create account</button>
</form>`,
					collection: 'users',
					object: data => ({
						_id: this.generateID(),
						email: data.email,
						password: '(hashed password)',
						role: 'member'
					})
				},
				{
					name: 'status update form',
					markup: `<form method="post" action="/data/statuses?redirect=/">
    <h2>Post an update</h2>
    <textarea name="status" placeholder="What's happening?" required></textarea>
    <label for="photo">Attach a photo:</label>
    <input type="file" name="photo" id="photo" accept="image/png, image/jpeg" />
    <button type="submit">Post</button>
</form>`,
					collection: 'statuses',
					object: data => ({
						_id: this.generateID(),
						_createdDate: this.generateTimestamp(),
						status: data.status,
						photo: {
							name: "photo.jpg",
							width: 1280,
							height: 768,
							thumbnails: []
						}
					})
				}
			]
		};
	},

	computed: {
		/* Code highlight selected HTML markup */
		highlightedMarkup() {
			return Prism.highlight(this.demo.markup, Prism.languages.markup, 'markup');
		},

		/* Code highlight the database object */
		highlightedCurrentObject() {
			return Prism.highlight(JSON.stringify(this.currentObject, undefined, 4), Prism.languages.json, 'json');
		}
	},

	methods: {
		/* Change slides */
		change(to) {
			/* Change either to specified slide, or the next one, if any */
			if (to) {
				this.stage = to;
			} else if(this.stage < 3) {
				this.stage = this.stage + 1;
			}

			/* Clear any previous timeout, and set a new one, if necessary */
			clearTimeout(this.interval);
			if (this.stage < 3) {
				this.interval = setTimeout(() => this.change(), 4000);
			}

			/* Reset animations */
			this.resetAnimation();

			/* Reset database view */
			this.showDatabase = false;
		},

		/* Change demos */
		update() {
			/* Re-pick a demo */
			this.randomise();

			/* Reset timer */
			this.change(1);

			/* Reset animations */
			this.resetAnimation();
		},

		/* Hack to re-start animation */
		resetAnimation() {
			this.animated = false;
			setTimeout(() => {
				this.animated = true;
			}, 1);
		},

		/* Pick a random demo */
		randomise() {
			/* Randomise */
			const random = this.demos[Math.floor(Math.random()*this.demos.length)];

			/* If it's the same we currently have, re-randomise - otherwise, assign */
			if (random.name === this.demo.name) {
				this.randomise();
			} else {
				this.demo = random;
			}
		},

		/* Capture form submit, convert into object */
		handleSubmit(event) {
			const data = new FormData(event.target);
			this.currentObject = this.demo.object(Object.fromEntries(data));

			/* Show database view on mobile */
			this.showDatabase = true;
		},

		/* Generate random record ID */
		generateID() {
			return (`00000000${Math.random().toString(36).slice(2)}`).slice(-11);
		},

		/* Generate current UNIX timestamp */
		generateTimestamp() {
			return + new Date();
		}
	},

	created() {
		/* Pick a demo */
		this.randomise();
	},

	mounted() {
		/* Start the animation when it's scrolled into view */
		window.addEventListener('scroll', () => {
			if (this.$refs.demo.getBoundingClientRect().top < 400) {
				/* Start timer */
				if (!this.animated)
					this.change(1);

				/* Begin code animation */
				this.animated = true;
			}
		});
		window.dispatchEvent(new Event('scroll'));

		window.addEventListener('resize', () => {
			this.isTouch = window.innerWidth < 1024;
		});
		window.dispatchEvent(new Event('resize'));
	},

	components: {
		VueTyper
	}
};

</script>

<style lang="stylus">

@import '../../stylus/variables'

#demo
	padding 1.5rem 0 4rem
	overflow hidden
	margin 0 -1.5rem

#demo-stage
	position relative
	margin 0 1.5rem
	height 400px

	& > div
		width 100%
		height 100%
		display flex
		justify-content center
		align-items center

	& > div > article
		width 100%

	#code > article
		text-align left
		font-family $family-monospace
		font-size 1.125rem
		letter-spacing -0.01em
		line-height 2
		white-space pre
		padding 2rem 0
		width min-content
		margin 0 auto
		color #fff
		transition none

		+dark()
			color #111

		+touch()
			font-size 1rem
			line-height 1.6
			white-space pre-wrap
			width 100%

		& > .token
			& > *
				display inline-block
				overflow hidden
				vertical-align bottom
				text-indent -105%

				.is-animated &
					animation 0.6s reveal-word both cubic-bezier(0.33, 1, 0.68, 1)

			.is-animated &
				for t in 0..10
					&:nth-child({t + 1})
						& > *
							for i in 1..10
								&:nth-child({i})
									animation-delay 50ms * i + 200ms * t

		.is-animated &
			color #111
			transition 0.3s color ease-in-out
			transition-delay 1.1s

			+dark()
				color #fff

	#shell > article
		text-align left
		font-family $family-monospace
		font-size 2.5rem
		white-space nowrap
		color #111
		margin 0 auto
		max-width 550px

		+dark()
			color #ddd

		+touch()
			font-size 1.75rem

		.vue-typer
			.custom.char
				color inherit

			.custom.caret
				width 0.5em
				height 1em
				background-color #111

				+dark()
					background-color #ddd

				&.complete
					display inline-block

	#final > article
		display flex
		justify-content center
		margin 0 auto
		max-width 750px

		& > div
			text-align left
			background rgba(0,0,0,.025)
			padding 2rem 3rem
			border-radius 1rem
			margin 1rem

			+touch()
				margin 0.5rem
				padding 1.5rem 2rem

			+dark()
				background rgba(0,0,0,.2)

			h2
				white-space nowrap
				font-size 1.5rem

			input, textarea, button
				display block
				margin 1rem 0
				padding 0.5rem
				font-family inherit
				font-size 1rem
				border-radius 0.5rem
				outline none

			input, textarea
				width 100%
				min-width 280px
				background transparent
				border 2px solid #ddd

				+dark()
					border-color #555
					color white

				&:active, &:focus
					border-color $green

			textarea
				max-width 100%

			button
				margin-left auto
				border 0
				background $green
				padding 0.75rem 1.5rem
				color $white
				font-weight 700
				cursor pointer

		#database
			.is-relative
				min-width 330px

			pre
				width 100%
				line-height 1.6
				border-radius 8px
				background $white

				+dark()
					background rgba(0,0,0,.2)

#demo-caption
	position relative
	margin 1.5rem 0 1rem
	min-height 100px

	& > div
		width 100%
		display flex
		flex-direction column
		align-items center

		h1
			margin-bottom 0.5rem

		p
			margin-bottom 0 !important
			line-height 1.75
			padding 0 1.5rem

			a
				font-weight 700

	#caption-3 p
		position relative

		&::after
			content ''
			position absolute
			right -0.5rem
			bottom 1rem
			width 52px
			height 60px
			background url('/images/arrow.svg') no-repeat

#demo-dots
	display flex
	justify-content center

	.dot
		height 32px
		background none
		border 0
		padding 0 12px
		outline none
		display flex
		justify-content center
		align-items center
		cursor pointer

		& > div
			width 8px
			height 8px
			border-radius 4px
			background #999
			overflow hidden
			transition 0.2s width ease-in-out

			& > div
				width 0
				height 8px
				background #666
				animation none

				+dark()
					background #ddd

		.is-animated &.is-active
			& > div
				width 32px

				& > div
					animation 4s progress linear forwards

			&.is-final > div
				width 8px
				background #666

				+dark()
					background #ddd


.code
	.tag, .number
		color $purple

	.attr-name, .property
		color $green

	.attr-value, .string
		color $blue

	@media (prefers-color-scheme dark)
		.tag, .number
			color lighten($purple, 50%)

		.attr-name, .property
			color lighten($green, 20%)

		.attr-value, .string
			color lighten($blue, 50%)

	.punctuation
		color #999


@keyframes reveal-word
	0%
		text-indent -105%
		letter-spacing -0.1em

	100%
		text-indent 0

@keyframes progress
	0%
		width 0

	100%
		width 100%


.popfade-leave-active, .popfade-enter-active
	transition 0.6s cubic-bezier(0.32, 0, 0.67, 0)
	position absolute
	top 0

.popfade-enter-active
	transition 0.6s cubic-bezier(0.33, 1, 0.68, 1)
	transition-delay 0.4s

.popfade-enter, .popfade-leave-to
	transform scale(0.6)
	opacity 0

.slidefade-leave-active, .slidefade-enter-active
	transition 0.6s cubic-bezier(0.65, 0, 0.35, 1)
	position absolute
	top 0

.slidefade-enter
	transform translateX(200px)
	opacity 0

.slidefade-leave-to
	transform translateX(-200px)
	opacity 0

</style>
