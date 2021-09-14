<template>
    <div class="container">
        <div class="profile_phone">

            <div class="header_modal profile_modal">
                <router-link to="/socialmedia/socialmedia_main" class="header_arrow"><img src="img/header_arrow.png"></router-link>
                <a>Notification Settings</a>
                <div class="notification_content" v-for="(item, index) in notifydata" :key="index">
                    <div class="notification_content_width">
                        <p><b>{{item.title}}</b></p>
                        <p>{{item.content}}</p>
                    </div>
                    <div class="toggle-button-cover notification_position">
                        <toggle-button :value="false" :labels="{checked: 'YES', unchecked: 'OFF'}" :color="{checked: '#13C8FF', unchecked: '#FF0000', disabled: '#CCCCCC'}" :width=80 :height=30 style='float: right;'/>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>


export default {
  name: 'Notification_Setting',
  components: {
  },
  data () {
    return {
        notifydata: [
            {
                title: "Event Notifications",
                content: "When someone you follow starts an event, invites you as speaker, etc..."
            },
            {
                title: "Message Notifications",
                content: "Direct Messages, Requests, etc..."
            },
            {
                title: "Trend Notifications",
                content: "Interesting Events, Communities, etc..."
            },
            {
                title: "Other Notifications",
                content: "New followers, events, communities, etc..."
            }
        ]
    }
  }
}
</script>
<style>
.notification_content {
    display: flex;
    margin: 20px 32px;
    text-align: left;
    width: calc(100% - 64px);
    line-height: 25px;
}
.notification_content p {
    margin: 0;
}
.notification_position {
    margin: auto;
}
.notification_content_width {
    width: 270px;
}
.notification_content_width p:first-child {
    font-size: 16px;
}
.notification_content_width p:last-child {
    font-size: 14px;
}
</style>
