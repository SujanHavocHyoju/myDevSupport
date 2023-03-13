<template>
    <section>
        <main>
            <base-container>
                <base-card>
                    <base-button mode="outline" style="float: left;">Refresh</base-button>
                    <base-button link to="/register" style="float: right;">Register as a Dev Support</base-button>
                    <br><br>
                    <h3>Find a Support</h3>
                    <base-search @search="updateSearch" :search-term="enteredSearchTerm"></base-search>
                    <div>
                        <base-button mode="smlBtn" @click="sort('asc')" :class="{ selected: sorting === 'asc' }">Sort Ascending</base-button>
                        <base-button mode="smlBtn" @click="sort('desc')" :class="{ selected: sorting === 'desc' }">Sort Descending</base-button>
                    </div>
                    <ul v-if="hasSupports">
                        <support-item v-for="support in displayedSupports" :key="support.id" :support="support"
                            @get-support="selectSupport">
                        </support-item>
                    </ul>
                </base-card>
            </base-container>
            <base-container>
                <base-card>
                    <SupportItemDetails :support="selectedSupport"></SupportItemDetails>
                </base-card>
            </base-container>
        </main>
    </section>
</template>
<script>
import SupportItem from '@/components/supports/SupportItem'
import SupportItemDetails from '@/components/supports/SupportItemDetails'

export default {
    data() {
        return {
            selectedSupport: null,
            enteredSearchTerm: '',
            activeSearchTerm: '',
            sorting: null,
        }
    },
    components: {
        SupportItem,
        SupportItemDetails
    },
    computed: {
        filteredSupports() {
            return this.$store.getters['supports/supports']
        },
        hasSupports() {
            return this.$store.getters['supports/hasSupports']
        },
        availableSupports() {
            let supports = [];
            if (this.activeSearchTerm) {
                supports = this.filteredSupports.filter((supp) =>
                    supp.firstName.includes(this.activeSearchTerm)
                );
            } else if (this.filteredSupports) {
                supports = this.filteredSupports;
            }
            return supports;
        },
        displayedSupports() {
            if (!this.sorting) {
                return this.availableSupports;
            }
            return this.availableSupports.slice().sort((u1, u2) => {
                if (this.sorting === 'asc' && u1.fullName > u2.fullName) {
                    return 1;
                } else if (this.sorting === 'asc') {
                    return -1;
                } else if (this.sorting === 'desc' && u1.fullName > u2.fullName) {
                    return -1;
                } else {
                    return 1;
                }
            });
        },
    },
    methods: {
        selectSupport(sid) {
            this.selectedSupport = this.filteredSupports.find((sup) => sup.id === sid);
        },
        updateSearch(val) {
            this.enteredSearchTerm = val;
        },
        sort(mode) {
            this.sorting = mode;
        },
    },
    watch: {
        enteredSearchTerm(val) {
            setTimeout(() => {
                if (val === this.enteredSearchTerm) {
                    this.activeSearchTerm = val;
                }
            }, 300);
        }
    },
}
</script>
<style scoped>
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

main {
    display: flex;
    justify-content: space-around;
}
</style>