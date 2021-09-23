<template>
    <div class="container">
        <div class="user_center_area">
                <p class="switch_title">Business Information Settings
                    <router-link to="/socialmedia/bs_center/socialmedia_bs_user_center">
                        <span class="profile_done">DONE</span>
                    </router-link>
                </p>
                <div class="user_center_profile profile_logo">
                    <img src="profile/profile_logo.png">
                    <div>
                        <p class="update_profile">Change Photo</p>
                    </div>
                </div>
                <p class="update_profile_content">Business Name</p>
                <div class="form-group profile_input">
                    <input
                      type="text"
                      class="form-control"
                      id="cname"
                      aria-describedby="comname"
                      placeholder=""
                      value="Goldenlinkplus"
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
                <p class="update_profile_content">Business Type</p>
                <div class="form-group profile_input"  @click="showBusiness">
                    <select class="form-control" id="year_established">
                        <option>Social Media Marketing Services</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <p class="update_profile_content">Industry</p>
                <div class="form-group profile_input"  @click="showIndustry">
                    <select class="form-control" id="year_established">
                        <option>Year Established</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <p class="update_profile_content">External Business Role</p>
                <div class="form-group profile_input">
                    <select class="form-control" id="year_established">
                        <option>Ad Exchange/Ad Network</option>
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
                <p class="update_profile_content">Keywords</p>
                <div class="form-group profile_input">
                    <textarea
                      class="form-control"
                      id="keywords"
                      rows="5"
                      placeholder="social media, crypto mining, marketing, b2b"
                      value=""
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
        </div>
    </div>
</template>

<script>
    import Company from "../../../modal/company.vue";
    import Business from "../../../modal/business.vue";
    import Industry from "../../../modal/industry.vue";
    import IndustrySystem from "../../../modal/industry_system.vue";
    import IndustryService from "../../../modal/industry_service.vue";

    export default {
        name: 'BS_Update_Profile',
        components: {
            Company,
            Business,
            Industry,
            IndustrySystem,
            IndustryService
        },  
        data () {
            return {
                f_show_company: false,
                f_show_business: false,
                f_show_industry: false,
                f_industry_system: false,
                f_industry_service: false
            }
        },
        methods: {
            closeModal() {
                this.f_show_company = false;
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
            industrySystem() {
                this.f_industry_system = true;
            },
            industryService() {
                this.f_industry_service = true;
            },
            closeViewProfile() {
                this.f_show_company = false;
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
    .profile_done {
        color: #13C8FF;
        float: right;
    }
    .profile_input {
        width: 85%;
    }
    .profile_input input{
        background: #F4F9FE;
        /*height: 40px;*/
        border: 0;
        border-radius: 8px;
        letter-spacing: -0.02em;
        padding: 10px 20px;
    }
    .profile_input select {
        background: #f4f9fe;
        /*height: 40px;*/
        border: 0;
        border-radius: 8px;
        padding: 0 20px;
        appearance: none;
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAGCAYAAAAVMmT4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACuSURBVHgBXY+xDcIwEEXvEtHTI0joXFIiFIHZwGzgNehgAzYAJsCUVDhBQJk2JQgGcA2SD1sCYfm6f//9fzosxrMVAUxaCU21Vgai4Vy03xaPAKQTAnIsDF4W6yEXeQTmDqy973X6uDeHbsYAAQUSik6f7Z+3xnxB1wi5K1xcKjVPfcIFyjDQy5ixhJsAXHoOw7MjLiRaXP83JM+V2v4Uxg8VXHByAUsgr6ddGXofEI1IzTtVuf8AAAAASUVORK5CYII=);
        background-repeat: no-repeat;
        background-position: calc(100% - 10px) 50%;
    }
    .profile_input textarea {
        background: #F4F9FE;
        padding: 10px 20px;
        height: 180px;
        border: 0;
        border-radius: 8px;
        resize: none;
    }
    .update_profile_content {
        margin: 10px 0 5px;
        font-size: 15px;
    }
</style>
