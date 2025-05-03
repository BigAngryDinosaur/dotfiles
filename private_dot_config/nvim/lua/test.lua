local ts = vim.treesitter
local parsers = require "nvim-treesitter.parsers"

local p = function(value) print(vim.inspect(value)) end
local t = function(node) p(ts.get_node_text(node, 0)) end

local parser = parsers.get_parser()
local tree = parser:parse()[1]
local root = tree:root()
local lang = parser:lang()

---@param node TSNode
local function logme(node) p(node:type()) end

local curr_node = ts.get_node()
logme(curr_node)
