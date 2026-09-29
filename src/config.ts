import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

/**
 * 网站基础配置
 */
export const siteConfig: SiteConfig = {
	// 网站标题
	title: "O0521",

	// 网站副标题
	subtitle: "生命在于折腾",

	// 网站语言
	lang: "zh_CN",

	// 主题颜色
	themeColor: {
		// 主题色 Hue，0~360
		// 当前使用偏蓝紫色
		hue: 250,

		// 是否允许访客修改主题色
		// false = 允许
		fixed: false,
	},

	// 首页 Banner
	banner: {
		// 暂时关闭 Banner
		enable: false,

		// 以后想加 Banner 可以改这里
		src: "assets/images/demo-banner.png",

		position: "center",

		credit: {
			enable: false,
			text: "",
			url: "",
		},
	},

	// 文章目录
	toc: {
		// 在文章页面显示右侧目录
		enable: true,

		// 显示到二级标题
		depth: 2,
	},

	// 网站图标
	// 暂时使用 Fuwari 默认 favicon
	favicon: [],
};

/**
 * 顶部导航栏
 */
export const navBarConfig: NavBarConfig = {
	links: [
		// 首页
		LinkPreset.Home,

		// 文章归档
		LinkPreset.Archive,

		// 关于
		LinkPreset.About,

		// GitHub
		{
			name: "GitHub",
			url: "https://github.com/QFgood",
			external: true,
		},
	],
};

/**
 * 首页个人信息
 */
export const profileConfig: ProfileConfig = {
	// 暂时继续使用 Fuwari 默认头像
	// 后面可以换成你自己的图片
	avatar: "assets/images/demo-avatar.png",

	// 名称
	name: "O0521",

	// 个人简介
	bio: "生命在于不断折腾新鲜事物",

	// 社交链接
	links: [
	{
		name: "GitHub",
		icon: "fa6-brands:github",
		url: "https://github.com/QFgood",
	},
	{
		name: "Bilibili",
		icon: "fa6-brands:bilibili",
		url: "https://space.bilibili.com/521013857",
	},
};

/**
 * 文章许可证
 */
export const licenseConfig: LicenseConfig = {
	// 开启文章版权信息
	enable: true,

	// CC BY-NC-SA 4.0
	name: "CC BY-NC-SA 4.0",

	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

/**
 * 代码块配置
 */
export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// GitHub Dark 风格代码高亮
	theme: "github-dark",
};
