<template lang="pug">
	.container
	.columns
	.column.is-5.is-offset-4
	.notification.is-danger
	slot(name="body") Algo anduvo mal
</template>

<style lang="css" scoped>
.notification {
	margin: 10px;
}	
</style>