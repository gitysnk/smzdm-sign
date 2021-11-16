/**
 * 项目配置表
 * 邮件推荐使用qq邮箱，其他邮箱可能协议方面要自行设置
 * xuess<wuniu2010@126.com>
 * 2018-04-17
 */

// email 登陆账号 如：xxxx@qq.com
const emailName = 'xxxx@qq.com';
// email 登陆密码
const emailPassword = 'aaaaabbbb';
// 接收者 邮箱
const toEmail = 'xxx@qq.com';

//用于签到的 账号信息 列表
const cookieListValKey = [
	{
		'username': '非必填，用户发送邮件展示',
		'phone': '非必填，用户发送邮件展示',
		'cookies': 'r_sort_type=score; smzdm_user_source=ABABE7CAD61E7E740C8B74CE91D5BF0A; userId=snakemany|9291842396; device_id=6628455191623897212419111dbb12ebeb18280bf7826b76396061156; sensorsdata2015jssdkcross={"distinct_id":"9291842396","first_id":"17336b04012506-0b9c38aeb62f7b-4353760-2073600-17336b04013862","props":{"$latest_traffic_source_type":"直接流量","$latest_search_keyword":"未取到值_直接打开","$latest_referrer":"","$latest_landing_page":"https://www.smzdm.com/"},"$device_id":"17336b04012506-0b9c38aeb62f7b-4353760-2073600-17336b04013862"}; Hm_lvt_9b7ac3d38f30fe89ff0b8a0546904e58=1626787636,1626832876,1627354554,1627526656; _ga=GA1.2.1078318719.1572530293; _ga_09SRZM2FDD=GS1.1.1627526656.8.1.1627526702.0; homepage_sug=d; sess=AT-n8nhOECUlSm16P1UQF3BgOgxBjT96brLpPE26QvaGUEsLe/uQ05aWz9XgLXbR7Uu8L60TxGyTAOw5PgfxR6Bp8GXn2yQwEmDDnTdvv1y6k6qNCcG55Smkr4=; user=snakemany|9291842396; smzdm_id=9291842396; __ckguid=nTI3xYas2vJAfi6iawPnfi6; __jsluid_s=82c78921ba13c541ec44ba29d1441946; __jsluid_h=21632ea7c9109c1c84f64a1cc6be7a0c; _zdmA.uid=ZDMA.vUw0Cgy0f.1636984374.2419200; _zdmA.vid=*; footer_floating_layer=0; ad_date=15; bannerCounter=[{"number":0,"surplus":1},{"number":0,"surplus":1},{"number":0,"surplus":1},{"number":0,"surplus":1},{"number":0,"surplus":1},{"number":0,"surplus":1}]; ad_json_feed={}; _zdmA.time=1636984399002.22875.https://www.smzdm.com/; smzdm_user_view=827C6BD077F4AF85877482E5E6F29297'
	},
];


//回复列表 用于发表评论的内容
let commitList = [
	'很不错zsbd',
	'现在这个价格还可入手吗？',
	'感谢爆料，价格不错~~',
];

module.exports = {
	emailName,
	emailPassword,
	toEmail,
	cookieListValKey,
	commitList
};
