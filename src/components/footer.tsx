import { computed, defineComponent } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { version } from '@/package.json';
import useFooter from '@hooks/useFooter';
// import { getDevice } from '@utils/device';
import fhzsn_white from '@assets/fhzsn_white.png';
import wesleyLogo from '@assets/source/wesley.svg';
import '@style/footer.scss';
import { FooterData, FooterItem } from '../types';
// SVG 箭头图标组件
// const ArrowIcon = () => (
//   <svg viewBox="0 0 300 250" width="24" height="24" style={{ fill: '#ffffff', flexShrink: 0 }}>
//     <path d="M17,3h2c0.386,0 0.738,0.223 0.904,0.572c0.166,0.349 0.115,0.762 -0.13,1.062l-8.482,10.366l8.482,10.367c0.245,0.299 0.295,0.712 0.13,1.062c-0.165,0.35 -0.518,0.571 -0.904,0.571h-2c-0.3,0 -0.584,-0.135 -0.774,-0.367l-9,-11c-0.301,-0.369 -0.301,-0.898 0,-1.267l9,-11c0.19,-0.231 0.474,-0.366 0.774,-0.366z" />
//   </svg>
// );

// 移动端固定菜单项配置
// const MOBILE_SECTIONS = [
//   {
//     title: '媒体部',
//     links: [
//       { label: '介绍', href: 'https://i.sdzzmtb.cn/about-MTB' },
//       { label: '加入我们', href: 'https://i.sdzzmtb.cn/join-us' },
//       { label: '<广告位招租>', href: 'javascript:void(0)' },
//     ],
//   },
//   {
//     title: '服务与支持',
//     links: [
//       { label: '共享网盘', href: 'https://i.sdzzmtb.cn/share-network-disk' },
//       { label: '统一认证系统', href: 'http://10.3.146.13/' },
//       { label: '媒体部OA', href: 'http://10.3.146.12/' },
//     ],
//   },
//   {
//     title: '媒体账号',
//     links: [
//       {
//         label: '微信公众号',
//         href: 'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=Mzg2MjYwMDE4MA==&scene=124#wechat_redirect',
//       },
//       { label: 'Bilibili', href: 'https://space.bilibili.com/257175059' },
//       {
//         label: '全媒体中心公众号',
//         href: 'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzkxNjI4MDk4MQ==&scene=124#wechat_redirect',
//       },
//     ],
//   },
//   {
//     title: '友情链接',
//     links: [
//       { label: '影视飓风', href: 'https://www.ysjf.com/' },
//       { label: '顺德中专门户网站', href: 'http://sdzz.net/' },
//       { label: '顺德区教育局', href: 'http://sdedu.net/' },
//     ],
//   },
// ];

export default defineComponent({
  name: 'Footer',
  setup() {
    const { footerList } = useFooter();
    // const { isMobile } = getDevice();
    const route = useRoute();
    const router = useRouter();
    const footerConfig = computed<FooterData>(() => {
      return route.query?.testData && route?.meta?.test
        ? (JSON.parse(route.query?.testData as string) as FooterData)
        : footerList.value;
    });
    const crList = [
      '顺德区中等专业学校、顺德区技工学校 团委学生会',
      '顺德中专影视创作基地：媒体部',
      '顺德中专全媒体中心',
    ];

    const pushRouter = (path: string) => {
      router.push(path);
    };

    // 通用链接渲染方法
    const renderLink = (item: FooterItem, index: number) => (
      <a
        key={index}
        target={item.isRouter ? '' : item.target}
        href={item.isRouter ? 'javascript:void(0)' : item.href}
        onClick={() => {
          pushRouter(item.href as string);
        }}
      >
        {item.label}
      </a>
    );

    // PC端内容渲染
    const renderDesktop = () => (
      <div class="pc" style={{ justifyContent: 'center' }}>
        {footerConfig.value?.links
          ?.sort((a, b) => (a?.orders ?? 0) - (b?.orders ?? 0))
          .map((section, index) => (
            <div class="Footer-subfooterdiv" key={`desktop-${index}`}>
              <h2>{section.title || `项目${index + 1}`}</h2>
              <div class="Footer-subtag">{section.children?.map(renderLink)}</div>
            </div>
          ))}
        <div class="Footer-subfooterdiv find-us">
          <h2>找到我们</h2>
          <div class="clearfix">
            <h3>办公楼 一楼 德育处主任室 旁</h3>
            <p>工作时间：08:00～21:30</p>
          </div>
        </div>
      </div>
    );

    // 移动端内容渲染
    // const renderMobile = () => (
    //   <div class="mobile" style={{ justifyContent: 'center' }}>
    //     {MOBILE_SECTIONS.map((section, index) => (
    //       <div class="Footer-subfooterdiv" key={`mobile-${index}`}>
    //         <div class="arrow">
    //           <h2>{section.title}</h2>
    //           <ArrowIcon />
    //         </div>
    //         <div class="Footer-subtag">
    //           {section.links.map((link, idx) => (
    //             <a key={idx} target="_self" href={link.href}>
    //               {link.label}
    //             </a>
    //           ))}
    //         </div>
    //       </div>
    //     ))}
    //     <div class="Footer-subfooterdiv find-us">
    //       <h2>找到我们↓</h2>
    //       <div class="clearfix">
    //         <h3>办公楼 一楼 德育处主任室 旁</h3>
    //         <p>工作时间：08:00～21:30</p>
    //       </div>
    //     </div>
    //   </div>
    // );

    return () => (
      <div class="footer">
        <div class="wrap">
          {/* {isMobile ? renderMobile() : renderDesktop()} */}
          {renderDesktop()}

          <div class="Footer-bootom">
            <a href="javascript:void(0)">
              <img alt="logo" src={fhzsn_white} width="200" style={{ display: 'block' }} />
            </a>
            <div class="links">{footerConfig.value?.list?.map(renderLink)}</div>
          </div>

          <div class="copyright">
            <div class="items">
              <span style={copyrightStyles}>
                Copyright © 2025-2026
                <img src={wesleyLogo} style={{ width: '48px' }} alt="wesley-logo" />
                &amp; MTB. All Rights Reserved.
              </span>
              <div class="becareful">
                {crList.map((text, idx) => (
                  <span key={`text-${idx}`}>{text}</span>
                ))}
              </div>
              <span style={versionStyles}>
                城轨222 文俊亮 提供服务与支持
                <span class="PackageVersion">v{version}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  },
});

// 样式常量
const copyrightStyles = {
  display: 'flex',
  gap: '4px',
  alignItems: 'center',
  flexWrap: 'nowrap' as const,
  whiteSpace: 'nowrap' as const,
};

const versionStyles = {
  textWrap: 'nowrap' as const,
  display: 'flex',
  flexDirection: 'row' as const,
  gap: '4px',
};
