<template>
    <nav class="navbar navbar-light bg-light">
        <ul class="navbar-nav">
            <li class="nav-item active">
                <router-link class="nav-link" to="/movie">Movie</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/tvshow">TV Show</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style lang="sass">

</style>
