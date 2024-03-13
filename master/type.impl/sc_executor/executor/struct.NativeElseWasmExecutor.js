(function() {var type_impls = {
"parachain_template_node":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-NativeElseWasmExecutor%3CD%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sc_executor/executor.rs.html#571\">source</a><a href=\"#impl-NativeElseWasmExecutor%3CD%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;D&gt; <a class=\"struct\" href=\"sc_executor/executor/struct.NativeElseWasmExecutor.html\" title=\"struct sc_executor::executor::NativeElseWasmExecutor\">NativeElseWasmExecutor</a>&lt;D&gt;<span class=\"where fmt-newline\">where\n    D: <a class=\"trait\" href=\"sc_executor/executor/trait.NativeExecutionDispatch.html\" title=\"trait sc_executor::executor::NativeExecutionDispatch\">NativeExecutionDispatch</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/sc_executor/executor.rs.html#588-593\">source</a><h4 class=\"code-header\">pub fn <a href=\"sc_executor/executor/struct.NativeElseWasmExecutor.html#tymethod.new\" class=\"fn\">new</a>(\n    fallback_method: <a class=\"enum\" href=\"sc_executor/wasm_runtime/enum.WasmExecutionMethod.html\" title=\"enum sc_executor::wasm_runtime::WasmExecutionMethod\">WasmExecutionMethod</a>,\n    default_heap_pages: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u64.html\">u64</a>&gt;,\n    max_runtime_instances: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a>,\n    runtime_cache_size: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>\n) -&gt; <a class=\"struct\" href=\"sc_executor/executor/struct.NativeElseWasmExecutor.html\" title=\"struct sc_executor::executor::NativeElseWasmExecutor\">NativeElseWasmExecutor</a>&lt;D&gt;</h4></section><span class=\"item-info\"><div class=\"stab deprecated\"><span class=\"emoji\">👎</span><span>Deprecated: use <code>Self::new_with_wasm_executor</code> method instead of it</span></div></span></summary><div class=\"docblock\"><p>Create new instance.</p>\n<h5 id=\"parameters\"><a href=\"#parameters\">Parameters</a></h5>\n<p><code>fallback_method</code> - Method used to execute fallback Wasm code.</p>\n<p><code>default_heap_pages</code> - Number of 64KB pages to allocate for Wasm execution. Internally this\nwill be mapped as <a href=\"sc_executor_common/wasm_runtime/enum.HeapAllocStrategy.html#variant.Static\" title=\"variant sc_executor_common::wasm_runtime::HeapAllocStrategy::Static\"><code>HeapAllocStrategy::Static</code></a> where <code>default_heap_pages</code> represent the\nstatic number of heap pages to allocate. Defaults to <code>DEFAULT_HEAP_ALLOC_STRATEGY</code> if <code>None</code>\nis provided.</p>\n<p><code>max_runtime_instances</code> - The number of runtime instances to keep in memory ready for reuse.</p>\n<p><code>runtime_cache_size</code> - The capacity of runtime cache.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.new_with_wasm_executor\" class=\"method\"><a class=\"src rightside\" href=\"src/sc_executor/executor.rs.html#609-613\">source</a><h4 class=\"code-header\">pub fn <a href=\"sc_executor/executor/struct.NativeElseWasmExecutor.html#tymethod.new_with_wasm_executor\" class=\"fn\">new_with_wasm_executor</a>(\n    executor: <a class=\"struct\" href=\"sc_executor/executor/struct.WasmExecutor.html\" title=\"struct sc_executor::executor::WasmExecutor\">WasmExecutor</a>&lt;<a class=\"struct\" href=\"sp_wasm_interface/struct.ExtendedHostFunctions.html\" title=\"struct sp_wasm_interface::ExtendedHostFunctions\">ExtendedHostFunctions</a>&lt;(<a class=\"struct\" href=\"sp_io/storage/struct.HostFunctions.html\" title=\"struct sp_io::storage::HostFunctions\">HostFunctions</a>, <a class=\"struct\" href=\"sp_io/default_child_storage/struct.HostFunctions.html\" title=\"struct sp_io::default_child_storage::HostFunctions\">HostFunctions</a>, <a class=\"struct\" href=\"sp_io/misc/struct.HostFunctions.html\" title=\"struct sp_io::misc::HostFunctions\">HostFunctions</a>, <a class=\"struct\" href=\"sp_io/wasm_tracing/struct.HostFunctions.html\" title=\"struct sp_io::wasm_tracing::HostFunctions\">HostFunctions</a>, <a class=\"struct\" href=\"sp_io/offchain/struct.HostFunctions.html\" title=\"struct sp_io::offchain::HostFunctions\">HostFunctions</a>, <a class=\"struct\" href=\"sp_io/crypto/struct.HostFunctions.html\" title=\"struct sp_io::crypto::HostFunctions\">HostFunctions</a>, <a class=\"struct\" href=\"sp_io/hashing/struct.HostFunctions.html\" title=\"struct sp_io::hashing::HostFunctions\">HostFunctions</a>, <a class=\"struct\" href=\"sp_io/allocator/struct.HostFunctions.html\" title=\"struct sp_io::allocator::HostFunctions\">HostFunctions</a>, <a class=\"struct\" href=\"sp_io/panic_handler/struct.HostFunctions.html\" title=\"struct sp_io::panic_handler::HostFunctions\">HostFunctions</a>, <a class=\"struct\" href=\"sp_io/logging/struct.HostFunctions.html\" title=\"struct sp_io::logging::HostFunctions\">HostFunctions</a>, <a class=\"struct\" href=\"sp_io/trie/struct.HostFunctions.html\" title=\"struct sp_io::trie::HostFunctions\">HostFunctions</a>, <a class=\"struct\" href=\"sp_io/offchain_index/struct.HostFunctions.html\" title=\"struct sp_io::offchain_index::HostFunctions\">HostFunctions</a>, <a class=\"struct\" href=\"sp_io/transaction_index/struct.HostFunctions.html\" title=\"struct sp_io::transaction_index::HostFunctions\">HostFunctions</a>), &lt;D as <a class=\"trait\" href=\"sc_executor/executor/trait.NativeExecutionDispatch.html\" title=\"trait sc_executor::executor::NativeExecutionDispatch\">NativeExecutionDispatch</a>&gt;::<a class=\"associatedtype\" href=\"sc_executor/executor/trait.NativeExecutionDispatch.html#associatedtype.ExtendHostFunctions\" title=\"type sc_executor::executor::NativeExecutionDispatch::ExtendHostFunctions\">ExtendHostFunctions</a>&gt;&gt;\n) -&gt; <a class=\"struct\" href=\"sc_executor/executor/struct.NativeElseWasmExecutor.html\" title=\"struct sc_executor::executor::NativeElseWasmExecutor\">NativeElseWasmExecutor</a>&lt;D&gt;</h4></section></summary><div class=\"docblock\"><p>Create a new instance using the given <a href=\"sc_executor/executor/struct.WasmExecutor.html\" title=\"struct sc_executor::executor::WasmExecutor\"><code>WasmExecutor</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.disable_use_native\" class=\"method\"><a class=\"src rightside\" href=\"src/sc_executor/executor.rs.html#620\">source</a><h4 class=\"code-header\">pub fn <a href=\"sc_executor/executor/struct.NativeElseWasmExecutor.html#tymethod.disable_use_native\" class=\"fn\">disable_use_native</a>(&amp;mut self)</h4></section></summary><div class=\"docblock\"><p>Disable to use native runtime when possible just behave like <code>WasmExecutor</code>.</p>\n<p>Default to enabled.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.allow_missing_host_functions\" class=\"method\"><a class=\"src rightside\" href=\"src/sc_executor/executor.rs.html#626\">source</a><h4 class=\"code-header\">pub fn <a href=\"sc_executor/executor/struct.NativeElseWasmExecutor.html#tymethod.allow_missing_host_functions\" class=\"fn\">allow_missing_host_functions</a>(\n    &amp;mut self,\n    allow_missing_host_functions: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a>\n)</h4></section><span class=\"item-info\"><div class=\"stab deprecated\"><span class=\"emoji\">👎</span><span>Deprecated: use <code>Self::new_with_wasm_executor</code> method instead of it</span></div></span></summary><div class=\"docblock\"><p>Ignore missing function imports if set true.</p>\n</div></details></div></details>",0,"parachain_template_node::service::ParachainExecutor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RuntimeVersionOf-for-NativeElseWasmExecutor%3CD%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sc_executor/executor.rs.html#631\">source</a><a href=\"#impl-RuntimeVersionOf-for-NativeElseWasmExecutor%3CD%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;D&gt; <a class=\"trait\" href=\"sc_executor/trait.RuntimeVersionOf.html\" title=\"trait sc_executor::RuntimeVersionOf\">RuntimeVersionOf</a> for <a class=\"struct\" href=\"sc_executor/executor/struct.NativeElseWasmExecutor.html\" title=\"struct sc_executor::executor::NativeElseWasmExecutor\">NativeElseWasmExecutor</a>&lt;D&gt;<span class=\"where fmt-newline\">where\n    D: <a class=\"trait\" href=\"sc_executor/executor/trait.NativeExecutionDispatch.html\" title=\"trait sc_executor::executor::NativeExecutionDispatch\">NativeExecutionDispatch</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.runtime_version\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_executor/executor.rs.html#632-636\">source</a><a href=\"#method.runtime_version\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sc_executor/trait.RuntimeVersionOf.html#tymethod.runtime_version\" class=\"fn\">runtime_version</a>(\n    &amp;self,\n    ext: &amp;mut dyn <a class=\"trait\" href=\"sp_externalities/trait.Externalities.html\" title=\"trait sp_externalities::Externalities\">Externalities</a>,\n    runtime_code: &amp;<a class=\"struct\" href=\"sp_core/traits/struct.RuntimeCode.html\" title=\"struct sp_core::traits::RuntimeCode\">RuntimeCode</a>&lt;'_&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"sp_version/struct.RuntimeVersion.html\" title=\"struct sp_version::RuntimeVersion\">RuntimeVersion</a>, <a class=\"enum\" href=\"sc_executor_common/error/enum.Error.html\" title=\"enum sc_executor_common::error::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Extract <a href=\"sp_version/struct.RuntimeVersion.html\" title=\"struct sp_version::RuntimeVersion\"><code>RuntimeVersion</code></a> of the given <code>runtime_code</code>.</div></details></div></details>","RuntimeVersionOf","parachain_template_node::service::ParachainExecutor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-GetNativeVersion-for-NativeElseWasmExecutor%3CD%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sc_executor/executor.rs.html#641\">source</a><a href=\"#impl-GetNativeVersion-for-NativeElseWasmExecutor%3CD%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;D&gt; <a class=\"trait\" href=\"sp_version/trait.GetNativeVersion.html\" title=\"trait sp_version::GetNativeVersion\">GetNativeVersion</a> for <a class=\"struct\" href=\"sc_executor/executor/struct.NativeElseWasmExecutor.html\" title=\"struct sc_executor::executor::NativeElseWasmExecutor\">NativeElseWasmExecutor</a>&lt;D&gt;<span class=\"where fmt-newline\">where\n    D: <a class=\"trait\" href=\"sc_executor/executor/trait.NativeExecutionDispatch.html\" title=\"trait sc_executor::executor::NativeExecutionDispatch\">NativeExecutionDispatch</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.native_version\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_executor/executor.rs.html#642\">source</a><a href=\"#method.native_version\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sp_version/trait.GetNativeVersion.html#tymethod.native_version\" class=\"fn\">native_version</a>(&amp;self) -&gt; &amp;<a class=\"struct\" href=\"sp_version/struct.NativeVersion.html\" title=\"struct sp_version::NativeVersion\">NativeVersion</a></h4></section></summary><div class='docblock'>Returns the version of the native runtime.</div></details></div></details>","GetNativeVersion","parachain_template_node::service::ParachainExecutor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-NativeElseWasmExecutor%3CD%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sc_executor/executor.rs.html#721\">source</a><a href=\"#impl-Clone-for-NativeElseWasmExecutor%3CD%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"sc_executor/executor/struct.NativeElseWasmExecutor.html\" title=\"struct sc_executor::executor::NativeElseWasmExecutor\">NativeElseWasmExecutor</a>&lt;D&gt;<span class=\"where fmt-newline\">where\n    D: <a class=\"trait\" href=\"sc_executor/executor/trait.NativeExecutionDispatch.html\" title=\"trait sc_executor::executor::NativeExecutionDispatch\">NativeExecutionDispatch</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_executor/executor.rs.html#722\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"sc_executor/executor/struct.NativeElseWasmExecutor.html\" title=\"struct sc_executor::executor::NativeElseWasmExecutor\">NativeElseWasmExecutor</a>&lt;D&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","parachain_template_node::service::ParachainExecutor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ReadRuntimeVersion-for-NativeElseWasmExecutor%3CD%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sc_executor/executor.rs.html#731\">source</a><a href=\"#impl-ReadRuntimeVersion-for-NativeElseWasmExecutor%3CD%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;D&gt; <a class=\"trait\" href=\"sp_core/traits/trait.ReadRuntimeVersion.html\" title=\"trait sp_core::traits::ReadRuntimeVersion\">ReadRuntimeVersion</a> for <a class=\"struct\" href=\"sc_executor/executor/struct.NativeElseWasmExecutor.html\" title=\"struct sc_executor::executor::NativeElseWasmExecutor\">NativeElseWasmExecutor</a>&lt;D&gt;<span class=\"where fmt-newline\">where\n    D: <a class=\"trait\" href=\"sc_executor/executor/trait.NativeExecutionDispatch.html\" title=\"trait sc_executor::executor::NativeExecutionDispatch\">NativeExecutionDispatch</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.read_runtime_version\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_executor/executor.rs.html#732-736\">source</a><a href=\"#method.read_runtime_version\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sp_core/traits/trait.ReadRuntimeVersion.html#tymethod.read_runtime_version\" class=\"fn\">read_runtime_version</a>(\n    &amp;self,\n    wasm_code: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>],\n    ext: &amp;mut dyn <a class=\"trait\" href=\"sp_externalities/trait.Externalities.html\" title=\"trait sp_externalities::Externalities\">Externalities</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>&gt;, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;</h4></section></summary><div class='docblock'>Reads the runtime version information from the given wasm code. <a href=\"sp_core/traits/trait.ReadRuntimeVersion.html#tymethod.read_runtime_version\">Read more</a></div></details></div></details>","ReadRuntimeVersion","parachain_template_node::service::ParachainExecutor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-CodeExecutor-for-NativeElseWasmExecutor%3CD%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sc_executor/executor.rs.html#647\">source</a><a href=\"#impl-CodeExecutor-for-NativeElseWasmExecutor%3CD%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;D&gt; <a class=\"trait\" href=\"sp_core/traits/trait.CodeExecutor.html\" title=\"trait sp_core::traits::CodeExecutor\">CodeExecutor</a> for <a class=\"struct\" href=\"sc_executor/executor/struct.NativeElseWasmExecutor.html\" title=\"struct sc_executor::executor::NativeElseWasmExecutor\">NativeElseWasmExecutor</a>&lt;D&gt;<span class=\"where fmt-newline\">where\n    D: <a class=\"trait\" href=\"sc_executor/executor/trait.NativeExecutionDispatch.html\" title=\"trait sc_executor::executor::NativeExecutionDispatch\">NativeExecutionDispatch</a> + 'static,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Error\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Error\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"sp_core/traits/trait.CodeExecutor.html#associatedtype.Error\" class=\"associatedtype\">Error</a> = <a class=\"enum\" href=\"sc_executor_common/error/enum.Error.html\" title=\"enum sc_executor_common::error::Error\">Error</a></h4></section></summary><div class='docblock'>Externalities error type.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.call\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_executor/executor.rs.html#650-657\">source</a><a href=\"#method.call\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sp_core/traits/trait.CodeExecutor.html#tymethod.call\" class=\"fn\">call</a>(\n    &amp;self,\n    ext: &amp;mut dyn <a class=\"trait\" href=\"sp_externalities/trait.Externalities.html\" title=\"trait sp_externalities::Externalities\">Externalities</a>,\n    runtime_code: &amp;<a class=\"struct\" href=\"sp_core/traits/struct.RuntimeCode.html\" title=\"struct sp_core::traits::RuntimeCode\">RuntimeCode</a>&lt;'_&gt;,\n    method: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.str.html\">str</a>,\n    data: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>],\n    context: <a class=\"enum\" href=\"sp_core/traits/enum.CallContext.html\" title=\"enum sp_core::traits::CallContext\">CallContext</a>\n) -&gt; (<a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>&gt;, <a class=\"enum\" href=\"sc_executor_common/error/enum.Error.html\" title=\"enum sc_executor_common::error::Error\">Error</a>&gt;, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a>)</h4></section></summary><div class='docblock'>Call a given method in the runtime. <a href=\"sp_core/traits/trait.CodeExecutor.html#tymethod.call\">Read more</a></div></details></div></details>","CodeExecutor","parachain_template_node::service::ParachainExecutor"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()