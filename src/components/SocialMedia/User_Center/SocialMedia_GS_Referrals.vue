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
                        <p class="sub-title referrals_change_title">{{subtitle}}
                            <button class="page-button" :class="{'disable': (b_current + 7) >= size}" @click="nextPage"><i class="fa fa-chevron-right"></i></button>
                            <button class="page-button" :class="{'disable': !b_current}" @click="prevPage"><i class="fa fa-chevron-left"></i></button>
                        </p>
                        <p class="gs_referral_data" v-for="(business_item, index) in business.slice(b_current, b_current+7)" :key="index" @click="showReferral">
                            <img :src="`${business_item.logo_img}`">
                            <span>{{business_item.name}}</span>
                            <span>{{business_item.number}}</span>
                        </p>
                    </div>
                    <div v-else>
                        <p class="sub-title referrals_change_title">{{subtitle}}
                            <button class="page-button" :class="{'disable': (g_current + 7) >= size}" @click="nextPage"><i class="fa fa-chevron-right"></i></button>
                            <button class="page-button" :class="{'disable': !g_current}" @click="prevPage"><i class="fa fa-chevron-left"></i></button>
                        </p>
                        <div class="gs_referral_inside">
                            <button class="agency_btn" :class="{'disable_into': isMarketers != true}" @click="showMarketers">Marketers</button>
                            <button class="agency_btn" :class="{'disable_into': isMarketers == true}" @click="showAgencies">Agencies</button>
                        </div>
                        <div v-if="isMarketers == true">
                            <p class="gs_referral_data gs_referral_gold" v-for="(marketer_item, index) in marketers.slice(m_current, m_current+7)" :key="index" @click="showReferral">
                                <img :src="`${marketer_item.logo_img}`">
                                <span>{{marketer_item.name}}</span>
                                <span>{{marketer_item.number}}</span>
                            </p>
                        </div>
                        <div v-else>
                            <p class="gs_referral_data gs_referral_gold" v-for="(goldstriker_item, index) in goldstriker.slice(g_current, g_current+7)" :key="index" @click="showReferral">
                                <img :src="`${goldstriker_item.logo_img}`">
                                <span>{{goldstriker_item.name}}</span>
                                <span>{{goldstriker_item.number}}</span>
                            </p>
                        </div>
                    </div>
                </div>
        </div>
        <Referral 
            v-show="f_show_referral"
            @view-backdrop="closeViewProfile"
        >
        </Referral>
    </div>
</template>

<script>
    import Referral from "../../../modal/referral.vue";

    export default {
        name: 'GS_Referrals',
        components: {
            Referral
        },
        data () {
            return { 
                size: 0,
                b_current: 0,
                g_current: 0,
                m_current: 0,
                pagination: 0,
                isBusiness: true,
                isMarketers: true,
                subtitle: "",
                f_show_referral: false,
                business: [
                    {
                        logo_img: "profile/golden.png",
                        name: "Goldenlinkplus",
                        number: "+1626-684-8151",
                    },
                    {
                        logo_img: "profile/microsoft.png",
                        name: "Goldenlinkplus",
                        number: "+1626-684-8151",
                    },
                    {
                        logo_img: "profile/netflix.png",
                        name: "Goldenlinkplus",
                        number: "+1626-684-8151",
                    },
                    {
                        logo_img: "profile/oracle.png",
                        name: "Goldenlinkplus",
                        number: "+1626-684-8151",
                    },
                    {
                        logo_img: "profile/netflix.png",
                        name: "Goldenlinkplus",
                        number: "+1626-684-8151",
                    },
                    {
                        logo_img: "profile/oracle.png",
                        name: "Goldenlinkplus",
                        number: "+1626-684-8151",
                    },
                    {
                        logo_img: "profile/netflix.png",
                        name: "Goldenlinkplus",
                        number: "+1626-684-8151",
                    },
                    {
                        logo_img: "profile/oracle.png",
                        name: "Goldenlinkplus",
                        number: "+1626-684-8151",
                    },
                    {
                        logo_img: "profile/netflix.png",
                        name: "Goldenlinkplus",
                        number: "+1626-684-8151",
                    },
                    {
                        logo_img: "profile/golden.png",
                        name: "Goldenlinkplus",
                        number: "+1626-684-8151",
                    },
                    {
                        logo_img: "profile/microsoft.png",
                        name: "Goldenlinkplus",
                        number: "+1626-684-8151",
                    },
                ],
                goldstriker : [
                    {
                        logo_img: "Geoffrey Mott.png",
                        name: "Kathryn Murphy",
                        number: "+1626-684-8151",
                    },
                    {
                        logo_img: "Alex Smith.png",
                        name: "Ronald Richards",
                        number: "+1626-684-8151",
                    },
                    {
                        logo_img: "Lily.png",
                        name: "Laura Cooper",
                        number: "+1626-684-8151",
                    },
                    {
                        logo_img: "Judith.png",
                        name: "Robert Fox",
                        number: "+1626-684-8151",
                    },
                    {
                        logo_img: "Kathry.png",
                        name: "Esther Howard",
                        number: "+1626-684-8151",
                    },
                    {
                        logo_img: "Jean_Smith.png",
                        name: "Annette Black",
                        number: "+1626-684-8151",
                    },
                    {
                        logo_img: "Irma.png",
                        name: "Darrell",
                        number: "+1626-684-8151",
                    },
                    {
                        logo_img: "Irma.png",
                        name: "Darrell",
                        number: "+1626-684-8151",
                    },
                    {
                        logo_img: "Irma.png",
                        name: "Darrell",
                        number: "+1626-684-8151",
                    },
                    {
                        logo_img: "Irma.png",
                        name: "Darrell",
                        number: "+1626-684-8151",
                    },
                ],
                marketers : [
                    {
                        logo_img: "profile/netflix.png",
                        name: "Goldenlinkplus",
                        number: "+1626-684-8151",
                    },
                    {
                        logo_img: "profile/oracle.png",
                        name: "Goldenlinkplus",
                        number: "+1626-684-8151",
                    },
                    {
                        logo_img: "profile/netflix.png",
                        name: "Goldenlinkplus",
                        number: "+1626-684-8151",
                    },
                    {
                        logo_img: "profile/golden.png",
                        name: "Goldenlinkplus",
                        number: "+1626-684-8151",
                    },
                    {
                        logo_img: "profile/microsoft.png",
                        name: "Goldenlinkplus",
                        number: "+1626-684-8151",
                    },
                ]
            }
        },
        methods: {
            showReferral() {
                this.f_show_referral = true;
            },
            showBusiness() {
                this.isBusiness = true;
                this.subtitle = "BUSINESSES";
                this.size = this.business.length;
            },
            showGoldStriker() {
                this.isBusiness = false;
                this.subtitle = "GOLD STRIKERS";
                if (this.isMarketers) {
                    this.size = this.marketers.length;
                } else {
                    this.size = this.goldstriker.length;
                }
            },
            showMarketers() {
                 this.isMarketers = true;
                 this.size = this.marketers.length;
            },
            showAgencies() {
                 this.isMarketers = false;
                 this.size = this.goldstriker.length;
             },
            nextPage() {
                if (this.isBusiness) {
                    if ((this.b_current + 7) < (this.size)) {
                        this.b_current += 7;
                    }
                } else if (this.isMarketers) {
                    if ((this.m_current + 7) < (this.size)) {
                        this.m_current += 7;
                    }
                } else {
                    if ((this.g_current + 7) < this.size) {
                        this.g_current += 7;
                    }
                }
            },
            prevPage() {
                if (this.isBusiness) {
                    if (this.b_current > 0) {
                        this.b_current -= 7;
                    }
                } else if (this.g_current) {
                    if (this.g_current > 0) {
                        this.g_current -= 7;
                    }
                } else {
                    if (this.g_current > 0) {
                        this.g_current -= 7;
                    }
                }
            },
            closeViewProfile() {
                this.f_show_referral = false;
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
    .referrals_data {
        background: #F4F9FE;
        border: 0;
        height: 40px;
        border-radius: 8px;
        letter-spacing: -0.02em;
        padding: 8px 20px;
    }
    .gs_referral_data {
        display: flex;
        margin: auto;
        margin: auto !important;
        padding: 15px 0;
    }
    .gs_referral_data:nth-child(even) {
        background: #E6F7FF;
    }
    .gs_referral_gold:nth-child(odd) {
        background: #E6F7FF !important;
    }
    .gs_referral_gold:nth-child(even) {
        background: white !important;
    }
    .gs_referral_data span {
        margin: auto;
    }
    .gs_referral_data img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin: auto;
    }
    .agency_btn {
        background: #13C8FF;
        color: white;
        margin: auto;
        width: 50%;
    }
    .marketer_btn {
    }
    .disable_into {
        background: white !important;
        color: black !important;
    }
    .gs_referral_inside {
        width: 100%;
        display: flex;
        margin: 10px auto;
    }
</style>
