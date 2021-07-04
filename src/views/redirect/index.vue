<!--
 * @Author: Taylor Swift
 * @Date: 2021-07-03 18:43:49
 * @LastEditTime: 2021-07-03 18:45:00
 * @Description:
-->

<!--
 * @Author: Taylor Swift
 * @Date: 2021-06-08 15:38:18
 * @LastEditTime: 2021-06-08 18:21:34
 * @Description: 重定向  带有动画效果
-->

<script lang="ts">
import { defineComponent, onBeforeMount } from 'vue'
import { useRoute, useRouter } from 'vue-router'
export default defineComponent({
  name: 'RouterTransition',
  setup() {
    const route = useRoute()
    const router = useRouter()
    onBeforeMount(() => {
      console.log('redirect onbeforeunmount')
      const { query, params } = route
      const { path } = params
      router.replace({
        path: '/' + (Array.isArray(path) ? path.join('/') : path),
        query,
      })
    })
  },
})
</script>
