const eventBus = {}

eventBus.install = function ( ) {
	vue.prototype.$bus = new Vue( )
}

export default eventBus;