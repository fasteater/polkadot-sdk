(function() {var type_impls = {
"polkadot_runtime_common":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Convert%3CFixedU128,+FixedU128%3E-for-TargetedFeeAdjustment%3CT,+S,+V,+M,+X%3E\" class=\"impl\"><a href=\"#impl-Convert%3CFixedU128,+FixedU128%3E-for-TargetedFeeAdjustment%3CT,+S,+V,+M,+X%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, S, V, M, X&gt; <a class=\"trait\" href=\"sp_runtime/traits/trait.Convert.html\" title=\"trait sp_runtime::traits::Convert\">Convert</a>&lt;<a class=\"struct\" href=\"sp_arithmetic/fixed_point/struct.FixedU128.html\" title=\"struct sp_arithmetic::fixed_point::FixedU128\">FixedU128</a>, <a class=\"struct\" href=\"sp_arithmetic/fixed_point/struct.FixedU128.html\" title=\"struct sp_arithmetic::fixed_point::FixedU128\">FixedU128</a>&gt; for TargetedFeeAdjustment&lt;T, S, V, M, X&gt;<span class=\"where fmt-newline\">where\n    T: Config,\n    S: Get&lt;<a class=\"struct\" href=\"sp_arithmetic/per_things/struct.Perquintill.html\" title=\"struct sp_arithmetic::per_things::Perquintill\">Perquintill</a>&gt;,\n    V: Get&lt;<a class=\"struct\" href=\"sp_arithmetic/fixed_point/struct.FixedU128.html\" title=\"struct sp_arithmetic::fixed_point::FixedU128\">FixedU128</a>&gt;,\n    M: Get&lt;<a class=\"struct\" href=\"sp_arithmetic/fixed_point/struct.FixedU128.html\" title=\"struct sp_arithmetic::fixed_point::FixedU128\">FixedU128</a>&gt;,\n    X: Get&lt;<a class=\"struct\" href=\"sp_arithmetic/fixed_point/struct.FixedU128.html\" title=\"struct sp_arithmetic::fixed_point::FixedU128\">FixedU128</a>&gt;,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.convert\" class=\"method trait-impl\"><a href=\"#method.convert\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sp_runtime/traits/trait.Convert.html#tymethod.convert\" class=\"fn\">convert</a>(previous: <a class=\"struct\" href=\"sp_arithmetic/fixed_point/struct.FixedU128.html\" title=\"struct sp_arithmetic::fixed_point::FixedU128\">FixedU128</a>) -&gt; <a class=\"struct\" href=\"sp_arithmetic/fixed_point/struct.FixedU128.html\" title=\"struct sp_arithmetic::fixed_point::FixedU128\">FixedU128</a></h4></section></summary><div class='docblock'>Make conversion.</div></details></div></details>","Convert<FixedU128, FixedU128>","polkadot_runtime_common::SlowAdjustingFeeUpdate"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-MultiplierUpdate-for-TargetedFeeAdjustment%3CT,+S,+V,+M,+X%3E\" class=\"impl\"><a href=\"#impl-MultiplierUpdate-for-TargetedFeeAdjustment%3CT,+S,+V,+M,+X%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, S, V, M, X&gt; MultiplierUpdate for TargetedFeeAdjustment&lt;T, S, V, M, X&gt;<span class=\"where fmt-newline\">where\n    T: Config,\n    S: Get&lt;<a class=\"struct\" href=\"sp_arithmetic/per_things/struct.Perquintill.html\" title=\"struct sp_arithmetic::per_things::Perquintill\">Perquintill</a>&gt;,\n    V: Get&lt;<a class=\"struct\" href=\"sp_arithmetic/fixed_point/struct.FixedU128.html\" title=\"struct sp_arithmetic::fixed_point::FixedU128\">FixedU128</a>&gt;,\n    M: Get&lt;<a class=\"struct\" href=\"sp_arithmetic/fixed_point/struct.FixedU128.html\" title=\"struct sp_arithmetic::fixed_point::FixedU128\">FixedU128</a>&gt;,\n    X: Get&lt;<a class=\"struct\" href=\"sp_arithmetic/fixed_point/struct.FixedU128.html\" title=\"struct sp_arithmetic::fixed_point::FixedU128\">FixedU128</a>&gt;,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.min\" class=\"method trait-impl\"><a href=\"#method.min\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">min</a>() -&gt; <a class=\"struct\" href=\"sp_arithmetic/fixed_point/struct.FixedU128.html\" title=\"struct sp_arithmetic::fixed_point::FixedU128\">FixedU128</a></h4></section></summary><div class='docblock'>Minimum multiplier. Any outcome of the <code>convert</code> function should be at least this.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.max\" class=\"method trait-impl\"><a href=\"#method.max\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">max</a>() -&gt; <a class=\"struct\" href=\"sp_arithmetic/fixed_point/struct.FixedU128.html\" title=\"struct sp_arithmetic::fixed_point::FixedU128\">FixedU128</a></h4></section></summary><div class='docblock'>Maximum multiplier. Any outcome of the <code>convert</code> function should be less or equal this.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.target\" class=\"method trait-impl\"><a href=\"#method.target\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">target</a>() -&gt; <a class=\"struct\" href=\"sp_arithmetic/per_things/struct.Perquintill.html\" title=\"struct sp_arithmetic::per_things::Perquintill\">Perquintill</a></h4></section></summary><div class='docblock'>Target block saturation level</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.variability\" class=\"method trait-impl\"><a href=\"#method.variability\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">variability</a>() -&gt; <a class=\"struct\" href=\"sp_arithmetic/fixed_point/struct.FixedU128.html\" title=\"struct sp_arithmetic::fixed_point::FixedU128\">FixedU128</a></h4></section></summary><div class='docblock'>Variability factor</div></details></div></details>","MultiplierUpdate","polkadot_runtime_common::SlowAdjustingFeeUpdate"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()