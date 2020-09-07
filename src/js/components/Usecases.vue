<template>
	<div id="usecases">
		<transition name="fade">
			<button v-if="type" @click.prevent="type = null" id="back-button" class="button is-success">Back</button>
		</transition>

		<header class="has-text-centered">
			<h2 class="title is-4" ref="title">
				<span key="title">5-second</span>
				<span v-if="!type" key="singular">tutorials</span>
				<span v-else key="specific">tutorial to <span v-text="title[type]"></span></span>
			</h2>
		</header>

		<div id="usecases-container" ref="container">
			<main>
				<transition name="fade-slide">
					<div v-if="!type" key="options">
						<div class="tile is-12">
							<div class="tile is-parent is-4">
								<button @click="type = 'contact'">
									<div class="feature-icon"><i class="far fa-2x fa-envelope-open"></i></div>
									<p>Create a <strong>contact form</strong></p>
								</button>
							</div>
							<div class="tile is-parent is-4">
								<button @click="type = 'status'">
									<div class="feature-icon"><i class="far fa-2x fa-share-alt"></i></div>
									<p>Create a <strong>status update form</strong></p>
								</button>
							</div>
							<div class="tile is-parent is-4">
								<button @click="type = 'login'">
									<div class="feature-icon"><i class="far fa-2x fa-lock"></i></div>
									<p>Create a <strong>login form</strong></p>
								</button>
							</div>
						</div>
						<div class="tile is-12">
							<div class="tile is-parent is-4">
								<button @click="type = 'todo'">
									<div class="feature-icon"><i class="far fa-2x fa-clipboard-list-check"></i></div>
									<p>Create a <strong>todo app</strong></p>
								</button>
							</div>
							<div class="tile is-parent is-4">
								<button @click="type = 'search'">
									<div class="feature-icon"><i class="far fa-2x fa-search"></i></div>
									<p>Create a <strong>search form</strong></p>
								</button>
							</div>
							<div class="tile is-parent is-4">
								<button @click="type = 'api'">
									<div class="feature-icon"><i class="far fa-2x fa-mobile"></i></div>
									<p>Create an <strong>API for an app</strong></p>
								</button>
							</div>
						</div>
					</div>
					<div v-else class="columns is-centered is-light" key="tutorial">
						<div v-if="type" class="column is-one-third animated-reveal" style="animation-delay: 0.7s;">
							<h3 class="title is-5 has-text-grey">With other leading brands of frameworks</h3>

							<ol class="is-faded">
								<li>Create an inherited controller class</li>
								<li>Write a service provider</li>
								<li>Define a contract</li>
								<li>Have a break</li>
								<li>Develop a middleware</li>
								<li>Craft a facade</li>
								<li>Search on Stack Overflow</li>
								<li>Add a response class</li>
								<li>Write a test suite</li>
								<li>Have a cup of coffee</li>
								<li>Create a database migration</li>
								<li>Develop and test validations</li>
								<li>Contemplate life decisions</li>
								<li>Handle exceptions</li>
							</ol>
						</div>
						<div class="column is-two-thirds">
							<h3 class="title is-4 has-text-success animated-reveal" style="animation-delay: 1.6s;">With Sapling</h3>

							<div v-if="type == 'api'">
								<ol class="animated-reveal" style="animation-delay: 2.6s;">
									<li>Nothing!</li>
								</ol>

								<p class="animated-reveal" style="animation-delay: 5.5s;">No, seriously.  With Sapling, you have a RESTful API out of the box.  All you need to do is to start sending requests to a built-in backend route, for example, <code>/data/<span v-text="collection[type]">notes</span></code>.  That's all.</p>
							</div>
							<div v-else-if="type == 'login'">
								<ol>
									<li class="animated-reveal" style="animation-delay: 2.6s;">Write the view:
										<pre v-html="markup[type]"></pre>
									</li>
									<li class="animated-reveal" style="animation-delay: 3.6s;"><strong>That's it.</strong> It works.</li>
								</ol>

								<p class="animated-reveal" style="animation-delay: 5.5s;">No, seriously.  With Sapling, you have user accounts out of the box - login, registration, password reset, everything.  All you need to do is to send a POST request to a built-in backend route, <code>/api/login</code>.  That's all.</p>
							</div>
							<div v-else-if="type == 'search'">
								<ol>
									<li class="animated-reveal" style="animation-delay: 2.6s;">Write the view:
										<pre v-html="markup[type]"></pre>
									</li>
									<li class="animated-reveal" style="animation-delay: 3.6s;"><strong>That's it.</strong> It works.</li>
								</ol>

								<p class="animated-reveal" style="animation-delay: 5.5s;">No, seriously.  With Sapling, you get searching built right in.  All you need to do is to send a GET request to a magic built-in backend route, such as <code>/data/posts</code>.  That's all.</p>
							</div>
							<div v-else>
								<ol>
									<li class="animated-reveal" style="animation-delay: 2.6s;">Write the view:
										<pre v-html="markup[type]"></pre>
									</li>
									<li class="animated-reveal" style="animation-delay: 3.6s;"><strong>That's it.</strong> It works.</li>
								</ol>

								<p class="animated-reveal" style="animation-delay: 5.5s;">No, seriously.  With Sapling, you only have to write the HTML for the form, and point the POST <code>action</code> to a built-in backend route, for example, <code>/data/<span v-text="collection[type]">notes</span></code>.  That's all.</p>
							</div>

							<p v-if="type != 'login' && type != 'search'" class="animated-reveal" style="animation-delay: 5.7s;">Sapling will handle the backend, creating the "<span v-text="collection[type]">notes</span>" collection if it doesn't exist, saving the <span v-text="item[type]">note</span> in the database, and returning a list of all <span v-text="collection[type]">notes</span> when you <code>GET /data/<span v-text="collection[type]">notes</span></code> &ndash; all with absolutely zero backend code required.</p>

							<div class="animated-reveal" style="animation-delay: 5.9s;">
								<hr>

								<div class="has-text-centered">
									<a href="/docs" class="button is-success">Read the docs</a>
								</div>
							</div>
						</div>
					</div>
				</transition>
			</main>
		</div>
	</div>
</template>

<script>

import smoothReflow from 'vue-smooth-reflow'

export default {
	name: "usecases",

	mixins: [smoothReflow],

	data() {
		return {
			type: null,

			title: {
				contact: 'make a contact form',
				status: 'make a status update form',
				login: 'make a login form',
				todo: 'make a todo app',
				search: 'create a search form',
				api: 'create an API for an app'
			},

			collection: {
				contact: 'messages',
				status: 'statuses',
				todo: 'todos',
				api: 'posts'
			},

			item: {
				contact: 'message',
				status: 'status',
				todo: 'todo',
				api: 'post'
			},

			markup: {
				contact: `&lt;form method="post" action="/data/messages?redirect=/">
    &lt;input type="text" name="name" placeholder="Your name" />
    &lt;textarea name="message" placeholder="Your message" required>&lt;/textarea>
    &lt;button type="submit">Send message&lt;/button>
&lt;/form>`,
				status: `&lt;form method="post" action="/data/statuses?redirect=/">
    &lt;textarea name="status" placeholder="What's happening?" required>&lt;/textarea>
    &lt;label for="photo">Attach a photo:&lt;/label>
    &lt;input type="file" name="photo" id="photo" accept="image/png, image/jpeg" />
    &lt;button type="submit">Post&lt;/button>
&lt;/form>`,
				login: `&lt;form method="post" action="/api/login?redirect=/my-account">
    &lt;input type="email" name="email" placeholder="Your email" />
    &lt;input type="password" name="password" placeholder="Your password" />
    &lt;button type="submit">Login&lt;/button>
&lt;/form>`,
				todo: `{{ set todos as GET /data/todos/_creator/:user.id }}
{{ foreach todos as todo }}
    &lt;h4>{{ todo.description }}&lt;/h4>
    &lt;p>Due {{ todo.due }}&lt;/p>
{{ endforeach }}

&lt;form method="post" action="/data/todos?redirect=/">
    &lt;textarea name="description" placeholder="New todo" required>&lt;/textarea>
    &lt;input type="date" name="due" placeholder="Due date" />
    &lt;button type="submit">Save todo&lt;/button>
&lt;/form>`,
				search: `&lt;form method="get" action="/search">
    &lt;input type="text" name="search_term" placeholder="Search posts" />
    &lt;button type="submit">Search&lt;/button>
&lt;/form>

{{ set results as GET /data/posts/*/:search_term?like=true }}
{{ foreach results as result }}
    &lt;h4>{{ result.title }}&lt;/h4>
    &lt;p>{{ result.description }}&lt;/p>
{{ endforeach }}`
			}
		};
	},

	mounted() {
		this.$smoothReflow({
			el: this.$refs.container
		});
		this.$smoothReflow({
			el: this.$refs.title,
			property: 'width'
		});
	}
};

</script>

<style lang="stylus">

$background = #f2f2f2;

#usecases {
	margin: 4rem 0 2rem;
	position: relative;

	#back-button {
		position: absolute;
	}

	header h2 {
		display: inline-block;
		overflow: hidden;
		white-space: nowrap;
	}

	#usecases-container {
		background: $background;
		border-radius: 16px;
		padding: 0.5rem;
		overflow: hidden;
		
		& > main {
			position: relative;
		}

		button {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			font-family: inherit;
			border: 0;
			color: inherit;
			background: white;
			border-radius: 8px;
			padding: 1.5rem 1rem;
			text-align: center;
			width: 100%;
			min-height: 4rem;
			outline: none;
			box-shadow: 0 0 0 rgba(0,0,0,0);
			transition: box-shadow 0.3s ease-in-out;
			cursor: pointer;
			font-size: 1.1rem;

			&:hover {
				box-shadow: 0 5px 18px 0 rgba(0,0,0,.18);
			}

			.feature-icon {
				background: none;
				box-shadow: 0 0 0 3px #4dcf89;
				color: #5c6b61;
			}

			p {
				margin: 0 !important;
			}
		}

		.columns {
			padding: 1.5rem;
		}

		.column.is-two-thirds {
			background: white;
			border-radius: 8px;
			padding: 1rem;

			ol {
				margin-bottom: 2.5rem;
			}
		}
	}
}

.is-faded {
	position: relative;
}

.is-faded:after {
	content: " ";
	display: block;
	height: 50%;
	position: absolute;
	left: -2em;
	right: 0;
	bottom: 0;
	z-index: 2;
	background: linear-gradient(to bottom, rgba($background,0), rgba($background,1));
}

@keyframes fade {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

.animated-reveal {
	opacity: 0;
	animation: fade 0.8s forwards ease-out;
}


/* Vue transitions */

.fade-enter-active, .fade-leave-active {
	transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
	opacity: 0;
}

.fade-slide-enter-active, .fade-slide-leave-active {
	transition: opacity .5s, transform .5s ease-in-out;
}
.fade-slide-enter, .fade-slide-leave-to {
	opacity: 0;
}
.fade-slide-enter {
	transform: translateY(100%);
}
.fade-slide-leave-to {
	transform: translateY(-100%);
}
.fade-slide-enter-active {
	transition-delay: 0.25s;
}
.fade-slide-leave-active {
	position: absolute;
	width: 100%;
}

</style>