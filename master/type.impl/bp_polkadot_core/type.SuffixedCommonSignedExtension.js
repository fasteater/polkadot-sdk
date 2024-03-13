(function() {var type_impls = {
"bp_bridge_hub_cumulus":[],
"bp_polkadot_core":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-SuffixedCommonSignedExtensionExt%3CSuffix%3E-for-GenericSignedExtension%3C((GenericSignedExtensionSchema%3C(),+()%3E,+GenericSignedExtensionSchema%3C(),+u32%3E,+GenericSignedExtensionSchema%3C(),+u32%3E,+GenericSignedExtensionSchema%3C(),+%3CBlakeTwo256+as+Hasher%3E::Out%3E,+GenericSignedExtensionSchema%3CEra,+%3CBlakeTwo256+as+Hasher%3E::Out%3E,+GenericSignedExtensionSchema%3CCompact%3Cu32%3E,+()%3E,+GenericSignedExtensionSchema%3C(),+()%3E,+GenericSignedExtensionSchema%3CCompact%3Cu128%3E,+()%3E),+Suffix)%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/bp_polkadot_core/lib.rs.html#313-365\">source</a><a href=\"#impl-SuffixedCommonSignedExtensionExt%3CSuffix%3E-for-GenericSignedExtension%3C((GenericSignedExtensionSchema%3C(),+()%3E,+GenericSignedExtensionSchema%3C(),+u32%3E,+GenericSignedExtensionSchema%3C(),+u32%3E,+GenericSignedExtensionSchema%3C(),+%3CBlakeTwo256+as+Hasher%3E::Out%3E,+GenericSignedExtensionSchema%3CEra,+%3CBlakeTwo256+as+Hasher%3E::Out%3E,+GenericSignedExtensionSchema%3CCompact%3Cu32%3E,+()%3E,+GenericSignedExtensionSchema%3C(),+()%3E,+GenericSignedExtensionSchema%3CCompact%3Cu128%3E,+()%3E),+Suffix)%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Suffix&gt; <a class=\"trait\" href=\"bp_polkadot_core/trait.SuffixedCommonSignedExtensionExt.html\" title=\"trait bp_polkadot_core::SuffixedCommonSignedExtensionExt\">SuffixedCommonSignedExtensionExt</a>&lt;Suffix&gt; for <a class=\"type\" href=\"bp_polkadot_core/type.SuffixedCommonSignedExtension.html\" title=\"type bp_polkadot_core::SuffixedCommonSignedExtension\">SuffixedCommonSignedExtension</a>&lt;Suffix&gt;<span class=\"where fmt-newline\">where\n    Suffix: SignedExtensionSchema,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_params\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bp_polkadot_core/lib.rs.html#317-354\">source</a><a href=\"#method.from_params\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bp_polkadot_core/trait.SuffixedCommonSignedExtensionExt.html#tymethod.from_params\" class=\"fn\">from_params</a>(\n    spec_version: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u32.html\">u32</a>,\n    transaction_version: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u32.html\">u32</a>,\n    era: TransactionEra&lt;<a class=\"type\" href=\"bp_polkadot_core/type.BlockNumber.html\" title=\"type bp_polkadot_core::BlockNumber\">BlockNumber</a>, <a class=\"type\" href=\"bp_polkadot_core/type.Hash.html\" title=\"type bp_polkadot_core::Hash\">Hash</a>&gt;,\n    genesis_hash: <a class=\"type\" href=\"bp_polkadot_core/type.Hash.html\" title=\"type bp_polkadot_core::Hash\">Hash</a>,\n    nonce: <a class=\"type\" href=\"bp_polkadot_core/type.Nonce.html\" title=\"type bp_polkadot_core::Nonce\">Nonce</a>,\n    tip: <a class=\"type\" href=\"bp_polkadot_core/type.Balance.html\" title=\"type bp_polkadot_core::Balance\">Balance</a>,\n    extra: (Suffix::Payload, Suffix::AdditionalSigned)\n) -&gt; Self</h4></section></summary><div class='docblock'>Create signed extension from its components.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.nonce\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bp_polkadot_core/lib.rs.html#356-359\">source</a><a href=\"#method.nonce\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bp_polkadot_core/trait.SuffixedCommonSignedExtensionExt.html#tymethod.nonce\" class=\"fn\">nonce</a>(&amp;self) -&gt; <a class=\"type\" href=\"bp_polkadot_core/type.Nonce.html\" title=\"type bp_polkadot_core::Nonce\">Nonce</a></h4></section></summary><div class='docblock'>Return transaction nonce.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.tip\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bp_polkadot_core/lib.rs.html#361-364\">source</a><a href=\"#method.tip\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bp_polkadot_core/trait.SuffixedCommonSignedExtensionExt.html#tymethod.tip\" class=\"fn\">tip</a>(&amp;self) -&gt; <a class=\"type\" href=\"bp_polkadot_core/type.Balance.html\" title=\"type bp_polkadot_core::Balance\">Balance</a></h4></section></summary><div class='docblock'>Return transaction tip.</div></details></div></details>","SuffixedCommonSignedExtensionExt<Suffix>","bp_polkadot_core::CommonSignedExtension"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()