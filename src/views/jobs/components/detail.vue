<!--
 * @Author: Taylor Swift
 * @Date: 2021-06-17 10:54:15
 * @LastEditTime: 2021-06-21 09:55:44
 * @Description:
-->

<template>
  <div class="job-detail-container">
    <div class="job-detail">
      <div class="job-header">
        <span>阿里巴巴职位</span>
      </div>
      <div class="job-info">
        <span>杭州</span>
        <span class="inline"></span>
        <span>大专</span>
      </div>
      <div class="job-title">职位描述</div>
      <div class="job-content">
        1、带领算法团队攻坚ToB领域相关的AI算法，做ToB场景和数据集下的产品智能化改造；<br />
        2、深入理解业务，准确分析问题，研发适合的算法与策略，提升产品的用户体验和发挥数据的最大价值；<br />
        3、参与打造智能SaaS产品，产品包含但不限于以下算法方向：推荐、图像、NLP、知识图谱等；<br />
        4、负责算法团队的人员培养，业务能力提升与开发效率的不断优化。<br />
      </div>
      <div class="job-title">职位要求</div>
      <div class="job-content">
        1、本科及以上学历，5年以上算法领域工作经验，2年以上管理经验；<br />
        2、拥有强悍的编码能力、优秀的分析问题能力和解决问题能力，对解决具有挑战性问题充满激情；<br />
        3、有扎实的编程基础和算法功底，熟悉传统机器学习、深度学习算法和具体落地；<br />
        4、责任心强，积极主动，有良好的沟通能力和团队合作能力；善于从复杂的问题中快速找到最佳的落地路径；<br />
        5、有SaaS领域AI产品研发经验者优先。
      </div>

      <div class="post-btn">
        <el-button round type="primary">投递</el-button>
      </div>
    </div>
    <div class="job-sider">
      <div class="title">公司基本信息</div>
      <div class="company-info">
        <div class="left-img">
          <img
            src="https://img.bosszhipin.com/beijin/mcs/chatphoto/20170622/c17c4cb5f2e6d5872586361b66bcf7607a2c74a0a4b16db27ca0802214e17896.jpg?x-oss-process=image/resize,w_120,limit_0"
            alt=""
          />
        </div>
        <router-link class="comp-name" target="_blank" to="/company/detail/1"
          >阿里巴巴</router-link
        >
      </div>
      <p>
        <i class="el-icon-user"></i>
        {{ '500-999人' }}
      </p>
      <p>
        <i class="el-icon-menu"></i>
        {{ '公司类型' }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
  name: 'JobsDetail',
  setup() {
    const route = useRoute()
    const router = useRouter()
    return {
      route,
      router,
    }
  },
})
</script>

<style lang="scss" scoped>
.job-detail-container {
  display: flex;
}
.job-sider {
  width: 280px;
  margin-top: 60px;
  p {
    line-height: 20px;
    margin-bottom: 25px;
    font-size: 18px;
    i {
      margin-right: 20px;
    }
  }
  .title {
    line-height: 1.7;
    margin-bottom: 25px;
    font-size: 16px;
    font-weight: 600;
    color: #1f2329;
  }
  .company-info {
    display: flex;
    align-items: center;
    margin-bottom: 26px;
    .left-img {
      width: 60px;
      height: 60px;
      border-radius: 10px;
      margin-left: 10px;
      margin-right: 14px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .comp-name {
      font-size: 16px;
      &:hover {
        color: $primary-color;
      }
    }
  }
}
.job-detail {
  max-width: 800px;
  flex: 1;
  min-height: 600px;
  margin: 60px 0 110px 60px;
  font-size: 16px;
  .job-header {
    font-weight: 800;
    margin-bottom: 10px;
    font-size: 30px;
    color: #1f2329;
  }
  .job-info {
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
    .inline {
      width: 1px;
      height: 12px;
      display: inline-block;
      background: #bbbfc4;
      margin: 0 8px;
    }
  }
  .job-title {
    margin: 50px 0 8px;
    font-size: 21px;
    color: #1f2329;
    line-height: 1.6;
    font-weight: 700;
  }

  .job-content {
    line-height: 2em;
    white-space: pre-line;
    font-size: 14px;
  }

  .post-btn {
    margin: 50px 0;
    :deep(.el-button) {
      min-width: 120px;
    }
  }
}
</style>
