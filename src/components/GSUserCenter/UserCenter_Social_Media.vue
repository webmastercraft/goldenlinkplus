<template>
  <div>
    <div class="container">
        <div class="phone">
          <div class="content content_modal">
            <div class="close_btn">
              <router-link to="/usercenter/"><i class="fa fa-times-circle" aria-hidden="true"></i></router-link>
            </div>
            
            <div class="account-title">
              Social Media
            </div>
            <hr class="referrals-hr">
            <div class="content_register">
              <form>
                <div>
                  <div class="form-group">
                    <select class="form-control" id="select_offer">
                      <option value="null" disabled selected>Social Media Platform</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      id=""
                      aria-describedby=""
                      placeholder="How many group do you have?"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="copies-issued"
                      aria-describedby="copies-issued"
                      placeholder="What is your audience size?"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      id=""
                      aria-describedby=""
                      placeholder="Your estimated followers"
                    />
                  </div>
                  <div class="form-group">
                  <textarea
                    class="form-control"
                    id="description"
                    rows="3"
                    placeholder="Description"
                  >
                  </textarea>
              </div>
                </div>
              </form>
              <hr>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "Social Media",
  components: {
  },
  data () {
    return { 
      isBusiness: true,
      business: {
        subtitle: "BUSINESSES", 
        items: [
          {
            company: "GlodenlinkPlus",
            contactname: "Alice Du",
            telephone: "+1626-684-8151",
            email: "",
            skype: "alicedu"
          },
          {
            company: "GlodenlinkPlus",
            contactname: "Alice Du",
            telephone: "+1626-684-8151",
            email: "",
            skype: "alicedu"
          }
        ]
      }, goldstriker : {
         subtitle: "GOLD STRIKERS", 
        items: [
          {
            company: "GlodenlinkPLus GOLD",
            contactname: "Alice Hansen",
            telephone: "+1626-6848151",
            email: "",
            skype: "alicehansen"
          },
          {
            company: "Glodenstriker 1",
            contactname: "Gold Striker",
            telephone: "+1626-6848151",
            email: "",
            skype: "gold"
          }
        ]
      }
    }
  },
  methods: {
    showBusiness() {
      this.isBusiness = true;
    },
    showGoldStriker() {
      this.isBusiness = false;
    }
  }
}
</script>
<style>
  
</style>
