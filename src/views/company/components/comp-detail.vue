<!--
 * @Author: Taylor Swift
 * @Date: 2021-06-21 08:44:26
 * @LastEditTime: 2021-06-21 17:02:23
 * @Description:
-->
<template>
  <div class="company-banner">
    <div class="company-info wrapper">
      <div class="company-logo">
        <img
          src="https://img.bosszhipin.com/beijin/mcs/bar/20191211/cff98890aeac18b0f4dee3577d92d543be1bd4a3bd2a63f070bdbdada9aad826.jpg?x-oss-process=image/resize,w_120,limit_0"
          alt=""
        />
      </div>
      <div class="info-primary sllipsis">
        <p class="name">阿里巴巴</p>
        <p class="sign ellipsis">
          {{ '10000人以上' }}<em class="dot"></em>{{ '互联网' }}
        </p>
      </div>
    </div>
  </div>
  <div class="wrapper">
    <div class="company-content">
      <div class="job-sec">
        <h3>简介</h3>
        <div class="text">
          阿里巴巴集团的使命是让天下没有难做的生意。
          我们旨在赋能企业改变营销、销售和经营的方式。我们为商家、品牌及其他企业提供基本的互联网基础设施以及营销平台，让其可借助互联网的力量与用户和客户互动。我们的业务包括核心电商、云计算、数字媒体和娱乐以及创新项目和其他业务。我们并通过子公司菜鸟网络及所投资的关联公司口碑，参与物流和本地服务行业，同时与蚂蚁金融服务集团有战略合作，该金融服务集团主要通过中国领先的第三方网上支付平台支付宝运营。
        </div>
      </div>
      <div class="job-sec">
        <h3>在招职位</h3>
        <ul class="jobs-list">
          <li>
            <div class="job-head">
              <span>{{ '前端' }}</span>
              <span class="addr">{{ '杭州' }}</span>
            </div>
            <div class="job-primary">
              <span class="salary">{{ '150~200元/天' }}</span>
              <span class="edu">{{ '大专' }}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.company-banner {
  width: 100%;
  background-color: #444c5f;
  height: 166px;
  padding: 29px 0;
  box-sizing: border-box;
  .company-info {
    display: flex;
    .company-logo {
      width: 103px;
      height: 103px;
      border-radius: 5px;
      overflow: hidden;
      margin-right: 20px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}

.info-primary {
  flex: 1;
  display: flex;
  flex-direction: column;
  color: $white;
  .name {
    font-size: 30px;
    line-height: 1.6;
    font-weight: 800;
  }
  .sign {
    font-size: 20px;
    color: rgba(255, 255, 255, 0.7);
    .dot {
      display: inline-block;
      width: 2px;
      height: 2px;
      border-radius: 100%;
      vertical-align: middle;
      margin: 0 7px;
      background-color: rgba(255, 255, 255, 0.7);
    }
  }
}

.company-content {
  max-width: 880px;
  padding-top: 30px;
  .job-sec {
    margin-bottom: 25px;
    h3 {
      font-size: 16px;
      font-weight: 800;
      color: #444c5f;
      position: relative;
      margin-bottom: 20px;
      &::after {
        content: '';
        width: 15px;
        height: 3px;
        display: block;
        position: absolute;
        background: $primary-color;
        bottom: -6px;
      }
    }
    .text {
      word-break: break-all;
      word-wrap: break-word;
      line-height: 30px;
      font-size: 15px;
    }
  }
}

.jobs-list {
  li {
    height: 70px;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #eee;
    padding: 10px 0 4px 14px;
    cursor: pointer;
    margin-bottom: 15px;
    &:hover {
      box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    }
    .job-head {
      font-size: 16px;
      color: $primary-color;
      line-height: 26px;
      margin-bottom: 10px;
      .addr {
        margin-left: 15px;
        &::after {
          content: ']';
        }
        &::before {
          content: '[';
        }
      }
    }

    .job-primary {
      font-size: 16px;
      .salary {
        color: $red;
        margin-right: 15px;
      }
    }
  }
}
</style>
