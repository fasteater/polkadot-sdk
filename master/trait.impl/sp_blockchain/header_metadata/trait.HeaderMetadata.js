(function() {var implementors = {
"polkadot_service":[],
"sc_client_api":[["impl&lt;Block: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a>&gt; HeaderMetadata&lt;Block&gt; for <a class=\"struct\" href=\"sc_client_api/in_mem/struct.Blockchain.html\" title=\"struct sc_client_api::in_mem::Blockchain\">Blockchain</a>&lt;Block&gt;"]],
"sc_client_db":[["impl&lt;Block: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a>&gt; <a class=\"trait\" href=\"sp_blockchain/header_metadata/trait.HeaderMetadata.html\" title=\"trait sp_blockchain::header_metadata::HeaderMetadata\">HeaderMetadata</a>&lt;Block&gt; for <a class=\"struct\" href=\"sc_client_db/struct.BlockchainDb.html\" title=\"struct sc_client_db::BlockchainDb\">BlockchainDb</a>&lt;Block&gt;"]],
"sc_service":[["impl&lt;B, E, Block, RA&gt; <a class=\"trait\" href=\"sp_blockchain/header_metadata/trait.HeaderMetadata.html\" title=\"trait sp_blockchain::header_metadata::HeaderMetadata\">HeaderMetadata</a>&lt;Block&gt; for <a class=\"struct\" href=\"sc_service/client/struct.Client.html\" title=\"struct sc_service::client::Client\">Client</a>&lt;B, E, Block, RA&gt;<span class=\"where fmt-newline\">where\n    B: <a class=\"trait\" href=\"sc_client_api/backend/trait.Backend.html\" title=\"trait sc_client_api::backend::Backend\">Backend</a>&lt;Block&gt;,\n    E: <a class=\"trait\" href=\"sc_client_api/call_executor/trait.CallExecutor.html\" title=\"trait sc_client_api::call_executor::CallExecutor\">CallExecutor</a>&lt;Block&gt;,\n    Block: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a>,</span>"]],
"substrate_test_runtime_transaction_pool":[["impl <a class=\"trait\" href=\"sp_blockchain/header_metadata/trait.HeaderMetadata.html\" title=\"trait sp_blockchain::header_metadata::HeaderMetadata\">HeaderMetadata</a>&lt;<a class=\"struct\" href=\"sp_runtime/generic/block/struct.Block.html\" title=\"struct sp_runtime::generic::block::Block\">Block</a>&lt;<a class=\"struct\" href=\"sp_runtime/generic/header/struct.Header.html\" title=\"struct sp_runtime::generic::header::Header\">Header</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u64.html\">u64</a>, <a class=\"struct\" href=\"sp_runtime/traits/struct.BlakeTwo256.html\" title=\"struct sp_runtime::traits::BlakeTwo256\">BlakeTwo256</a>&gt;, <a class=\"struct\" href=\"sp_runtime/generic/unchecked_extrinsic/struct.UncheckedExtrinsic.html\" title=\"struct sp_runtime::generic::unchecked_extrinsic::UncheckedExtrinsic\">UncheckedExtrinsic</a>&lt;<a class=\"struct\" href=\"sp_core/sr25519/struct.Public.html\" title=\"struct sp_core::sr25519::Public\">Public</a>, RuntimeCall, <a class=\"struct\" href=\"sp_core/sr25519/struct.Signature.html\" title=\"struct sp_core::sr25519::Signature\">Signature</a>, ((<a class=\"struct\" href=\"frame_system/extensions/check_nonce/struct.CheckNonce.html\" title=\"struct frame_system::extensions::check_nonce::CheckNonce\">CheckNonce</a>&lt;Runtime&gt;, <a class=\"struct\" href=\"frame_system/extensions/check_weight/struct.CheckWeight.html\" title=\"struct frame_system::extensions::check_weight::CheckWeight\">CheckWeight</a>&lt;Runtime&gt;), CheckSubstrateCall)&gt;&gt;&gt; for <a class=\"struct\" href=\"substrate_test_runtime_transaction_pool/struct.TestApi.html\" title=\"struct substrate_test_runtime_transaction_pool::TestApi\">TestApi</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()