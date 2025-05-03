-- Customize Treesitter

---@type LazySpec
return {
  "nvim-treesitter/nvim-treesitter",
  opts = {
    ensure_installed = {
      "lua",
      "vim",
      "clojure",
      "query",
    },
    highlight = {
      enable = true,
    },
  },
}
