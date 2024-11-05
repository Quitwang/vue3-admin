import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
export default [
  {
    rules: {
      semi: "error", // 确保语句末尾使用分号
      "prefer-const": "error", // 优先使用const
      // "no-unused-vars": "warn", // 未使用变量警告
      "no-console": "off", // 允许使用console
      "no-unused-imports": "off", // 允许使用未使用的导入
      "no-explicit-any": "off", // 允许使用any
      eqeqeq: "error", // 强制使用严格相等
      indent: ["error", 2], // 强制使用2个空格缩进
      // "no-undef": "off", // 未定义变量警告
      "linebreak-style": "error", // 强制使用一致的换行符
      "key-spacing": "error", // 强制键值对对象的键和值之间使用一致的空格
      "max-len": ["error", { code: 150 }], // 强制行长度不超过150
      "no-multiple-empty-lines": ["error", { max: 1 }], //表示不允许有连续的空行
      "@typescript-eslint/no-explicit-any": "off", // 关闭对 any 类型的检查
      "@typescript-eslint/no-var-requires": 0,
    },
  },
  { files: ["**/*.{js,mjs,cjs,ts,vue}"] }, // 支持js、ts、vue文件
  { languageOptions: { globals: globals.browser } }, // 支持浏览器全局变量
  pluginJs.configs.recommended, // 使用推荐的ESLint配置
  ...tseslint.configs.recommended, // 使用推荐的TypeScript ESLint配置
  ...pluginVue.configs["flat/essential"], // 使用推荐的Vue ESLint配置
  { files: ["**/*.vue"], languageOptions: { parserOptions: { parser: tseslint.parser } } }, // 支持Vue文件
  {
    ignores: [
      "dist", // 忽略构建目录
      "node_modules", // 忽略node模块
      "public", // 忽略公共目录
      ".husky", // 忽略husky目录
      ".vscode", // 忽略VSCode配置文件
      ".idea", // 忽略IntelliJ IDEA配置文件
      "*.sh", // 忽略shell脚本
      "*.md", // 忽略Markdown文件
      "src/assets", // 忽略资源文件
      ".eslintrc.js", // 忽略ESLint配置文件
      ".prettierrc.js", // 忽略Prettier配置文件
      ".stylelintrc.js", // 忽略Stylelint配置文件
    ],
  },
];
