/**
 * google蜘蛛
 */
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-72013003-1', 'auto');
ga('send', 'pageview');

/**
 * 百度自动推送
 */
(function(){
    var bp = document.createElement('script');
    bp.src = '//push.zhanzhang.baidu.com/push.js';
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
})();

/**
 * 360蜘蛛
 */
(function(){
   var src = (document.location.protocol == "http:") ? "http://js.passport.qihucdn.com/11.0.1.js?e8185a3fc0b863eb0f7bd12108258442":"https://jspassport.ssl.qhimg.com/11.0.1.js?e8185a3fc0b863eb0f7bd12108258442";
   document.write('<script src="' + src + '" id="sozz"><\/script>');
})();
