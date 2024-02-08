import React from "react";

export const Skeleton = () => {
	return (
		<div class="border border-blue-300 shadow rounded-md p-4 w-full mx-auto lg:w-[350px]">
			<div class="animate-pulse flex space-x-4 max-w-[400px] min-w-[250px]">
				<div class="flex-1 space-y-6 py-1">
					<div class="h-[300px] max-[730]:w-50 bg-slate-200 rounded"></div>
					<div class="space-y-3">
						<div class="grid grid-cols-3 gap-4">
							<div class="h-2 bg-slate-200 rounded col-span-2"></div>
							<div class="h-2 bg-slate-200 rounded col-span-1"></div>
						</div>
						<div class="h-2 bg-slate-200 rounded"></div>
					</div>
				</div>
			</div>
		</div>
	);
};
