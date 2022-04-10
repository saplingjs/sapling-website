<template>
	<div id="demo" :class="{ 'is-animated': animated }" ref="demo">
		<main id="demo-stage">
			<div v-if="stage === 0" key="stage-1" id="code" class="code" v-html="highlightedMarkup"></div>
			<div v-if="stage === 1" key="stage-2" id="shell">
				$ <vue-typer
					text="sapling run"
					:repeat="0"
					:pre-type-delay="2000"
					:type-delay="200"
				></vue-typer>
			</div>
			<div v-if="stage === 2" key="stage-3" id="final">
				<div id="form" v-html="demo.markup" @submit.prevent="handleSubmit"></div>
				<div id="database">
					<h2>Database table <code v-text="demo.collection"></code></h2>

					<div class="is-relative">
						<transition name="popfade">
							<pre v-if="currentObject" :key="generateID()" class="code" v-html="highlightedCurrentObject"></pre>
						</transition>
					</div>
				</div>
			</div>
		</main>
		<footer id="demo-caption">
			<div v-if="stage === 0" key="step-1">
				<h1>Step 1</h1>
				<p>Write your HTML &ndash; for example, a <strong v-text="demo.name"></strong>.</p>
			</div>
			<div v-if="stage === 1" key="step-2">
				<h1>Step 2</h1>
				<p>Run your project.</p>
			</div>
			<div v-if="stage === 2" key="step-3">
				<h1>Step 3</h1>
				<p>It works &ndash; like magic. Try it!</p>
			</div>
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
			stage: 0,

			animated: false,

			currentObject: false,

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
						password: this.encrypt(data.password),
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
						photo: data.photo
					})
				}
			]
		};
	},

	computed: {
		demo() {
			return this.demos[Math.floor(Math.random()*this.demos.length)];
		},

		highlightedMarkup() {
			return Prism.highlight(this.demo.markup, Prism.languages.markup, 'markup');
		},

		highlightedCurrentObject() {
			return Prism.highlight(JSON.stringify(this.currentObject, undefined, 4), Prism.languages.json, 'json');
		}
	},

	methods: {
		handleSubmit(event) {
			const data = new FormData(event.target);
			this.currentObject = this.demo.object(Object.fromEntries(data));
		},

		generateID() {
			return (`00000000${Math.random().toString(36).slice(2)}`).slice(-11);
		},

		generateTimestamp() {
			return + new Date();
		},

		encrypt() {
			return '(hashed password)';
		}
	},

	mounted() {
		window.addEventListener('scroll', () => {
			if (this.$refs.demo.getBoundingClientRect().top < 400) {
				this.animated = true;
			}
		});
		window.dispatchEvent(new Event('scroll'));
	},

	components: {
		VueTyper
	}
};

</script>

<style lang="stylus">

@import '../../stylus/variables'

#demo
	padding 6.5rem 0

#demo-stage
	#code
		text-align left
		font-family $family-monospace
		font-size 1.125rem
		letter-spacing -0.01em
		line-height 2
		white-space pre
		padding 2rem 0
		width min-content
		margin 0 auto
		color #111
		transition 0.3s color ease-in-out
		transition-delay 1.1s

		& > .token
			& > *
				display inline-block
				overflow hidden
				vertical-align bottom
				text-indent -105%

				.is-animated &
					animation 0.6s reveal-word both cubic-bezier(0.33, 1, 0.68, 1)

			.is-animated &
				for t in 0..8
					&:nth-child({t + 1})
						& > *
							for i in 1..10
								&:nth-child({i})
									animation-delay 50ms * i + 200ms * t

		.is-animated &
			color #fff
	
	#shell
		text-align left
		font-family $family-monospace
		font-size 2.5rem
		white-space nowrap
		color #ddd
		margin 0 auto
		max-width 650px

		.vue-typer
			.custom.char
				color #ddd

			.custom.caret
				width 0.5em
				height 1em
				background-color #ddd

				&.complete
					display inline-block
	
	#final
		display flex
		justify-content center

		& > div
			text-align left
			background rgba(0,0,0,.1)
			padding 2rem 3rem
			border-radius 1rem
			width min-content
			margin 1rem

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
			
			button
				margin-left auto
				border 0
				background $green
				padding 0.75rem 1.5rem
				color $white
				font-weight 700
		
		#database
			.is-relative
				min-width 330px

			pre
				line-height 1.6

#demo-caption
	padding 3rem 0


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


.popfade-leave-active, .popfade-enter-active
	transition 0.6s cubic-bezier(0.65, 0, 0.35, 1)
	position absolute
	top 0

.popfade-enter, .popfade-leave-to
	transform scale(0)

</style>
