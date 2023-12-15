(function() {var implementors = {
"assets_common":[["impl&lt;Assets, LocalAssetIdConverter, ForeignAssets&gt; <a class=\"trait\" href=\"frame_support/traits/members/trait.ContainsPair.html\" title=\"trait frame_support::traits::members::ContainsPair\">ContainsPair</a>&lt;<a class=\"struct\" href=\"staging_xcm/v3/multilocation/struct.MultiLocation.html\" title=\"struct staging_xcm::v3::multilocation::MultiLocation\">MultiLocation</a>, &lt;&lt;<a class=\"enum\" href=\"sp_runtime/enum.MultiSignature.html\" title=\"enum sp_runtime::MultiSignature\">MultiSignature</a> as <a class=\"trait\" href=\"sp_runtime/traits/trait.Verify.html\" title=\"trait sp_runtime::traits::Verify\">Verify</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Verify.html#associatedtype.Signer\" title=\"type sp_runtime::traits::Verify::Signer\">Signer</a> as <a class=\"trait\" href=\"sp_runtime/traits/trait.IdentifyAccount.html\" title=\"trait sp_runtime::traits::IdentifyAccount\">IdentifyAccount</a>&gt;::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.IdentifyAccount.html#associatedtype.AccountId\" title=\"type sp_runtime::traits::IdentifyAccount::AccountId\">AccountId</a>&gt; for <a class=\"struct\" href=\"assets_common/local_and_foreign_assets/struct.LocalAndForeignAssets.html\" title=\"struct assets_common::local_and_foreign_assets::LocalAndForeignAssets\">LocalAndForeignAssets</a>&lt;Assets, LocalAssetIdConverter, ForeignAssets&gt;<span class=\"where fmt-newline\">where\n    Assets: <a class=\"trait\" href=\"frame_support/traits/metadata/trait.PalletInfoAccess.html\" title=\"trait frame_support::traits::metadata::PalletInfoAccess\">PalletInfoAccess</a> + <a class=\"trait\" href=\"frame_support/traits/members/trait.ContainsPair.html\" title=\"trait frame_support::traits::members::ContainsPair\">ContainsPair</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.74.0/std/primitive.u32.html\">u32</a>, <a class=\"type\" href=\"parachains_common/types/type.AccountId.html\" title=\"type parachains_common::types::AccountId\">AccountId</a>&gt;,\n    LocalAssetIdConverter: <a class=\"trait\" href=\"sp_runtime/traits/trait.MaybeEquivalence.html\" title=\"trait sp_runtime::traits::MaybeEquivalence\">MaybeEquivalence</a>&lt;<a class=\"struct\" href=\"staging_xcm/v3/multilocation/struct.MultiLocation.html\" title=\"struct staging_xcm::v3::multilocation::MultiLocation\">MultiLocation</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.74.0/std/primitive.u32.html\">u32</a>&gt;,\n    ForeignAssets: <a class=\"trait\" href=\"frame_support/traits/members/trait.ContainsPair.html\" title=\"trait frame_support::traits::members::ContainsPair\">ContainsPair</a>&lt;<a class=\"struct\" href=\"staging_xcm/v3/multilocation/struct.MultiLocation.html\" title=\"struct staging_xcm::v3::multilocation::MultiLocation\">MultiLocation</a>, <a class=\"type\" href=\"parachains_common/types/type.AccountId.html\" title=\"type parachains_common::types::AccountId\">AccountId</a>&gt;,</span>"],["impl&lt;IsForeign: <a class=\"trait\" href=\"frame_support/traits/members/trait.ContainsPair.html\" title=\"trait frame_support::traits::members::ContainsPair\">ContainsPair</a>&lt;<a class=\"struct\" href=\"staging_xcm/v3/multilocation/struct.MultiLocation.html\" title=\"struct staging_xcm::v3::multilocation::MultiLocation\">MultiLocation</a>, <a class=\"struct\" href=\"staging_xcm/v3/multilocation/struct.MultiLocation.html\" title=\"struct staging_xcm::v3::multilocation::MultiLocation\">MultiLocation</a>&gt;&gt; <a class=\"trait\" href=\"frame_support/traits/members/trait.ContainsPair.html\" title=\"trait frame_support::traits::members::ContainsPair\">ContainsPair</a>&lt;<a class=\"struct\" href=\"staging_xcm/v3/multiasset/struct.MultiAsset.html\" title=\"struct staging_xcm::v3::multiasset::MultiAsset\">MultiAsset</a>, <a class=\"struct\" href=\"staging_xcm/v3/multilocation/struct.MultiLocation.html\" title=\"struct staging_xcm::v3::multilocation::MultiLocation\">MultiLocation</a>&gt; for <a class=\"struct\" href=\"assets_common/matching/struct.IsForeignConcreteAsset.html\" title=\"struct assets_common::matching::IsForeignConcreteAsset\">IsForeignConcreteAsset</a>&lt;IsForeign&gt;"],["impl&lt;UniversalLocation: Get&lt;<a class=\"type\" href=\"staging_xcm/v3/multilocation/type.InteriorMultiLocation.html\" title=\"type staging_xcm::v3::multilocation::InteriorMultiLocation\">InteriorMultiLocation</a>&gt;, Reserves: <a class=\"trait\" href=\"frame_support/traits/members/trait.ContainsPair.html\" title=\"trait frame_support::traits::members::ContainsPair\">ContainsPair</a>&lt;<a class=\"struct\" href=\"staging_xcm/v3/multiasset/struct.MultiAsset.html\" title=\"struct staging_xcm::v3::multiasset::MultiAsset\">MultiAsset</a>, <a class=\"struct\" href=\"staging_xcm/v3/multilocation/struct.MultiLocation.html\" title=\"struct staging_xcm::v3::multilocation::MultiLocation\">MultiLocation</a>&gt;&gt; <a class=\"trait\" href=\"frame_support/traits/members/trait.ContainsPair.html\" title=\"trait frame_support::traits::members::ContainsPair\">ContainsPair</a>&lt;<a class=\"struct\" href=\"staging_xcm/v3/multiasset/struct.MultiAsset.html\" title=\"struct staging_xcm::v3::multiasset::MultiAsset\">MultiAsset</a>, <a class=\"struct\" href=\"staging_xcm/v3/multilocation/struct.MultiLocation.html\" title=\"struct staging_xcm::v3::multilocation::MultiLocation\">MultiLocation</a>&gt; for <a class=\"struct\" href=\"assets_common/matching/struct.IsTrustedBridgedReserveLocationForConcreteAsset.html\" title=\"struct assets_common::matching::IsTrustedBridgedReserveLocationForConcreteAsset\">IsTrustedBridgedReserveLocationForConcreteAsset</a>&lt;UniversalLocation, Reserves&gt;"],["impl&lt;SelfParaId: Get&lt;<a class=\"struct\" href=\"polkadot_parachain_primitives/primitives/struct.Id.html\" title=\"struct polkadot_parachain_primitives::primitives::Id\">ParaId</a>&gt;&gt; <a class=\"trait\" href=\"frame_support/traits/members/trait.ContainsPair.html\" title=\"trait frame_support::traits::members::ContainsPair\">ContainsPair</a>&lt;<a class=\"struct\" href=\"staging_xcm/v3/multilocation/struct.MultiLocation.html\" title=\"struct staging_xcm::v3::multilocation::MultiLocation\">MultiLocation</a>, <a class=\"struct\" href=\"staging_xcm/v3/multilocation/struct.MultiLocation.html\" title=\"struct staging_xcm::v3::multilocation::MultiLocation\">MultiLocation</a>&gt; for <a class=\"struct\" href=\"assets_common/matching/struct.FromSiblingParachain.html\" title=\"struct assets_common::matching::FromSiblingParachain\">FromSiblingParachain</a>&lt;SelfParaId&gt;"]],
"frame":[],
"frame_support":[],
"pallet_assets":[["impl&lt;T: <a class=\"trait\" href=\"pallet_assets/pallet/trait.Config.html\" title=\"trait pallet_assets::pallet::Config\">Config</a>&lt;I&gt;, I: 'static&gt; <a class=\"trait\" href=\"frame_support/traits/members/trait.ContainsPair.html\" title=\"trait frame_support::traits::members::ContainsPair\">ContainsPair</a>&lt;&lt;T as <a class=\"trait\" href=\"pallet_assets/pallet/trait.Config.html\" title=\"trait pallet_assets::pallet::Config\">Config</a>&lt;I&gt;&gt;::<a class=\"associatedtype\" href=\"pallet_assets/pallet/trait.Config.html#associatedtype.AssetId\" title=\"type pallet_assets::pallet::Config::AssetId\">AssetId</a>, &lt;T as <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.AccountId\" title=\"type frame_system::pallet::Config::AccountId\">AccountId</a>&gt; for <a class=\"struct\" href=\"pallet_assets/pallet/struct.Pallet.html\" title=\"struct pallet_assets::pallet::Pallet\">Pallet</a>&lt;T, I&gt;"]],
"pallet_contracts_mock_network":[["impl&lt;T: Get&lt;(<a class=\"struct\" href=\"staging_xcm/v3/multilocation/struct.MultiLocation.html\" title=\"struct staging_xcm::v3::multilocation::MultiLocation\">MultiLocation</a>, <a class=\"enum\" href=\"staging_xcm/v3/multiasset/enum.MultiAssetFilter.html\" title=\"enum staging_xcm::v3::multiasset::MultiAssetFilter\">MultiAssetFilter</a>)&gt;&gt; <a class=\"trait\" href=\"frame_support/traits/members/trait.ContainsPair.html\" title=\"trait frame_support::traits::members::ContainsPair\">ContainsPair</a>&lt;<a class=\"struct\" href=\"staging_xcm/v3/multilocation/struct.MultiLocation.html\" title=\"struct staging_xcm::v3::multilocation::MultiLocation\">MultiLocation</a>, <a class=\"struct\" href=\"staging_xcm/v3/multiasset/struct.MultiAsset.html\" title=\"struct staging_xcm::v3::multiasset::MultiAsset\">MultiAsset</a>&gt; for <a class=\"struct\" href=\"pallet_contracts_mock_network/parachain/struct.TrustedLockerCase.html\" title=\"struct pallet_contracts_mock_network::parachain::TrustedLockerCase\">TrustedLockerCase</a>&lt;T&gt;"]],
"parachains_common":[["impl&lt;AssetLocation: Get&lt;<a class=\"struct\" href=\"staging_xcm/v3/multilocation/struct.MultiLocation.html\" title=\"struct staging_xcm::v3::multilocation::MultiLocation\">MultiLocation</a>&gt;&gt; <a class=\"trait\" href=\"frame_support/traits/members/trait.ContainsPair.html\" title=\"trait frame_support::traits::members::ContainsPair\">ContainsPair</a>&lt;<a class=\"struct\" href=\"staging_xcm/v3/multiasset/struct.MultiAsset.html\" title=\"struct staging_xcm::v3::multiasset::MultiAsset\">MultiAsset</a>, <a class=\"struct\" href=\"staging_xcm/v3/multilocation/struct.MultiLocation.html\" title=\"struct staging_xcm::v3::multilocation::MultiLocation\">MultiLocation</a>&gt; for <a class=\"struct\" href=\"parachains_common/xcm_config/struct.ConcreteAssetFromSystem.html\" title=\"struct parachains_common::xcm_config::ConcreteAssetFromSystem\">ConcreteAssetFromSystem</a>&lt;AssetLocation&gt;"],["impl&lt;T: Get&lt;<a class=\"struct\" href=\"staging_xcm/v3/multilocation/struct.MultiLocation.html\" title=\"struct staging_xcm::v3::multilocation::MultiLocation\">MultiLocation</a>&gt;&gt; <a class=\"trait\" href=\"frame_support/traits/members/trait.ContainsPair.html\" title=\"trait frame_support::traits::members::ContainsPair\">ContainsPair</a>&lt;<a class=\"struct\" href=\"staging_xcm/v3/multiasset/struct.MultiAsset.html\" title=\"struct staging_xcm::v3::multiasset::MultiAsset\">MultiAsset</a>, <a class=\"struct\" href=\"staging_xcm/v3/multilocation/struct.MultiLocation.html\" title=\"struct staging_xcm::v3::multilocation::MultiLocation\">MultiLocation</a>&gt; for <a class=\"struct\" href=\"parachains_common/impls/struct.AssetsFrom.html\" title=\"struct parachains_common::impls::AssetsFrom\">AssetsFrom</a>&lt;T&gt;"],["impl&lt;Location: Get&lt;<a class=\"struct\" href=\"staging_xcm/v3/multilocation/struct.MultiLocation.html\" title=\"struct staging_xcm::v3::multilocation::MultiLocation\">MultiLocation</a>&gt;&gt; <a class=\"trait\" href=\"frame_support/traits/members/trait.ContainsPair.html\" title=\"trait frame_support::traits::members::ContainsPair\">ContainsPair</a>&lt;<a class=\"struct\" href=\"staging_xcm/v3/multiasset/struct.MultiAsset.html\" title=\"struct staging_xcm::v3::multiasset::MultiAsset\">MultiAsset</a>, <a class=\"struct\" href=\"staging_xcm/v3/multilocation/struct.MultiLocation.html\" title=\"struct staging_xcm::v3::multilocation::MultiLocation\">MultiLocation</a>&gt; for <a class=\"struct\" href=\"parachains_common/xcm_config/struct.ConcreteNativeAssetFrom.html\" title=\"struct parachains_common::xcm_config::ConcreteNativeAssetFrom\">ConcreteNativeAssetFrom</a>&lt;Location&gt;"]],
"penpal_runtime":[["impl&lt;T: Get&lt;<a class=\"struct\" href=\"staging_xcm/v3/multilocation/struct.MultiLocation.html\" title=\"struct staging_xcm::v3::multilocation::MultiLocation\">MultiLocation</a>&gt;&gt; <a class=\"trait\" href=\"frame_support/traits/members/trait.ContainsPair.html\" title=\"trait frame_support::traits::members::ContainsPair\">ContainsPair</a>&lt;<a class=\"struct\" href=\"staging_xcm/v3/multiasset/struct.MultiAsset.html\" title=\"struct staging_xcm::v3::multiasset::MultiAsset\">MultiAsset</a>, <a class=\"struct\" href=\"staging_xcm/v3/multilocation/struct.MultiLocation.html\" title=\"struct staging_xcm::v3::multilocation::MultiLocation\">MultiLocation</a>&gt; for <a class=\"struct\" href=\"penpal_runtime/xcm_config/struct.NativeAssetFrom.html\" title=\"struct penpal_runtime::xcm_config::NativeAssetFrom\">NativeAssetFrom</a>&lt;T&gt;"],["impl&lt;T: Get&lt;<a class=\"struct\" href=\"staging_xcm/v3/multilocation/struct.MultiLocation.html\" title=\"struct staging_xcm::v3::multilocation::MultiLocation\">MultiLocation</a>&gt;&gt; <a class=\"trait\" href=\"frame_support/traits/members/trait.ContainsPair.html\" title=\"trait frame_support::traits::members::ContainsPair\">ContainsPair</a>&lt;<a class=\"struct\" href=\"staging_xcm/v3/multiasset/struct.MultiAsset.html\" title=\"struct staging_xcm::v3::multiasset::MultiAsset\">MultiAsset</a>, <a class=\"struct\" href=\"staging_xcm/v3/multilocation/struct.MultiLocation.html\" title=\"struct staging_xcm::v3::multilocation::MultiLocation\">MultiLocation</a>&gt; for <a class=\"struct\" href=\"penpal_runtime/xcm_config/struct.AssetsFrom.html\" title=\"struct penpal_runtime::xcm_config::AssetsFrom\">AssetsFrom</a>&lt;T&gt;"],["impl&lt;AssetLocation: Get&lt;<a class=\"struct\" href=\"staging_xcm/v3/multilocation/struct.MultiLocation.html\" title=\"struct staging_xcm::v3::multilocation::MultiLocation\">MultiLocation</a>&gt;, Origin: Get&lt;<a class=\"struct\" href=\"staging_xcm/v3/multilocation/struct.MultiLocation.html\" title=\"struct staging_xcm::v3::multilocation::MultiLocation\">MultiLocation</a>&gt;&gt; <a class=\"trait\" href=\"frame_support/traits/members/trait.ContainsPair.html\" title=\"trait frame_support::traits::members::ContainsPair\">ContainsPair</a>&lt;<a class=\"struct\" href=\"staging_xcm/v3/multiasset/struct.MultiAsset.html\" title=\"struct staging_xcm::v3::multiasset::MultiAsset\">MultiAsset</a>, <a class=\"struct\" href=\"staging_xcm/v3/multilocation/struct.MultiLocation.html\" title=\"struct staging_xcm::v3::multilocation::MultiLocation\">MultiLocation</a>&gt; for <a class=\"struct\" href=\"penpal_runtime/xcm_config/struct.AssetFromChain.html\" title=\"struct penpal_runtime::xcm_config::AssetFromChain\">AssetFromChain</a>&lt;AssetLocation, Origin&gt;"]],
"staging_xcm_builder":[["impl&lt;T: Get&lt;(<a class=\"enum\" href=\"staging_xcm_builder/test_utils/enum.MultiAssetFilter.html\" title=\"enum staging_xcm_builder::test_utils::MultiAssetFilter\">MultiAssetFilter</a>, <a class=\"struct\" href=\"staging_xcm_builder/test_utils/struct.MultiLocation.html\" title=\"struct staging_xcm_builder::test_utils::MultiLocation\">MultiLocation</a>)&gt;&gt; <a class=\"trait\" href=\"frame_support/traits/members/trait.ContainsPair.html\" title=\"trait frame_support::traits::members::ContainsPair\">ContainsPair</a>&lt;<a class=\"struct\" href=\"staging_xcm_builder/test_utils/struct.MultiAsset.html\" title=\"struct staging_xcm_builder::test_utils::MultiAsset\">MultiAsset</a>, <a class=\"struct\" href=\"staging_xcm_builder/test_utils/struct.MultiLocation.html\" title=\"struct staging_xcm_builder::test_utils::MultiLocation\">MultiLocation</a>&gt; for <a class=\"struct\" href=\"staging_xcm_builder/struct.Case.html\" title=\"struct staging_xcm_builder::Case\">Case</a>&lt;T&gt;"],["impl <a class=\"trait\" href=\"frame_support/traits/members/trait.ContainsPair.html\" title=\"trait frame_support::traits::members::ContainsPair\">ContainsPair</a>&lt;<a class=\"struct\" href=\"staging_xcm_builder/test_utils/struct.MultiAsset.html\" title=\"struct staging_xcm_builder::test_utils::MultiAsset\">MultiAsset</a>, <a class=\"struct\" href=\"staging_xcm_builder/test_utils/struct.MultiLocation.html\" title=\"struct staging_xcm_builder::test_utils::MultiLocation\">MultiLocation</a>&gt; for <a class=\"struct\" href=\"staging_xcm_builder/struct.NativeAsset.html\" title=\"struct staging_xcm_builder::NativeAsset\">NativeAsset</a>"],["impl&lt;Prefix: <a class=\"trait\" href=\"frame_support/traits/members/trait.Contains.html\" title=\"trait frame_support::traits::members::Contains\">Contains</a>&lt;<a class=\"struct\" href=\"staging_xcm_builder/test_utils/struct.MultiLocation.html\" title=\"struct staging_xcm_builder::test_utils::MultiLocation\">MultiLocation</a>&gt;&gt; <a class=\"trait\" href=\"frame_support/traits/members/trait.ContainsPair.html\" title=\"trait frame_support::traits::members::ContainsPair\">ContainsPair</a>&lt;<a class=\"struct\" href=\"staging_xcm_builder/test_utils/struct.MultiLocation.html\" title=\"struct staging_xcm_builder::test_utils::MultiLocation\">MultiLocation</a>, <a class=\"struct\" href=\"staging_xcm_builder/test_utils/struct.MultiLocation.html\" title=\"struct staging_xcm_builder::test_utils::MultiLocation\">MultiLocation</a>&gt; for <a class=\"struct\" href=\"staging_xcm_builder/struct.AliasForeignAccountId32.html\" title=\"struct staging_xcm_builder::AliasForeignAccountId32\">AliasForeignAccountId32</a>&lt;Prefix&gt;"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()