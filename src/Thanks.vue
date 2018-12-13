<template>
	<section class="hero is-thank is-fullheight">
		<div class="hero-body">
			<div class="container has-text-centered">
				<div class="column is-10 is-offset-1">
					<span class="title is-1" style="font-size:5rem; color:#47CCFB; font-family: 'Prompt', sans-serif;">

						ECHO

					</span>
					<span style="font-size: 2rem; font-family: 'Bai Jamjuree', sans-serif; color:white"> ขอบคุณสำหรับการลงทะเบียนล่วงหน้า</span><br>
					<span style="font-size: 1.5rem; font-family: 'Bai Jamjuree', sans-serif; color:white">
						เราจะติดต่อกลับไปทางอีเมลของคุณอีกครั้งเมื่อเว็บไซต์พร้อมใช้งาน
					</span>

					<hr>
					<span class="title is-2" style="color:white; font-family: 'Bai Jamjuree', sans-serif;">

						Community สำหรับช่างภาพแห่งใหม่ของประเทศไทย

					</span>
					<div style="padding-top:2rem;">
						<button @click="backHome()" class="button white" style="font-family: 'Bai Jamjuree', sans-serif;">กลับสู่หน้าลงทะเบียน</button>
					</div>

					<!-- <p style="font-size:1.5rem; font-family: 'Bai Jamjuree', sans-serif; color:white; margin-top:2rem">
						เพื่อแลกเปลี่ยนความรู้ แชร์ประสบการณ์กับคนที่รักการถ่ายภาพคุณ <br> และเพิ่มโอกาสการได้งานด้วยเทคโนโลยี <strong style="color:white;"> ECHO Match</strong>
					</p>
					<div style="padding-top:2rem;">
						<button @click="scrollDown('Photographer')" class="button white" style="font-family: 'Bai Jamjuree', sans-serif;">ลงทะเบียนเลย</button>
					</div>

					<div style="margin-top:5rem" class="bounce">
						<span class="icon" style="cursor:pointer" @click="scrollDownFeatures()">

							<i class="fa fa-angle-double-down fa-3x"></i>

						</span>
					</div> -->
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	methods: {
		backHome() {
			this.$router.replace({
				path: "/"
			});
		}
	}
};
</script>


<style>
.hero.is-thank {
	background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
		url("assets/thank.jpg") no-repeat center center fixed;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
}
</style>
