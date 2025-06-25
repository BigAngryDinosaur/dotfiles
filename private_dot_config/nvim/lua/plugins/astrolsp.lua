-- Configuration documentation can be found with `:h astrolsp`

---@type LazySpec
return {
  "AstroNvim/astrolsp",
  ---@type AstroLSPOpts
  opts = function(plugin, opts)
    opts.servers = opts.servers or {}
    table.insert(opts.servers, "flix")

    opts.config = require("astrocore").extend_tbl(opts.config or {}, {
      flix = {
        cmd = { "java", "-jar", "flix.jar", "lsp" },

        filetypes = { "flix" },

        root_dir = function(fname)
          -- Search for flix.toml or flix.jar upwards recursively
          local found_files = vim.fs.find({ "flix.toml", "flix.jar" }, { path = fname, upward = true })
          if not found_files[1] then
            print "Flix LSP: No flix.toml or flix.jar found in project tree"
            return nil
          end

          local root_dir = vim.fs.dirname(found_files[1])
          local flix_jar_path = vim.fs.joinpath(root_dir, "flix.jar")

          -- Ensure flix.jar exists in the root directory
          if vim.uv.fs_stat(flix_jar_path) == nil then
            print("Flix LSP: flix.jar not found in project root (" .. root_dir .. ")")
            return nil
          end
          return root_dir
        end,

        settings = {},
      },
    })
  end,
}
