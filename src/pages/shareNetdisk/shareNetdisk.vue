<template>
  <router-view />
  <div>
    <div style="height: 78px"></div>
    <!--header-->
    <MTBHeader
      :fixed="true"
      :hidden-toppic="true"
      :use-custom-data="headerConfig"
    />
    <!---->
    <t-dialog
      v-model:visible="dialogVisible"
      :confirm-btn="null"
      :cancel-btn="null"
      :close-btn="false"
      header="顺德中专团委媒体部 共享网盘"
      width="45%"
    >
      <template #body>
        <!--TagBadge-->
        <div style="margin-bottom: 16px">
          <t-space size="small">
            <a href="https://tdesign.tencent.com/" target="_blank">
              <img
                src="https://img.shields.io/badge/腾讯企业级设计体系-grey?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1LjAwNDEgMzcuMDAwMUg4LjUyODE2QzguNDIwODggMzcgOC4zMTQ4NyAzNi45NzY5IDguMjE3MjggMzYuOTMyNEM4LjExOTY5IDM2Ljg4NzkgOC4wMzI3OCAzNi44MjI5IDcuOTYyNCAzNi43NDE5QzcuODkyMDMgMzYuNjYxIDcuODM5ODMgMzYuNTY1OSA3LjgwOTMyIDM2LjQ2M0M3Ljc3ODgxIDM2LjM2MDIgNy43NzA3IDM2LjI1MiA3Ljc4NTUzIDM2LjE0NTdMOS4wNDcxOSAyOS4wMjI5SDE3LjAzMjRMMTUuNzMwOCAzNi40MDEzQzE1LjY5NjIgMzYuNTY5IDE1LjYwNTIgMzYuNzE5OSAxNS40NzMxIDM2LjgyODhDMTUuMzQwOSAzNi45Mzc4IDE1LjE3NTQgMzYuOTk4MiAxNS4wMDQxIDM3LjAwMDFaIiBmaWxsPSIjMDA5QkZGIi8+CjxwYXRoIGQ9Ik0zMy4yMzQxIDEyLjk4ODVIMTEuODY1N0wxMy4yNzExIDUuMDAzMzZIMzQuMzUyQzM0LjQ2NzQgNC45OTIzNCAzNC41ODM5IDUuMDA4NSAzNC42OTE5IDUuMDUwNTZDMzQuOCA1LjA5MjYyIDM0Ljg5NjcgNS4xNTk0IDM0Ljk3NDQgNS4yNDU1NkMzNS4wNTIgNS4zMzE3MiAzNS4xMDgzIDUuNDM0ODYgMzUuMTM4OSA1LjU0NjcyQzM1LjE2OTUgNS42NTg1OCAzNS4xNzM1IDUuNzc2MDUgMzUuMTUwNSA1Ljg4OTcyTDMzLjk2ODcgMTIuMzg5N0MzMy45MzY3IDEyLjU2MDIgMzMuODQ1NCAxMi43MTM4IDMzLjcxMDkgMTIuODIzNEMzMy41NzY0IDEyLjkzMyAzMy40MDc1IDEyLjk5MTUgMzMuMjM0MSAxMi45ODg1WiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzczNl8xMDUpIi8+CjxwYXRoIGQ9Ik0xMS44NjU4IDEyLjk4NzRINC43NTg5OUM0LjY1MDI2IDEyLjk4ODYgNC41NDI1NyAxMi45NjYyIDQuNDQzMzYgMTIuOTIxN0M0LjM0NDE2IDEyLjg3NzIgNC4yNTU4MSAxMi44MTE2IDQuMTg0NDIgMTIuNzI5NkM0LjExMzA0IDEyLjY0NzYgNC4wNjAzMiAxMi41NTEgNC4wMjk5MyAxMi40NDY3QzMuOTk5NTMgMTIuMzQyMyAzLjk5MjE4IDEyLjIzMjUgNC4wMDgzOCAxMi4xMjVMNS4xNjYyMyA1LjYxNzA2QzUuMTk3ODYgNS40NDUwMyA1LjI4ODU4IDUuMjg5NDUgNS40MjI3MSA1LjE3NzE5QzUuNTU2ODQgNS4wNjQ5MyA1LjcyNTk2IDUuMDAzMDMgNS45MDA4NyA1LjAwMjJIMTMuMjcxMkwxMS44NjU4IDEyLjk4NzRaIiBmaWxsPSIjMDA2NEZGIi8+CjxwYXRoIGQ9Ik0xNy4wNDAyIDI4Ljk5ODdIOS4wMzkwNkwxMS44NjU4IDEzLjAwNDRIMTkuODY3TDE3LjA0MDIgMjguOTk4N1oiIGZpbGw9InVybCgjcGFpbnQxX2xpbmVhcl83MzZfMTA1KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzczNl8xMDUiIHgxPSIxMi41NTEiIHkxPSI5LjAwMzk0IiB4Mj0iMzMuODU5OCIgeTI9IjEyLjgzOTUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agb2Zmc2V0PSIwLjAzIiBzdG9wLWNvbG9yPSIjRTlGRkZGIi8+CjxzdG9wIG9mZnNldD0iMC4xNyIgc3RvcC1jb2xvcj0iI0M0RkFDOSIvPgo8c3RvcCBvZmZzZXQ9IjAuMzMiIHN0b3AtY29sb3I9IiNBMEY2OTQiLz4KPHN0b3Agb2Zmc2V0PSIwLjQ4IiBzdG9wLWNvbG9yPSIjODJGMjY5Ii8+CjxzdG9wIG9mZnNldD0iMC42MyIgc3RvcC1jb2xvcj0iIzZBRUY0NyIvPgo8c3RvcCBvZmZzZXQ9IjAuNzYiIHN0b3AtY29sb3I9IiM1QUVEMkYiLz4KPHN0b3Agb2Zmc2V0PSIwLjg5IiBzdG9wLWNvbG9yPSIjNEZFQjIwIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzRDRUIxQiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MV9saW5lYXJfNzM2XzEwNSIgeDE9IjE1Ljg1NjciIHkxPSIxMi40MjE1IiB4Mj0iMTYuMDA3OCIgeTI9IjI3LjQ3MDIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzAwOUJGRiIvPgo8c3RvcCBvZmZzZXQ9IjAuMzUiIHN0b3AtY29sb3I9IiMwMDgxRkUiLz4KPHN0b3Agb2Zmc2V0PSIwLjc1IiBzdG9wLWNvbG9yPSIjMDA2QUZEIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAwNjJGRCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo="
              />
            </a>
            <a href="https://python.org/" target="_blank" title="API服务框架">
              <img
                src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=%23fff"
              />
            </a>
            <a href="https://cn.vuejs.org/" target="_blank" title="主体框架">
              <img
                src="https://img.shields.io/badge/Vue--Next-grey?style=for-the-badge&logo=vue.js"
              />
            </a>
            <a
              href="https://cn.vitejs.dev/guide/ssr.html"
              target="_blank"
              title="主要使用框架"
            >
              <img
                src="https://img.shields.io/badge/Vite_SSR-646CFF?style=for-the-badge&logo=vite&logoColor=%23fff"
              />
            </a>
            <img
              src="https://img.shields.io/badge/Wesley-20B2AA?style=for-the-badge"
            />
          </t-space>
        </div>
        <!--bodyContent-->
      </template>
    </t-dialog>
    <!--取件码弹窗-->
    <t-dialog
      v-model:visible="pickUpCodeDialogVisible"
      :confirm-btn="null"
      :cancel-btn="null"
      width="40%"
    >
      <template #header>
        <div style="display: flex; flex-direction: row; align-items: center">
          <span>使用『取件码』获取文件</span>
          <t-popup trigger="click">
            <template #content>
              <div style="display: flex; flex-direction: column">
                <span>
                  额外项：『取件码』设计有6位和8位两种类型，按您获得的『取件码』内容填写即可
                </span>
                <span>
                  目前暂未开通文件上传共享功能，所以『取件码』只由工作人员下发
                </span>
              </div>
            </template>
            <HelpCircleIcon size="16px" style="margin-left: 4px" />
          </t-popup>
        </div>
      </template>
      <template #body>
        <div>
          <NumberInput
            v-model:value="pickUpCodeValue"
            :total="pickUpCodeItemTotal"
            :split="pickUpCodeSplit"
            :extra="pickUpCodeLastIsExtra"
          />
          <div>
            <t-button
              theme="primary"
              variant="outline"
              block
              size="large"
              @click="submitPickUpCode"
            >
              查 询
            </t-button>
          </div>
        </div>
      </template>
    </t-dialog>
    <!---->
    <div style="width: 60%; margin: 24px auto">
      <div class="t-alert t-alert--info">
        <div class="t-alert__icon">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            class="t-icon t-icon-info-circle-filled"
          >
            <path
              fill="currentColor"
              d="M12 23a11 11 0 100-22 11 11 0 000 22zM11 8.5v-2h2v2h-2zm2 1.5v7.5h-2V10h2z"
            ></path>
          </svg>
        </div>
        <div class="t-alert__content">
          <div class="t-alert__message">
            <div class="t-alert__description">
              文件内容来源于媒体部NAS设备，如有疑问请联系工作人员处理
            </div>
            <div class="t-alert__operation">
              <span
                ><a
                  href="https://www.wenjuan.com/s/UZBZJv0ys7Q/"
                  target="_blank"
                  style="color: inherit; text-decoration: inherit"
                  >报告问题</a
                ></span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!---->
    <div class="breadcrumb">
      <div
        style="
          display: flex;
          background: var(--td-bg-color-container);
          padding: 6px 8px;
          border-radius: 6px;
        "
      >
        <div>
          <t-button
            shape="circle"
            variant="outline"
            style="margin-right: 4px"
            title="刷新"
            @click="fetchData()"
          >
            <RefreshIcon />
          </t-button>
        </div>
        <span class="breadcrumb--title">当前位置：</span>
        <t-breadcrumb separator="/">
          <t-breadcrumb-item
            v-for="(item, index) in breadCrumbOption"
            :key="index"
            @click="handleClickBreadcrumb(item?.path)"
          >
            {{ item.content }}
          </t-breadcrumb-item>
        </t-breadcrumb>
      </div>
    </div>
    <!---->
    <div class="fileList">
      <t-table
        row-key="epochmt"
        :data="fileList"
        :columns="tableColumns"
        :empty="tableError.error ? tableError.errorMessage : '该文件夹为空'"
        :hover="true"
        :loading="tableLoading"
        :on-cell-click="handleColClick"
        :row-class-name="handleRowCursor"
      >
        <template v-if="breadCrumbOption.length >= 2" #firstFullRow>
          <div
            class="fileList-firstFullRow--backFolder isfloder"
            @click="handleBackLastPath"
          >
            <FolderOpen1Icon />
            <div style="font-weight: bold">... 返回上级</div>
          </div>
        </template>
        <template #filename="{ row }">
          <t-space size="small">
            <FolderOpen1Icon v-if="row.isfolder == 1" />
            <FileWordIcon v-else-if="fileIsDoc(row.filename)" />
            <VideoIcon v-else-if="fileIsVideo(row.filename)" />
            <FileImageIcon v-else-if="fileIsImage(row.filename)" />
            <FileCode1Icon v-else-if="fileIsCode(row.filename)" />
            <FilePdfIcon v-else-if="fileIsPdf(row.filename)" />
            <FileZipIcon v-else-if="fileIsZip(row.filename)" />
            <FilePowerpointIcon v-else-if="fileIsPpt(row.filename)" />
            <FileExcelIcon v-else-if="fileIsXls(row.filename)" />
            <FileIcon v-else />
            {{ row.filename }}
          </t-space>
        </template>
        <template #operation="{ row }">
          <t-space v-if="row.isfolder == 0" size="small">
            <t-button
              v-if="false"
              variant="dashed"
              ghost
              @click.end="handleCopyFileDownloadUrl(row)"
            >
              <FileCopyIcon />
            </t-button>
            <t-button
              variant="dashed"
              theme="primary"
              ghost
              title="下载文件"
              @click.end="handleFileDownload(row)"
            >
              <div
                style="display: flex; flex-direction: row; align-items: center"
              >
                <DownloadIcon />
                <span class="button-text">下载</span>
              </div>
            </t-button>
          </t-space>
        </template>
      </t-table>
    </div>
    <!---->
    <WesleyFooter />
  </div>
</template>

<script setup lang="tsx">
import { ref, defineComponent, reactive, onBeforeMount, watch } from "vue";
import useClipboard from "vue-clipboard3";
import { useRouter, useRoute } from "vue-router";
import MTBHeader from "@components/header";
import WesleyFooter from "@components/wesley_footer";
import NumberInput from "@components/numberInput";
import useFetch from "@utils/fetch";
import {
  FolderOpen1Icon,
  FileWordIcon,
  FileExcelIcon,
  FileZipIcon,
  FilePdfIcon,
  FileCode1Icon,
  FileIcon,
  FileImageIcon,
  VideoIcon,
  DownloadIcon,
  FileCopyIcon,
  RefreshIcon,
  HelpCircleIcon,
} from "tdesign-icons-vue-next";
import { MessagePlugin, NotifyPlugin } from "tdesign-vue-next";
import type { RowClassNameParams } from "tdesign-vue-next";
import {
  countFileSize,
  fileIsCode,
  fileIsDoc,
  fileIsImage,
  fileIsPdf,
  fileIsPpt,
  fileIsVideo,
  fileIsXls,
  fileIsZip,
  isInternet as isSdzzInternet,
  isMTBInternet,
  isInternal as checkInternal,
} from "@utils/common";
import { HeaderData } from "@/src/types";

const router = useRouter();
const route = useRoute();
const dir = ref(route.query.dir);

// 监听dir
watch(
  () => route.query,
  (newVal) => {
    dir.value = newVal.dir;
    fetchData();
  }
);

interface BreadcrumbOption {
  content: string;
  path: string;
}

interface FileListData {
  filename: string;
  isfolder: 0 | 1;
  filesize: string;
  group: string;
  owner: string;
  iscommpressed: 0 | 1;
  privilege: string;
  privilege_ex: number;
  filetype: number;
  mt: string;
  epochmt: number;
  exist: 0 | 1;
  mp4_240: number;
  mp4_360: number;
  mp4_720: number;
  mp4_480: number;
  mp4_1080: number;
  mp4_org: number;
  mp3: number;
  trans: number;
  play: number;
  subtitle: number;
  randno: string;
  sticky_bit: number;
  encrypt_folder: number;
  projection_type: number;
  rf_team_priviege: number;
  is_cached: number;
  cache_upload_progress: number;
  is_h265: number;
  is_link: number;
  has_thumbnail: number;
}

const { toClipboard } = useClipboard();
const headerConfig: HeaderData = [
  {
    label: "返回 官网",
    href: "/",
    isRouter: true,
  },
  {
    label: "我有『取件码』",
    callBack: () => {
      pickUpCodeDialogVisible.value = true;
    },
  },
  {
    label: "问题反馈",
    href: "https://wj.qq.com/s2/14786781/3fb8/",
    target: "_blank",
  },
  // {
  //   label: 'Github Repository',
  //   href: 'https://github.com/Wesley-Work/MTB-Official/',
  //   target: '_blank',
  // },
];
const dialogVisible = ref(false);
const pickUpCodeDialogVisible = ref(false);
const pickUpCodeItemTotal = ref<number>(8);
const pickUpCodeValue = ref<string>("");
// 从后往前数，几项为额外项
const pickUpCodeLastIsExtra = ref<number>(2);
// 以几项进行分隔
const pickUpCodeSplit = ref<number>(3);
const fileList = ref<FileListData[]>([]);
const tableColumns = [
  {
    colKey: "filename",
    title: "文件名",
    width: 300,
  },
  {
    colKey: "mt",
    title: "修改时间",
    width: 170,
    ellipsis: true,
  },
  {
    colKey: "filesize",
    title: "文件大小",
    width: 120,
    cell: (_h: any, { row }: { row?: any }) => {
      const { isfolder } = row;
      if (isfolder != 1) {
        const { filesize } = row;
        const { size, unit } = countFileSize(Number(filesize));
        return <span>{`${size} ${unit}`}</span>;
      }
      return <span>-</span>;
    },
  },
  {
    colKey: "operation",
    title: "操作",
    width: 150,
  },
];
const breadCrumbOption = ref<BreadcrumbOption[]>([
  { content: "首页", path: "/" },
]);
const tableLoading = ref(false);
const tableError = reactive({
  error: false,
  errorMessage: "",
});
// 返回上一页
const handleBackLastPath = () => {
  const path = (dir.value as string) ?? (route.query?.dir as string);
  const pathGroup = path.split("/").filter(Boolean);
  if (pathGroup.length === 0) {
    // 已经是根路径，无需跳转
    return;
  }
  // 移除最后一级目录
  pathGroup.pop();
  // 上一级路径
  const lastPath = `/${pathGroup.join("/")}`;
  router.push({
    path: route.path,
    query: {
      dir: lastPath,
    },
  });
};

const handleClickBreadcrumb = (path: string) => {
  if (route.query?.dir === path) {
    return;
  }
  router.push({
    path: route.path,
    query: {
      dir: path,
    },
  });
};

// 根据路径更新
const breadCrumbUpdate = (path: string) => {
  breadCrumbOption.value = [{ content: "首页", path: "/" }];
  const pathSegments = path.split("/").filter((s) => s.trim() !== "");
  let currentPath = "";
  pathSegments.forEach((segment) => {
    currentPath += `/${segment}`;
    breadCrumbOption.value.push({
      content: segment,
      path: currentPath,
    });
  });
};

const fetchData = () => {
  tableLoading.value = true;
  tableError.error = false;
  tableError.errorMessage = "";
  const path = dir.value ?? route.query?.dir ?? "/";
  useFetch({
    url: "/netdisk/getFileList",
    // sort = "mt"  # (filename/filesize/filetype/mt/privilege/owner/group)
    // dirs = "DESC"  # ASC / DESC
    data: {
      path: path,
    },
    success: (res: any) => {
      const result = JSON.parse(res);
      const { filePath, datas: data } = result.data;
      breadCrumbUpdate(filePath);
      if (result?.errcode !== 0) {
        if (result?.errcode === "GetFileListFail:5") {
          tableError.error = true;
          tableError.errorMessage = `文件夹路径不存在`;
          NotifyPlugin.warning({
            title: "获取列表失败",
            content: `文件夹不存在！`,
          });
          return;
        }
        tableError.error = true;
        tableError.errorMessage = `获取文件列表失败: ${result?.errmsg}`;
        NotifyPlugin.error({
          title: "获取文件列表失败(Error)",
          content: `${result?.errcode}:${result?.errmsg}`,
        });
        return;
      }
      fileList.value = data;
    },
    error: (desc: string, res: any) => {
      console.error(desc, res);
      NotifyPlugin.error({
        title: "获取文件列表失败(Fail)",
        content: `[desc]:${res}`,
      });
      tableError.error = true;
      tableError.errorMessage = `获取文件列表失败: ${res}`;
    },
    complete: () => {
      tableLoading.value = false;
    },
  });
};

// 表格行按下
const handleColClick = (e: any) => {
  // 按的不是第一格 或 不是文件夹 直接返回
  if (e.colIndex !== 0 || e.row.isfolder === 0) return;

  // 获取标准化当前路径
  const currentPath = (route.query.dir as string) || "/";
  const normalizedCurrent = currentPath.replace(/\/+/g, "/").replace(/\/$/, ""); // 处理多余斜杠

  // 构建新路径
  const pathSegments = normalizedCurrent.split("/").filter(Boolean);
  pathSegments.push(e.row.filename);
  const newDir = `/${pathSegments.join("/")}`;

  // 检查是否与当前路径相同
  if (decodeURIComponent(newDir) === decodeURIComponent(normalizedCurrent)) {
    console.warn("重复跳转到相同路径:", newDir);
    return;
  }

  // 执行路由跳转
  router.push({
    path: route.path,
    query: {
      dir: newDir,
    },
  });
};

// 文件夹列-鼠标指针
const handleRowCursor = (e: RowClassNameParams<FileListData>) => {
  if (e.row.isfolder == 1) {
    return "isfloder";
  }
};

// 替换浏览器参数
// const replaceUrlParam = (url: string, key: string, value: string) => {
//   if (url.indexOf(key) > -1) {
//     let reg = new RegExp(`((?=${key}=).*?(?=&))|((?=${key}=).*)`);
//     url = url.replace(reg, `${key}=${value}`);
//   } else {
//     let join = url.indexOf('?') > -1 ? '&' : '?';
//     url += `${join}${key}=${value}`;
//   }
//   return url;
// };

// 复制下载链接
const handleCopyFileDownloadUrl = (fileEx: any) => {
  const { download_url } = fileEx;
  try {
    toClipboard(download_url);
    MessagePlugin.success("复制成功");
  } catch (e) {
    console.info(e);
    MessagePlugin.error("复制失败！");
  }
};

// 点击下载
const handleFileDownload = (row: any) => {
  const { filename } = row;
  const filePath = route.query?.dir || dir.value || "/";
  const loading = MessagePlugin.loading("加载中...");

  useFetch({
    url: "/netdisk/getDownloadUrl",
    success: async (res: any) => {
      const result = JSON.parse(res);
      if (result?.errcode !== 0) {
        NotifyPlugin.error({
          title: "获取下载链接失败(Error)",
          content: `${result?.errcode}:${result?.errmsg}`,
        });
        return;
      }
      const { data } = result;
      const isInternal =
        (await checkInternal()) || isSdzzInternet() || isMTBInternet();
      const ip = isMTBInternet()
        ? data.internal_ip
        : isInternal
        ? data.out_ip
        : null;
      const port = isMTBInternet()
        ? data.internal_port
        : isInternal
        ? data.out_port
        : null;
      if (!ip || !port) {
        NotifyPlugin.warning({
          title: "无法组合下载链接",
          content: `判断网络环境失败`,
        });
        return;
      }
      // 组合
      const downloadUrl = `${data.protocol}://${ip}:${port}${data.path}&source_path=${data.source_path}${filePath}&source_file=${filename}&source_total=1`;
      var a = document.createElement("a");
      a.href = downloadUrl;
      a.download = filename;
      a.target = "_blank";
      a.click();
      const content = () => {
        return (
          <div>
            <span>已开始下载，如未启动下载请点击</span>
            <a
              class="t-link t-link--theme-primary t-link--hover-color"
              style="padding: 0 3px"
              href={downloadUrl}
              download={filename}
            >
              这里
            </a>
            <span>重试</span>
          </div>
        );
      };
      MessagePlugin.success({ content: content });
    },
    error: (desc: string, res: any) => {
      console.error(desc, res);
      NotifyPlugin.error({
        title: "获取下载链接失败(Main)",
        content: `[desc]:${res}`,
      });
    },
    complete: () => {
      MessagePlugin.close(loading);
    },
  });
};

// 查询取件码
const submitPickUpCode = () => {
  const pickUpCode = pickUpCodeValue.value;
  const loading = MessagePlugin.loading("加载中...");
  pickUpCodeDialogVisible.value = false;

  useFetch({
    url: "/netdisk/pick-up",
    data: {
      code: pickUpCode,
    },
    success: (res: any) => {
      const result = JSON.parse(res);
      if (result?.errcode !== 0) {
        NotifyPlugin.error({
          title: "获取取件码内容失败(Error)",
          content: `${result?.errcode}:${result?.errmsg}`,
        });
        return;
      }
      type dataType = {
        id: number;
        key: string;
        value: string;
        type: string;
        extra: string;
      };

      const { data }: { data: dataType | null } = result;
      const islocalRoute = (str: dataType) => {
        try {
          const obj = JSON.parse(str?.extra);
          const inval = ["isRouter", "path"];
          inval.forEach((key) => {
            if (!obj[key]) {
              console.warn(`返回值[${key}]不是有效的本地路由数据`, str);
            }
            return false;
          });
          return true;
        } catch (e) {
          console.warn("返回值不是一个有效的JSON对象", str);
          return false;
        }
      };
      // 跳转模式
      if (data?.type === "redirect") {
        // 1. 判断是不是一个标准的url
        if (data?.extra?.startsWith("http")) {
          const content = () => {
            return (
              <div>
                <span>将打开新标签页，如未正确打开请点击</span>
                <a
                  class="t-link t-link--theme-primary t-link--hover-color"
                  style="padding: 0 3px"
                  href={data.extra}
                  target="_blank"
                >
                  这里
                </a>
                <span>重试</span>
              </div>
            );
          };
          MessagePlugin.success({ content: content });
          setTimeout(() => {
            window.open(data?.extra);
          }, 1000);
        }
        // 2. 判断是不是一个对象
        else if (data?.extra?.startsWith("{")) {
          const ilr = islocalRoute(data);
          if (!ilr) {
            NotifyPlugin.error({
              title: "取件码内容无效",
              content: `请联系管理人员确认，错误内容：解析json字符无效，数据：${data.extra}`,
            });
            return;
          }
          const js = JSON.parse(data?.extra);
          if (js?.isRouter && js?.path) {
            MessagePlugin.success({ content: "正在跳转路由" });
            setTimeout(() => {
              router.push({
                path: js?.path,
              });
            }, 1000);
          } else {
            const extraContent = js?.isRouter
              ? `路由地址不正确`
              : `不允许关闭跳转路由`;
            NotifyPlugin.error({
              title: "取件码内容无效[本地路由]",
              content: `请联系管理人员确认，错误内容：${extraContent}，数据：${data.extra}`,
            });
          }
        } else {
          NotifyPlugin.error({
            title: "取件码内容无效",
            content: `请联系管理人员确认，错误内容：${data.extra}`,
          });
        }
      }
      // 文件列表模式
      else if (data?.type === "fileList") {
        NotifyPlugin.warning({
          title: "取件码类型告警",
          content: "当前不支持FileList类型的取件码，请联系管理人员处理",
        });
      } else {
        NotifyPlugin.error({
          title: "获取取件码内容失败(Data)",
          content: `取件码类型无效，请联系管理人员确认，错误类型：${data?.type}`,
        });
      }
    },
    error: (desc: string, res: any) => {
      console.error(desc, res);
      NotifyPlugin.error({
        title: "获取取件码内容失败(Main)",
        content: `[desc]:${res}`,
      });
    },
    complete: () => {
      MessagePlugin.close(loading);
    },
  });
};

/**
 * @GetDateString
 * @获取当前时间 yyyy-mm-dd hh:mm:ss
 * @return {String}
 */
// const GetDateString = () => {
//   var Dates = new Date();
//   return Dates.toLocaleString().replaceAll('/', '-');
// };

onBeforeMount(() => {
  fetchData();
});

// defineOptions({
//   beforeRouteEnter(to, from, next) {
//     // 加载数据
//     fetchData(true).finally(() => {
//       next();
//     });
//   },
// });
</script>

<script lang="tsx">
export default defineComponent({
  name: "MTBShareNetdisk",
});
</script>

<style lang="scss">
body {
  background: var(--td-bg-color-page);
}

.t-menu__operations {
  .t-button {
    margin-left: 8px;
  }
}

.t-head-menu .t-menu {
  justify-content: flex-end !important;
  padding-right: 12px;
}

.top-menu {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  z-index: 90;

  > div {
    padding-left: 36px;
    padding-right: 24px;

    .menu__title {
      font-size: 20px;
      font-weight: bold;
      letter-spacing: 0.3px;
    }
  }
}

.MenuStoragePopupProps {
  margin-left: 16px !important;
}

.breadcrumb {
  display: flex;
  flex-direction: row;
  margin: 16px auto !important;
}

.breadcrumb,
.fileList {
  width: 60%;
  margin: 0 auto;
  transition: all 0.28s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.breadcrumb.width70p,
.fileList:has(.width70p) {
  width: 70%;
  margin: 0 auto;
}

.fileList {
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);

  .t-table__row-full-element {
    &:has(.fileList-firstFullRow--backFolder) {
      padding: 0 !important;
    }
    .fileList-firstFullRow--backFolder {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }

  .t-table td {
    padding: 14px var(--td-comp-paddingLR-l);
    line-height: var(--td-line-height-body-large);
    font-size: 14px;
  }

  .t-button.t-button--variant-dashed.t-button--theme-default.t-button--ghost {
    color: var(--td-text-color-primary);
    border-color: var(--td-text-color-primary);
  }

  .t-button--ghost {
    --ripple-color: var(--ripple-color);
  }

  .t-button--variant-dashed.t-button--ghost:hover,
  .t-button--variant-dashed.t-button--ghost:focus-visible {
    color: var(--td-brand-color-hover) !important;
    border-color: var(--td-brand-color-hover) !important;
  }

  .t-button--variant-dashed {
    height: 28px;
  }

  .isfloder > td:first-child,
  .isfloder {
    cursor: pointer;
  }
}

.t-message__list {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.breadcrumb--title {
  display: flex;
  align-items: center;
  color: var(--td-text-color-primary);
}

.button-hover-text-width--animation {
  transition: all 0.28s ease-in-out;
  &:hover {
    .button-text {
      max-width: 100% !important;
      width: auto !important;
    }
  }
  .t-button__text {
    align-items: center;
    .button-text {
      max-width: 0px;
      overflow: hidden;
      transition: all 0.28s ease-in-out;
    }
  }
}
</style>
