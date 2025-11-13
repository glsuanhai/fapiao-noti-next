import Script from 'next/script'

/**
 * 百度统计追踪组件
 * 使用 Next.js Script 组件确保在静态导出时也能正确注入
 */
export default function BaiduAnalytics() {
  return (
    <>
      <Script
        id="baidu-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            var _hmt = _hmt || [];
            (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?1ccb1a09807fe753ed38ab1f8c63d72f";
              var s = document.getElementsByTagName("script")[0]; 
              s.parentNode.insertBefore(hm, s);
            })();
          `
        }}
      />
    </>
  )
}
