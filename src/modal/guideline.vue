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
                    <a class="page_modal_title">Social Media Guidelines</a>
                </div>
                <div class="left-content shadow_body privacy_body">
                      <p class="privacy_title">Social Media on GOLD</p>
                      <p class="privacy_title_md">Get started here in your Social Media future.</p>
                      <p class="privacy_title_lg">Membership Lounge<br>
                        <span class="privacy_title_md">We provide a social media lounge for marketing specialists and business owners, to relax and have fun, as well as meeting and communicating with other marketers and business owners.</span>
                      </p>
                      <p class="privacy_title_md">Membership lounge is the place where you can take a break, relax, and check all your social media events, connections, and check on your coin credits and diamonds received.  It is also where you can enter the business user center as well as GS user center.</p>
                      <p class="privacy_title_md">Playing with G-Coins, and Diamonds is another fun special! While meeting and voice communication with more people in your events room, makes different enjoyment in building your marketing channel.  GOLD makes it easy to manage your social media world.</p>
                      <p class="privacy_title_md">Enjoy watching as your Diamonds and G-Coins grow and multiply, and multiple your benefits … It's a fun way to build your brand and happiness.  Hint: once every 10 minutes, you may send one new Diamond for appreciation to anybody.</p>
                      <p class="privacy_title_md">Creating events and communities, grow your influence and traffic by using these various events and communities you create to manage your products, services and brands in the Social Media channel.</p>
                      <p class="privacy_title_md">GOLD provides everything you need for building your brand and growing your team easily.</p>
                      <p class="privacy_title_lg">Available Social Media Items</p>
                      <table class="available-2">
                          <tr>
                              <th>G-Coins Credits</th>
                              <th>Share ratio</th>
                          </tr>
                          <tr>
                              <td>Send G-Coins to host</td>
                              <td>50/50(Admin/GOLD)</td>
                          </tr>
                          <tr>
                              <td>Send G-Coins to Co-host or to speaker</td>
                              <td>20/40/40 (Admin/co-host/GOLD)</td>
                          </tr>
                          <tr>
                              <td>Sending G-coins to Audience</td>
                              <td>50/50(Audience/GOLD)</td>
                          </tr>
                      </table>
                      <table class="available-3">
                          <tr>
                              <th>Diamond Reward Levels</th>
                              <th>Diamond benefits</th>
                              <th>Limitations</th>
                          </tr>
                          <tr>
                              <td>1,000 Diamonds</td>
                              <td>Create Event Rooms</td>
                              <td>Unlimited</td>
                          </tr>
                          <tr>
                              <td>2,000 Diamonds</td>
                              <td>Create Communities</td>
                              <td>3</td>
                          </tr>
                          <tr>
                              <td>10,000 Diamonds</td>
                              <td>Create Communities</td>
                              <td>Unlimited</td>
                          </tr>
                      </table>
                      <table class="available-4">
                          <tr>
                              <th>Single Payment Option</th>
                              <th>Regular GS and Business</th>
                              <th>GOLD Member</th>
                              <th>Required G-Coin Balance</th>
                          </tr>
                          <tr>
                              <td>Profile Bundle for Events</td>
                              <td>$49</td>
                              <td>$19</td>
                              <td>3,000</td>
                          </tr>
                          <tr>
                              <td>Admin rights for Events</td>
                              <td>$99</td>
                              <td>$49</td>
                              <td>6,000</td>
                          </tr>
                          <tr>
                              <td>Unlimited Community admin rights</td>
                              <td>$199</td>
                              <td>$149</td>
                              <td>11,600</td>
                          </tr>
                          <tr>
                              <td>Review user removal details</td>
                              <td>$99</td>
                              <td>$49.99</td>
                              <td>6,000</td>
                          </tr>
                      </table>
                      <p class="privacy_title_md">* (Required G-Coin balance amount)</p>
                      <p class="privacy_title_lg">Single Payment Option Definitions<br>
                        <span class="privacy_title_md">Profile Bundle for Events:  This gives the member the ability to bundle two profiles together, to assist with switching between both of the profiles, and will also give greater exposure to those two profiles while the Event is in progress.<br><b>Admin rights for Events:</b> This gives the member the ability to rejoin an event that they have been removed from, and also keeps anyone else from shutting down an event that you created.<br><b>Unlimited Community Admin Rights:</b> This gives the member Admin rights to avoid removals, replacement, or shut-down by the co-hosts for an unlimited number of Communities.<br><b>Review user removal details:</b> This gives the member the ability to identify who removed them from an event.</span>
                      </p>
                      <p class="privacy_title_lg">GLC EARNING METHOD</p>
                      <p class="privacy_title_md">For Verified Users<br>
                        <table class="term_condition_tb">
                          <tr>
                            <th>GLC Mining</th>
                            <th>Earning</th>
                            <th>Membership</th>
                          </tr>
                          <tr>
                            <td>Receive 1,000 Diamonds</td>
                            <td>1 GLC</td>
                            <td>GS Regular</td>
                          </tr>
                          <tr>
                            <td>Receive 500 Diamonds</td>
                            <td>1 GLC</td>
                            <td>GS Gold</td>
                          </tr>
                          <tr>
                            <td>Receive 1,000 G-Coins</td>
                            <td>1 GLC</td>
                            <td>Business Regular</td>
                          </tr>
                          <tr>
                            <td>Receive 500 G-Coins</td>
                            <td>1 GLC</td>
                            <td>Business Gold</td>
                          </tr>
                        </table>
                      </p>
                      <p class="privacy_title_md">For Unverified Users<br>
                        <table class="term_condition_tb">
                          <tr>
                            <th>GLC Mining</th>
                            <th>Earning</th>
                            <th>Membership</th>
                          </tr>
                          <tr>
                            <td>Receive 1,500 Diamonds</td>
                            <td>1 GLC</td>
                            <td>GS Regular</td>
                          </tr>
                          <tr>
                            <td>Receive 750 Diamonds</td>
                            <td>1 GLC</td>
                            <td>GS Gold</td>
                          </tr>
                          <tr>
                            <td>Receive 1,500 G-Coins</td>
                            <td>1 GLC</td>
                            <td>Business Regular</td>
                          </tr>
                          <tr>
                            <td>Receive 750 G-Coins</td>
                            <td>1 GLC</td>
                            <td>Business Gold</td>
                          </tr>
                        </table>
                      </p>
                      <p class="privacy_title_lg">Event Hierarchy<br>
                        <span class="privacy_title_md">Top priority - the Host</span><br>
                        <span class="privacy_title_md">Second priority - Co-Hosts</span><br>
                        <span class="privacy_title_md">Third priority - Speakers</span><br>
                        <span class="privacy_title_md">Fourth priority - Audience members</span>
                      </p>
                      <p class="privacy_title_md">In order to protect branding or service purposes.  This is part of our social media environment, and as part of your social media life, you understand and agree that your role will be sometimes Host, sometimes Co-host …….  meaning sometimes you are first priority and sometimes you are second priority, and this is common practice now that you are a part of the GOLD social media life. You agree that as part of single payment purchase for Admin rights, that the above conditions govern as part of your single payment.   Host is first priority and co-host is the second priority, so you cannot argue or dispute, with being in the second priority.  So always the Host is the top priority and the co-host is always second and you understand this is our GOLD protection policy</p>
                      <p class="privacy_title_lg">About social media events<br>
                        <span class="privacy_title_md">A feature of social media activity on GOLD, would be an event room that you create or join.  In the Event rooms you moderate your created topics which support your brand or service, this becomes an important marketing tool for your use. We supply various options for you to use, to maximize your marketing impact, such as:</span><br>
                          <ul class="guideline_ul">
                              <li>Create Invitations</li>
                              <li>Select speakers and co-hosters</li>
                              <li>Fine tune your branding and your campaigns</li>
                              <li>Improve audience engagement</li>
                              <li>Attract influencer attention</li>
                              <li>Grow your brand matrix</li>
                              <li>Engage our tools such as: drop G-Coins, send Diamonds in place of “Likes”, grow your</li>
                              <li>G-Coin and Diamond credits</li>
                              <li>In the room topic or brain-storming for your marketing strategies</li>
                              <li>Identify marketing conversion improvements</li>
                              <li>Get live reactions to your business offers</li>
                              <li>Discover new opportunities and marketing channels</li>
                              <li>Improve your Profile, and impact people with action immediately.</li>
                              <li>Real live audio events will sell your product right away.</li>
                              <li>Stay in your events, to increase your social media traffic and influence, this is a good way to build up your personal brand.</li>
                              <li>Events room supports direct messaging for branding purposes, communication or to clarify the target point.</li>
                              <li>Following and mutual fans are another way to increase your influence.</li>
                          </ul>
                      </p>
                      <p class="privacy_title_lg">About community events<br>
                        <span class="privacy_title_md">Community events are another way to build up your brand or service.<br>Create good content for your brand, service, or business. A good brand image, banner or landing page as well as content are the way to make people understand your brand.<br>This is the way leaders, and your marketers, will drive your traffic.</span>
                      </p>
                      <p class="privacy_title_md">We accept multiple co-hosts to manage your content, posts, events, and anyone joining the community will get your notification when events start or are scheduled.<br>This is the place for the people who follow and love these community events, and another way you can build up your fan base and traffic matrix.</p>
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

    </div>
  </transition>
</template>

<script>
    

  export default {
    name: 'Guideline',
    components: {
        
    },  
    data () {
        return {
            f_show_view_profile: false,
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
        },
        scrollToTop() {
            this.$refs.modalTitle.scrollTop = 0;
        }
    },
  }
</script>
<style>
  .term_condition_tb tr td:nth-child(1) {
    background-color: #E8F1FA;
    text-align: left;
  }
  .term_condition_tb tr td:nth-child(2) {
    background-color: #F6FBFF;
  }
  .term_condition_tb tr td:nth-child(3) {
    background-color: #FFFFFF;
  }
  .term_condition_tb td, .term_condition_tb th {
    padding: 10px 5px;
  }
</style>
