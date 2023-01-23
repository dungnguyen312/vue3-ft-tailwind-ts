<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
import Table from './components/Table.vue';
const header = [
	{
		id: 'name',
		label: 'Name',
	},
	{
		id: 'title',
		label: 'Title',
	},
	{
		id: 'email',
		label: 'Email',
	},
	{
		id: 'role',
		label: 'Role',
	},
];
const people = [
	{
		name: 'Lindsay Walton',
		title: 'Front-end Developer',
		email: 'lindsay.walton@example.com',
		role: 'Member',
	},
	{
		name: 'Lindsay Walton',
		title: 'Front-end Developer',
		email: 'lindsay.walton@example.com',
		role: 'Member',
	},
	{
		name: 'Lindsay Walton',
		title: 'Front-end Developer',
		email: 'lindsay.walton@example.com',
		role: 'Member',
	},
	{
		name: 'Lindsay Walton',
		title: 'Front-end Developer',
		email: 'lindsay.walton@example.com',
		role: 'Member',
	},
];
</script>

<template>
	<div class="bg-pink-900 flex fill-slate-50">
		<a
			href="https://vitejs.dev"
			target="_blank">
			<img
				src="/vite.svg"
				class="logo"
				alt="Vite logo" />
		</a>
		<a
			href="https://vuejs.org/"
			target="_blank">
			<img
				src="./assets/vue.svg"
				class="logo vue"
				alt="Vue logo" />
		</a>
	</div>

	<Table
		heading="Books"
		subtitle="Something we don't miss "
		:rows="people"
		:columns="header" />
</template>

<style scoped>
.logo {
	height: 6em;
	padding: 1.5em;
	will-change: filter;
}
.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
