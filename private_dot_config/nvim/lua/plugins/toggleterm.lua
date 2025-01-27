return {
  "akinsho/toggleterm.nvim",
  specs = {
    {
      "AstroNvim/astrocore",
      opts = function(_, opts)
        opts.mappings.t["<esc>"] = { [[<C-\><C-n>]], desc = "Exit terminal mode" }
        opts.mappings.t["jk"] = { [[<C-\><C-n>]], desc = "Exit terminal mode (jk)" }
        opts.mappings.t["<C-h>"] = { [[<Cmd>wincmd h<CR>]], desc = "Go to left window" }
        opts.mappings.t["<C-j>"] = { [[<Cmd>wincmd j<CR>]], desc = "Go to bottom window" }
        opts.mappings.t["<C-k>"] = { [[<Cmd>wincmd k<CR>]], desc = "Go to top window" }
        opts.mappings.t["<C-l>"] = { [[<Cmd>wincmd l<CR>]], desc = "Go to right window" }
        opts.mappings.t["<C-'>"] = { [[<C-\><C-n><C-w>]], desc = "Enter window commands from terminal" }
      end,
    },
  },
}
