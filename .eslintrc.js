module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-essential", // vue3解析
    "plugin:@typescript-eslint/recommended",
    "@vue/prettier"
  ],
  overrides: [],
  parser: "vue-eslint-parser", // 解析 .vue⽂件
  parserOptions: {
    parser: "@typescript-eslint/parser", // 解析 .ts ⽂件
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["vue", "@typescript-eslint"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        printWidth: 100, // 打印宽度
        vueIndentScriptAndStyle: false, // Vue 文件脚本和样式标签缩进 默认false不缩进
        proseWrap: "never", // markdown 强制不换行
        htmlWhitespaceSensitivity: "strict", // HTML 空格敏感,
        bracketSpacing: true, // 括号间打印空格
        singleQuote: false, //使用双引号
        semi: true, // 末尾添加分号
        tabWidth: 2, // tab * 2
        trailingComma: "none", // {a:1,}
        useTabs: false,
        endOfLine: "auto" // 保持现有行尾
      }
    ]
  }
};
