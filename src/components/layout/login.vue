<template>
  <div class="bord">
    <div class="title">
      <a-image
        class="title-image"
        src="src\components\icons\tianji.png"
      />
    </div>
    <div class="contentStyle">
      <a-space direction="vertical" size="large" v-if="false">
        <a-radio-group v-model="status" type="button">
          <a-radio value="validating">validating</a-radio>
          <a-radio value="success">success</a-radio>
          <a-radio value="error">error</a-radio>
          <a-radio value="warning">warning</a-radio>
        </a-radio-group>
        <a-radio-group v-model="size" type="button">
          <a-radio value="mini">mini</a-radio>
          <a-radio value="small">small</a-radio>
          <a-radio value="medium">medium</a-radio>
          <a-radio value="large">large</a-radio>
        </a-radio-group>
      </a-space>
      <a-form class="login-form" :model="form" :size="size">
        <a-form-item
          field="account"
          label="账号"
          class="account"
          :validate-status="status"
          feedback
        >
          <a-input
            v-model="form.name"
            :style="{ width: '100%' }"
            placeholder="请输入你的账号"
          />
        </a-form-item>
        <a-form-item
          field="password"
          label="密码"
          :validate-status="status"
          feedback
        >
          <a-input-password
            v-model:visibility="visibility"
            placeholder="请输入你的密码"
            :style="{ width: '100%' }"
            :defaultVisibility="false"
            allow-clear
          />
        </a-form-item>
        <a-form-item
          field="validate"
          label="验证码"
          :validate-status="validate"
          feedback
        >
          <a-input-password
            v-model:visibility="visibility"
            placeholder="请点击右侧验证码预览"
            :style="{ width: '100%' }"
            :defaultVisibility="false"
            allow-clear
          />
          <a-image
            width="30"
            src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp"
          />
        </a-form-item>
        <!-- <a-space direction="vertical" size="large"></a-space>
        <a-form-item
          field="sex"
          label="性别"
          class="sex"
          :rules="[{ match: /section one/, message: '务必选择一个' }]"
          :validate-status="status"
          feedback
        >
          <a-select
            v-model="form.section"
            placeholder="请选择您的性别"
            :style="{ width: '100%' }"
          >
            <a-option value="1">男</a-option>
            <a-option value="2">女</a-option>
            <a-option value="3">不详</a-option>
          </a-select>
        </a-form-item>
        <a-form-item
          field="birthDay"
          label="出生日期"
          :validate-status="status"
          feedback
        >
          <a-date-picker :style="{ width: '100%' }"></a-date-picker>
        </a-form-item> -->
      </a-form>
      <a-button type="primary" long style="width: 40%; margin-left: 10%" @click="goHome">登录</a-button
 >
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useRouter } from 'vue-router';

const router = useRouter();

const goHome = () => {
  console.log("按钮被点击了");
  router.push('/home');
};

const status = ref("success");
const size = ref("medium");
const form = reactive({
  name: "",
  post: undefined,
  tags: ["tag1"],
  section: "",
});
</script>

<style>
.bord {
  /* 弹跳动画 */
  animation: bounce 1s ease;
  background-color: white;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5); /* 添加阴影 */
  border-radius: 2vh;
  width: 40%;
  height: 50%;
  display: flex;
  flex-direction: column; /* 垂直方向排列 */
}

.title {
  margin-left: 30px;
  margin-top: 30px;
  display: flex;
  justify-content: left;
  align-items: center;
  color: white;
  width: 100%;
  height: 10%;
  font-size: 1.5em; /* 适当调整字体大小 */
}

.contentStyle {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
}

.login-form {
  display: flex;
  width: 50%;
  margin-bottom: 5%;
}

.title-image {
  display: flex;
  height: "100%";
  width: "50%";
  align-items: center;
  position: relative;
  display: inline-block;
  justify-content: center;
}
@keyframes bounce {
  0% {
    transform: translateY(-2000px);
  }
  10% {
    transform: translateY(-10px);
  }
  20% {
    transform: translateY(-300px);
  }
  30% {
    transform: translateY(0px);
  }
  40% {
    transform: translateY(-100px);
  }
  50% {
    transform: translateY(0px);
  }
  60% {
    transform: translateY(-30px);
  }70% {
    transform: translateY(0px);
  }80% {
    transform: translateY(-10px);
  }90% {
    transform: translateY(0px);
  }
  95% {
    transform: translateY(-3px);
  }
  100% {
    transform: translateY(-0px);
  }
}
</style>
