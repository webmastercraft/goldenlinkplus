<template>
    <div class="container">
        <div class="user_center_area">
                <p class="switch_title">GS Profile
                    <router-link to="/socialmedia/user_center/socialmedia_user_center">
                        <span class="profile_done">DONE</span>
                    </router-link>
                </p>
                <div class="user_center_profile profile_logo">
                    <img src="mona.png">
                    <div>
                        <p class="update_profile">Change Photo</p>
                    </div>
                </div>
                <p class="update_profile_content">Fullname or Business Name</p>
                <div class="form-group profile_input">
                    <input
                      type="text"
                      class="form-control"
                      id="cname"
                      aria-describedby="comname"
                      placeholder=""
                      value="Ana Smith"
                    />
                </div>
                <p class="update_profile_content">Company Type</p>
                <div class="form-group profile_input"  @click="showCompany">
                    <select class="form-control" id="year_established">
                        <option>Corporation</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <p class="update_profile_content">Company Size</p>
                <div class="form-group profile_input">
                    <select class="form-control" id="year_established">
                        <option>1-49 Employees</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <p class="update_profile_content">Capital</p>
                <div class="form-group profile_input">
                    <input
                      type="text"
                      class="form-control"
                      id="cname"
                      aria-describedby="comname"
                      placeholder=""
                      value="$1,000,000"
                    />
                </div>
                <p class="update_profile_content">Business Scope</p>
                <div class="form-group profile_input">
                    <select class="form-control" id="year_established">
                        <option>Global</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <p class="update_profile_content">Website</p>
                <div class="form-group profile_input">
                    <input
                      type="text"
                      class="form-control"
                      id="cname"
                      aria-describedby="comname"
                      placeholder=""
                      value="www.goldenlinkplus.com"
                    />
                </div>
                <p class="update_profile_content">Description</p>
                <div class="form-group profile_input">
                    <textarea
                      class="form-control"
                      id="keywords"
                      rows="8"
                      placeholder="Business Description"
                    >
                    </textarea>
                </div>
                <Company 
                    v-show="f_show_company"
                    @close="closeViewProfile"
                    @view-backdrop="closeViewProfile"
                >
                </Company>
                <Business 
                    v-show="f_show_business"
                    @view-backdrop="closeViewProfile"
                >
                </Business>
                <Industry 
                    v-show="f_show_industry"
                    @view-backdrop="closeViewProfile"
                    @showIndustrySystem="industrySystem"
                >
                </Industry>
                <IndustrySystem 
                    v-show="f_industry_system"
                    @close="backIndustrySystem"
                    @view-backdrop="closeViewProfile"
                    @showIndustryService="industryService"
                >
                </IndustrySystem>
                <IndustryService
                    v-show="f_industry_service"
                    @close="backIndustryService"
                    @view-backdrop="closeViewProfile"
                >
                </IndustryService>
                <External 
                    v-show="f_show_external"
                    @close="closeViewProfile"
                    @view-backdrop="closeViewProfile"
                >
                </External>
                <Size 
                    v-show="f_show_size"
                    @close="closeViewProfile"
                    @view-backdrop="closeViewProfile"
                >
                </Size>
        </div>
    </div>
</template>

<script>
    import Company from "../../../modal/company.vue";
    import Business from "../../../modal/business.vue";
    import Industry from "../../../modal/industry.vue";
    import IndustrySystem from "../../../modal/industry_system.vue";
    import IndustryService from "../../../modal/industry_service.vue";
    import External from "../../../modal/external.vue";
    import Size from "../../../modal/size.vue";

    export default {
        name: 'GS_Update_Profile',
        components: {
            Company,
            Business,
            Industry,
            IndustrySystem,
            IndustryService,
            External,
            Size
        },  
        data () {
            return {
                f_show_company: false,
                f_show_business: false,
                f_show_industry: false,
                f_industry_system: false,
                f_industry_service: false,
                f_show_external: false,
                f_show_size: false,
            }
        },
        methods: {
            closeModal() {
                this.f_show_company = false;
                this.f_show_external = false;
                this.f_show_size = false;
                this.isModalVisible = false;
            },
            showCompany() {
                this.f_show_company = true;
            },
            showBusiness() {
                this.f_show_business = true;
            },
            showIndustry() {
                this.f_show_industry = true;
            },
            showExternal() {
                this.f_show_external = true;
            },
            showSize() {
                this.f_show_size = true;
            },
            industrySystem() {
                this.f_industry_system = true;
            },
            industryService() {
                this.f_industry_service = true;
            },
            closeViewProfile() {
                this.f_show_company = false;
                this.f_show_external = false;
                this.f_show_size = false;
                this.f_show_business = false;
                this.f_show_industry = false;
                this.f_industry_system = false;
                this.f_industry_service = false;
            },
            backIndustrySystem() {
                this.f_industry_system = false;
            },
            backIndustryService() {
                this.f_industry_service = false;
            }

        }
    }
</script>
<style>
</style>
