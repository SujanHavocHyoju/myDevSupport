<template>
    <div>
        <base-dialog :show="!!error" 
            title="An error occured!"
            @close="handleError">
            <p>{{ error }}</p>
        </base-dialog>
        <section>
            <main>
                <base-container>
                    <base-card>
                        <base-button mode="outline" @click="loadSupports(true)" style="float: left;">Refresh</base-button>
                        <base-button link to="/register" v-if="isLoggedIn && !isSupport && !isLoading" style="float: right;">Register as a Dev Support</base-button>
                        <base-button link to="/auth?redirect=register" v-if="!isLoggedIn">Login to Register as Coach</base-button>
                        <br><br>
                        <h3>Find a Support</h3>
                        <div>
                            <span>
                                <base-search @search="updateSearch" :search-term="enteredSearchTerm"></base-search>
                            </span>
                            <span>
                                <base-button mode="smlBtn" @click="sort('asc')" :class="{ selected: sorting === 'asc' }" title="Sort Ascending">Sort A &#x1F805;</base-button>
                                <base-button mode="smlBtn" @click="sort('desc')" :class="{ selected: sorting === 'desc' }" title="Sort Descending">Sort Z &#x1F807;</base-button>
                                <base-button mode="smlBtn" @click="toggleFilters()" title="Select Filters" :class="{ activated: showFilters}" >{{ showFilters? "Filters &#9746;" : "Filters &#9745;"}} </base-button>
                                <div id="filterDiv" v-show="showFilters">
                                    <support-filter @change-filter="applyFilters"></support-filter>
                                </div>
                            </span>
                        </div>
                        <hr>
                        <div v-if="isLoading">
                            <base-spinner></base-spinner>
                        </div>
                        <ul v-else-if="hasSupports">
                            <support-item v-for="support in displayedSupports" :key="support.id" :support="support"
                                @get-support="selectSupport">
                            </support-item>
                        </ul>
                        <p v-else>No results found. Try with a different search term or filters.</p>
                    </base-card>
                </base-container>
                <base-container>
                    <base-card>
                        <SupportItemDetails :support="selectedSupport"></SupportItemDetails>
                    </base-card>
                </base-container>
            </main>
        </section>
    </div>
</template>
<script>
import SupportItem from '@/components/supports/SupportItem'
import SupportItemDetails from '@/components/supports/SupportItemDetails'
import SupportFilter from '@/components/supports/SupportFilter'

export default {
    data() {
        return {
            isLoading: false,
            error: null,
            selectedSupport: null,
            enteredSearchTerm: '',
            activeSearchTerm: '',
            sorting: null,
            showFilters: false,
            activeFilters: {
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
        }
    },
    components: {
        SupportItem,
        SupportItemDetails,
        SupportFilter
    },
    created(){
        this.loadSupports();
    },
    computed: {
        isLoggedIn(){
            return this.$store.getters.isAuthenticated; 
        },
        filteredSupports() {
            // return this.$store.getters['supports/supports']
            const supports = this.$store.getters['supports/supports'];
            return this.filterAreas(supports);
        },
        hasSupports() {
            //return this.$store.getters['supports/hasSupports']
            return !this.isLoading && this.$store.getters['supports/hasSupports'];
        },
        availableSupports() {
            let supports = [];
            if (this.activeSearchTerm) {
                supports = this.filteredSupports.filter((supp) =>{
                    return supp.fullName.toLowerCase().includes(this.activeSearchTerm.toLowerCase());
                }
                //supp.fullName.includes(this.activeSearchTerm)
                );
            } else if (this.filteredSupports) {
                supports = this.filteredSupports;
            }
            return supports;
        },
        displayedSupports() {
            if (!this.sorting) {
                console.log(this.availableSupports.slice());
                return this.availableSupports.slice();
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
        isSupport(){
            return this.$store.getters['supports/isSupport'];
        }
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
        toggleFilters(){
            this.showFilters = !this.showFilters;
        },
        applyFilters(updatedFilters) {
            this.activeFilters = updatedFilters;
        },
        filterAreas(supports){
            return supports.filter(support => {
                if(this.activeFilters.frontend && support.areas.includes('frontend')){
                    return true;
                }
                if(this.activeFilters.backend && support.areas.includes('backend')){
                    return true;
                }
                if(this.activeFilters.database && support.areas.includes('database')){
                    return true;
                }
                if(this.activeFilters.devops && support.areas.includes('devops')){
                    return true;
                }
                if(this.activeFilters.networking && support.areas.includes('networking')){
                    return true;
                }
                if(this.activeFilters.uiux && support.areas.includes('uiux')){
                    return true;
                }
                if(this.activeFilters.cloud && support.areas.includes('cloud')){
                    return true;
                }
                if(this.activeFilters.career && support.areas.includes('career')){
                    return true;
                }
                if(this.activeFilters.other && support.areas.includes('other')){
                    return true;
                }
                return false;
            });
        },
        async loadSupports(refresh = false){
            this.isLoading = true;
            try {
                await this.$store.dispatch('supports/loadSupports', {forceRefresh: refresh});
            } catch (error) {
                this.error = error.message || 'Something went wrong!';
            }
            this.isLoading = false;
        },
        handleError(){
            this.error = null;
        }
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

#filterDiv {
    text-align: left;
    border: 1px solid;
    border-radius: 5px;
    margin: 6px;
    padding: 6px;
}

hr {
    color: #f8f8f8;
}

.card {
    height: 32rem !important;
}
</style>