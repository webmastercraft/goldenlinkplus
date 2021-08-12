<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header
          class="modal-header"
          id="modalTitle"
        >
            <button
                type="button"
                class="close_btn"
                @click="close"
                aria-label="Close modal"
            >
                <i class="fa fa-times-circle" aria-hidden="true"></i>
            </button>
            <p class="upgrade_gs_para"><b>GS Gold Membership Plan Options</b></p>
            <p class="upgrade_gs_para">This is a one time choice for you. As soon as you apply, you agree with the benefit plan you choose.</p>
            <p class="upgrade_gs_para"><b>Stage one</b> choice is preferred if you wish to remain an independent direct commission bundle together with referral rewards only. If you choose Stage 1, after you obtain $1,000 rewards, you will automatically be upgraded to Stage 2</p>
            <p class="upgrade_gs_para"><b>Stage 2</b> choice is an upgraded option for getting the most benefits, especially those members who wish to grow their marketing sales and grow their team.   If you choose Stage 2, then Stage 1 benefits do not apply.</p>
            <p class="upgrade_gs_para">This is a one time choice for you. As soon as you apply, you agree with the benefit plan you choose.</p>
            <p class="upgrade_gs_para">This is a one time choice for you. As soon as you apply, you agree with the benefit plan you choose.</p>
            <p class="upgrade_gs_para"><b>Definition of Direct and Indirect<br>Commissions</b></p>
        </header>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'Modal',
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>
<style>
.modal-header .upgrade_gs_para {
    font-weight: 400;
}
</style>
