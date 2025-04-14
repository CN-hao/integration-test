// 菜单配置
import type {Menu} from "@/entity/menu.ts";

export const menus = [
  {
    name: '首页',
    url: '/',
    icon: 'bi bi-house-door',
  },
  {
    name: '项目管理',
    url: '/project',// 这里使用post，不使用article，post 偏向博客类型、注重时间，而article偏向内容，比较正式
    icon: 'bi bi-file-text',
  },
  {
    name: '个人中心',
    url: '/person-center',
    icon: 'bi bi-person',
  }
] as Array<Menu>;
