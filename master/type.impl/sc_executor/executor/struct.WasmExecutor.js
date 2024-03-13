(function() {var type_impls = {
"staging_node_cli":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-WasmExecutor%3CH%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sc_executor/executor.rs.html#255-257\">source</a><a href=\"#impl-WasmExecutor%3CH%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;H&gt; <a class=\"struct\" href=\"sc_executor/executor/struct.WasmExecutor.html\" title=\"struct sc_executor::executor::WasmExecutor\">WasmExecutor</a>&lt;H&gt;<span class=\"where fmt-newline\">where\n    H: <a class=\"trait\" href=\"sp_wasm_interface/trait.HostFunctions.html\" title=\"trait sp_wasm_interface::HostFunctions\">HostFunctions</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/sc_executor/executor.rs.html#278-284\">source</a><h4 class=\"code-header\">pub fn <a href=\"sc_executor/executor/struct.WasmExecutor.html#tymethod.new\" class=\"fn\">new</a>(\n    method: <a class=\"enum\" href=\"sc_executor/wasm_runtime/enum.WasmExecutionMethod.html\" title=\"enum sc_executor::wasm_runtime::WasmExecutionMethod\">WasmExecutionMethod</a>,\n    default_heap_pages: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u64.html\">u64</a>&gt;,\n    max_runtime_instances: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a>,\n    cache_path: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/std/path/struct.PathBuf.html\" title=\"struct std::path::PathBuf\">PathBuf</a>&gt;,\n    runtime_cache_size: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>\n) -&gt; <a class=\"struct\" href=\"sc_executor/executor/struct.WasmExecutor.html\" title=\"struct sc_executor::executor::WasmExecutor\">WasmExecutor</a>&lt;H&gt;</h4></section><span class=\"item-info\"><div class=\"stab deprecated\"><span class=\"emoji\">👎</span><span>Deprecated: use <code>Self::builder</code> method instead of it</span></div></span></summary><div class=\"docblock\"><p>Create new instance.</p>\n<h5 id=\"parameters\"><a href=\"#parameters\">Parameters</a></h5>\n<p><code>method</code> - Method used to execute Wasm code.</p>\n<p><code>default_heap_pages</code> - Number of 64KB pages to allocate for Wasm execution. Internally this\nwill be mapped as <a href=\"sc_executor_common/wasm_runtime/enum.HeapAllocStrategy.html#variant.Static\" title=\"variant sc_executor_common::wasm_runtime::HeapAllocStrategy::Static\"><code>HeapAllocStrategy::Static</code></a> where <code>default_heap_pages</code> represent the\nstatic number of heap pages to allocate. Defaults to <code>DEFAULT_HEAP_ALLOC_STRATEGY</code> if <code>None</code>\nis provided.</p>\n<p><code>max_runtime_instances</code> - The number of runtime instances to keep in memory ready for reuse.</p>\n<p><code>cache_path</code> - A path to a directory where the executor can place its files for purposes of\ncaching. This may be important in cases when there are many different modules with the\ncompiled execution method is used.</p>\n<p><code>runtime_cache_size</code> - The capacity of runtime cache.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.builder\" class=\"method\"><a class=\"src rightside\" href=\"src/sc_executor/executor.rs.html#306\">source</a><h4 class=\"code-header\">pub fn <a href=\"sc_executor/executor/struct.WasmExecutor.html#tymethod.builder\" class=\"fn\">builder</a>() -&gt; WasmExecutorBuilder&lt;H&gt;</h4></section></summary><div class=\"docblock\"><p>Instantiate a builder for creating an instance of <code>Self</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.allow_missing_host_functions\" class=\"method\"><a class=\"src rightside\" href=\"src/sc_executor/executor.rs.html#312\">source</a><h4 class=\"code-header\">pub fn <a href=\"sc_executor/executor/struct.WasmExecutor.html#tymethod.allow_missing_host_functions\" class=\"fn\">allow_missing_host_functions</a>(\n    &amp;mut self,\n    allow_missing_host_functions: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a>\n)</h4></section><span class=\"item-info\"><div class=\"stab deprecated\"><span class=\"emoji\">👎</span><span>Deprecated: use <code>Self::builder</code> method instead of it</span></div></span></summary><div class=\"docblock\"><p>Ignore missing function imports if set true.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_instance\" class=\"method\"><a class=\"src rightside\" href=\"src/sc_executor/executor.rs.html#329-342\">source</a><h4 class=\"code-header\">pub fn <a href=\"sc_executor/executor/struct.WasmExecutor.html#tymethod.with_instance\" class=\"fn\">with_instance</a>&lt;R, F&gt;(\n    &amp;self,\n    runtime_code: &amp;<a class=\"struct\" href=\"sp_core/traits/struct.RuntimeCode.html\" title=\"struct sp_core::traits::RuntimeCode\">RuntimeCode</a>&lt;'_&gt;,\n    ext: &amp;mut dyn <a class=\"trait\" href=\"sp_externalities/trait.Externalities.html\" title=\"trait sp_externalities::Externalities\">Externalities</a>,\n    heap_alloc_strategy: <a class=\"enum\" href=\"sc_executor_common/wasm_runtime/enum.HeapAllocStrategy.html\" title=\"enum sc_executor_common::wasm_runtime::HeapAllocStrategy\">HeapAllocStrategy</a>,\n    f: F\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;R, <a class=\"enum\" href=\"sc_executor_common/error/enum.Error.html\" title=\"enum sc_executor_common::error::Error\">Error</a>&gt;<span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/struct.AssertUnwindSafe.html\" title=\"struct core::panic::unwind_safe::AssertUnwindSafe\">AssertUnwindSafe</a>&lt;&amp;dyn <a class=\"trait\" href=\"sc_executor_common/wasm_runtime/trait.WasmModule.html\" title=\"trait sc_executor_common::wasm_runtime::WasmModule\">WasmModule</a>&gt;, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/struct.AssertUnwindSafe.html\" title=\"struct core::panic::unwind_safe::AssertUnwindSafe\">AssertUnwindSafe</a>&lt;&amp;mut dyn <a class=\"trait\" href=\"sc_executor_common/wasm_runtime/trait.WasmInstance.html\" title=\"trait sc_executor_common::wasm_runtime::WasmInstance\">WasmInstance</a>&gt;, <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;<a class=\"struct\" href=\"sp_version/struct.RuntimeVersion.html\" title=\"struct sp_version::RuntimeVersion\">RuntimeVersion</a>&gt;, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/panic/unwind_safe/struct.AssertUnwindSafe.html\" title=\"struct core::panic::unwind_safe::AssertUnwindSafe\">AssertUnwindSafe</a>&lt;&amp;mut dyn <a class=\"trait\" href=\"sp_externalities/trait.Externalities.html\" title=\"trait sp_externalities::Externalities\">Externalities</a>&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;R, <a class=\"enum\" href=\"sc_executor_common/error/enum.Error.html\" title=\"enum sc_executor_common::error::Error\">Error</a>&gt;, <a class=\"enum\" href=\"sc_executor_common/error/enum.Error.html\" title=\"enum sc_executor_common::error::Error\">Error</a>&gt;,</span></h4></section></summary><div class=\"docblock\"><p>Execute the given closure <code>f</code> with the latest runtime (based on <code>runtime_code</code>).</p>\n<p>The closure <code>f</code> is expected to return <code>Err(_)</code> when there happened a <code>panic!</code> in native code\nwhile executing the runtime in Wasm. If a <code>panic!</code> occurred, the runtime is invalidated to\nprevent any poisoned state. Native runtime execution does not need to report back\nany <code>panic!</code>.</p>\n<h5 id=\"safety\"><a href=\"#safety\">Safety</a></h5>\n<p><code>runtime</code> and <code>ext</code> are given as <code>AssertUnwindSafe</code> to the closure. As described above, the\nruntime is invalidated on any <code>panic!</code> to prevent a poisoned state. <code>ext</code> is already\nimplicitly handled as unwind safe, as we store it in a global variable while executing the\nnative runtime.</p>\n</div></details></div></details>",0,"staging_node_cli::service::RuntimeExecutor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RuntimeVersionOf-for-WasmExecutor%3CH%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sc_executor/executor.rs.html#530-532\">source</a><a href=\"#impl-RuntimeVersionOf-for-WasmExecutor%3CH%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;H&gt; <a class=\"trait\" href=\"sc_executor/trait.RuntimeVersionOf.html\" title=\"trait sc_executor::RuntimeVersionOf\">RuntimeVersionOf</a> for <a class=\"struct\" href=\"sc_executor/executor/struct.WasmExecutor.html\" title=\"struct sc_executor::executor::WasmExecutor\">WasmExecutor</a>&lt;H&gt;<span class=\"where fmt-newline\">where\n    H: <a class=\"trait\" href=\"sp_wasm_interface/trait.HostFunctions.html\" title=\"trait sp_wasm_interface::HostFunctions\">HostFunctions</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.runtime_version\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_executor/executor.rs.html#534-538\">source</a><a href=\"#method.runtime_version\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sc_executor/trait.RuntimeVersionOf.html#tymethod.runtime_version\" class=\"fn\">runtime_version</a>(\n    &amp;self,\n    ext: &amp;mut dyn <a class=\"trait\" href=\"sp_externalities/trait.Externalities.html\" title=\"trait sp_externalities::Externalities\">Externalities</a>,\n    runtime_code: &amp;<a class=\"struct\" href=\"sp_core/traits/struct.RuntimeCode.html\" title=\"struct sp_core::traits::RuntimeCode\">RuntimeCode</a>&lt;'_&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"sp_version/struct.RuntimeVersion.html\" title=\"struct sp_version::RuntimeVersion\">RuntimeVersion</a>, <a class=\"enum\" href=\"sc_executor_common/error/enum.Error.html\" title=\"enum sc_executor_common::error::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Extract <a href=\"sp_version/struct.RuntimeVersion.html\" title=\"struct sp_version::RuntimeVersion\"><code>RuntimeVersion</code></a> of the given <code>runtime_code</code>.</div></details></div></details>","RuntimeVersionOf","staging_node_cli::service::RuntimeExecutor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-WasmExecutor%3CH%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sc_executor/executor.rs.html#240\">source</a><a href=\"#impl-Clone-for-WasmExecutor%3CH%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;H&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"sc_executor/executor/struct.WasmExecutor.html\" title=\"struct sc_executor::executor::WasmExecutor\">WasmExecutor</a>&lt;H&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_executor/executor.rs.html#241\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"sc_executor/executor/struct.WasmExecutor.html\" title=\"struct sc_executor::executor::WasmExecutor\">WasmExecutor</a>&lt;H&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","staging_node_cli::service::RuntimeExecutor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ReadRuntimeVersion-for-WasmExecutor%3CH%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sc_executor/executor.rs.html#445-447\">source</a><a href=\"#impl-ReadRuntimeVersion-for-WasmExecutor%3CH%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;H&gt; <a class=\"trait\" href=\"sp_core/traits/trait.ReadRuntimeVersion.html\" title=\"trait sp_core::traits::ReadRuntimeVersion\">ReadRuntimeVersion</a> for <a class=\"struct\" href=\"sc_executor/executor/struct.WasmExecutor.html\" title=\"struct sc_executor::executor::WasmExecutor\">WasmExecutor</a>&lt;H&gt;<span class=\"where fmt-newline\">where\n    H: <a class=\"trait\" href=\"sp_wasm_interface/trait.HostFunctions.html\" title=\"trait sp_wasm_interface::HostFunctions\">HostFunctions</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.read_runtime_version\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_executor/executor.rs.html#449-453\">source</a><a href=\"#method.read_runtime_version\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sp_core/traits/trait.ReadRuntimeVersion.html#tymethod.read_runtime_version\" class=\"fn\">read_runtime_version</a>(\n    &amp;self,\n    wasm_code: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>],\n    ext: &amp;mut dyn <a class=\"trait\" href=\"sp_externalities/trait.Externalities.html\" title=\"trait sp_externalities::Externalities\">Externalities</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>&gt;, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt;</h4></section></summary><div class='docblock'>Reads the runtime version information from the given wasm code. <a href=\"sp_core/traits/trait.ReadRuntimeVersion.html#tymethod.read_runtime_version\">Read more</a></div></details></div></details>","ReadRuntimeVersion","staging_node_cli::service::RuntimeExecutor"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-CodeExecutor-for-WasmExecutor%3CH%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sc_executor/executor.rs.html#483-485\">source</a><a href=\"#impl-CodeExecutor-for-WasmExecutor%3CH%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;H&gt; <a class=\"trait\" href=\"sp_core/traits/trait.CodeExecutor.html\" title=\"trait sp_core::traits::CodeExecutor\">CodeExecutor</a> for <a class=\"struct\" href=\"sc_executor/executor/struct.WasmExecutor.html\" title=\"struct sc_executor::executor::WasmExecutor\">WasmExecutor</a>&lt;H&gt;<span class=\"where fmt-newline\">where\n    H: <a class=\"trait\" href=\"sp_wasm_interface/trait.HostFunctions.html\" title=\"trait sp_wasm_interface::HostFunctions\">HostFunctions</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Error\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Error\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"sp_core/traits/trait.CodeExecutor.html#associatedtype.Error\" class=\"associatedtype\">Error</a> = <a class=\"enum\" href=\"sc_executor_common/error/enum.Error.html\" title=\"enum sc_executor_common::error::Error\">Error</a></h4></section></summary><div class='docblock'>Externalities error type.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.call\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sc_executor/executor.rs.html#489-496\">source</a><a href=\"#method.call\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sp_core/traits/trait.CodeExecutor.html#tymethod.call\" class=\"fn\">call</a>(\n    &amp;self,\n    ext: &amp;mut dyn <a class=\"trait\" href=\"sp_externalities/trait.Externalities.html\" title=\"trait sp_externalities::Externalities\">Externalities</a>,\n    runtime_code: &amp;<a class=\"struct\" href=\"sp_core/traits/struct.RuntimeCode.html\" title=\"struct sp_core::traits::RuntimeCode\">RuntimeCode</a>&lt;'_&gt;,\n    method: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.str.html\">str</a>,\n    data: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>],\n    context: <a class=\"enum\" href=\"sp_core/traits/enum.CallContext.html\" title=\"enum sp_core::traits::CallContext\">CallContext</a>\n) -&gt; (<a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>&gt;, <a class=\"enum\" href=\"sc_executor_common/error/enum.Error.html\" title=\"enum sc_executor_common::error::Error\">Error</a>&gt;, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a>)</h4></section></summary><div class='docblock'>Call a given method in the runtime. <a href=\"sp_core/traits/trait.CodeExecutor.html#tymethod.call\">Read more</a></div></details></div></details>","CodeExecutor","staging_node_cli::service::RuntimeExecutor"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()