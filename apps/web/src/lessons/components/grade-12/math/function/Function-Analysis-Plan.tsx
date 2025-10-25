"use client";

import React from "react";
import { TopicContent_V3 } from "@/types/docs/topic";
import ContentRendererV3 from "@/components/pages/docs/utils/ContentRendererV2";
import {
	serializeTopicContentV3,
	deserializeTopicContentV3,
} from "@/components/pages/docs/utils/ContentSerializerV2";
import { InlineMath } from "react-katex";

// Stage 1: Original authoring shape (TopicContent_V3)
const content: TopicContent_V3[] = [
	{
		type: "tip",
		title: "វិធីសាស្ត្រដើម្បីសិក្សាអនុគមន៍",
		content: (
			<div className="space-y-4">
				<div>
					<span>ឧបមាថាគេមានអនុគមន៍ <InlineMath math="y = f(x)" /></span>
				</div>
				<div>
					<span>ដើម្បីសិក្សាអនុគមន៍នេះគេត្រូវ៖</span>
				</div>
				<div className="space-y-2 ml-4">
					<div className="flex items-start gap-2">
						<span>♦</span>
						<span>រកដែនកំណត់អនុគមន៍</span>
					</div>
					<div className="flex items-start gap-2">
						<span>♦</span>
						<span>រកលីមីតចុងដែនកំណត់</span>
					</div>
					<div className="flex items-start gap-2">
						<span>♦</span>
						<span>កំណត់អាស៊ីមតូត</span>
					</div>
				</div>

				<div className="border-t pt-3 ">
					<div className="font-semibold mb-2">♦ ទិសដៅអថេរភាព</div>
					<div className="space-y-2 ml-4">
						<div className="flex items-start gap-2">
							<span>-</span>
							<span>គណនាដេរីវេ <InlineMath math="y' = f'(x)" /></span>
						</div>
						<div className="flex items-start gap-2">
							<span>-</span>
							<span>សិក្សាសញ្ញាដេរីវេ <InlineMath math="y' = f'(x)" /></span>
						</div>
						<div className="flex items-start gap-2">
							<span>-</span>
							<span>គណនាចំណុចបរមាធៀប (បើមាន)</span>
						</div>
						<div className="flex items-start gap-2">
							<span>-</span>
							<span>គូសតារាងអថេរភាព</span>
						</div>
					</div>
				</div>

				<div className="border-t pt-3">
					<div className="font-semibold mb-2">♦ សំណង់ក្រាប</div>
					<div className="space-y-2 ml-4">
						<div className="flex items-start gap-2">
							<span>-</span>
							<span>រកអ័ក្សឆ្លុះ-ផ្ចិតឆ្លុះ-ចំណុចរបត់ (បើមាន)</span>
						</div>
						<div className="flex items-start gap-2">
							<span>-</span>
							<span>កំណត់កូអរដោនេចំណុចប្រសព្វ</span>
						</div>
						<div className="flex items-start gap-2">
							<span>-</span>
							<span>តារាងតម្លៃលេខ</span>
						</div>
						<div className="flex items-start gap-2">
							<span>-</span>
							<span>សង់ក្រាប</span>
						</div>
					</div>
				</div>
			</div>
		),
	},
];

// Stage 2: Serialized JSON
const jsonV3 = serializeTopicContentV3(content);

// Stage 3: Deserialized V3 with live React nodes
const restoredContent = deserializeTopicContentV3(jsonV3) as TopicContent_V3[];

const FunctionAnalysisPlan = () => {
	return <ContentRendererV3 content={restoredContent} />;
};

export default FunctionAnalysisPlan;