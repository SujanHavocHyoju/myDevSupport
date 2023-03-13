<template>
    <section>
        <base-card>
            <h2>Page not found</h2>
            <div>
                <img src="@/assets/not-found.png" alt="Not Found" id="nfImg">
            </div>
            <p>This page could not be found - may be check out all our 
                <router-link to="/supports">Dev Supports</router-link>
            </p>
        </base-card>
    </section>
</template>
<style scoped>
#nfImg {
    height: 50%; width: 50%; object-fit: contain;
}
</style>