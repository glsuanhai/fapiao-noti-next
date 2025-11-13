import { useEffect } from 'react'

/**
 * 百度统计追踪组件
 * 在页面加载时注入百度统计代码
 */
export default function BaiduAnalytics() {
  useEffect(() => {
    // 确保只在客户端执行
    if (typeof window === 'undefined') {
      return
    }

    // 百度统计代码
    const script = document.createElement('script')
    script.innerHTML = `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?1ccb1a09807fe753ed38ab1f8c63d72f";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
    `
    document.head.appendChild(script)
  }, [])

  // 不渲染任何内容
  return null
}
