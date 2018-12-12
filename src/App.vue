<template>
	<div>
		<!-- style="padding:5rem 8rem 3rem 8rem;" -->
		<div>
			<section class="hero is-info is-fullheight">
				<div class="hero-head">
					<nav class="navbar">
						<div class="container">
							<div class="navbar-brand">
								<span style="margin:10px; font-size:2rem; color:#47CCFB; font-family: 'Prompt', sans-serif;">

									ECHO

								</span>
								<!-- <a class="navbar-item" href="../">

<img src="http://bulma.io/images/bulma-type-white.png" alt="Logo">

</a> -->
								<span class="navbar-burger burger" data-target="navbarMenu">

									<span></span>
									<span></span>
									<span></span>
								</span>
							</div>
							<div id="navbarMenu" class="navbar-menu">
								<!-- <div class="navbar-end">

<span class="navbar-item">

<a class="button is-white is-outlined" href="#">

<span class="icon">

<i class="fa fa-home"></i>

</span>

<span>Home</span>

</a>

</span>

<span class="navbar-item">

<a class="button is-white is-outlined" href="#">

<span class="icon">

<i class="fa fa-superpowers"></i>

</span>

<span>Examples</span>

</a>

</span>

<span class="navbar-item">

<a class="button is-white is-outlined" href="#">

<span class="icon">

<i class="fa fa-book"></i>

</span>

<span>Documentation</span>

</a>

</span>

<span class="navbar-item">

<a class="button is-white is-outlined" href="https://github.com/dansup/bulma-templates/blob/master/templates/landing.html">

<span class="icon">

<i class="fa fa-github"></i>

</span>

<span>View Source</span>

</a>

</span>

</div> -->
							</div>
						</div>
					</nav>
				</div>

				<div class="hero-body">
					<div class="container has-text-centered">
						<div class="column is-10 is-offset-1">
							<span class="title is-1" style="font-size:5rem; color:#47CCFB; font-family: 'Prompt', sans-serif;">

								ECHO

							</span>
							<span style="font-size: 2rem; font-family: 'Bai Jamjuree', sans-serif; color:white">we're coming Soon</span><br>
							<hr>
							<span class="title is-2" style="color:white; font-family: 'Bai Jamjuree', sans-serif;">

								Community สำหรับช่างภาพแห่งใหม่ของประเทศไทย

							</span>

							<p style="font-size:1.5rem; font-family: 'Bai Jamjuree', sans-serif; color:white; margin-top:2rem">
								เพื่อแลกเปลี่ยนความรู้ แชร์ประสบการณ์กับคนที่รักการถ่ายภาพคุณ <br> และเพิ่มโอกาสการได้งานด้วยเทคโนโลยี <strong style="color:white;"> ECHO Match</strong>
							</p>
							<div style="padding-top:2rem;">
								<button @click="scrollDown('Photographer')" class="button white" style="font-family: 'Bai Jamjuree', sans-serif;">ลงทะเบียนเลย</button>
								<!-- <button @click="scrollDown('Customer')" class="button white" style="font-family: 'Bai Jamjuree', sans-serif;">ต้องการหาช่างภาพ</button> -->
							</div>

							<div style="margin-top:5rem" class="bounce">
								<span class="icon" style="cursor:pointer" @click="scrollDownFeatures()">

									<i class="fa fa-angle-double-down fa-3x"></i>

								</span>
							</div>
							<!-- <div class="box">

<div class="field is-grouped">

<p class="control is-expanded">

<input class="input" type="text" placeholder="Enter your email">

</p>

<p class="control">

<a class="button is-info">

Notify Me

</a>

</p>

</div>

</div> -->
						</div>
					</div>
				</div>

			</section>

			<!-- <div id="nav">

</div> -->
			<!-- <section class="background-hero" id="hero" style=" text-align: center; height: 700px; overflow:hidden">

<div style="position: absolute; z-index:2; height: 75%; width:100%; background-color: black; opacity: 0.5;"></div>

<div class="background-hero" style="position: absolute; top:10%; left:15%; right:15%; z-index: 3; color:white; height: 500px; padding: 2rem; box-shadow: -7px 20px 45px -1px rgba(0,0,0,0.15);">

<div style="width: 51%; padding-top: 3rem">

<span class="title is-1" style="color:#47CCFB; font-family: 'Prompt', sans-serif;">ECHO</span> <br>

<span class="title is-2" style="color:white; font-family: 'Prompt', sans-serif;">

แหล่งรวมช่างภาพแห่งใหม่ของประเทศไทย

</span>

<hr style="background-color:#FCC842">

<p style="font-family: 'Bai Jamjuree', sans-serif; color:white">

สร้างความเป็นระบบให้กับการเป็นช่างภาพ รวมถึงการจ้างงานและหางาน โดยที่เราช่วยอำนวยความสะดวกให้กับทั้งช่างภาพและผู้ว่าจ้าง เพื่อให้งานที่จะเกิดขึ้นนั้นเกิดความประทับใจสูงสุด

</p>

<div style="padding-top:2rem;">

<button @click="scrollDown('Photographer')" class="button" style="font-family: 'Bai Jamjuree', sans-serif;">สมัครเป็นช่างภาพ</button>

<button @click="scrollDown('Customer')" class="button" style="font-family: 'Bai Jamjuree', sans-serif;">ต้องการหาช่างภาพ</button>

</div>

</div>

</section> -->

			<div id="photog-features" style="padding:2rem 5rem 2rem 5rem">
				<div class="columns">
					<div class="column">
						<div>
							<img style="display: block; height:350px; width:100%" :src="require('./assets/profit/photographer'+ photographerImgPath +'.jpg')" alt="">

						</div>
					</div>
					<div class="column" style="font-family: 'Bai Jamjuree', sans-serif; height: 400px">
						<tr style="height: 3rem">
							<p style="font-family: 'Prompt', sans-serif; " class="title is-4">สำหรับช่างภาพ</p>
							<!-- ให้ผู้ว่าจ้างเข้ามาค้นหาช่างภาพที่มีตั้งแต่ระดับฝึกหัดจนถึงระดับมืออาชีพ -->
						</tr>
						<div class="feature_div" :class="{feature_highlight: photographerImgPath == 1 ? true : false}">
							<tr @mouseover="featureHover('photographer', 1)">
								<td style="width: 50px">
									<div class="numbered-circle">
										<span>1</span>
									</div>
								</td>
								<td>
									<span> <strong>Match</strong> ทำให้การจ้างงานเป็นระบบ เพื่อลดการเสียโอกาสในการได้งาน ให้ลูกค้าที่อยากค้นหาคุณเจอง่ายและเร็วยิ่งขึ้น</span>
								</td>
							</tr>
						</div>
						<div class="feature_div" :class="{feature_highlight: photographerImgPath == 2 ? true : false}">
							<tr @mouseover="featureHover('photographer', 2)">
								<td style="width: 50px">
									<div class="numbered-circle">
										<span>2</span>
									</div>
								</td>
								<td>
									<span> <strong>Team</strong> ลดการเสียโอกาสในการได้งาน โดยที่คุณสามารถสร้างทีมงานของตนเอง และมีโอกาสฝึกฝนจากประสบการณ์จริง </span>
								</td>
							</tr>
						</div>
						<div class="feature_div" :class="{feature_highlight: photographerImgPath == 3 ? true : false}">
							<tr @mouseover="featureHover('photographer', 3)">
								<td style="width: 50px">
									<div class="numbered-circle">
										<span>3</span>
									</div>
								</td>
								<td>
									<span> <strong>Practice</strong> ช่วยเพิ่มประสบการณ์ใหม่ เพื่องานที่หลากหลาย </span>
								</td>
							</tr>
						</div>
					</div>
				</div>
			</div>

			<!-- <div id="customer-features" style="background-color:#DEF7F3; padding:2rem 5rem 2rem 5rem">

<div class="columns is-centered">

<div class="column" style="font-family: 'Bai Jamjuree', sans-serif;">

<tr style=" height: 3rem">

<p style="font-family: 'Prompt', sans-serif;" class="title is-4">สำหรับผู้ว่างจ้าง</p>

</tr>

<div class="feature_div2" :class="{feature_highlight2: customerImgPath == 1 ? true : false}">

<tr @mouseover="featureHover('customer', 1)">

<td style="width: 50px">

<div class="numbered-circle">

<span>1</span>

</div>

</td>

<td>

<span> <strong>Search</strong> ค้นหาคนที่ตรงใจที่มาพร้อมความสบายใจ </span>

</td>

</tr>

</div>

<div class="feature_div2" :class="{feature_highlight2: customerImgPath == 2 ? true : false}">

<tr @mouseover="featureHover('customer', 2)">

<td style="width: 50px">

<div class="numbered-circle">

<span>2</span>

</div>

</td>

<td>

<span> <strong>Network</strong> สร้างความอุ่นใจในการจ้างงานด้วย Network ของเพื่อน พร้อมมีรีวิวจากผู้จ้างจริง </span>

</td>

</tr>

</div>

<div class="feature_div2" :class="{feature_highlight2: customerImgPath == 3 ? true : false}">

<tr @mouseover="featureHover('customer', 3)">

<td style="width: 50px">

<div class="numbered-circle">

<span>3</span>

</div>

</td>

<td>

<span> <strong>Review</strong> มีรีววจากผู้ว่าจ้างคนก่อนๆให้ได้พิจารณาก่อนเลือกจ้าง </span>

</td>

</tr>

</div>

</div>

<div class="column ">

<div>

<img style="display: block; height:350px; width:100%" :src="require('./assets/profit/customer'+ customerImgPath +'.jpg')" alt="">

</div>

</div>

</div>

</div> -->

			<!-- <div class="tile is-vertical is-parent">
          <div
            class="tile is-child photo"
            style="max-height:85vh; min-height:75vh; min-width:30vw; overflow:hidden;"
          >
            <carousel
              :autoplayTimeout="3000"
              :paginationEnabled="false"
              :navigationEnabled="false"
              :loop="true"
              :autoplay="true"
              :perPage="1"
              style="width: 100%;"
            >
              <slide
                v-for="(img, index) in 4"
                :key="index"
              >
                <div class="img-bg">
                  <img
                    style="display: block;max-height: 100%; max-height:85vh; min-height:85vh;"
                    class="fit"
                    :src="'src/assets/featured/jakkrit/jakkrit_'+ (index) +'.jpg'"
                    alt=""
                  >
                </div>
              </slide>
            </carousel>

          </div>
          <div
            class="tile is-child "
            style="min-height:20px"
          >
          </div>
        </div> -->
			<!-- <div class="tile is-7 is-vertical is-parent">
          <div
            class="tile is-child"
            style="vertical-align:middle"
          >
            <span class="title is-2">แหล่งรวมตากล้องคุณภาพที่จะช่วยให้ชีวิตของคุณง่ายขึ้น</span>
            <p
              class="title is-2"
              style="line-height: 1.6"
            >something something</p>
          </div>
          <div class="tile">
            <div
              class="tile is-child photo middle-photo"
              style="margin-right:1.5rem !important; min-height:40vh"
            >
              <carousel
                :autoplayTimeout="3000"
                :paginationEnabled="false"
                :navigationEnabled="false"
                :loop="true"
                :autoplay="true"
                :perPage="1"
                style="width: 100%;height: 100%;"
              >
                <slide
                  v-for="(img, index) in 3"
                  :key="index"
                >
                  <div class="img-bg">
                    <img
                      style="display: block;max-height: 100%;"
                      class="fit"
                      :src="'src/assets/featured/pakhingroom/pakhingroom_'+ (index+1) +'.jpg'"
                      alt=""
                    >
                  </div>
                </slide>
              </carousel>
            </div>

            <div
              class="tile is-child photo"
              style="transform:translateY(-20px);min-height:30vh; max-height:30vh"
            >
              <p class="title">two.2</p>
            </div>
          </div>
        </div> -->

			<!-- <div style="background-color:#DCF7F3; padding:3rem; margin-bottom:5rem">
        <div style="padding-bottom:1rem; text-align:center">
          <span class="title is-4">MAK คือแหล่งรวมตากล้องคุณภาพ มากประสบการณ์ โดยเราเปิดให้ผู้ว่าจ้างเข้ามามองหาตากล้อง</span>
          <hr style="background-color:#FCC842">
          <p>
            คนที่มีผลงานตรงใจ ทั้งสไตล์รูป ราคา วันเวลา สถานที่ได้อย่างง่ายๆ อีกทั้งยังสามารถค้นหาตากล้องที่อยู่ในวงเพื่อน คนที่เพื่อนเคยจ้าง หรือเพื่อนของเพื่อน เพื่อเพิ่มความไว้วางใจให้กับผู้ว่าจ้าง พร้อมมีรีววจากผู้ว่าจ้างคนก่อนๆให้ได้พิจารณาก่อนเลือกจ้าง อำนวยความสะดวกให้กับทั้งตากล้องและผู้ว่าจ้าง เพื่อให้งานที่จะเกิดขึ้นนั้นเกิดความประทับใจสูงสุด
          </p>
        </div>

        <div class="level">
          <div class="level-item">
            <button class="button action-btn">Photographer</button>
          </div>
          <div class="level-item">
            <button class="button action-btn">Hiring</button>
          </div>
        </div>
      </div> -->

			<!-- <div class="columns" style="padding-bottom:5rem">
        <div class="column parent">
          <div class="desc-photo">
            <span class="icon">
              <i class="fas fa-search fa-3x"></i>
            </span>
          </div>
          <div class="desc-box center">
            <span class="title is-5"> ทำให้การหางานสะดวก ไม่วุ่นวาย ด้วย echo search </span>
            something something something something something something something something

          </div>
        </div>
        <div class="column parent">
          <div class="desc-photo">
            <span class="icon">
              <i class="fas fa-search fa-3x"></i>
            </span>
          </div>
          <div class="desc-box center">
            <span class="title is-5">สามารถหาทีมงานที่ต้องการและตรงใจได้อย่างรวดเร็ว</span>
            something something something something something something something something
          </div>
        </div>
        <div class="column parent">
          <div class="desc-photo">
            <span class="icon">
              <i class="fas fa-search fa-3x"></i>
            </span>
          </div>
          <div class="desc-box center">
            <span class="title is-5">เพิ่มพูนความรู้ ด้วยการฝึกฝนจากประสบการณ์จริง</span>
            something something something something something something something something

          </div>
        </div>
      </div> -->

			<!-- <div class="columns">
        <div class="column is-3">
          <div
            class="photo"
            style="height: 250px"
          >
          </div>
        </div>
        <div class="column is-3">
          <div
            class="photo"
            style="height: 250px"
          >
          </div>
        </div>
        <div class="column is-3">
          <div
            class="photo"
            style="height: 250px"
          >
          </div>
        </div>
        <div class="columns is-3">
          <div style="padding:2rem; height: 250px">
            <hr style="margin-top:0">
            <span class="title is-4">We're cool</span>
            <hr>
            ecosystem
            something something photographer something something something photographer something something
          </div>
        </div>
      </div> -->

			<!-- <div class="columns" style="padding: 3rem 6rem 3rem 6rem" >
        <div class="column is-1">
          <div
            class="photo"
            style="height:100%; width:20px"
          ></div>
        </div>
        <div class="column">
          ecosystem

          something something photographer something something something photographer something something something photographer something
          something something photographer something something something photographer something something something photographer something
          something something photographer something something something photographer something something something photographer something
        </div>
      </div> -->

			<div style="padding:3rem 4rem 4rem 4rem">
				<div style="font-family: 'Prompt', sans-serif; height: 30px; text-align: center; width 100%">
					<p class="title is-4"> หมวดหมู่การจ้างงาน</p>
				</div>
				<div class="tile is-ancestor">
					<div class="tile is-parent" style="padding:0; margin:1rem 0 1rem 1rem">
						<div class="tile test" style="height:100%; width: 100px">
							<img style="display: block;max-height: 100%; cursor:pointer" class="fit is-shady" :src="require('./assets/product/food.jpg')">
							<!-- <div style="position: absolute; max-height: 100%; background-color: black; opacity: 0.8; ">FOOD</div> -->

						</div>
					</div>
					<div class="tile is-parent" style="padding:0; margin:1rem">
						<div class="tile test " style="height:100%; width: 100px">
							<img style="display: block;max-height: 100%; cursor:pointer" class="fit is-shady" :src="require('./assets/product/wedding.jpg')">

						</div>
					</div>
					<div class="tile is-parent is-vertical" style="padding:0">
						<div class="tile is-parent" style="padding:0">
							<div class="tile test " style="margin:1rem 1rem 1rem 0">
								<img style="display: block;max-height: 100%; cursor:pointer" class="fit is-shady" :src="require('./assets/product/product.jpg')">

							</div>
							<div class="tile test " style="margin:1rem 1rem 1rem 0">
								<img style="display: block;max-height: 100%; cursor:pointer" class="fit is-shady" :src="require('./assets/product/architecture.jpg')">

							</div>
						</div>
						<div class="tile is-parent" style="padding:0">
							<div class="tile test " style="margin:0 1rem 1rem 0">
								<img style="display: block;max-height: 100%; cursor:pointer" class="fit is-shady" :src="require('./assets/product/graduation.jpg')">

							</div>
						</div>
					</div>
				</div>
			</div>

			<div id="signup" class="columns" style="margin: 0px">
				<div class="column" style="background-color:#FCC842; text-align:center; padding:4rem">
					<div style=" margin-bottom:2rem">
						<span class="title is-3" style="font-family: 'Prompt', sans-serif;">ECHO Community for photographer</span>
					</div>

					<br>
					<span style="font-family: 'Bai Jamjuree', sans-serif;">

						เราจะสร้างชุมชนช่างภาพของประเทศไทย เพื่อแชร์รูปภาพ แชร์ประสบการณ์ พูดคุยกันเกี่ยวกับผลงานและรูปภาพ พร้อมทั้งอำนวยความสะดวกเรื่องการจ้างงาน การหางาน ดูแลเรื่องการตัดราคาระหว่างช่างภาพ มี Market place สำหรับการเช่าซื้อขายอุปกรณ์ เพิ่มทักษะด้วยการมีคลาสเรียน และทำให้การเป็นช่างภาพไม่น่าเบื่อด้วยการแข่งขันถ่ายภาพชิงรางวัล มาร่วมสร้างชุมชนช่างภาพที่มีคุณภาพไปกับเรา ECHO

					</span>
				</div>
				<div class="column" style="padding:4rem; background-color:#DEF7F3">
					<div style="text-align:center;margin-bottom:2rem">
						<span class="title is-4" style="margin-bottom:2rem; font-family: 'Prompt', sans-serif; ">

							ลงทะเบียนก่อนเพื่อรับสิทธิพิเศษเป็น Core Membership

						</span>

					</div>
					<!-- Begin Mailchimp Signup Form -->
					<div id="mc_embed_signup" style="font-family: 'Bai Jamjuree', sans-serif;">
						<form action="https://firebaseapp.us16.list-manage.com/subscribe/post?u=ab6de5e76dce12d5da3c23b3f&amp;id=0c333339cc" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
							<div id="mc_embed_signup_scroll">

								<div class="mc-field-group">
									<label for="mce-EMAIL">Email Address </label>
									<input type="email" value="" name="EMAIL" class="input required email" id="mce-EMAIL">

								</div>
								<div class="mc-field-group">
									<label for="mce-NAME">Full Name </label>
									<input type="text" value="" name="NAME" class="input required" id="mce-NAME">

								</div>
								<div class="mc-field-group size1of2">
									<label for="mce-PHONE">Phone Number </label>
									<input type="text" name="PHONE" class="input" value="" id="mce-PHONE">

								</div>
								<!-- <div class="mc-field-group input-group">

<strong>I am a ... </strong>

<div class="control">

<label class="radio">

<input v-model="type" type="radio" value="Photographer" name="MMERGE3" id="mce-MMERGE3-0">

Photographer

</label>

<label class="radio">

<input v-model="type" type="radio" value="Customer" name="MMERGE3" id="mce-MMERGE3-1">

Customer

</label>

</div>

</div> -->
								<div id="mce-responses" class="clear">
									<div class="response" id="mce-error-response" style="display:none"></div>
									<div class="response" id="mce-success-response" style="display:none"></div>
								</div> <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
								<div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_ab6de5e76dce12d5da3c23b3f_0c333339cc" tabindex="-1" value=""></div>

								<div class="clear" style="padding:2rem">
									<input type="submit" value="ลงทะเบียนเลย" name="subscribe" id="mc-embedded-subscribe" class="button white" style=" border-color: #FAC65B; font-size:1.25rem; width:100%; font-family: 'Bai Jamjuree', sans-serif; padding-left:2rem; padding-right:2rem"></div>
							</div>
						</form>
					</div>
					<!--End mc_embed_signup-->
					<p class="title is-5" style="font-family: 'Prompt', sans-serif; text-align: center">
						- ECHO Core Membership -
					</p>
					<div class="columns" style="font-family: 'Bai Jamjuree', sans-serif;">
						<div class="column is-4" style="padding: 5px">
							<span>
								<span class="icon">
									<i class="fas fa-portrait"></i>
								</span>
								<strong>Premium Portfolio</strong>
								<br>
								<div style="padding-left: 2rem">
									Create a premium portfolio and use a custom domain
								</div>
								<br>
							</span>
						</div>
						<div class="column is-4" style="padding: 5px">
							<span>
								<span class="icon">
									<i class="fas fa-cloud-upload-alt"></i>
								</span>
								<strong>Increased Storage</strong><br>
								<div style="padding-left: 2rem">
									Increased 10GB of storage
								</div>
								<br>
							</span>
						</div>
						<div class="column is-4" style="padding: 5px;">
							<span>
								<span class="icon">
									<i class="fas fa-chart-bar"></i>
								</span>
								<strong>Google Analytics</strong>
								<br>
								<div style="padding-left: 2rem">
									Gain traffic and audience insights on your profile.
								</div>
								<br>
							</span>

						</div>
					</div>

				</div>
			</div>

			<section>
				<!-- <div class="has-text-centered" style="margin:0; width:100%; background-color:#222B22">

<span style="color:white">Our Photographers</span>

</div> -->
				<carousel :autoplayTimeout="3000" :paginationEnabled="false" :navigationEnabled="false" :loop="true" :autoplay="true" :perPage="6" style="width: 100%;">
					<slide v-for="(photo, index) in photographers" :key="index">
						<div class="img-bg">
							<a class="heading" style="transform:translateX(7px); position: absolute; z-index: 1; font-family: 'Bai Jamjuree', sans-serif; color: white">{{photo.name}}</a>
							<img style="display: block;max-height: 100%; max-height:30vh; min-height:30vh; cursor:pointer" class="fit" :src="require('./assets/featured/'+ photo.name +'.jpg')" @click="goToLink(photo.url)">

						</div>
					</slide>
				</carousel>
				<!-- <div class="has-text-centered" style="margin:0; width:100%; background-color:#222B22">

<span style="color:white">Our Photographers</span>

</div> -->
			</section>
		</div>

		<div class="footer" style="margin: 0px">
			<div class="columns">
				<div class="column">
					<span>SJ Infinite One Business Complex</span><br>
					<span>349 Vibhavadi Rangsit Rd, Khwaeng Chom Phon, </span><br>
					<span>Khet Chatuchak, Krung Thep Maha Nakhon 10900</span>
				</div>
				<div class="column">
					<span>+66 987500829</span><br>
					<span>makenoiseproduction@outlook.com</span>
				</div>
				<div class="column">
					<a style="color: #525252" class="button is-outlined" href="https://www.facebook.com/echobymakenoise">

						<span class="icon">

							<i class="fa fa-facebook-square"></i>

						</span>

						<span>Facebook</span>

					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
export default {
	data() {
		return {
			type: "",
			photographers: [
				{
					name: "pakhingroom",
					url: "https://www.facebook.com/Pakhingroom/"
				},
				{
					name: "pisut",
					url: "https://www.facebook.com/JameJumpPisut/"
				},
				{
					name: "jakkrit studio",
					url: "https://www.facebook.com/JakkritStudio/"
				},
				{
					name: "k's Gallery foto",
					url: "https://www.facebook.com/KsGalleryFT/"
				},
				{
					name: "mhoom fotoshot",
					url: "https://www.facebook.com/MhomFotoshot/"
				},
				{
					name: "mormeko",
					url: "https://www.facebook.com/mormeko/"
				},
				{
					name: "purester photographer",
					url: "https://www.facebook.com/purester/"
				}
			],
			photographerImgPath: "1",
			customerImgPath: "1"
		};
	},
	components: {
		Carousel,
		Slide
	},
	methods: {
		scrollDown(type) {
			this.type = type;
			this.$scrollTo("#signup");
		},
		scrollDownFeatures() {
			this.$scrollTo("#photog-features");
		},
		goToLink(url) {
			window.open(url, "_blank");
		},
		featureHover(type, num) {
			if (type == "photographer") {
				switch (num) {
					case 1:
						this.photographerImgPath = "1";
						break;
					case 2:
						this.photographerImgPath = "2";
						break;
					case 3:
						this.photographerImgPath = "3";
						break;
				}
			} else {
				switch (num) {
					case 1:
						this.customerImgPath = "1";
						break;
					case 2:
						this.customerImgPath = "2";
						break;
					case 3:
						this.customerImgPath = "3";
						break;
				}
			}
		}
	}
};
</script>

<style lang="scss" scoped>
html,
body {
	font-family: "Open Sans", serif;
}

.hero.is-info {
	background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
		url("assets/hero3.jpg") no-repeat center center fixed;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
}

.hero .nav,
.hero.is-success .nav {
	-webkit-box-shadow: none;
	box-shadow: none;
}

.hero .subtitle {
	padding: 3rem 0;
	line-height: 1.5;
}

@import url("https://fonts.googleapis.com/css?family=Bai+Jamjuree|Prompt");

.button.white {
	border-color: white;
	padding-left: 1rem;
	padding-right: 1rem;
	padding-bottom: 1rem;
	width: 200px;
	margin: 3px;
}

.button.white:hover {
	border-color: white;
	background-color: #fac65b;
	color: white;
	padding-left: 1rem;
	padding-right: 1rem;
	padding-bottom: 1rem;
}

.background-hero {
	background-image: url("./assets/hero3.jpg");
	background-size: 100% 100%;
	width: auto;
	/* height: ; */
}

.numbered-circle {
	color: #20406f;
	border: 1px solid #214273;
	border-radius: 50%;
	width: 30px;
	height: 30px;
	text-align: center;
	vertical-align: middle;
}

.test {
	height: 150px;
	background-color: #dcf7f3;
}

input.input {
	box-shadow: none;
	border-radius: 0;
}

img.fit {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.select:not(.is-multiple):not(.is-loading)::after,
.navbar-link::after {
	border: 3px solid #fcc842;
	border-radius: 2px;
	border-right: 0;
	border-top: 0;
	content: " ";
	display: block;
	height: 0.625em;
	margin-top: -0.25em;
	pointer-events: none;
	position: absolute;
	top: 111%;
	-webkit-transform: rotate(-45deg);
	transform: rotate(-45deg);
	-webkit-transform-origin: center;
	transform-origin: center;
	width: 0.625em;
}

.footer {
	height: 180px;
	//   background-color: #333333;
	margin-top: 3rem;
	padding-bottom: 3rem;
}

.action-btn {
	border-radius: 30px;
	width: 300px;
	height: 50px;
	font-size: large;
}

.parent {
	text-align: center;
}

.center {
	margin: auto;
}

.left {
	margin: auto auto auto 0;
}

.right {
	margin: auto 0 auto auto;
}

.photo {
	background-color: #dcf7f3;
}

.desc-photo {
	/* background-color: #dcf7f3; */
	padding: 1rem;
	/* height: 270px; */
}

.desc-box {
	width: 80%;
	/* height: 150px; */
	/* background-color: pink; */
	/* transform: translateY(-60px); */
}

@media screen and (max-width: 768px) {
	.middle-photo {
		margin: 0 !important;
	}
}

tr {
	height: 5rem;
	vertical-align: middle;
}

.feature_highlight {
	//   height: 5rem;
	//   vertical-align: middle;
	background-color: #e9f6f3;
}

.feature_highlight2 {
	//   height: 5rem;
	//   vertical-align: middle;
	background-color: white;
}

.feature_div {
	padding: 0 2rem 0 2rem;
	border-radius: 10px;
}

.feature_div2 {
	padding: 0rem 2rem 0rem 2rem;
	border-radius: 10px;
}

td {
	vertical-align: middle;
}

.is-shady {
	animation: flyintoright 0.4s backwards;
	box-shadow: rgba(0, 0, 0, 0.1) 0 1px 0;
	display: inline-block;
	position: relative;
	transition: all 0.2s ease-in-out;
}

.is-shady:hover {
	box-shadow: 0 10px 16px rgba(0, 0, 0, 0.13), 0 6px 6px rgba(0, 0, 0, 0.19);
}

strong {
	color: #20406f;
	font-size: larger;
}

.downArrow {
	position: absolute;
	bottom: 10%;
	left: 50%;
}

.bounce {
	-moz-animation: bounce 3s infinite;
	-webkit-animation: bounce 3s infinite;
	animation: bounce 3s infinite;
}

@-moz-keyframes bounce {
	0%,
	20%,
	50%,
	80%,
	100% {
		-moz-transform: translateY(0);
		transform: translateY(0);
	}

	40% {
		-moz-transform: translateY(-30px);
		transform: translateY(-30px);
	}

	60% {
		-moz-transform: translateY(-15px);
		transform: translateY(-15px);
	}
}

@-webkit-keyframes bounce {
	0%,
	20%,
	50%,
	80%,
	100% {
		-webkit-transform: translateY(0);
		transform: translateY(0);
	}

	40% {
		-webkit-transform: translateY(-30px);
		transform: translateY(-30px);
	}

	60% {
		-webkit-transform: translateY(-15px);
		transform: translateY(-15px);
	}
}

@keyframes bounce {
	0%,
	20%,
	50%,
	80%,
	100% {
		-moz-transform: translateY(0);
		-ms-transform: translateY(0);
		-webkit-transform: translateY(0);
		transform: translateY(0);
	}

	40% {
		-moz-transform: translateY(-30px);
		-ms-transform: translateY(-30px);
		-webkit-transform: translateY(-30px);
		transform: translateY(-30px);
	}

	60% {
		-moz-transform: translateY(-15px);
		-ms-transform: translateY(-15px);
		-webkit-transform: translateY(-15px);
		transform: translateY(-15px);
	}
}
</style>
