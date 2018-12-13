<template>
	<div id="app">
		<!-- <nav>
			<router-link to="/">Home</router-link>
			<router-link to="/thanks">Thanks</router-link>
		</nav> -->
		<router-view />
	</div>
</template>
	
<script>
export default {};
</script>

<style lang="scss" scoped>
html,
body {
	font-family: "Open Sans", serif;
}

.hero.is-info {
	background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
		url("assets/hero3.jpg") no-repeat center center fixed;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
}

.hero .nav,
.hero.is-success .nav {
	-webkit-box-shadow: none;
	box-shadow: none;
}

.hero .subtitle {
	padding: 3rem 0;
	line-height: 1.5;
}

@import url("https://fonts.googleapis.com/css?family=Bai+Jamjuree|Prompt");

.button.white {
	border-color: white;
	padding-left: 1rem;
	padding-right: 1rem;
	padding-bottom: 1rem;
	width: 200px;
	margin: 3px;
}

.button.white:hover {
	border-color: white;
	background-color: #fac65b;
	color: white;
	padding-left: 1rem;
	padding-right: 1rem;
	padding-bottom: 1rem;
}

.background-hero {
	background-image: url("./assets/hero3.jpg");
	background-size: 100% 100%;
	width: auto;
	/* height: ; */
}

.numbered-circle {
	color: #20406f;
	border: 1px solid #214273;
	border-radius: 50%;
	width: 30px;
	height: 30px;
	text-align: center;
	vertical-align: middle;
}

.test {
	height: 150px;
	background-color: #dcf7f3;
}

input.input {
	box-shadow: none;
	border-radius: 0;
}

img.fit {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.select:not(.is-multiple):not(.is-loading)::after,
.navbar-link::after {
	border: 3px solid #fcc842;
	border-radius: 2px;
	border-right: 0;
	border-top: 0;
	content: " ";
	display: block;
	height: 0.625em;
	margin-top: -0.25em;
	pointer-events: none;
	position: absolute;
	top: 111%;
	-webkit-transform: rotate(-45deg);
	transform: rotate(-45deg);
	-webkit-transform-origin: center;
	transform-origin: center;
	width: 0.625em;
}

.footer {
	height: 180px;
	//   background-color: #333333;
	margin-top: 3rem;
	padding-bottom: 3rem;
}

.action-btn {
	border-radius: 30px;
	width: 300px;
	height: 50px;
	font-size: large;
}

.parent {
	text-align: center;
}

.center {
	margin: auto;
}

.left {
	margin: auto auto auto 0;
}

.right {
	margin: auto 0 auto auto;
}

.photo {
	background-color: #dcf7f3;
}

.desc-photo {
	/* background-color: #dcf7f3; */
	padding: 1rem;
	/* height: 270px; */
}

.desc-box {
	width: 80%;
	/* height: 150px; */
	/* background-color: pink; */
	/* transform: translateY(-60px); */
}

@media screen and (max-width: 768px) {
	.middle-photo {
		margin: 0 !important;
	}
}

tr {
	height: 5rem;
	vertical-align: middle;
}

.feature_highlight {
	//   height: 5rem;
	//   vertical-align: middle;
	background-color: #e9f6f3;
}

.feature_highlight2 {
	//   height: 5rem;
	//   vertical-align: middle;
	background-color: white;
}

.feature_div {
	padding: 0 2rem 0 2rem;
	border-radius: 10px;
}

.feature_div2 {
	padding: 0rem 2rem 0rem 2rem;
	border-radius: 10px;
}

td {
	vertical-align: middle;
}

.is-shady {
	animation: flyintoright 0.4s backwards;
	box-shadow: rgba(0, 0, 0, 0.1) 0 1px 0;
	display: inline-block;
	position: relative;
	transition: all 0.2s ease-in-out;
}

.is-shady:hover {
	box-shadow: 0 10px 16px rgba(0, 0, 0, 0.13), 0 6px 6px rgba(0, 0, 0, 0.19);
}

strong {
	color: #20406f;
	font-size: larger;
}

.downArrow {
	position: absolute;
	bottom: 10%;
	left: 50%;
}

.bounce {
	-moz-animation: bounce 3s infinite;
	-webkit-animation: bounce 3s infinite;
	animation: bounce 3s infinite;
}

@-moz-keyframes bounce {
	0%,
	20%,
	50%,
	80%,
	100% {
		-moz-transform: translateY(0);
		transform: translateY(0);
	}

	40% {
		-moz-transform: translateY(-30px);
		transform: translateY(-30px);
	}

	60% {
		-moz-transform: translateY(-15px);
		transform: translateY(-15px);
	}
}

@-webkit-keyframes bounce {
	0%,
	20%,
	50%,
	80%,
	100% {
		-webkit-transform: translateY(0);
		transform: translateY(0);
	}

	40% {
		-webkit-transform: translateY(-30px);
		transform: translateY(-30px);
	}

	60% {
		-webkit-transform: translateY(-15px);
		transform: translateY(-15px);
	}
}

@keyframes bounce {
	0%,
	20%,
	50%,
	80%,
	100% {
		-moz-transform: translateY(0);
		-ms-transform: translateY(0);
		-webkit-transform: translateY(0);
		transform: translateY(0);
	}

	40% {
		-moz-transform: translateY(-30px);
		-ms-transform: translateY(-30px);
		-webkit-transform: translateY(-30px);
		transform: translateY(-30px);
	}

	60% {
		-moz-transform: translateY(-15px);
		-ms-transform: translateY(-15px);
		-webkit-transform: translateY(-15px);
		transform: translateY(-15px);
	}
}
</style>
