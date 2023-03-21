<template>
    <section>
        <span class="filter-option">
            <input type="checkbox" id="frontend" checked @change="setFilter" />
            <label for="frontend">Frontend</label>
        </span>
        <span class="filter-option">
            <input type="checkbox" id="backend" checked @change="setFilter" />
            <label for="backend">Backend</label>
        </span>
        <span class="filter-option">
            <input type="checkbox" id="database" checked @change="setFilter" />
            <label for="database">Database</label>
        </span>
        <span class="filter-option">
            <input type="checkbox" id="devops" checked @change="setFilter" />
            <label for="devops">Devops</label>
        </span>
        <span class="filter-option">
            <input type="checkbox" id="networking" checked @change="setFilter" />
            <label for="networking">Networking</label>
        </span>
        <span class="filter-option">
            <input type="checkbox" id="uiux" checked @change="setFilter" />
            <label for="uiux">UI/UX</label>
        </span>
        <span class="filter-option">
            <input type="checkbox" id="cloud" checked @change="setFilter" />
            <label for="cloud">Cloud</label>
        </span>
        <span class="filter-option">
            <input type="checkbox" id="career" checked @change="setFilter" />
            <label for="career">Career</label>
        </span>
        <span class="filter-option">
            <input type="checkbox" id="other" checked @change="setFilter" />
            <label for="other">Other</label>
        </span>
    </section>
</template>
<script>
export default {
    emits: ['change-filter'],
    data() {
        return {
            filters: {
                frontend: true,
                backend: true,
                career: true,
                database: true,
                devops: true,
                networking: true,
                uiux: true,
                cloud: true,
                other: true
            }
        };
    },
    methods: {
        setFilter(event) {
            const inputId = event.target.id;
            const isActive = event.target.checked;
            const updatedFilters = {
                ...this.filters,
                [inputId]: isActive
            };
            this.filters = updatedFilters;
            this.$emit('change-filter', updatedFilters);
        }
    },

}
</script>

<style scoped>
h2 {
    margin: 0.5rem 0;
}

.filter-option {
    margin-right: 1rem;
}

.filter-option label,
.filter-option input {
    vertical-align: middle;
}

.filter-option label {
    margin-left: 0rem;
}

.filter-option.active label {
    font-weight: bold;
}
</style>