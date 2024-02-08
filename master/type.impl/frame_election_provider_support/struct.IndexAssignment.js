(function() {var type_impls = {
"frame_election_provider_support":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-IndexAssignment%3CVoterIndex,+TargetIndex,+P%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/frame_election_provider_support/lib.rs.html#251-267\">source</a><a href=\"#impl-IndexAssignment%3CVoterIndex,+TargetIndex,+P%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;VoterIndex, TargetIndex, P: <a class=\"trait\" href=\"frame_election_provider_support/trait.PerThing.html\" title=\"trait frame_election_provider_support::PerThing\">PerThing</a>&gt; <a class=\"struct\" href=\"frame_election_provider_support/struct.IndexAssignment.html\" title=\"struct frame_election_provider_support::IndexAssignment\">IndexAssignment</a>&lt;VoterIndex, TargetIndex, P&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/frame_election_provider_support/lib.rs.html#252-266\">source</a><h4 class=\"code-header\">pub fn <a href=\"frame_election_provider_support/struct.IndexAssignment.html#tymethod.new\" class=\"fn\">new</a>&lt;AccountId: <a class=\"trait\" href=\"frame_election_provider_support/trait.IdentifierT.html\" title=\"trait frame_election_provider_support::IdentifierT\">IdentifierT</a>&gt;(\n    assignment: &amp;<a class=\"struct\" href=\"frame_election_provider_support/struct.Assignment.html\" title=\"struct frame_election_provider_support::Assignment\">Assignment</a>&lt;AccountId, P&gt;,\n    voter_index: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>(<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;AccountId</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;VoterIndex&gt;,\n    target_index: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>(<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;AccountId</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;TargetIndex&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, <a class=\"enum\" href=\"frame_election_provider_support/enum.Error.html\" title=\"enum frame_election_provider_support::Error\">Error</a>&gt;</h4></section></div></details>",0,"frame_election_provider_support::IndexAssignmentOf"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-IndexAssignment%3CVoterIndex,+TargetIndex,+P%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/frame_election_provider_support/lib.rs.html#240\">source</a><a href=\"#impl-Default-for-IndexAssignment%3CVoterIndex,+TargetIndex,+P%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;VoterIndex: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>, TargetIndex: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>, P: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"frame_election_provider_support/trait.PerThing.html\" title=\"trait frame_election_provider_support::PerThing\">PerThing</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"frame_election_provider_support/struct.IndexAssignment.html\" title=\"struct frame_election_provider_support::IndexAssignment\">IndexAssignment</a>&lt;VoterIndex, TargetIndex, P&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/frame_election_provider_support/lib.rs.html#240\">source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; <a class=\"struct\" href=\"frame_election_provider_support/struct.IndexAssignment.html\" title=\"struct frame_election_provider_support::IndexAssignment\">IndexAssignment</a>&lt;VoterIndex, TargetIndex, P&gt;</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/1.75.0/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","frame_election_provider_support::IndexAssignmentOf"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Encode-for-IndexAssignment%3CVoterIndex,+TargetIndex,+P%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/frame_election_provider_support/lib.rs.html#241\">source</a><a href=\"#impl-Encode-for-IndexAssignment%3CVoterIndex,+TargetIndex,+P%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;VoterIndex, TargetIndex, P: <a class=\"trait\" href=\"frame_election_provider_support/trait.PerThing.html\" title=\"trait frame_election_provider_support::PerThing\">PerThing</a>&gt; <a class=\"trait\" href=\"frame_election_provider_support/trait.Encode.html\" title=\"trait frame_election_provider_support::Encode\">Encode</a> for <a class=\"struct\" href=\"frame_election_provider_support/struct.IndexAssignment.html\" title=\"struct frame_election_provider_support::IndexAssignment\">IndexAssignment</a>&lt;VoterIndex, TargetIndex, P&gt;<span class=\"where fmt-newline\">where\n    VoterIndex: <a class=\"trait\" href=\"frame_election_provider_support/trait.Encode.html\" title=\"trait frame_election_provider_support::Encode\">Encode</a>,\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.tuple.html\">(TargetIndex, P)</a>&gt;: <a class=\"trait\" href=\"frame_election_provider_support/trait.Encode.html\" title=\"trait frame_election_provider_support::Encode\">Encode</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.size_hint\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/frame_election_provider_support/lib.rs.html#241\">source</a><a href=\"#method.size_hint\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"frame_election_provider_support/trait.Encode.html#method.size_hint\" class=\"fn\">size_hint</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>If possible give a hint of expected size of the encoding. <a href=\"frame_election_provider_support/trait.Encode.html#method.size_hint\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encode_to\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/frame_election_provider_support/lib.rs.html#241\">source</a><a href=\"#method.encode_to\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"frame_election_provider_support/trait.Encode.html#method.encode_to\" class=\"fn\">encode_to</a>&lt;__CodecOutputEdqy: Output + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt;(\n    &amp;self,\n    __codec_dest_edqy: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;mut __CodecOutputEdqy</a>\n)</h4></section></summary><div class='docblock'>Convert self to a slice and append it to the destination.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encode\" class=\"method trait-impl\"><a href=\"#method.encode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"frame_election_provider_support/trait.Encode.html#method.encode\" class=\"fn\">encode</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>&gt; <a href=\"#\" class=\"tooltip\" data-notable-ty=\"Vec&lt;u8&gt;\">ⓘ</a></h4></section></summary><div class='docblock'>Convert self to an owned vector.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.using_encoded\" class=\"method trait-impl\"><a href=\"#method.using_encoded\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"frame_election_provider_support/trait.Encode.html#method.using_encoded\" class=\"fn\">using_encoded</a>&lt;R, F&gt;(&amp;self, f: F) -&gt; R<span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(&amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>]) -&gt; R,</span></h4></section></summary><div class='docblock'>Convert self to a slice and then invoke the given closure with it.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encoded_size\" class=\"method trait-impl\"><a href=\"#method.encoded_size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"frame_election_provider_support/trait.Encode.html#method.encoded_size\" class=\"fn\">encoded_size</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>Calculates the encoded size. <a href=\"frame_election_provider_support/trait.Encode.html#method.encoded_size\">Read more</a></div></details></div></details>","Encode","frame_election_provider_support::IndexAssignmentOf"],["<section id=\"impl-StructuralEq-for-IndexAssignment%3CVoterIndex,+TargetIndex,+P%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/frame_election_provider_support/lib.rs.html#241\">source</a><a href=\"#impl-StructuralEq-for-IndexAssignment%3CVoterIndex,+TargetIndex,+P%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;VoterIndex, TargetIndex, P: <a class=\"trait\" href=\"frame_election_provider_support/trait.PerThing.html\" title=\"trait frame_election_provider_support::PerThing\">PerThing</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.StructuralEq.html\" title=\"trait core::marker::StructuralEq\">StructuralEq</a> for <a class=\"struct\" href=\"frame_election_provider_support/struct.IndexAssignment.html\" title=\"struct frame_election_provider_support::IndexAssignment\">IndexAssignment</a>&lt;VoterIndex, TargetIndex, P&gt;</h3></section>","StructuralEq","frame_election_provider_support::IndexAssignmentOf"],["<section id=\"impl-Eq-for-IndexAssignment%3CVoterIndex,+TargetIndex,+P%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/frame_election_provider_support/lib.rs.html#241\">source</a><a href=\"#impl-Eq-for-IndexAssignment%3CVoterIndex,+TargetIndex,+P%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;VoterIndex: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>, TargetIndex: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>, P: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"frame_election_provider_support/trait.PerThing.html\" title=\"trait frame_election_provider_support::PerThing\">PerThing</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"frame_election_provider_support/struct.IndexAssignment.html\" title=\"struct frame_election_provider_support::IndexAssignment\">IndexAssignment</a>&lt;VoterIndex, TargetIndex, P&gt;</h3></section>","Eq","frame_election_provider_support::IndexAssignmentOf"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-IndexAssignment%3CVoterIndex,+TargetIndex,+P%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/frame_election_provider_support/lib.rs.html#240\">source</a><a href=\"#impl-Debug-for-IndexAssignment%3CVoterIndex,+TargetIndex,+P%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;VoterIndex, TargetIndex, P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"frame_election_provider_support/struct.IndexAssignment.html\" title=\"struct frame_election_provider_support::IndexAssignment\">IndexAssignment</a>&lt;VoterIndex, TargetIndex, P&gt;<span class=\"where fmt-newline\">where\n    VoterIndex: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,\n    TargetIndex: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,\n    P: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"frame_election_provider_support/trait.PerThing.html\" title=\"trait frame_election_provider_support::PerThing\">PerThing</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/frame_election_provider_support/lib.rs.html#240\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, fmt: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","frame_election_provider_support::IndexAssignmentOf"],["<section id=\"impl-EncodeLike-for-IndexAssignment%3CVoterIndex,+TargetIndex,+P%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/frame_election_provider_support/lib.rs.html#241\">source</a><a href=\"#impl-EncodeLike-for-IndexAssignment%3CVoterIndex,+TargetIndex,+P%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;VoterIndex, TargetIndex, P: <a class=\"trait\" href=\"frame_election_provider_support/trait.PerThing.html\" title=\"trait frame_election_provider_support::PerThing\">PerThing</a>&gt; EncodeLike for <a class=\"struct\" href=\"frame_election_provider_support/struct.IndexAssignment.html\" title=\"struct frame_election_provider_support::IndexAssignment\">IndexAssignment</a>&lt;VoterIndex, TargetIndex, P&gt;<span class=\"where fmt-newline\">where\n    VoterIndex: <a class=\"trait\" href=\"frame_election_provider_support/trait.Encode.html\" title=\"trait frame_election_provider_support::Encode\">Encode</a>,\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.tuple.html\">(TargetIndex, P)</a>&gt;: <a class=\"trait\" href=\"frame_election_provider_support/trait.Encode.html\" title=\"trait frame_election_provider_support::Encode\">Encode</a>,</span></h3></section>","EncodeLike","frame_election_provider_support::IndexAssignmentOf"],["<section id=\"impl-StructuralPartialEq-for-IndexAssignment%3CVoterIndex,+TargetIndex,+P%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/frame_election_provider_support/lib.rs.html#241\">source</a><a href=\"#impl-StructuralPartialEq-for-IndexAssignment%3CVoterIndex,+TargetIndex,+P%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;VoterIndex, TargetIndex, P: <a class=\"trait\" href=\"frame_election_provider_support/trait.PerThing.html\" title=\"trait frame_election_provider_support::PerThing\">PerThing</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"frame_election_provider_support/struct.IndexAssignment.html\" title=\"struct frame_election_provider_support::IndexAssignment\">IndexAssignment</a>&lt;VoterIndex, TargetIndex, P&gt;</h3></section>","StructuralPartialEq","frame_election_provider_support::IndexAssignmentOf"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-IndexAssignment%3CVoterIndex,+TargetIndex,+P%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/frame_election_provider_support/lib.rs.html#241\">source</a><a href=\"#impl-PartialEq-for-IndexAssignment%3CVoterIndex,+TargetIndex,+P%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;VoterIndex: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>, TargetIndex: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>, P: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + <a class=\"trait\" href=\"frame_election_provider_support/trait.PerThing.html\" title=\"trait frame_election_provider_support::PerThing\">PerThing</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"frame_election_provider_support/struct.IndexAssignment.html\" title=\"struct frame_election_provider_support::IndexAssignment\">IndexAssignment</a>&lt;VoterIndex, TargetIndex, P&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/frame_election_provider_support/lib.rs.html#241\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"frame_election_provider_support/struct.IndexAssignment.html\" title=\"struct frame_election_provider_support::IndexAssignment\">IndexAssignment</a>&lt;VoterIndex, TargetIndex, P&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/cmp.rs.html#239\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","frame_election_provider_support::IndexAssignmentOf"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Decode-for-IndexAssignment%3CVoterIndex,+TargetIndex,+P%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/frame_election_provider_support/lib.rs.html#241\">source</a><a href=\"#impl-Decode-for-IndexAssignment%3CVoterIndex,+TargetIndex,+P%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;VoterIndex, TargetIndex, P: <a class=\"trait\" href=\"frame_election_provider_support/trait.PerThing.html\" title=\"trait frame_election_provider_support::PerThing\">PerThing</a>&gt; <a class=\"trait\" href=\"frame_election_provider_support/trait.Decode.html\" title=\"trait frame_election_provider_support::Decode\">Decode</a> for <a class=\"struct\" href=\"frame_election_provider_support/struct.IndexAssignment.html\" title=\"struct frame_election_provider_support::IndexAssignment\">IndexAssignment</a>&lt;VoterIndex, TargetIndex, P&gt;<span class=\"where fmt-newline\">where\n    VoterIndex: <a class=\"trait\" href=\"frame_election_provider_support/trait.Decode.html\" title=\"trait frame_election_provider_support::Decode\">Decode</a>,\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.tuple.html\">(TargetIndex, P)</a>&gt;: <a class=\"trait\" href=\"frame_election_provider_support/trait.Decode.html\" title=\"trait frame_election_provider_support::Decode\">Decode</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.decode\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/frame_election_provider_support/lib.rs.html#241\">source</a><a href=\"#method.decode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"frame_election_provider_support/trait.Decode.html#tymethod.decode\" class=\"fn\">decode</a>&lt;__CodecInputEdqy: Input&gt;(\n    __codec_input_edqy: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;mut __CodecInputEdqy</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, Error&gt;</h4></section></summary><div class='docblock'>Attempt to deserialise the value from input.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.decode_into\" class=\"method trait-impl\"><a href=\"#method.decode_into\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"frame_election_provider_support/trait.Decode.html#method.decode_into\" class=\"fn\">decode_into</a>&lt;I&gt;(\n    input: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;mut I</a>,\n    dst: &amp;mut <a class=\"union\" href=\"https://doc.rust-lang.org/1.75.0/core/mem/maybe_uninit/union.MaybeUninit.html\" title=\"union core::mem::maybe_uninit::MaybeUninit\">MaybeUninit</a>&lt;Self&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;DecodeFinished, Error&gt;<span class=\"where fmt-newline\">where\n    I: Input,</span></h4></section></summary><div class='docblock'>Attempt to deserialize the value from input into a pre-allocated piece of memory. <a href=\"frame_election_provider_support/trait.Decode.html#method.decode_into\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.skip\" class=\"method trait-impl\"><a href=\"#method.skip\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"frame_election_provider_support/trait.Decode.html#method.skip\" class=\"fn\">skip</a>&lt;I&gt;(input: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;mut I</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>, Error&gt;<span class=\"where fmt-newline\">where\n    I: Input,</span></h4></section></summary><div class='docblock'>Attempt to skip the encoded value from input. <a href=\"frame_election_provider_support/trait.Decode.html#method.skip\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encoded_fixed_size\" class=\"method trait-impl\"><a href=\"#method.encoded_fixed_size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"frame_election_provider_support/trait.Decode.html#method.encoded_fixed_size\" class=\"fn\">encoded_fixed_size</a>() -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a>&gt;</h4></section></summary><div class='docblock'>Returns the fixed encoded size of the type. <a href=\"frame_election_provider_support/trait.Decode.html#method.encoded_fixed_size\">Read more</a></div></details></div></details>","Decode","frame_election_provider_support::IndexAssignmentOf"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-IndexAssignment%3CVoterIndex,+TargetIndex,+P%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/frame_election_provider_support/lib.rs.html#240\">source</a><a href=\"#impl-Clone-for-IndexAssignment%3CVoterIndex,+TargetIndex,+P%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;VoterIndex: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, TargetIndex: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, P: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"frame_election_provider_support/trait.PerThing.html\" title=\"trait frame_election_provider_support::PerThing\">PerThing</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"frame_election_provider_support/struct.IndexAssignment.html\" title=\"struct frame_election_provider_support::IndexAssignment\">IndexAssignment</a>&lt;VoterIndex, TargetIndex, P&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/frame_election_provider_support/lib.rs.html#240\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"frame_election_provider_support/struct.IndexAssignment.html\" title=\"struct frame_election_provider_support::IndexAssignment\">IndexAssignment</a>&lt;VoterIndex, TargetIndex, P&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","frame_election_provider_support::IndexAssignmentOf"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()