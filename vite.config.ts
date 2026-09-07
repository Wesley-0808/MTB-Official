import { defineConfig, searchForWorkspaceRoot } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import { resolveConfig, basePlugin } from './src/config/vite.base.config';

const formatBuildTime = (date: Date) => {
  const year = date.getFullYear();
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${year}-${day}-${month} ${hours}:${minutes}:${seconds}`;
};

const buildTime = formatBuildTime(new Date());

export default () => {
  return defineConfig({
    base: '/',
    resolve: resolveConfig,
    define: {
      __APP_BUILD_TIME__: JSON.stringify(buildTime),
    },
    server: {
      host: '0.0.0.0',
      port: 14560,
      open: '/',
      fs: {
        allow: [searchForWorkspaceRoot(process.cwd())],
      },
    },
    build: {
      outDir: 'dist',
      assetsDir: 'static',
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            const reg = /\.mp4$/gi;
            if (assetInfo.names.some((name) => reg.test(name))) {
              return `static/_upload/[name].[ext]`;
            }
            return `static/[name]-[hash].[ext]`;
          },
        },
      },
    },
    plugins: [...basePlugin, VitePWA()],
  });
};
