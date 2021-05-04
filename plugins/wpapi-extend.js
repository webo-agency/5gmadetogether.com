export default ({ app }) => {
    app.$wp.technology = app.$wp.registerRoute( 'wp/v2', '/technology');
    app.$wp.technology = app.$wp.registerRoute( 'wp/v2', '/technology/(?P<id>[\\d]+)' );
}
