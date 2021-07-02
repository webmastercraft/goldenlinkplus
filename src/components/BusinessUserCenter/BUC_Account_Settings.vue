<template>
  <div>
    <div class="container">
        <div class="phone">
          <div class="content content_modal">
            <div class="close_btn">
              <router-link to="/businessusercenter"><i class="fa fa-times-circle" aria-hidden="true"></i></router-link>
            </div>
            <div class="account-title">
              Account Settings
            </div>
            <div class="accordion">
                <div :class="{active: isActive === 1}">
                    <div class="accordion_title" @click="toggleItem(1)">
                        <h6>Contact Information</h6>
                        <div v-if="isActive === 1"><img src="img/accordion_close.png"></div>
                        <div v-else><img src="img/accordion_open.png"></div>
                    </div>
                    <div class="golden-area item-active">
                        <div v-if="isEditContactInfo === false">
                            <p class="profile-title profile-title-buc">Contact Name:<span> {{contact_infomation.name}}</span><button class="remove_btn" @click="editContactInfo()"><img src="img/edit.png"></button></p>
                            <p class="profile-title profile-title-buc">Telephone:<span> {{contact_infomation.telephone}}</span></p>
                            <p class="profile-title profile-title-buc">Channel:<span> {{contact_infomation.channel}} ({{contact_infomation.id}})</span></p>
                            <p class="profile-title profile-title-buc">Email:<span> {{contact_infomation.email}}</span></p>
                        </div>
                        <form class="contact_form" v-else>
                            <p class="profile-title profile-title-buc">Contact Name:<input type="text" class="timeline_box" name="name" :value="`${contact_infomation.name}`"></p>
                            <p class="profile-title profile-title-buc">Telephone:<input type="text" class="timeline_box" name="name" :value="`${contact_infomation.telephone}`"></p>
                            <p class="profile-title profile-title-buc">Channel:
                                <select class="timeline_box" name="name">
                                    <option value="" disabled selected>Choose Verticals</option>
                                    <option value="1">WeChat</option>
                                    <option value="2">Golden Link PLus 2</option>
                                    <option value="3">Golden Link PLus 3</option>
                                </select>
                            </p>
                            <p class="profile-title profile-title-buc">ID:<input type="text" class="timeline_box" name="name" :value="`${contact_infomation.id}`"></p>
                            <p class="profile-title profile-title-buc">Email:<input type="text" class="timeline_box" name="name" :value="`${contact_infomation.email}`"></p>
                            <input type="button" class="account_post_btn" value="UPDATE" @click="stopEditContactInfo()">
                        </form>
                    </div>
                </div>
                <div :class="{active: isActive === 2}">
                    <div class="accordion_title" @click="toggleItem(2)">
                        <h6>Membership</h6>
                        <div v-if="isActive === 2"><img src="img/accordion_close.png"></div>
                        <div v-else><img src="img/accordion_open.png"></div>
                    </div>
                    <div class="item-active membership-set">
                        <p>You joined Goldenlink Plus 2 weeks ago</p>
                        <p class="golden-title"><span class="membership-title">Current Plan:</span>FREE</p>
                        <p>0 per month</p>
                        <button class="premium_btn">UPGRADE TO PREMIUM</button>
                        <div>
                            <div class="membership_logo">
                                <div class="check_logo">
                                  <img src="img/check.png">
                                </div>
                                <div class="notice_list">
                                  <p>$300 for the first month<br>$200 per month after</p>
                                </div>
                            </div>
                            <div class="membership_logo">
                                <div class="check_logo">
                                  <img src="img/check.png">
                                </div>
                                <div class="notice_list">
                                  <p>FREE use of our online store<br>for up to 1 Year</p>
                                </div>
                            </div>
                            <div class="membership_logo">
                                <div class="check_logo">
                                  <img src="img/check.png">
                                </div>
                                <div class="notice_list">
                                  <p>ENJOY FREE Unlimited Offers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div :class="{active: isActive === 3}">
                    <div class="accordion_title" @click="toggleItem(3)">
                        <h6>Payment and Financials</h6>
                        <div v-if="isActive === 3"><img src="img/accordion_close.png"></div>
                        <div v-else><img src="img/accordion_open.png"></div>
                    </div>
                    <div class="item-active">
                        <div class="btn commission_content usd_btn">
                          <p>Balance (USD)</p>
                          <p class="balance">1,000</p>
                          <button class="balance_usd"><i class="fas fa-plus"></i></button>
                        </div>
                        <div class="btn commission_content gcoin_btn">
                          <p>G-Coins Balance</p>
                          <p class="balance">99,000</p>
                          <button class="balance_usd"><i class="fas fa-plus"></i></button>
                        </div>
                        <p class="profile-title profile-title-buc">Payment Method<span class="payment-plus"><router-link to="/businessusercenter/account_settings_deposit"><i class="fas fa-plus-circle"></i></router-link></span></p>
                        <a href=""><img src="img/paypal.png" class="profile-title-buc"></a>
                        <p class="profile-title-buc">alicedu@goldenlinkplus.com</p>
                        <p class="profile-title profile-title-buc">Billing Information</p>
                        <a href=""><p class="setting-view">View Transaction History</p></a>
                        <p class="profile-title profile-title-buc">G-Coins</p>
                        <a href=""><p class="setting-view">View Transaction History</p></a>
                        <a href=""><p class="setting-view">Cashout</p></a>
                    </div>
                </div>
                <div :class="{active: isActive === 4}">
                    <div class="accordion_title" @click="toggleItem(4)">
                        <h6>Account Security</h6>
                        <div v-if="isActive === 4"><img src="img/accordion_close.png"></div>
                        <div v-else><img src="img/accordion_open.png"></div>
                    </div>
                    <div class="item-active">
                        <p class="profile-title profile-title-buc">Update your Password</p>
                        <form class="secure_box">
                            <input type="text" class="timeline_box secure_pass" placeholder="Old Password">
                            <input type="text" class="timeline_box secure_pass" placeholder="New Password">
                            <input type="text" class="timeline_box secure_pass" placeholder="Confirm Password">
                            <input type="submit" class="account_post_btn" value="UPDATE">
                        </form>
                    </div>
                </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Account_Settings",
  data () {
    return {
      isActive: null,
      isEditContactInfo: false,
      contact_infomation: {
        name: "Alice Hansen",
        telephone: "6266848151",
        channel: "WeChat",
        email: "alicedu@goldenlinkplus.com",
        id: "GoldenLinkPlus2018"
      }
    }
  },
  methods: {
    toggleItem(index) {
        if(this.isActive === index)
            this.isActive = null;
        else
          this.isActive = index;
    },
    editContactInfo() {
        this.isEditContactInfo = true;
    },
    stopEditContactInfo() {
        this.isEditContactInfo = false;
    }
  }
};
</script>

<style>
.accordion {
  margin-top: 20px;
  text-align: left;
}
.accordion > div {
    /* margin: 15px; */
}
.accordion .accordion_title {
    display: table;
    width: 100%;
    padding: 21px;
    background-color: #F4F9FE;
    margin-bottom: 5px;
    cursor: pointer;
}
.accordion .accordion_title h6 {
    margin: 0;
    display: table-cell;
    vertical-align: middle;
}
.accordion .accordion_title div {
    display: table-cell;
    vertical-align: middle;
    float: right;
}
.accordion .accordion_title img {
    margin-bottom: 2px;
}
.item-active{
    display: none;
}
.item-active .contact_form {
    text-align: center;
}
.item-active .contact_form p {
    display: flex;
    white-space: nowrap;
}
.item-active .contact_form .timeline_box {
    padding: 5px 15px;
    height: auto;
    margin-left: 10px;
    margin-top: -5px;
    width: 100%;
}
.item-active .contact_form select.timeline_box {
    padding: 7.4px 15px;
}
.active .item-active {
    will-change: height;
    transition: height 0.2s ease;
    height: auto;
    opacity: 1;
    display: block;
    margin: 25px auto;
}
.membership-set {
    text-align: center;
}

.membership-set p {
    margin: 0 0 20px;
}

.membership-title {
    color: #C4C4C4;
    font-weight: bold;
}

.premium_btn {
    padding: 10px 25px;
    background: #3B3E51;
    color: white;
    font-size: 18px;
    border-radius: 20px;
    font-weight: 600;
    margin-bottom: 20px;
}

.membership_logo {
    display: table;
    text-align: left;
    margin: 15px 55px 20px;
}

.membership_logo .notice_list {
    display: table-cell;
    vertical-align: middle;
}

.check_logo {
    display: table-cell;
    vertical-align: middle;
}

.membership_logo .check_logo img {
    margin-right: 15px;
}

.usd_btn {
    position: relative;
    background: #0FA6D6 !important;
    margin: 0 12px 25px !important;
}

.gcoin_btn {
    position: relative;
    background: #F4992D !important;
    margin: 0 12px 25px !important;
}

.balance {
    font-size: 24px;
    font-weight: bold;
}

.balance_usd {
    position: absolute;
    right: 10%;
    bottom: -15px;
}


.usd_btn p, .gcoin_btn p {
    margin: 10px 0  !important;
}

.balance_usd svg {
    color: white;
    border-radius: 50%;
    border: 3px solid white;
}

.usd_btn .balance_usd svg {
    background: #0FA6D6;
}

.gcoin_btn .balance_usd svg {
    background: #F4992D;
}

.balance_usd .svg-inline--fa.fa-w-14 {
    width: 23px;
    height: 23px;
}

.payment-plus svg{
    margin-left: 15px;
    color: #D1D1D1;
}

.setting-view {
    color: #13C8FF;
    font-weight: 600;
    font-size: 18px;
    margin: -10px 21px 21px 22px;
}

.account_post_btn {
    background: #F3921E;
    padding: 15px 80px;
    border-radius: 20px;
    color: white;
    border: 0;
    margin-top: 25px;
    font-weight: 600;
}

.secure_box {
    text-align: center;
}

.secure_pass {
    margin-bottom: 15px;
}
</style>