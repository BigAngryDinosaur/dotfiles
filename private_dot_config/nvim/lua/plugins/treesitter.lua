-- Customize Treesitter

---@type LazySpec
return {
  "nvim-treesitter/nvim-treesitter",
  opts = function(_, opts)
    vim.list_extend(opts.ensure_installed, {
      "lua",
      "vim",
      "clojure",
      "query",
      "kdl",
      "bash",
    })
    opts = {
      highlight = {
        enable = true,
      },
    }
  end,
}
