<template>
  <div>
    <div class="container">
        <div class="phone">
          <div class="content content_modal">
            <div class="close_btn">
              <router-link to="/businessusercenter"><i class="fa fa-times-circle" aria-hidden="true"></i></router-link>
            </div>
            
            <div class="account-title  marketing_plus">
              Certifications<button @click="showEdit()" :disabled="isShow" :class="{disable: isShow === true}"><i class="fas fa-plus-circle"></i></button>
            </div>
            <div class="content_register" v-if="isShow === true">
              <form>
                <div>
                  <div class="form-group">
                    <select class="form-control" id="select-brand">
                      <option disabled selected>Business Permit</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>Other Certification</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="document_name"
                      aria-describedby="document name"
                      placeholder="Document Name"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="register_number"
                      aria-describedby="register_number"
                      placeholder="Register Number"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="issued_by"
                      aria-describedby="issued_by"
                      placeholder="Issued By"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="expiry_date"
                      aria-describedby="expiry_date"
                      placeholder="Expiry Date"
                    />
                  </div>
                  <div class="form-group wrapper">
                    <div class="box">
                      <div class="js--image-preview"></div>
                      <div class="upload-options">
                        <label>
                          <input type="file" class="image-upload" accept="image/*" />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="form-group thumbnails">
                    <div><img src=""></div>
                    <div><img src=""></div>
                    <div><img src=""></div>
                    <div><img src=""></div>
                    <div><img src=""></div>
                  </div>
                  <div class="form-group">
                    <textarea
                      class="form-control"
                      id="description"
                      rows="3"
                      placeholder="Description"
                    ></textarea>
                  </div>
                </div>
                <button type="button" class="btn btn_cancel" @click="hideEdit()">CANCEL</button>
                <button type="button" class="btn btn_save " @click="saveCertifications()">SAVE</button>
              </form>
              <hr>
            </div>
            <div class="golden-area brands_top">
              <p class="profile-title profile-title-buc">Document Type:<span> {{document_type}}</span></p>
              <p class="profile-title profile-title-buc">Document Name:<span><br> {{document_name}}</span></p>
              <p class="profile-title profile-title-buc">Product Name:<span> {{product_name}}</span></p>
              <p class="profile-title profile-title-buc">Registration Number:<span> {{registration_number}}</span></p>
              <p class="profile-title profile-title-buc">Issued by:<span> {{issued}}</span></p>
              <p class="profile-title profile-title-buc">Date Issued:<span> {{date_issued}}</span></p>
              <p class="profile-title profile-title-buc">Expiry Date:<span> {{expiry_date}}</span></p>
              <p class="profile-title profile-title-buc">Uploaded Files:
              </p>
              <div class="form-group thumbnails upload_img">
                <div><img src=""></div>
                <div><img src=""></div>
                <div><img src=""></div>
                <div><img src=""></div>
                <div><img src=""></div>
              </div>
              <p class="profile-title profile-title-buc">Description:<span><br> {{description}}</span></p>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Certifications',
  components: {
  },
  data () {
    return { 
        isShow: false,
        document_type: "Business Permit",
        document_name: "CA Seller’s Permit",
        product_name: "GLP",
        registration_number: "1234567",
        issued: "Other Government Agency",
        date_issued: "01/01/2013",
        expiry_date: "01/01/2022",
        uploaded_files: [],
        description: "CA Seller’s Permit",
    }
  },
  methods: {
    saveCertifications() {
      this.hideEdit();
    },
    showEdit() {
      this.isShow = true;
    },
    hideEdit() {
      this.isShow = false;
    }
  }
}
</script>
<style>
  .upload_img {
    margin: 0 15px 15px !important;
    width: auto !important;
  }
</style>
