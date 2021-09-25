<template>
    <div class="container">
        <div class="user_center_area">
                <p class="switch_title">My Social Media
                    <router-link to="/socialmedia/user_center/socialmedia_user_center">
                        <span class="profile_done">DONE</span>
                    </router-link>
                </p>

                <p class="update_profile_content">Social Media Platform</p>
                <div class="form-group profile_input profile_role_input">
                    <select class="form-control" id="year_established">
                        <option>Facebook</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <p class="update_profile_content">How many groups do you have?</p>
                <div class="form-group profile_input profile_role_input">
                    <select class="form-control" id="year_established">
                        <option>50</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <p class="update_profile_content">Audience Size</p>
                <div class="form-group profile_input profile_role_input">
                    <input
                      type="text"
                      class="form-control"
                      id="cname"
                      aria-describedby="comname"
                      placeholder=""
                      value="50,000"
                    />
                </div>
                <p class="update_profile_content">Estimated Followers</p>
                <div class="form-group profile_input profile_role_input">
                    <input
                      type="text"
                      class="form-control"
                      id="cname"
                      aria-describedby="comname"
                      placeholder=""
                      value="50,000"
                    />
                </div>
                <p class="update_profile_content">Description</p>
                <div class="form-group profile_input profile_role_input">
                    <textarea
                      class="form-control"
                      id="keywords"
                      rows="5"
                      placeholder=""
                      value=""
                    >
                    </textarea>
                </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'GS_Social',
        components: {
        }
    }
</script>
<style>
</style>
