<template>
    <div class="container">
        <div class="user_center_area">
                <p class="switch_title">My Referrals
                    <router-link to="/socialmedia/user_center/socialmedia_user_center">
                        <span class="profile_done">DONE</span>
                    </router-link>
                </p>
                <div class="content_modal gs_marketing_modal">
                    <div class="gs_referral">
                        <button class="btn business_btn gs_referral_btn" :class="{'disable': isBusiness != true}" @click="showBusiness">Business {{business.length}}</button>
                        <button class="btn striker_btn gs_referral_btn" :class="{'disable': isBusiness == true}" @click="showGoldStriker">Gold Striker {{goldstriker.length}}</button>
                    </div>
                    <div v-if="isBusiness == true">
                        <p class="sub-title referrals_change_title">{{subtitle + ' ' + (b_current + 1)}}
                            <button class="page-button" :class="{'disable': b_current == (size-1)}" @click="nextPage"><i class="fa fa-chevron-right"></i></button>
                            <button class="page-button" :class="{'disable': !b_current}" @click="prevPage"><i class="fa fa-chevron-left"></i></button>
                        </p>
                        <p class="update_profile_content">Company</p>
                        <div class="form-group profile_input profile_role_input">
                            <input
                              type="text"
                              class="form-control"
                              id="cname"
                              aria-describedby="comname"
                              placeholder=""
                              value="Goldenlinkplus"
                              v-model="business[b_current].company"
                            />
                        </div>
                        <p class="update_profile_content">Contact Name</p>
                        <div class="form-group profile_input profile_role_input">
                            <input
                              type="text"
                              class="form-control"
                              id="cname"
                              aria-describedby="comname"
                              placeholder=""
                              value="Alice Du"
                              v-model="business[b_current].contactname"
                            />
                        </div>
                        <p class="update_profile_content">Telephone </p>
                        <div class="form-group profile_input profile_role_input">
                            <input
                              type="text"
                              class="form-control"
                              id="cname"
                              aria-describedby="comname"
                              placeholder=""
                              value="+1626-684-8151"
                              v-model="business[b_current].telephone"
                            />
                        </div>
                        <p class="update_profile_content">Email</p>
                        <div class="form-group profile_input profile_role_input">
                            <input
                              type="text"
                              class="form-control"
                              id="cname"
                              aria-describedby="comname"
                              placeholder=""
                              value="contact@goldenlinkplus.com"
                              v-model="business[b_current].email"
                            />
                        </div>
                        <p class="update_profile_content">Skype</p>
                        <div class="form-group profile_input profile_role_input">
                            <input
                              type="text"
                              class="form-control"
                              id="cname"
                              aria-describedby="comname"
                              placeholder=""
                              value="alicedu"
                              v-model="business[b_current].skype"
                            />
                        </div>
                    </div>
                    <div v-else>
                        <p class="sub-title referrals_change_title">{{subtitle + ' ' + (g_current + 1)}}
                            <button class="page-button" :class="{'disable': g_current == (size-1)}" @click="nextPage"><i class="fa fa-chevron-right"></i></button>
                            <button class="page-button" :class="{'disable': !g_current}" @click="prevPage"><i class="fa fa-chevron-left"></i></button>
                        </p>
                        <p class="update_profile_content">Company</p>
                        <div class="form-group profile_input profile_role_input">
                            <input
                              type="text"
                              class="form-control"
                              id="cname"
                              aria-describedby="comname"
                              placeholder=""
                              value="Goldenlinkplus"
                              v-model="goldstriker[g_current].company"
                            />
                        </div>
                        <p class="update_profile_content">Contact Name</p>
                        <div class="form-group profile_input profile_role_input">
                            <input
                              type="text"
                              class="form-control"
                              id="cname"
                              aria-describedby="comname"
                              placeholder=""
                              value="Alice Du"
                              v-model="goldstriker[g_current].contactname"
                            />
                        </div>
                        <p class="update_profile_content">Telephone </p>
                        <div class="form-group profile_input profile_role_input">
                            <input
                              type="text"
                              class="form-control"
                              id="cname"
                              aria-describedby="comname"
                              placeholder=""
                              value="+1626-684-8151"
                              v-model="goldstriker[g_current].telephone"
                            />
                        </div>
                        <p class="update_profile_content">Email</p>
                        <div class="form-group profile_input profile_role_input">
                            <input
                              type="text"
                              class="form-control"
                              id="cname"
                              aria-describedby="comname"
                              placeholder=""
                              value="contact@goldenlinkplus.com"
                              v-model="goldstriker[g_current].email"
                            />
                        </div>
                        <p class="update_profile_content">Skype</p>
                        <div class="form-group profile_input profile_role_input">
                            <input
                              type="text"
                              class="form-control"
                              id="cname"
                              aria-describedby="comname"
                              placeholder=""
                              value="alicedu"
                              v-model="goldstriker[g_current].skype"
                            />
                        </div>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'GS_Referrals',
        components: {
        },
        data () {
            return { 
                size: 0,
                b_current: 0,
                g_current: 0,
                isBusiness: true,
                subtitle: "", 
                business: [
                    {
                        company: "GlodenlinkPlus",
                        contactname: "Alice Du",
                        telephone: "+1626-684-8151",
                        email: "",
                        skype: "alicedu"
                    },
                    {
                        company: "GlodenlinkPlus123",
                        contactname: "Alice Du",
                        telephone: "+1626-684-8151",
                        email: "",
                        skype: "alicedu"
                    },
                    {
                        company: "GlodenlinkPlus3452345",
                        contactname: "Alice Du",
                        telephone: "+1626-684-8151",
                        email: "",
                        skype: "alicedu"
                    },
                    {
                        company: "GlodenlinkPlus679768967",
                        contactname: "Alice Du",
                        telephone: "+1626-684-8151",
                        email: "",
                        skype: "alicedu"
                    }
                ],
                goldstriker : [
                    {
                        company: "GlodenlinkPLus GOLD000000000",
                        contactname: "Alice Hansen",
                        telephone: "+1626-6848151",
                        email: "",
                        skype: "alicehansen"
                    },
                    {
                        company: "Glodenstriker 111111111",
                        contactname: "Gold Striker",
                        telephone: "+1626-6848151",
                        email: "",
                        skype: "gold"
                    }
                ]
            }
        },
        methods: {
            showBusiness() {
                this.isBusiness = true;
                this.subtitle = "BUSINESSES";
                this.size = this.business.length;
            },
            showGoldStriker() {
                this.isBusiness = false;
                this.subtitle = "GOLD STRIKERS";
                this.size = this.goldstriker.length;
            },
            nextPage() {
                if (this.isBusiness) {
                    if (this.b_current < (this.size - 1)) {
                        this.b_current++;
                    }
                } else {
                    if (this.g_current < (this.size - 1)) {
                        this.g_current++;
                    }
                }
            },
            prevPage() {
                if (this.isBusiness) {
                    if (this.b_current > 0) {
                        this.b_current--;
                    }
                } else {
                    if (this.g_current > 0) {
                        this.g_current--;
                    }
                }
            },
        },
        mounted() {
            this.size = this.business.length;
            this.subtitle = "BUSINESSES";
        }
    }
</script>
<style>
    .gs_referral_btn {
        width: calc(50% - 5px) !important;
        text-align: center !important;
        margin: 0 !important;
    }
    .gs_referral_btn .business_btn {
        margin-right: 5px !important;
    }
    .gs_referral_btn .striker_btn {
        margin-left: 5px !important;
    }
    .gs_marketing_modal .disable {
        background: white !important;
        color: black !important;
    }
    .gs_referral {
        width: 100%;
        display: flex;
        margin: 10px auto 15px;
    }
    .referrals_change_title {
        margin-left: 0 !important;
    }
    .gs_marketing_modal .page-button.disable > svg {
        color: grey !important;
    }
</style>
