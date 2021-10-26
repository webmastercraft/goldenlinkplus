<template>
  <transition name="modal-fade">
    <div class="modal-backdrop bg-view-mask" v-on:click.self="viewProfileBackdrop">
      <div class="bg-view-mask user_modal_width" v-on:click.self="viewProfileBackdrop">
        <div class="modal toogle_page_modal"
          role="dialog"
          aria-labelledby="modalTitle"
          aria-describedby="modalDescription"
        >
            <header
                class="swtich_account_header"
                id="modalTitle"
                ref="modalTitle"
            >
                <div class="header_modal profile_modal toggle_modal_line_height">
                    <img src="img/header_arrow.png" class="page_modal_arrow bg-view-mask" @click="closeModal">
                    <a class="page_modal_title">GS Guidelines</a>
                </div>
                <div class="left-content shadow_body privacy_body">
                      <p class="privacy_title_md">GS Guidelines</p>
                      <p class="privacy_title_lg">Membership Polocies</p>
                      <p class="privacy_title_md">Definition of direct and indirect commissions</p>
                      <p class="privacy_title_md">Direct commissions<br>
                          <ul class="guideline_ul">
                              <li>Are from shared links or marketing campaigns you made, which result in a converted sale.</li>
                          </ul>
                          <span class="privacy_title_md">Indirect commissions:</span><br>
                          <ul class="guideline_ul">
                              <li>Referral 1: The conversion sales made from the GS you referred, who share the marketing link which result in the converted sale.</li>
                              <li>Referral 2:  The conversion sales made from other GS that you did not refer, this applies only to the GS Gold member who owns that business's exclusive agent rights. (That means the GS Gold membership gets the privilege for all indirect sales commissions.)</li>
                          </ul>
                      </p>
                      <p class="privacy_title_lg">Regular GS:<br>
                          <span class="privacy_title_md">No sign up fee</span><br>
                          <span class="privacy_title_md">No exclusive marketing agent benefits</span><br>
                          <span class="privacy_title_md">You earn direct commissions of 50% of converted sales AND 6% Indirect commission     from GS Marketers that you refer to.</span><br>
                          <span class="privacy_title_md">Paid membership referral: 5% of business and GS Gold paid memberships.</span>
                      </p>
                      <p class="privacy_title_lg">GS Gold members:<br>
                          <ul class="guideline_ul">
                              <li>As a GS Gold, if you bring referred business registrations, you will become the global exclusive marketing agent of that business on GOLD; also, enjoy all the privileges of direct and indirect sales commission rewards. This benefit is permanent, and cannot be lost (as long as your membership remains in good standing).</li>
                          </ul>
                      </p>
                      <table class="gs_guideline_3">
                          <tr>
                              <th>GS Gold Direct Commission 50%/ offer</th>
                              <th>Direct Commission (50%) All Memberships</th>
                              <th>Regular GS direct Commission 50%/ offer</th>
                          </tr>
                          <tr>
                              <td>Credit hold</td>
                              <td>See Revenue Levels Below</td>
                              <td>6% of Via 50%</td>
                          </tr>
                      </table>
                      <table class="gs_guideline_3 gs_guideline_2">
                          <tr>
                              <th>Indirect commission 10-50%</th>
                              <th>Monthly sales Revenus Levels Below</th>
                              <th>Indirect Commission 6%</th>
                          </tr>
                          <tr v-for="(value, index) in values" :key="index" class="gs_guideline_2_tr">
                              <td>{{value.gold}}</td>
                              <td>{{value.all}}</td>
                              <td>{{value.regular}}</td>
                          </tr>
                      </table>
                      <ul class="guideline_ul">
                          <li>GOLD will only launch 20k paid memberships initially for Gold GS. During this early stage, we offer significant price discounts, act before prices rise.</li>
                      </ul>
                      <table class="table1 table1_center">
                        <tr>
                          <th scope="col" class="th_paid">GS Gold Paid<br>Membership</th>
                          <th scope="col" class="th_time">Limited Time<br>Offer</th> 
                        </tr>
                        <tr v-for="(value, index) in percentage" :key="index">
                          <td class="table1_center_td">{{value.membership}}</td>
                          <td class="table1_center_td">{{value.offer}}</td>
                        </tr>
                      </table>
                      <p class="privacy_title_md">(please check single payment definition including price and add link here)</p>
                      <p class="privacy_title_md">
                          <ul class="guideline_ul">
                              <li>You have the right to sell, transfer or auction your ownership of these exclusive rights at your sole discretion; upon such a sale, the following fees are applied:</li>
                              <ul class="gs_guideline_ul">
                                  <li>An amount of 10% of the agreed sales price is payable to Goldenlink+.</li>
                                  <li>An amount of 15% of the agreed sales price is payable to the Business.</li>
                                  <li>All the sales payments must go through the GOLD platform and confirm to our Terms and Conditions (click here for all the details)</li>
                              </ul>
                              <li>Membership referral: 10% of business and GS Gold paid memberships.</li>
                              <li>G-coins CPC, G-Coins reward from events, are not considered indirect commissions.</li>
                          </ul>
                      </p>
                      <p class="gs_account_link gs_account_check_link" @click="showGSMore"><b>Check more details >></b></p>
                      <p class="privacy_title_md"><b>NOTES:</b><br>GS marketer must agree with the policy of commission plan. That GS knows commission refers to marketing conversion sales.  “Commission” also refers to direct and indirect commissions. For those benefit related such as : G-coins CPC, G-Coins received from events are not considered commissions</p>
                      <p class="privacy_title_md">Also If you have previous sales or referrals related to a specific Business, prior to becoming a GS Gold member, you will not receive credit for any previous referrals.<br>The difference between GS and Business referrals is a GS will receive his/her previous referral credits once they have made payment for their Gold membership, if it was a Business referral then no exclusive rights will come to you.</p>
                      <p class="privacy_title_md">The difference between GS and Business referrals is the previous business referral's account can not be exclusive to the Gold GS.  But referred GS account benefits will upgrade their indirect sales commissions from 10% to 80%, or even higher levels upon payment of their membership upgrade, as well as the conversion sales amount made by.</p>
                      <p class="privacy_title_lg">How it works for our Marketing partners:<br>
                          <ul class="guideline_ul">
                              <li>Create your profile and show how you drive online traffic.  Here you enter your social handle channels, audience size, professional reviews, and your campaign conversion rate.</li>
                              <li>There is NO LIMIT to your Commission/Conversions …. The more conversions you make, the more you can earn with GOLD!  Once a purchase is made, the related Business for that sales commission will be released to your account, this is known as a “Conversion” or “Conversion Sale”  (please check GOLD Terms and Conditions).</li>
                              <li>Check/accept campaign offers as follows:</li>
                              <ul class="gs_guideline_ul">
                                  <li>Enter keywords to search for business offers, get to the target business' company page and check that business' offer links, as well as their Commission and CPC G-Coin rates.</li>
                                  <li>Quick search for Offers within Events: See which Business profiles have offers.  Most likely you will locate business offers on the Business profiles. Search on GOLD's homepage, Product; Service; GS or Community.   Click on one to view the promotion details and start initiating your marketing campaign using GOLD’s Social platform to drive all the traffic to your marketing offers; such as: Events for branding and building communities, connecting with other GS Marketers, and businesses, influencers and other members of your matrix.  Use our Social Media events to expand your social connections and build up your personal influence or brand.</li>
                                  <li>Remember, Use your Live audio events to achieve real time sales.  By pursuing a daily presence with your Live channels you will grow your followers and drive your sales ever higher.</li>
                                  <li>Share offers links across all media to make your conversion sales.</li>
                                  <li>Remember, Use your Live audio events to achieve real time sales.  By pursuing a daily presence with your Live channels you will grow your followers and drive your sales ever higher.</li>
                                  <li>Pay attention to the following when checking offers:</li>
                                      <ul class="guideline_ul">
                                          <li>Offer details and requirements: Different CPC G-coins rates for all offers; and then select the offers tailored to your needs and select your favorite offer rewards.</li>
                                      </ul>
                                  <li>Pay attention to Ad Content，banners, and videos. Check earned revenues: When offers are converted into clicks or conversions, marketer can view conversion details and revenues earned.</li>
                                  <li>Share your invitation links via exclusive QR codes or referral code and invite businesses and marketers to register accounts on GOLD</li>
                                  <li>Enter emails in the Invite section on your GOLD account and send the invitations.</li>
                              </ul>
                              <li>Create your profile and show how you drive online traffic.  Here you enter your social handle channels, audience size, professional reviews, and your campaign conversion rate.</li>
                              <li>Create your profile and show how you drive online traffic.  Here you enter your social handle channels, audience size, professional reviews, and your campaign conversion rate.</li>
                              <li>Create your profile and show how you drive online traffic.  Here you enter your social handle channels, audience size, professional reviews, and your campaign conversion rate.</li>
                              <li>Create your profile and show how you drive online traffic.  Here you enter your social handle channels, audience size, professional reviews, and your campaign conversion rate.</li>
                          </ul>
                      </p>
                      <p class="privacy_title_lg">Gold Striker(GS) Agreement<br>
                          <span class="privacy_title_md">The following the terms of use constitute a legal agreement between you, the visitor of the Golden Link Plus website, and Gold, the service owner (“Gold”, “We, “Us”, “GS”, GS marketers or “Gold Striker'') and governs your use of the Gold Service (the “Service”). Please read this Agreement carefully before using or registering for the Service. For the purpose of this Agreement, by using and registering for the Service, you agree to the terms and conditions of this agreement. IF YOU DON'T AGREE WITH THE TERMS AND CONDITIONS OF THIS AGREEMENT, DO NOT USE OR REGISTER FOR THE SERVICE. YOU SHOULD REVIEW THE TERMS FREQUENTLY AS Gold MAY CHANGE THIS AGREEMENT AT ANY TIME BY POSTING A REVISED VERSION. YOUR CONTINUED USE OF THE SERVICE AFTER SUCH NOTICE CONSTITUTES YOUR CONSENT TO THE TERMS OF THE AGREEMENT INCLUDING UPDATED VERSIONS. All GS members must agree with GoldenLink+ policies and maintain their marketing campaign in good standing, not violate the GOLD rules, not to run malicious traffic, not to solicit fake clicks. If all these conditions are met, members can maintain their membership and continue to increase their revenue and sell or transfer their accounts upon the Platform's approval. To assist with the platform growth in a proper direction and avoiding unfair or illegal activities or events on GOLD, GOLD will maintain records of all activities and comments regardless if good or poor, this includes: stars, reviews, followers, amount of Diamonds and G-Coins reward,  as well as conversion rates for businesses and GS marketers.</span>
                      </p>
                      <p class="privacy_title_md">Regarding fake traffic, it will be considered as fake traffic or violations in the following situations:<br>
                          <ul class="guideline_ul">
                              <li>CPL (Cost Per Leads), where the conversion rate of the leads is below industry norms.</li>
                              <li>CPI (Cost Per Installation), where the person downloads, then deletes the download immediately.</li>
                              <li>CPC (Cost Per Click), where the GS uses machine generated or purchases fake clicks in order to make income.</li>
                          </ul>
                          In the above scenarios, these would be considered as “fake traffic”, affecting both the GS’s reputation and relationship with the Business campaign.
                      </p>
                      <p class="privacy_title_md"><b>Valid CPC Example (Cost Per Clicks)</b><br>Question: After I share the link, can I invite friends in the community to click on the link I shared? Answer: Yes, you can invite anyone in the community to click; however, you will only gain a commission if that person also buys (conversion), if that person ONLY clicks, it’s not rewarded, that person must also purchase.</p>
                      <p class="privacy_title_lg">Funds Withdrawal<br>
                          <span class="privacy_title_md">
                              <ul class="guideline_ul">
                                  <li>
                                      <b>Note:</b> When businesses are  making offers for commission,  CPC G-Coins, GOLD takes a 50% split (check below). GOLD owns the rights for the share ratio and also the right to modify at any time.
                                      <p class="privacy_title_md"><b>Commission and CPC G-coin split ratio for traffic is as follows:</b></p>
                                      <p class="privacy_title_md">
                                          G-Coins CPC    50/50  (GS/GOLD)<br>Commission     50/50 ( GS/ GOLD Hold for indirect commissions)
                                      </p>
                                  </li>
                                  <li>You may keep your balance on hand to use for future events. By keeping your G-Coin balance on GOLD, it is possible your G-Coin value may grow.</li>
                                  <li>GS Marketer：When the value in the account is equivalent to $50, funds can be cashed out, except for the first $5 promotional offer, following the completion of your registration.</li>
                                  <li>G-Coins cash out:  Based on your current balance, plus current G-Coin value.</li>
                                  <li>Commission cash out: To avoid account disputes and provide for possible returns, the account balance minimum must remain at least $50.  As your sales continue to grow, GOLD maintains the right to adjust this minimum cash amount.</li>
                              </ul>
                          </span>
                      </p>
                      <p class="privacy_title_lg">Content Violations<br>
                          <span class="privacy_title_md">
                              <ul class="guideline_ul">
                                  <li>
                                      The content of the web site and/or newsletter cannot contain any adult content nor link from, or to, any adult materials including but not limited to:
                                  </li>
                                  <li>
                                      Explicit, vulgar or obscene language
                                  </li>
                                  <li>
                                      Posting or referencing of sexually explicit images or other offensive content
                                  </li>
                                  <li>
                                      Promotion of adult services, such as phone sex or escort services
                                  </li>
                                  <li>
                                      The content of the web site and/or newsletter cannot infringe on any personal, intellectual property or copyrights
                                  </li>
                                  <li>
                                      Racial, ethnic, political, hate-mongering or otherwise objectionable content
                                  </li>
                                  <li>
                                      Investment, money-making opportunities or advice not permitted under law 
                                  </li>
                                  <li>
                                      Gratuitous violence or profanity
                                  </li>
                                  <li>
                                      Material that defames, abuses, or threatens physical harm to others or to you
                                  </li>
                                  <li>
                                      Promotion of illegal substances or activities such as illegal online gambling, how to build a bomb, counterfeiting money, etc.
                                  </li>
                                  <li>
                                      Software Pirating (e.g., Warez, Hotline)
                                  </li>
                                  <li>
                                      Any illegal activity whatsoever
                                  </li>
                                  <li>
                                      Any questionable or controversial subject matter
                                  </li>
                                  <li>
                                      Any spoofing, redirecting, or trafficking from adult-related web sites in an effort to gain traffic
                                  </li>
                              </ul>
                          </span>
                      </p>
                      <p class="privacy_title_lg">We flag accounts that:<br>
                          <span class="privacy_title_md">
                              <ul class="guideline_ul">
                                  <li>
                                      Have click-through rates that are much higher than industry averages and where solid justification is not evident
                                  </li>
                                  <li>
                                      Have ONLY click programs generating clicks with no indication by site traffic that it can sustain the clicks reported
                                  </li>
                                  <li>
                                      Have shown fraudulent leads as determined by our clients
                                  </li>
                                  <li>
                                      Use fake redirects, automated software, and/or fraud to generate clicks or leads from our program.
                                  </li>
                                  <li>
                                      Use of GOLD platform social media marketing campaign can not related to any sort of lottery rewards
                                  </li>
                              </ul>
                          </span>
                      </p>
                      <p class="privacy_title_lg">GS Marketer agrees as follows:<br>
                          <span class="privacy_title_md">
                              <ul class="guideline_ul">
                                  <li>
                                      Not to carry objectionable materials on their web site which would revoke their affiliation as determined by GOLD. When creating their own banners or advertising campaign, GS agrees to use only those which have been approved by Business and that adhere to GOLD Policies and all applicable laws, GOLD has the rights to resolve any violations at its own discretion. GS agrees to adhere to all laws as related to email; SMS messaging; surveys; trial offers; pop-ups; including but not limited to all other types of traffic channels, as well as GOLD live audio events.
                                  </li>
                                  <li>
                                      Use only allowed promotion channels as stated in each campaign. Special instructions including but not limited to promotion requirements may be included in a campaign description. 
                                  </li>
                                  <li>
                                      To post or distribute all content as described within the Business campaign so long as the content is valid and legal.  If GS discovers that Business content is in violation of established laws, then GS has the obligation to not post, or distribute in any way, such materials; and has the duty to report such violations to the GOLD platform.
                                  </li>
                                  <li>
                                      To indemnify GOLD and to hold GOLD harmless from and against any valid legal claims caused by any GS; If a GS defrauds the system, then GOLD may take any legal actions necessary, up to, and including a permanent ban from the GOLD platform on a case by case basis.
                                  </li>
                                  <li>
                                      Any legal action taken by a Business, agency, client, person, or entity against GOLD for actions of you, and/or your GS marketers, that violate the platform terms and conditions, you accept that GOLD will work with the Business, agency, client, person, or entity to divulge your personal information.  You also agree that GOLD is not liable for your actions, and you will bear all costs (legal or otherwise) that GOLD incurs if GOLD is sued by a business, client, agency, person, or entity.
                                  </li>
                              </ul>
                          </span>
                      </p>
                      <p class="privacy_title_lg">COMPLIANCE POLICY<br>
                          <span class="privacy_title_md">
                              One of GOLDs channels is live audio events.  During these events, GOLD may monitor the activities and conduct and issue warnings to hosts that too many complaints and negative comments are occurring during your event hosting time, and in order to promote a positive social media environment and to avoid any legal issues, GOLD may be force to warn you and to possibly limit your activity, if there are a lot of complaints.
                          </span>
                          <p class="privacy_title_md">
                              <ul class="guideline_ul_num">
                                  <li>
                                      Any GS found to be using phishing or data scraping may be immediately terminated from the network with the potential of forfeited pay-outs and/or commissions earned for the month.
                                  </li>
                                  <li>
                                      GOLD reserves the right to change any conditions of this contract at any time.<br>GOLD gives no warranty, express or implied, for any and all services and products provided, including, but not limited to, warranty of merchantability and warranty of fitness for a particular purpose. This statement expressly includes any reimbursement for losses of income due to disruption of service by GOLD or its upstream providers.
                                  </li>
                                  <p class="privacy_title_md">
                                      You agree to settle any dispute under this agreement under the laws of the State of California.  Any litigation arising under this Agreement will be brought in the federal or state courts of Los Angeles County, California.
                                  </p>
                                  <p class="privacy_title_md">
                                      If any provision of this agreement shall be held or made invalid or unenforceable by a court decision, statute, rule or otherwise, the remaining provisions of this agreement shall not be affected thereby.
                                  </p>
                              </ul>
                          </p>
                      
                      <hr class="privacy_hr">
                      <div class="how_it_works_btn term_condition_back_btn">
                        
                        <button class="how_it_works_back_btn bg-view-mask" @click="closeModal">
                            <img src="reg_next.png" class="reg_next_rotate">Go Back
                        </button>
                        <button class="back_top_btn"><img src="img/top_arrow.png" @click="scrollToTop"></button>
                      </div>
                </div>
            </header>
        </div>
      </div>
      <GSMore 
          v-show="f_show_gs_more"
          @user-backdrop="removeFlagFromStack"
          @close="closeViewProfile"
          >
      </GSMore>
    </div>
  </transition>
</template>

<script>
  import GSMore from "../modal/gs_more.vue";

  export default {
    name: 'Industry_System',
    components: {
      GSMore
    },  
    data () {
        return {
            f_show_view_profile: false,
            f_show_gs_more: false,
            modalStack: [],
            values: [
                      {regular: "6%", gold: "10%", all: "$1-$499"},
                      {regular: "6%", gold: "20%", all: "$500-$999"},
                      {regular: "6%", gold: "30%", all: "$1000-$1499"},
                      {regular: "6%", gold: "40%", all: "$1500-$1999"},
                      {regular: "6%", gold: "50%", all: "$2000-$2499"},
                      {regular: "6%", gold: "60%", all: "$2500-$2999"},
                      {regular: "6%", gold: "70%", all: "$3000-$3499"},
                      {regular: "6%", gold: "80%", all: "$3500-$3999"},
                      {regular: "6%", gold:"100%", all: "$4000 or more"}
                    ],
        percentage: [
                    {membership: "Early bird special: $199 (add-on items free)", offer: "For the first 1,000 paid members"},
                    {membership: "Early price: $199 + $100 (add-on items)", offer: "For the next 2,000 paid members"},
                    {membership: "Early price: $399 + $100 (add-on items)", offer: "For the next 8,000 paid members"},
                    {membership: "Regular price $599 + $100 (Add-on items )", offer: "For the last 9,000 paid members"},
                    {membership: "Total early stage opportunity", offer: "First 2,0000 paid members"},
                ],
        }
    },
    methods: {
        closeModal() {
            this.$emit('close');
        },
        viewProfileBackdrop(evt) {

            if(evt.target.classList.length > 0 && "bg-view-mask"){
            this.$emit('view-backdrop');
            }
        },
        showIndustryService(){
            this.$emit('showIndustryService');
        },
        close() {
            this.$emit('close');
        },
        userProfileBackdrop(evt) {
            if(evt.target.classList.length > 0 && "bg-mask"){
                this.$emit('user-backdrop');
            }
        },
        closeViewProfile() {
            this.f_industry_service = false;
            this.f_show_gs_more = false;
        },
        scrollToTop() {
            this.$refs.modalTitle.scrollTop = 0;
        },
        showGSMore() {
            this.f_show_gs_more = true;
            this.modalStack.push('f_show_gs_more');
        },
        removeFlagFromStack() {

          let temp = this.modalStack.pop(-1);

          switch (temp) {
            case 'f_show_gs_more':
              this.f_show_gs_more = false
              break;
            default:
              break;
          }
          this.f_show_gs_more = false
        }
    },
  }
</script>
<style>
  .toggle_modal_line_height a {
    line-height: unset !important;
  }
</style>
