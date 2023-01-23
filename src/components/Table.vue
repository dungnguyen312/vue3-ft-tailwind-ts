<script lang="ts" setup>
import { PropType, computed, reactive } from 'vue';
import { ChevronDownIcon } from '@heroicons/vue/20/solid';
import { useThemeStore } from '../stores/useThemesStore';

interface Column {
	id: string;
	label: string;
	action?: Function;
}

interface Row {
	id: string;
	[key: string]: string | Number;
}

const props = defineProps({
	heading: String,
	subtitle: String,
	columns: Array as PropType<Array<Column>>,
	rows: Array as PropType<Array<any>>,
});

const emit = defineEmits<{
	(e: 'update', value: string): void;
}>();
const themeStore = useThemeStore();
const ahjhj = themeStore.currentTheme;
</script>

<template>
	<div class="px-4 sm:px-6 lg:px-8">
		<div class="sm:flex sm:items-center">
			<div class="sm:flex-auto">
				<h1 class="text-xl font-semibold text-gray-900">{{ heading }}</h1>
				<p class="mt-2 text-sm text-gray-700">
					{{ subtitle }}
				</p>
			</div>
			<div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
				<button
					type="button"
					class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">
					Add user
				</button>
			</div>
		</div>
		<div class="mt-8 flex flex-col">
			<div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
				<div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
					<div
						class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
						<table class="min-w-full divide-y divide-gray-300">
							<thead class="bg-gray-50">
								<tr>
									<th
										v-for="column in columns"
										scope="col"
										class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
										<a
											href="#"
											class="group inline-flex">
											{{ column.label }}
											<span
												class="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
												<ChevronDownIcon
													class="h-5 w-5"
													aria-hidden="true" />
											</span>
										</a>
									</th>
									<th
										scope="col"
										class="relative py-3.5 pl-3 pr-4 sm:pr-6">
										<span class="sr-only">Edit</span>
									</th>
								</tr>
							</thead>
							<tbody class="divide-y divide-gray-200 bg-white">
								<tr
									v-for="(row, key, index) in rows"
									:key="`${key}`">
									<td
										v-for="(column, key, index) in columns"
										:key="`${index}-${column.id}`"
										class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
										{{ row[column.id] }}
									</td>
									<td
										class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
										<a
											href="#"
											class="text-indigo-600 hover:text-indigo-900"
											>Edit<span class="sr-only"></span
										></a>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
